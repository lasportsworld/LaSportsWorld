"use server";

import { submitContactForm } from "@/app/actions/contact";
import { engagementLabels, organizationProgramLabels, spaceLabels, validateOrganizationInquiry, type OrganizationInquiryErrors } from "@/lib/inquiries/organization";

export type OrganizationInquiryState = { status: "idle" | "success" | "error"; message?: string; fieldErrors?: OrganizationInquiryErrors };

export async function submitOrganizationInquiry(_previous: OrganizationInquiryState, formData: FormData): Promise<OrganizationInquiryState> {
  if (String(formData.get("website") || "").trim()) return { status: "success" };
  const validation = validateOrganizationInquiry(formData);
  if (!validation.success) return { status: "error", message: "Please review the highlighted fields.", fieldErrors: validation.errors };
  const inquiry = validation.data;

  // Temporary compatibility handoff only. No new CRM fields, IDs, stages, labels,
  // or pipeline rules are introduced here; the structured inquiry stays independently mappable.
  const delivery = new FormData();
  delivery.set("service", "general");
  delivery.set("firstName", inquiry.contactName);
  delivery.set("email", inquiry.workEmail);
  delivery.set("phone", inquiry.phone);
  delivery.set("sourcePage", inquiry.source.page);
  delivery.set("timestamp", inquiry.source.submittedAt);
  delivery.set("field_inquiry_type", "Schools & Organizations");
  delivery.set("field_organization_name", inquiry.organizationName);
  if (inquiry.roleTitle) delivery.set("field_role_title", inquiry.roleTitle);
  delivery.set("field_program_type", organizationProgramLabels[inquiry.programType]);
  if (inquiry.ageGradeRange) delivery.set("field_age_grade_range", inquiry.ageGradeRange);
  if (inquiry.approximateParticipantCount) delivery.set("field_participant_count", String(inquiry.approximateParticipantCount));
  delivery.set("field_engagement_type", engagementLabels[inquiry.engagementType]);
  delivery.set("field_service_needs", inquiry.serviceNeeds);
  if (inquiry.desiredTiming) delivery.set("field_desired_timing", inquiry.desiredTiming);
  if (inquiry.frequency) delivery.set("field_frequency", inquiry.frequency);
  if (inquiry.location) delivery.set("field_location", inquiry.location);
  if (inquiry.spaceType) delivery.set("field_space_type", spaceLabels[inquiry.spaceType]);
  delivery.set("details", [inquiry.goalsRequirements, inquiry.additionalNotes].filter(Boolean).join("\n\n"));
  const result = await submitContactForm({ status: "idle" }, delivery);
  return result.status === "success" ? { status: "success" } : { status: "error", message: result.message };
}
