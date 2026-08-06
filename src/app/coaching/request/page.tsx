import CoachingInquiryForm from "@/components/inquiry/CoachingInquiryForm";
import InquiryShell from "@/components/inquiry/InquiryShell";
import type { CoachingFormat } from "@/lib/inquiries/coaching";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Request Coaching | LA Sports World",
  description: "Tell LA Sports World what your child or group needs and request a tailored coaching recommendation.",
  path: "/coaching/request",
});

export default async function RequestCoachingPage({
  searchParams,
}: {
  searchParams: Promise<{ format?: string; source?: string }>;
}) {
  const params = await searchParams;
  const requestedFormat = params.format;
  const initialFormat: CoachingFormat | "" = requestedFormat === "private" || requestedFormat === "group" || requestedFormat === "unsure" ? requestedFormat : "";

  return (
    <InquiryShell
      eyebrow="Request Coaching"
      title="Let’s find the right coaching fit"
      description="Tell us what your child or group needs, and we’ll help figure out the format, coach, and setup that make the most sense."
      backHref="/coaching"
      backLabel="Back to Coaching"
      highlights={["Takes about 2–3 minutes", "We’ll help you choose the format", "Built around your goals"]}
    >
      <CoachingInquiryForm initialFormat={initialFormat} entryContext={params.source || "coaching-overview"} />
    </InquiryShell>
  );
}
