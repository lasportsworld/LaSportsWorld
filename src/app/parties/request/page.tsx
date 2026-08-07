import InquiryShell from "@/components/inquiry/InquiryShell";
import PartyInquiryForm from "@/components/inquiry/PartyInquiryForm";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Plan a Party | LA Sports World",
  description: "Tell LA Sports World about your child's party and request a tailored activity plan.",
  path: "/parties/request",
});

export default async function PartyRequestPage({ searchParams }: { searchParams: Promise<{ source?: string }> }) {
  const params = await searchParams;
  return (
    <InquiryShell
      eyebrow="Plan a Party"
      title="Let’s build a party that fits your child"
      description="Share what you know about the date, group, energy, and location. We’ll help turn it into the right activity plan."
      backHref="/parties"
      backLabel="Back to Parties"
      highlights={["Takes about 2–3 minutes", "Estimates are welcome", "Activities shaped around your group"]}
      note="You do not need the whole party planned before reaching out."
      variant="party"
    >
      <PartyInquiryForm entryContext={params.source || "parties-overview"} />
    </InquiryShell>
  );
}
