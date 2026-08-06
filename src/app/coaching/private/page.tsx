import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Target, Wrench } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Coaching | LA Sports World",
  description:
    "One-on-one coaching tailored to a single athlete's experience, interests, and goals — anywhere in Los Angeles.",
};

const commonSports = [
  "Basketball",
  "Flag Football",
  "Soccer",
  "Baseball",
  "Volleyball",
  "Surfing",
  "Street Hockey",
  "Personal Fitness",
];

const customized = [
  { icon: MapPin, title: "Location", desc: "Home, park, school, or a facility near you." },
  { icon: Calendar, title: "Schedule & session length", desc: "Set on a cadence that works for your family." },
  { icon: Target, title: "Sport & curriculum", desc: "Focused on the skills and goals that matter most." },
  { icon: Wrench, title: "Equipment & coach", desc: "We bring the gear and match the right coach." },
];

export default function PrivateCoachingPage() {
  return (
    <>
      <PageHero
        title="Private Coaching"
        subtitle="One-on-one coaching, tailored to your child's experience, interests, and goals."
        tag="Coaching"
        image="/images/LASW_Private_Lessons_Header_Image.jpg"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-navy/65">
            Private coaching is for the athlete who wants focused, one-on-one
            attention — whether that&apos;s building fundamentals from scratch,
            correcting habits, or preparing for tryouts and competition. Every plan
            is built around your child&apos;s current experience, interests, and
            goals.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Common sports & goals
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
            <p className="mx-auto mt-3 max-w-lg text-sm text-navy/55">
              A sample of what we regularly coach — not an exhaustive list. Ask us
              about anything not shown here.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {commonSports.map((sport) => (
              <span
                key={sport}
                className="rounded-full border border-navy/10 bg-white px-5 py-2.5 text-sm font-bold text-navy"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              What we customize
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {customized.map(({ icon: Icon, title, desc }) => (
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
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy lg:text-4xl">Pricing</h2>
          <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-navy/60">
            Pricing depends on session length, location, and schedule. After a quick
            conversation, you&apos;ll get a clear, tailored quote — no guessing
            games.
          </p>
        </div>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-condensed text-3xl font-extrabold uppercase text-white lg:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65">
            Tell us about your athlete and what you&apos;re looking for, and
            we&apos;ll follow up with next steps.
          </p>
          <Link
            href="/coaching/request?format=private"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-extrabold uppercase tracking-wide text-navy shadow-lg transition hover:bg-gold hover:text-white"
          >
            Request Private Coaching <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
