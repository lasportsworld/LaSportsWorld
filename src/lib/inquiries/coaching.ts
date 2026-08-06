import { isSupportedParticipantAge } from "@/lib/participant-age";

export const coachingFormats = ["private", "group", "unsure"] as const;
export type CoachingFormat = (typeof coachingFormats)[number];

export type CoachingInquiry = {
  inquiryType: "coaching";
  parentGuardianName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: number;
  sportActivity: string;
  coachingFormat: CoachingFormat;
  approximateGroupSize?: number;
  goals: string;
  preferredDays: string[];
  preferredTimes: string[];
  neighborhoodLocation: string;
  desiredStartTiming: string;
  additionalNotes?: string;
  source: {
    page: string;
    entryContext?: string;
    landingPage?: string;
    submittedAt: string;
  };
};

export type CoachingInquiryField =
  | "parentGuardianName"
  | "email"
  | "phone"
  | "childName"
  | "childAge"
  | "sportActivity"
  | "coachingFormat"
  | "approximateGroupSize"
  | "goals"
  | "preferredDays"
  | "preferredTimes"
  | "neighborhoodLocation"
  | "desiredStartTiming";

export type CoachingInquiryErrors = Partial<Record<CoachingInquiryField, string>>;

type ValidationResult =
  | { success: true; data: CoachingInquiry }
  | { success: false; errors: CoachingInquiryErrors };

const formatSet = new Set<string>(coachingFormats);
const daySet = new Set(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]);
const timeSet = new Set(["Morning", "Midday", "After school", "Evening"]);

function text(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

function list(formData: FormData, key: string, allowed: Set<string>) {
  return formData.getAll(key).map(String).filter((value) => allowed.has(value));
}

export function validateCoachingInquiry(formData: FormData): ValidationResult {
  const errors: CoachingInquiryErrors = {};
  const parentGuardianName = text(formData, "parentGuardianName");
  const email = text(formData, "email").toLowerCase();
  const phone = text(formData, "phone");
  const childName = text(formData, "childName");
  const childAgeValue = text(formData, "childAge");
  const childAge = Number(childAgeValue);
  const sportActivity = text(formData, "sportActivity");
  const coachingFormatValue = text(formData, "coachingFormat");
  const approximateGroupSizeValue = text(formData, "approximateGroupSize");
  const goals = text(formData, "goals");
  const preferredDays = list(formData, "preferredDays", daySet);
  const preferredTimes = list(formData, "preferredTimes", timeSet);
  const neighborhoodLocation = text(formData, "neighborhoodLocation");
  const desiredStartTiming = text(formData, "desiredStartTiming");
  const additionalNotes = text(formData, "additionalNotes");

  if (parentGuardianName.length < 2) errors.parentGuardianName = "Enter the parent or guardian name.";
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Enter a valid email address.";
  if (phone.replace(/\D/g, "").length < 10) errors.phone = "Enter a valid phone number.";
  if (childName.length < 2) errors.childName = "Enter the child’s name.";
  if (!isSupportedParticipantAge(childAge)) errors.childAge = "Choose an age from 6 months to 17 years.";
  if (!sportActivity) errors.sportActivity = "Tell us the sport or activity of interest.";
  if (!formatSet.has(coachingFormatValue)) errors.coachingFormat = "Choose a coaching format.";
  if (coachingFormatValue === "group") {
    const groupSize = Number(approximateGroupSizeValue);
    if (!Number.isInteger(groupSize) || groupSize < 2 || groupSize > 100) {
      errors.approximateGroupSize = "Enter an approximate group size of 2 or more.";
    }
  }
  if (goals.length < 5) errors.goals = "Tell us a little about what would be helpful.";
  if (!preferredDays.length) errors.preferredDays = "Choose at least one preferred day.";
  if (!preferredTimes.length) errors.preferredTimes = "Choose at least one preferred time.";
  if (!neighborhoodLocation) errors.neighborhoodLocation = "Enter a neighborhood or preferred location.";
  if (!desiredStartTiming) errors.desiredStartTiming = "Choose when you would like to begin.";

  if (Object.keys(errors).length) return { success: false, errors };

  return {
    success: true,
    data: {
      inquiryType: "coaching",
      parentGuardianName,
      email,
      phone,
      childName,
      childAge,
      sportActivity,
      coachingFormat: coachingFormatValue as CoachingFormat,
      ...(coachingFormatValue === "group" ? { approximateGroupSize: Number(approximateGroupSizeValue) } : {}),
      goals,
      preferredDays,
      preferredTimes,
      neighborhoodLocation,
      desiredStartTiming,
      ...(additionalNotes ? { additionalNotes } : {}),
      source: {
        page: text(formData, "sourcePage") || "/coaching/request",
        ...(text(formData, "entryContext") ? { entryContext: text(formData, "entryContext") } : {}),
        ...(text(formData, "landingPage") ? { landingPage: text(formData, "landingPage") } : {}),
        submittedAt: new Date().toISOString(),
      },
    },
  };
}

export const coachingFormatLabels: Record<CoachingFormat, string> = {
  private: "Private Coaching",
  group: "Group Coaching & Pods",
  unsure: "Not sure / help me choose",
};
