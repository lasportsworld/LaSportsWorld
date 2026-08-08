import CoachingInquiryForm from "@/components/inquiry/CoachingInquiryForm";
import InquiryShell from "@/components/inquiry/InquiryShell";
import type { CoachingFormat } from "@/lib/inquiries/coaching";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Plan a Pod or Group | LA Sports World",
  description: "Tell LA Sports World what your child or group needs and request a tailored activity recommendation.",
  path: "/pods-groups/request",
});

export default async function RequestCoachingPage({ searchParams }: { searchParams: Promise<{ format?: string; source?: string }> }) {
  const params = await searchParams;
  const requestedFormat = params.format;
  const initialFormat: CoachingFormat | "" = requestedFormat === "private" || requestedFormat === "group" || requestedFormat === "unsure" ? requestedFormat : "";

  return (
    <InquiryShell eyebrow="Pods & Groups" title="Let’s find the right setup" description="Tell us what your child or group needs, and we’ll help figure out the format, coach, and setup that make the most sense." backHref="/pods-groups" backLabel="Back to Pods & Groups" highlights={["Takes about 2–3 minutes", "We’ll help you choose the format", "Built around your goals"]}>
      <CoachingInquiryForm initialFormat={initialFormat} entryContext={params.source || "pods-groups-overview"} sourcePage="/pods-groups/request" />
    </InquiryShell>
  );
}
