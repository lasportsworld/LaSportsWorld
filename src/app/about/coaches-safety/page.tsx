import Link from "next/link";
import { ArrowRight, ClipboardCheck, MessageCircleQuestion, ShieldCheck } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coach Standards & Safety | LA Sports World",
  description:
    "Safety, engagement, and professional conduct are core to how every LA Sports World coach shows up.",
};

export default function CoachStandardsPage() {
  return (
    <>
      <PageHero
        title="Coach Standards & Safety"
        subtitle="Safety, engagement, and professional conduct are core to how every coach shows up."
        tag="About LASW"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <ShieldCheck className="mx-auto mb-4 h-9 w-9 text-gold" />
          <h2 className="text-3xl font-bold text-navy lg:text-4xl">
            Our commitment
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy/65">
            Safety, engagement, and professional conduct aren&apos;t an
            afterthought — they&apos;re core expectations for every coach who
            represents LA Sports World.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <ClipboardCheck className="mx-auto mb-4 h-9 w-9 text-gold" />
          <h2 className="text-3xl font-bold text-navy lg:text-4xl">Screening</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy/65">
            Every LA Sports World coach is <strong className="text-navy">Live Scanned</strong> and{" "}
            <strong className="text-navy">background checked</strong>.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy lg:text-4xl">
            Training & standards
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-navy/55">
            We&apos;re in the process of documenting our full coach training and
            conduct standards. This section will be updated as that&apos;s
            finalized.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy lg:text-4xl">
            Equipment & incident response
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-navy/55">
            Our equipment and incident response procedures are being formalized.
            This section will be updated once those policies are documented.
          </p>
        </div>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <MessageCircleQuestion className="mx-auto mb-4 h-9 w-9 text-gold" />
          <h2 className="font-condensed text-3xl font-extrabold uppercase text-white lg:text-4xl">
            Have a question?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65">
            Check our FAQ, or reach out directly with any safety question — for a
            parent or an organization.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-white hover:text-navy"
            >
              View FAQ
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-extrabold uppercase tracking-wide text-navy shadow-lg transition hover:bg-gold hover:text-white"
            >
              Plan an Activity <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
