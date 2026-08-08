import Link from "next/link";
import { ArrowRight, CalendarRange, ClipboardList, Repeat, Sparkles } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programming for Schools & Businesses | LA Sports World",
  description:
    "Activity blocks, clinics, and programming that supplement an existing camp or organization without requiring a full camp takeover.",
  alternates: { canonical: "/schools-businesses/programming" },
};

const programOptions = [
  { icon: CalendarRange, title: "Daily activity blocks", desc: "Drop-in coaching for a portion of your camp day." },
  { icon: Repeat, title: "Rotating sports", desc: "A rotation of sports and activities across a session." },
  { icon: Sparkles, title: "Specialty clinics", desc: "Focused sessions on a specific sport or skill." },
  { icon: ClipboardList, title: "Special-event days", desc: "One-off activity days for a special occasion." },
];

const customization = [
  "Participant count",
  "Ages",
  "Schedule",
  "Location",
  "Space",
  "Equipment",
  "Coaches",
  "Curriculum",
];

const process = [
  { n: "1", title: "Needs assessment", desc: "We learn what your camp needs supplemented." },
  { n: "2", title: "Program design", desc: "We design activity blocks that fit your existing schedule." },
  { n: "3", title: "Proposal", desc: "A clear plan and quote to review." },
  { n: "4", title: "Staffing & delivery", desc: "Coaches show up and run the sessions." },
  { n: "5", title: "Communication & review", desc: "We stay in touch and check in on how it's going." },
];

export default function OrgCampsPage() {
  return (
    <>
      <PageHero
        title="Programming"
        subtitle="Activity blocks, clinics, and recurring programming that supplement your school, camp, business, or community schedule."
        tag="Schools & Businesses"
        image="/images/lasw-photo-44.jpg"
        imageAlt="Children and LA Sports World coaches gathered for an outdoor sports program"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-navy/65">
            Running a camp or program already and just need help with the sports
            and activity side? LA Sports World can supplement what you&apos;re
            already running. We bring coaches, equipment, and structure for the
            parts you want covered.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Program options
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programOptions.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-navy/8 bg-white p-6">
                <Icon className="mb-3 h-7 w-7 text-gold" />
                <div className="text-base font-extrabold text-navy">{title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/55">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Operational customization
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {customization.map((item) => (
              <span
                key={item}
                className="rounded-md bg-navy/[.055] px-4 py-2.5 text-sm font-semibold text-navy/72"
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
              Partnership process
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-6 sm:grid-cols-5">
            {process.map((step) => (
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
          <h2 className="font-condensed text-3xl font-extrabold uppercase text-white lg:text-4xl">
            Let&apos;s talk programming
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65">
            Tell us what you&apos;re already running and where you need support.
          </p>
          <Link
            href="/schools-businesses/request?type=camps-activity&source=programming"
            className="button-gold mt-7"
          >
            Discuss Camp Programming <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
