import InquiryShell from "@/components/inquiry/InquiryShell";
import OrganizationInquiryForm from "@/components/inquiry/OrganizationInquiryForm";
import { organizationProgramTypes, type OrganizationProgramType } from "@/lib/inquiries/organization";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Request a Program | LA Sports World",
  description: "Discuss school, enrichment, camp, or community programming with LA Sports World.",
  path: "/schools-organizations/request",
});

export default async function OrganizationRequestPage({ searchParams }: { searchParams: Promise<{ type?: string; source?: string }> }) {
  const params = await searchParams;
  const initialProgramType: OrganizationProgramType | "" = organizationProgramTypes.includes(params.type as OrganizationProgramType) ? params.type as OrganizationProgramType : "";
  return (
    <InquiryShell
      eyebrow="Schools & Organizations"
      title="Tell us what your program needs"
      description="Give us the setting, audience, timing, and objective—even if the details are still taking shape."
      backHref="/schools-organizations"
      backLabel="Back to Organizations"
      highlights={["Flexible for early-stage ideas", "Built around your setting", "Clear operational follow-up"]}
      note="A useful first conversation does not require a finished brief."
      variant="organization"
    >
      <OrganizationInquiryForm initialProgramType={initialProgramType} entryContext={params.source || params.type || "organizations-overview"} />
    </InquiryShell>
  );
}
