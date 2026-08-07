export const organizationProgramTypes = ["school-pe", "enrichment-after-school", "camps-activity", "community-event", "unsure-other"] as const;
export type OrganizationProgramType = (typeof organizationProgramTypes)[number];
export const engagementTypes = ["one-time", "recurring", "unsure"] as const;
export type EngagementType = (typeof engagementTypes)[number];
export const spaceTypes = ["indoor", "outdoor", "both", "unsure"] as const;
export type SpaceType = (typeof spaceTypes)[number];

export type OrganizationInquiry = {
  inquiryType: "organization";
  contactName: string;
  workEmail: string;
  phone: string;
  organizationName: string;
  roleTitle?: string;
  programType: OrganizationProgramType;
  ageGradeRange?: string;
  approximateParticipantCount?: number;
  engagementType: EngagementType;
  serviceNeeds: string;
  desiredTiming?: string;
  frequency?: string;
  location?: string;
  spaceType?: SpaceType;
  goalsRequirements: string;
  additionalNotes?: string;
  source: { page: string; entryContext?: string; submittedAt: string };
};

export type OrganizationInquiryField = "contactName" | "workEmail" | "phone" | "organizationName" | "programType" | "approximateParticipantCount" | "engagementType" | "serviceNeeds" | "goalsRequirements";
export type OrganizationInquiryErrors = Partial<Record<OrganizationInquiryField, string>>;
type Result = { success: true; data: OrganizationInquiry } | { success: false; errors: OrganizationInquiryErrors };
const programSet = new Set<string>(organizationProgramTypes);
const engagementSet = new Set<string>(engagementTypes);
const spaceSet = new Set<string>(spaceTypes);
const text = (data: FormData, key: string) => String(data.get(key) || "").trim();

export function validateOrganizationInquiry(data: FormData): Result {
  const errors: OrganizationInquiryErrors = {};
  const contactName = text(data, "contactName");
  const workEmail = text(data, "workEmail").toLowerCase();
  const phone = text(data, "phone");
  const organizationName = text(data, "organizationName");
  const programTypeValue = text(data, "programType");
  const engagementTypeValue = text(data, "engagementType");
  const countText = text(data, "approximateParticipantCount");
  const approximateParticipantCount = countText ? Number(countText) : undefined;
  const serviceNeeds = text(data, "serviceNeeds");
  const goalsRequirements = text(data, "goalsRequirements");
  if (contactName.length < 2) errors.contactName = "Enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(workEmail)) errors.workEmail = "Enter a valid work email address.";
  if (phone.replace(/\D/g, "").length < 10) errors.phone = "Enter a valid phone number.";
  if (organizationName.length < 2) errors.organizationName = "Enter the organization name.";
  if (!programSet.has(programTypeValue)) errors.programType = "Choose the closest program type.";
  if (approximateParticipantCount !== undefined && (!Number.isInteger(approximateParticipantCount) || approximateParticipantCount < 1 || approximateParticipantCount > 10000)) errors.approximateParticipantCount = "Enter a reasonable estimate or leave this blank.";
  if (!engagementSet.has(engagementTypeValue)) errors.engagementType = "Tell us whether this is one-time, recurring, or still undecided.";
  if (serviceNeeds.length < 8) errors.serviceNeeds = "Briefly tell us what you would like LASW to provide.";
  if (goalsRequirements.length < 8) errors.goalsRequirements = "Briefly share the goals or requirements that matter most.";
  if (Object.keys(errors).length) return { success: false, errors };
  const spaceTypeValue = text(data, "spaceType");
  return { success: true, data: {
    inquiryType: "organization", contactName, workEmail, phone, organizationName,
    ...(text(data, "roleTitle") ? { roleTitle: text(data, "roleTitle") } : {}),
    programType: programTypeValue as OrganizationProgramType,
    ...(text(data, "ageGradeRange") ? { ageGradeRange: text(data, "ageGradeRange") } : {}),
    ...(approximateParticipantCount ? { approximateParticipantCount } : {}),
    engagementType: engagementTypeValue as EngagementType, serviceNeeds,
    ...(text(data, "desiredTiming") ? { desiredTiming: text(data, "desiredTiming") } : {}),
    ...(text(data, "frequency") ? { frequency: text(data, "frequency") } : {}),
    ...(text(data, "location") ? { location: text(data, "location") } : {}),
    ...(spaceSet.has(spaceTypeValue) ? { spaceType: spaceTypeValue as SpaceType } : {}),
    goalsRequirements,
    ...(text(data, "additionalNotes") ? { additionalNotes: text(data, "additionalNotes") } : {}),
    source: { page: text(data, "sourcePage") || "/schools-organizations/request", ...(text(data, "entryContext") ? { entryContext: text(data, "entryContext") } : {}), submittedAt: new Date().toISOString() },
  }};
}

export const organizationProgramLabels: Record<OrganizationProgramType, string> = {
  "school-pe": "School PE", "enrichment-after-school": "Enrichment / after-school", "camps-activity": "Camps & activity programming", "community-event": "Community / organization event", "unsure-other": "Other / help me choose",
};
export const engagementLabels: Record<EngagementType, string> = { "one-time": "One-time program or event", recurring: "Recurring programming", unsure: "Not sure yet" };
export const spaceLabels: Record<SpaceType, string> = { indoor: "Indoor", outdoor: "Outdoor", both: "Indoor & outdoor", unsure: "Not sure yet" };
