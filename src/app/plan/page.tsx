import InquiryShell from "@/components/inquiry/InquiryShell";
import PlanExperience from "@/components/inquiry/PlanExperience";
import { planPaths, type PlanPath } from "@/components/inquiry/plan-options";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Plan an Activity | LA Sports World",
  description: "Choose what you are planning and get the right LA Sports World inquiry or registration experience.",
  path: "/plan",
});

export default async function PlanPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const params = await searchParams;
  const initialPath: PlanPath | "" = planPaths.includes(params.type as PlanPath) ? params.type as PlanPath : "";
  return (
    <InquiryShell
      eyebrow="Plan an Activity"
      title="Start in the right place"
      description="Tell us what you’re planning. We’ll show only the questions that matter for that kind of experience."
      backHref="/"
      backLabel="Back to Home"
      highlights={["One clear starting point", "Questions tailored to your plan", "Scheduled programs stay easy to book"]}
      note="Choose the closest fit. You can adjust the details as you go."
    >
      <PlanExperience initialPath={initialPath} />
    </InquiryShell>
  );
}
