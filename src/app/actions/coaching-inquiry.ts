"use server";

import { addNoteToDeal, createDeal, DEAL_LABEL_IDS, findOrCreatePerson } from "@/lib/pipedrive";
import { validateCoachingInquiry, type CoachingInquiryErrors } from "@/lib/inquiries/coaching";
import { prepareCoachingInquiryForPipedrive } from "@/lib/inquiries/pipedrive-mapping";

export type CoachingInquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: CoachingInquiryErrors;
};

export async function submitCoachingInquiry(
  _previousState: CoachingInquiryState,
  formData: FormData
): Promise<CoachingInquiryState> {
  // Quietly absorb bot submissions from the visually hidden honeypot.
  if (String(formData.get("website") || "").trim()) return { status: "success" };

  const validation = validateCoachingInquiry(formData);
  if (!validation.success) {
    return {
      status: "error",
      message: "Please review the highlighted fields.",
      fieldErrors: validation.errors,
    };
  }

  const prepared = prepareCoachingInquiryForPipedrive(validation.data);

  try {
    const personId = await findOrCreatePerson(prepared.person);
    const dealId = await createDeal({
      title: prepared.deal.title,
      personId,
      labelId: DEAL_LABEL_IDS.privateCoaching,
      eventLocation: prepared.deal.location,
    });
    await addNoteToDeal(dealId, prepared.note);
    return { status: "success" };
  } catch (error) {
    console.error("Coaching inquiry submission failed:", error);
    return {
      status: "error",
      message: "We couldn’t send your request. Please try again or call (213) 301-6226.",
    };
  }
}
