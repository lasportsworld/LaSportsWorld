import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Sliders, Users } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaching | LA Sports World",
  description:
    "Private and group coaching built around your child, group, sport, goals, location, and schedule.",
};

const formats = [
  {
    title: "Private Coaching",
    desc: "One-on-one coaching tailored to a single athlete's goals and pace.",
    href: "/coaching/private",
  },
  {
    title: "Group Coaching & Pods",
    desc: "Coaching for an existing group, or help forming a recurring one — sometimes called pods.",
    href: "/coaching/groups-pods",
  },
];

const customizable = [
  { icon: Sliders, title: "Sport & experience level", desc: "From first-timers to advanced athletes." },
  { icon: Users, title: "Confidence & engagement goals", desc: "We coach to the child, not just the skill." },
  { icon: MapPin, title: "Location & schedule", desc: "We come to you, on a schedule that works." },
  { icon: ShieldCheck, title: "Curriculum", desc: "Built around what your athlete actually needs." },
];

const howItWorks = [
  { n: "1", title: "Inquiry", desc: "Tell us about the athlete, group, and goals." },
  { n: "2", title: "Needs assessment", desc: "We ask a few questions to understand the right fit." },
  { n: "3", title: "Recommended setup", desc: "We propose a plan for sport, schedule, and coach." },
  { n: "4", title: "Scheduling", desc: "We lock in times that work for you." },
  { n: "5", title: "Coach assignment", desc: "A coach matched to the athlete or group gets started." },
];

export default function CoachingPage() {
  return (
    <>
      <PageHero
        title="Coaching"
        subtitle="Coaching built around the child, group, sport, goals, location, and schedule."
        tag="Coaching & Groups"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-navy/65">
            Every LA Sports World coaching plan is built around the athlete or group
            in front of us — not a fixed package. Whether it&apos;s one child working
            on a specific skill or a group of friends who want to train together, we
            design the sport, schedule, and coach to fit.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Choose a format
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {formats.map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="group rounded-2xl border border-navy/8 bg-white p-8 transition hover:border-gold/40 hover:shadow-sm"
              >
                <div className="text-xl font-extrabold text-navy">{f.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{f.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-navy transition group-hover:text-gold">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              What can be customized
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {customizable.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-navy/8 bg-cream p-6">
                <Icon className="mb-3 h-7 w-7 text-gold" />
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
              How coaching works
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-6 sm:grid-cols-5">
            {howItWorks.map((step) => (
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
          <ShieldCheck className="mx-auto mb-4 h-9 w-9 text-gold" />
          <h2 className="font-condensed text-3xl font-extrabold uppercase text-white lg:text-4xl">
            Coaches you can trust
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65">
            Every LA Sports World coach is Live Scanned and background checked, and
            matched to your athlete or group with confidence-building at the core of
            how we coach.
          </p>
          <Link
            href="/contact?service=private-coaching"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-extrabold uppercase tracking-wide text-navy shadow-lg transition hover:bg-gold hover:text-white"
          >
            Request Coaching <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
