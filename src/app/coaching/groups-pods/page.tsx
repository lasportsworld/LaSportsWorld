import Link from "next/link";
import { ArrowRight, Sparkles, Target, UsersRound } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pods & Groups | LA Sports World",
  description:
    "Bring an existing group or let us help form one. Flexible, recurring group coaching delivered wherever you are.",
  path: "/pods-groups",
});

const groupNeeds = [
  {
    icon: Target,
    title: "Skill-focused groups",
    desc: "Friends who all want to level up in the same sport, together.",
  },
  {
    icon: Sparkles,
    title: "Sport-loving crews",
    desc: "Kids who share a passion for one sport and want regular reps.",
  },
  {
    icon: UsersRound,
    title: "Movement & confidence groups",
    desc: "Groups that just want to move, connect, and build confidence.",
  },
];

const design = [
  "Group size & ages",
  "Sport or activity mix",
  "Ability level",
  "Location",
  "Frequency",
  "Curriculum",
  "Equipment",
  "Coach count",
];

const howItStarts = [
  { n: "1", title: "Organizer inquiry", desc: "Tell us about your group and what you're looking for." },
  { n: "2", title: "Group details", desc: "We ask a few questions to shape the right program." },
  { n: "3", title: "Recommendation & quote", desc: "We put together a plan and pricing for the group." },
  { n: "4", title: "Participant coordination", desc: "We help coordinate scheduling with the group." },
  { n: "5", title: "Launch", desc: "Your coach shows up and the group gets started." },
];

export default function GroupCoachingAndPodsPage() {
  return (
    <>
      <PageHero
        title="Pods & Groups"
        subtitle="Bring an existing group, or let us help you form one. Flexible coaching and recurring activities for kids who move better together."
        tag="Customer programs"
        image="/images/lasw-photo-44.jpg"
        imageAlt="A group of children and LA Sports World coaches at an outdoor flag football session"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-navy/65">
            You can bring an existing group of friends, teammates, or classmates,
            or ask us to help form one. You may know this kind of recurring group
            programming as a &ldquo;pod.&rdquo; It&apos;s the same thing, just a
            familiar name for parents who&apos;ve organized one before.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-navy/50">Looking for individual attention instead? Private one-on-one coaching is available as a tailored option through the same planning process.</p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Groups that work well
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {groupNeeds.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-navy/8 bg-white p-7 text-center">
                <Icon className="mx-auto mb-3 h-8 w-8 text-gold" />
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
              Flexible program design
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {design.map((item) => (
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
              How a group starts
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-6 sm:grid-cols-5">
            {howItStarts.map((step) => (
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

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy lg:text-4xl">Pricing</h2>
          <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-navy/60">
            Group pricing depends on group size, frequency, and location. Tell us
            about your group and we&apos;ll put together a clear quote.
          </p>
        </div>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-condensed text-3xl font-extrabold uppercase text-white lg:text-4xl">
            Have a group in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65">
            Tell us about your group, whether it already exists or is one we can help you form, and
            we&apos;ll follow up with a plan.
          </p>
          <Link
            href="/pods-groups/request?format=group&source=pods-groups"
            className="button-gold mt-7"
          >
            Plan a Pod or Group <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
