import { coachingFormatLabels, type CoachingInquiry } from "./coaching";

export type PreparedPipedriveInquiry = {
  person: {
    name: string;
    email: string;
    phone: string;
  };
  deal: {
    title: string;
    service: "Coaching";
    location: string;
    customFields: Record<string, string | number | string[] | undefined>;
  };
  note: string;
};

function escapeHtml(value: string | number | undefined) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function prepareCoachingInquiryForPipedrive(inquiry: CoachingInquiry): PreparedPipedriveInquiry {
  const formatLabel = coachingFormatLabels[inquiry.coachingFormat];
  const customFields = {
    inquiryType: inquiry.inquiryType,
    childName: inquiry.childName,
    childAge: inquiry.childAge,
    sportActivity: inquiry.sportActivity,
    coachingFormat: formatLabel,
    approximateGroupSize: inquiry.approximateGroupSize,
    goals: inquiry.goals,
    preferredDays: inquiry.preferredDays,
    preferredTimes: inquiry.preferredTimes,
    neighborhoodLocation: inquiry.neighborhoodLocation,
    desiredStartTiming: inquiry.desiredStartTiming,
    additionalNotes: inquiry.additionalNotes,
  };

  const noteRows = [
    ["Inquiry", "Request Coaching"],
    ["Parent / guardian", inquiry.parentGuardianName],
    ["Email", inquiry.email],
    ["Phone", inquiry.phone],
    ["Child", `${inquiry.childName}, age ${inquiry.childAge}`],
    ["Sport / activity", inquiry.sportActivity],
    ["Coaching format", formatLabel],
    ...(inquiry.approximateGroupSize ? [["Approximate group size", inquiry.approximateGroupSize]] : []),
    ["Goals", inquiry.goals],
    ["Preferred days", inquiry.preferredDays.join(", ")],
    ["Preferred times", inquiry.preferredTimes.join(", ")],
    ["Neighborhood / location", inquiry.neighborhoodLocation],
    ["Desired start", inquiry.desiredStartTiming],
    ...(inquiry.additionalNotes ? [["Additional notes", inquiry.additionalNotes]] : []),
    ["Source page", inquiry.source.page],
    ...(inquiry.source.landingPage ? [["Landing page", inquiry.source.landingPage]] : []),
    ["Submitted", inquiry.source.submittedAt],
    ["Form version", "coaching-inquiry-v1"],
  ];

  return {
    person: {
      name: inquiry.parentGuardianName,
      email: inquiry.email,
      phone: inquiry.phone,
    },
    deal: {
      title: `Coaching Inquiry — ${inquiry.childName} — ${formatLabel}`,
      service: "Coaching",
      location: inquiry.neighborhoodLocation,
      customFields,
    },
    note: noteRows.map(([label, value]) => `<strong>${escapeHtml(label)}</strong>: ${escapeHtml(value)}`).join("<br />"),
  };
}
