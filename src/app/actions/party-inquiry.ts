"use server";

import { submitContactForm } from "@/app/actions/contact";
import { formatParticipantAge } from "@/lib/participant-age";
import { partyExperienceLabels, validatePartyInquiry, venueTypeLabels, type PartyInquiryErrors } from "@/lib/inquiries/party";

export type PartyInquiryState = { status: "idle" | "success" | "error"; message?: string; fieldErrors?: PartyInquiryErrors };

export async function submitPartyInquiry(_previous: PartyInquiryState, formData: FormData): Promise<PartyInquiryState> {
  if (String(formData.get("website") || "").trim()) return { status: "success" };
  const validation = validatePartyInquiry(formData);
  if (!validation.success) return { status: "error", message: "Please review the highlighted fields.", fieldErrors: validation.errors };
  const inquiry = validation.data;

  // Temporary compatibility handoff to the existing party submission path.
  // The structured PartyInquiry above remains the source of truth for the later CRM mapping pass.
  const delivery = new FormData();
  delivery.set("service", "birthday-party");
  delivery.set("firstName", inquiry.parentGuardianName);
  delivery.set("email", inquiry.email);
  delivery.set("phone", inquiry.phone);
  delivery.set("sourcePage", inquiry.source.page);
  delivery.set("timestamp", inquiry.source.submittedAt);
  delivery.set("field_child_name", inquiry.childName);
  delivery.set("field_child_age", formatParticipantAge(inquiry.childAge));
  if (inquiry.preferredDate) delivery.set("field_event_date", inquiry.preferredDate);
  if (inquiry.preferredStartTime) delivery.set("field_preferred_start_time", inquiry.preferredStartTime);
  if (inquiry.estimatedChildCount) delivery.set("field_estimated_child_count", String(inquiry.estimatedChildCount));
  if (inquiry.approximateAgeRange) delivery.set("field_approximate_age_range", inquiry.approximateAgeRange);
  delivery.set("field_experience_interests", inquiry.experiences.map((item) => partyExperienceLabels[item]).join(", "));
  delivery.set("field_neighborhood", inquiry.neighborhood);
  delivery.set("field_venue_type", venueTypeLabels[inquiry.venueType]);
  if (inquiry.approximateLocation) delivery.set("field_approximate_location", inquiry.approximateLocation);
  if (inquiry.preferredDuration) delivery.set("field_preferred_duration", inquiry.preferredDuration);
  if (inquiry.additionalNotes) delivery.set("details", inquiry.additionalNotes);
  const result = await submitContactForm({ status: "idle" }, delivery);
  return result.status === "success" ? { status: "success" } : { status: "error", message: result.message };
}
