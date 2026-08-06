import Link from "next/link";
import { ArrowRight, Repeat, Sparkles, Users } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enrichment & After-School | LA Sports World",
  description:
    "Active, engaging after-school enrichment programming that complements the school day.",
};

const formats = [
  "Multi-sport",
  "Skill-focused",
  "Movement & coordination",
  "Games",
  "Clinics",
  "Rotating activities",
];

const customization = [
  "Ages",
  "Enrollment size",
  "Schedule",
  "Session length",
  "Space",
  "Equipment",
  "Curriculum",
  "Staffing",
  "Registration responsibility",
];

const launch = [
  { n: "1", title: "Planning", desc: "We learn your space, schedule, and goals." },
  { n: "2", title: "Proposal", desc: "You get a program plan and pricing to review." },
  { n: "3", title: "Confirmation", desc: "We lock in dates and logistics." },
  { n: "4", title: "Delivery", desc: "Coaches show up and run the program." },
  { n: "5", title: "Adjustments", desc: "We stay in touch and adjust as needed." },
];

export default function EnrichmentPage() {
  return (
    <>
      <PageHero
        title="Enrichment & After-School"
        subtitle="An engaging activity partner that complements your school day."
        tag="Schools & Organizations"
        image="/images/kids-action-2.jpg"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-navy/65">
            LA Sports World runs after-school and enrichment programming that keeps
            kids active, engaged, and having fun — built around your school or
            organization&apos;s schedule and space.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Possible formats
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {formats.map((f) => (
              <span
                key={f}
                className="rounded-full border border-navy/10 bg-white px-5 py-2.5 text-sm font-bold text-navy"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              What&apos;s customizable
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {customization.map((item) => (
              <span
                key={item}
                className="rounded-full border border-navy/10 bg-cream px-5 py-2.5 text-sm font-bold text-navy"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Launch & operation
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-6 sm:grid-cols-5">
            {launch.map((step) => (
              <div key={step.n} className="text-center">
                <span className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-extrabold text-white">
                  {step.n}
                </span>
                <div className="text-sm font-extrabold text-navy">{step.title}</div>
                <p className="mt-1 text-xs leading-relaxed text-navy/55">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-4 flex w-fit gap-2 text-gold">
            <Repeat className="h-7 w-7" />
            <Sparkles className="h-7 w-7" />
            <Users className="h-7 w-7" />
          </div>
          <h2 className="font-condensed text-3xl font-extrabold uppercase text-white lg:text-4xl">
            Let&apos;s build your program
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65">
            Tell us about your school or organization and we&apos;ll follow up with
            options.
          </p>
          <Link
            href="/schools-organizations#organization-form"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-extrabold uppercase tracking-wide text-navy shadow-lg transition hover:bg-gold hover:text-white"
          >
            Discuss an Enrichment Program <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
