import Link from "next/link";
import { ArrowRight, Layers, MapPin, Users } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community & Organization Events | LA Sports World",
  description:
    "A children's activity area or active program within your larger community event, fundraiser, or gathering.",
};

const components = [
  "Sports",
  "Games",
  "Obstacle courses",
  "Coordination activities",
  "Soft play",
  "Equipment & setup",
];

const planningFactors = [
  { icon: Users, title: "Audience & ages", desc: "Who's attending and what ages to plan for." },
  { icon: MapPin, title: "Space & venue", desc: "Where the activity area will live within your event." },
  { icon: Layers, title: "Duration & flow", desc: "How the activities fit into your event's schedule." },
];

const delivery = [
  { n: "1", title: "Consultation", desc: "Tell us about your event and what you're picturing." },
  { n: "2", title: "Site & logistics review", desc: "We look at the space and plan around it." },
  { n: "3", title: "Proposal", desc: "A clear plan and quote to review." },
  { n: "4", title: "Confirmation", desc: "We lock in the date and details." },
  { n: "5", title: "Setup, operation & breakdown", desc: "We handle the day, start to finish." },
];

export default function CommunityEventsPage() {
  return (
    <>
      <PageHero
        title="Community & Organization Events"
        subtitle="A children's activity area or active program, built into your larger event."
        tag="Schools & Organizations"
        image="/images/lasw-event-3.jpg"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-navy/65">
            Planning a fundraiser, community gathering, or organizational event?
            LA Sports World can create and run a dedicated children&apos;s activity
            area — so kids stay engaged while the rest of your event runs smoothly.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Configurable components
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {components.map((c) => (
              <span
                key={c}
                className="rounded-full border border-navy/10 bg-white px-5 py-2.5 text-sm font-bold text-navy"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Planning factors
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {planningFactors.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-navy/8 bg-cream p-7 text-center">
                <Icon className="mx-auto mb-3 h-8 w-8 text-gold" />
                <div className="text-base font-extrabold text-navy">{title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/55">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Event delivery
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-6 sm:grid-cols-5">
            {delivery.map((step) => (
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
            Let&apos;s plan your event
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65">
            Tell us about your event and what you have in mind.
          </p>
          <Link
            href="/schools-organizations#organization-form"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-extrabold uppercase tracking-wide text-navy shadow-lg transition hover:bg-gold hover:text-white"
          >
            Discuss an Event <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
