import Link from "next/link";
import { ArrowRight, Calendar, Layers, MapPin, Users } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Birthday Parties | LA Sports World",
  description:
    "LA Sports World brings organized sports, games, and activities to your child's birthday party — at a park, home, backyard, or venue.",
};

const experienceCategories = [
  {
    title: "Sports & Games",
    desc: "Any two sports or activities of your choice, run by a coach who knows how to keep a party moving.",
  },
  {
    title: "Obstacle & Coordination",
    desc: "Obstacle courses and coordination games that keep every age group engaged.",
  },
  {
    title: "Soft Play",
    desc: "Age-appropriate soft play setups for younger guests.",
  },
  {
    title: "Equipment & Setup",
    desc: "We bring and set up everything the activities need.",
  },
];

const planFactors = [
  { icon: Users, title: "Age & guest count", desc: "Shapes the activities and coach count." },
  { icon: Calendar, title: "Duration", desc: "How long the party runs." },
  { icon: MapPin, title: "Location & space", desc: "Park, home, backyard, or venue." },
  { icon: Layers, title: "Requested setup", desc: "Any extras you'd like included." },
];

const howItWorks = [
  { n: "1", title: "Inquiry", desc: "Tell us the date, age, and vibe you're going for." },
  { n: "2", title: "Consultation", desc: "We talk through activities and logistics." },
  { n: "3", title: "Recommended package", desc: "We put together a plan that fits." },
  { n: "4", title: "Quote & confirmation", desc: "You get a clear quote and lock in the date." },
  { n: "5", title: "Setup, delivery & breakdown", desc: "We handle the rest on the day." },
];

export default function BirthdayPartiesPage() {
  return (
    <>
      <PageHero
        title="Birthday Parties"
        subtitle="Organized sports and activities that make the party — wherever you're hosting it."
        tag="Parties & Events"
        image="/images/LASW_Parties_Header_Image.jpg"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-navy/65">
            LA Sports World is the organized activity and entertainment partner for
            your child&apos;s party — at a park, your home, a backyard, or another
            venue. We mix and match sports, games, and setup to fit the group.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Build the experience
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {experienceCategories.map((c) => (
              <div key={c.title} className="rounded-2xl border border-navy/8 bg-white p-6">
                <div className="text-base font-extrabold text-navy">{c.title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/55">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              What determines the plan
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {planFactors.map(({ icon: Icon, title, desc }) => (
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
              How planning works
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
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-navy/45">
            Some park locations require a permit for group activities. We&apos;ll
            confirm who&apos;s responsible for that during planning — we don&apos;t
            assume permits, food, decor, or rentals are included unless they&apos;re
            in your quote.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy lg:text-4xl">Pricing</h2>
          <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-navy/60">
            Pricing depends on guest count, duration, activities, and location.
            You&apos;ll get a clear quote after a quick conversation about what
            you&apos;re planning.
          </p>
        </div>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-condensed text-3xl font-extrabold uppercase text-white lg:text-4xl">
            Let&apos;s plan the party
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65">
            Tell us the date, age, and what you have in mind — we&apos;ll take it
            from there.
          </p>
          <Link
            href="/contact?service=birthday-party"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-extrabold uppercase tracking-wide text-navy shadow-lg transition hover:bg-gold hover:text-white"
          >
            Plan a Party <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
