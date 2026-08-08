import { isSupportedParticipantAge } from "@/lib/participant-age";

export const partyExperiences = ["sports-games", "obstacle-coordination", "soft-play", "unsure"] as const;
export type PartyExperience = (typeof partyExperiences)[number];
export const venueTypes = ["home", "park", "rented-venue", "school-community", "other", "unsure"] as const;
export type VenueType = (typeof venueTypes)[number];

export type PartyInquiry = {
  inquiryType: "party";
  parentGuardianName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: number;
  preferredDate?: string;
  preferredStartTime?: string;
  estimatedChildCount?: number;
  approximateAgeRange?: string;
  experiences: PartyExperience[];
  neighborhood: string;
  venueType: VenueType;
  approximateLocation?: string;
  preferredDuration?: string;
  additionalNotes?: string;
  source: { page: string; entryContext?: string; submittedAt: string };
};

export type PartyInquiryField = "parentGuardianName" | "email" | "phone" | "childName" | "childAge" | "estimatedChildCount" | "experiences" | "neighborhood" | "venueType";
export type PartyInquiryErrors = Partial<Record<PartyInquiryField, string>>;
type Result = { success: true; data: PartyInquiry } | { success: false; errors: PartyInquiryErrors };

const experienceSet = new Set<string>(partyExperiences);
const venueSet = new Set<string>(venueTypes);
const text = (data: FormData, key: string) => String(data.get(key) || "").trim();

export function validatePartyInquiry(data: FormData): Result {
  const errors: PartyInquiryErrors = {};
  const parentGuardianName = text(data, "parentGuardianName");
  const email = text(data, "email").toLowerCase();
  const phone = text(data, "phone");
  const childName = text(data, "childName");
  const childAge = Number(text(data, "childAge"));
  const countText = text(data, "estimatedChildCount");
  const estimatedChildCount = countText ? Number(countText) : undefined;
  const experiences = data.getAll("experiences").map(String).filter((value): value is PartyExperience => experienceSet.has(value));
  const neighborhood = text(data, "neighborhood");
  const venueTypeValue = text(data, "venueType");

  if (parentGuardianName.length < 2) errors.parentGuardianName = "Enter the parent or guardian name.";
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Enter a valid email address.";
  if (phone.replace(/\D/g, "").length < 10) errors.phone = "Enter a valid phone number.";
  if (childName.length < 2) errors.childName = "Enter the child’s name.";
  if (!isSupportedParticipantAge(childAge)) errors.childAge = "Choose an age from 6 months to 17 years.";
  if (estimatedChildCount !== undefined && (!Number.isInteger(estimatedChildCount) || estimatedChildCount < 1 || estimatedChildCount > 500)) errors.estimatedChildCount = "Enter a reasonable estimate or leave this blank.";
  if (!experiences.length) errors.experiences = "Choose at least one experience, or select help me choose.";
  if (!neighborhood) errors.neighborhood = "Enter the neighborhood where you expect to celebrate.";
  if (!venueSet.has(venueTypeValue)) errors.venueType = "Choose a venue type, or select not sure yet.";
  if (Object.keys(errors).length) return { success: false, errors };

  return { success: true, data: {
    inquiryType: "party", parentGuardianName, email, phone, childName, childAge,
    ...(text(data, "preferredDate") ? { preferredDate: text(data, "preferredDate") } : {}),
    ...(text(data, "preferredStartTime") ? { preferredStartTime: text(data, "preferredStartTime") } : {}),
    ...(estimatedChildCount ? { estimatedChildCount } : {}),
    ...(text(data, "approximateAgeRange") ? { approximateAgeRange: text(data, "approximateAgeRange") } : {}),
    experiences, neighborhood, venueType: venueTypeValue as VenueType,
    ...(text(data, "approximateLocation") ? { approximateLocation: text(data, "approximateLocation") } : {}),
    ...(text(data, "preferredDuration") ? { preferredDuration: text(data, "preferredDuration") } : {}),
    ...(text(data, "additionalNotes") ? { additionalNotes: text(data, "additionalNotes") } : {}),
    source: { page: text(data, "sourcePage") || "/parties-private-events/request", ...(text(data, "entryContext") ? { entryContext: text(data, "entryContext") } : {}), submittedAt: new Date().toISOString() },
  }};
}

export const partyExperienceLabels: Record<PartyExperience, string> = {
  "sports-games": "Sports & games", "obstacle-coordination": "Obstacle & coordination activities", "soft-play": "Soft play", unsure: "Not sure / help me choose",
};
export const venueTypeLabels: Record<VenueType, string> = {
  home: "Home / backyard", park: "Park", "rented-venue": "Rented venue", "school-community": "School / community venue", other: "Other", unsure: "Not sure yet",
};
