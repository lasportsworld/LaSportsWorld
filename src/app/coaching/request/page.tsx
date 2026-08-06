import type { Metadata } from "next";
import CoachingInquiryForm from "@/components/inquiry/CoachingInquiryForm";
import InquiryShell from "@/components/inquiry/InquiryShell";
import type { CoachingFormat } from "@/lib/inquiries/coaching";

export const metadata: Metadata = {
  title: "Request Coaching | LA Sports World",
  description: "Tell LA Sports World what your child or group needs and request a tailored coaching recommendation.",
};

export default async function RequestCoachingPage({
  searchParams,
}: {
  searchParams: Promise<{ format?: string }>;
}) {
  const requestedFormat = (await searchParams).format;
  const initialFormat: CoachingFormat | "" = requestedFormat === "private" || requestedFormat === "group" || requestedFormat === "unsure" ? requestedFormat : "";

  return (
    <InquiryShell
      eyebrow="Request Coaching"
      title="Let’s find the right coaching fit"
      description="Tell us a little about your child or group. We’ll use the details to recommend the coaching format and setup that makes the most sense."
      backHref="/coaching"
      backLabel="Back to Coaching"
      highlights={["Takes just a few minutes", "Private or group options", "Built around your goals", "Clear next-step recommendation"]}
    >
      <CoachingInquiryForm initialFormat={initialFormat} />
    </InquiryShell>
  );
}
