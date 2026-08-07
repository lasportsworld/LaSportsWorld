import Link from "next/link";
import { Backpack, MapPin, Sparkles, Users } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SawyerEmbed from "@/components/shared/SawyerEmbed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classes | LA Sports World",
  description:
    "Ongoing and pop-up classes that build skills, movement, and confidence. Browse current sessions and register.",
};

const expectations = [
  {
    icon: Sparkles,
    title: "Skill-building, made fun",
    desc: "Age-appropriate drills and games that build real skills without feeling like a lecture.",
  },
  {
    icon: Users,
    title: "Group experience",
    desc: "Kids train alongside peers, building teamwork and confidence together.",
  },
  {
    icon: Backpack,
    title: "Everything provided",
    desc: "Equipment is handled. Just show up ready to move.",
  },
  {
    icon: MapPin,
    title: "Local locations",
    desc: "Classes run at parks and facilities around Los Angeles.",
  },
];

export default function ClassesPage() {
  return (
    <>
      <PageHero
        title="Classes"
        subtitle="Structured, ongoing classes that build skills and confidence week over week."
        tag="Classes & Camps"
        image="/images/sports-clinic.jpg"
        imageAlt="Children taking part in an indoor LA Sports World sports activity"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-navy/65">
            LA Sports World runs both pop-up classes and recurring sessions. Some of what
            you see below may be a limited-run series. When there is continued interest, we bring it back
            as a regular offering. Either way, every class is coached with the same
            attention and structure as our private and group programs.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              What to expect
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expectations.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-navy/8 bg-white p-6"
              >
                <Icon className="mb-4 h-7 w-7 text-gold" />
                <div className="text-base font-extrabold text-navy">{title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/55">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Current Classes
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <SawyerEmbed
            src={process.env.SAWYER_CLASSES_EMBED_URL || process.env.SAWYER_REGISTER_EMBED_URL}
            title="LA Sports World classes registration"
            fallbackMessage="Class registration is unavailable right now. Contact us and we'll help you find a session that fits."
          />
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Good to know
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-navy/8 bg-white p-6">
              <div className="text-sm font-extrabold uppercase tracking-wide text-navy/50">
                Ages
              </div>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                Classes are grouped by age and skill level. Exact age ranges are listed
                on each session in the registration list above.
              </p>
            </div>
            <div className="rounded-2xl border border-navy/8 bg-white p-6">
              <div className="text-sm font-extrabold uppercase tracking-wide text-navy/50">
                What to bring
              </div>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                Athletic shoes, a water bottle, and weather-appropriate clothing. We
                provide all sport equipment.
              </p>
            </div>
            <div className="rounded-2xl border border-navy/8 bg-white p-6">
              <div className="text-sm font-extrabold uppercase tracking-wide text-navy/50">
                Weather &amp; changes
              </div>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                If weather affects an outdoor session, we&apos;ll reach out to registered
                families as early as possible with next steps.
              </p>
            </div>
            <div className="rounded-2xl border border-navy/8 bg-white p-6">
              <div className="text-sm font-extrabold uppercase tracking-wide text-navy/50">
                Updates
              </div>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                Registered families are contacted directly with anything they need to
                know before a session.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-navy/55">
            Can&apos;t find the right class or have a registration question?{" "}
            <Link
              href="/contact"
              className="font-bold text-navy hover:text-gold hover:underline"
            >
              Contact us
            </Link>{" "}
            and we&apos;ll help you sort it out.
          </p>
        </div>
      </section>
    </>
  );
}
