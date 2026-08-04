import Link from "next/link";
import { ArrowRight, Shield, Sparkles, Users } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SawyerEmbed from "@/components/shared/SawyerEmbed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classes & Camps | LA Sports World",
  description:
    "Browse LA Sports World's ongoing classes, holiday camps, and upcoming summer camp — organized programs families can join.",
};

const programTypes = [
  {
    title: "Classes",
    desc: "Ongoing and pop-up classes that build skills week over week.",
    href: "/classes-camps/classes",
  },
  {
    title: "Holiday Camps",
    desc: "Full-day camps around school breaks and holidays.",
    href: "/classes-camps/holiday-camps",
  },
  {
    title: "Summer Camp",
    desc: "In the works for summer — join the interest list to hear first.",
    href: "/classes-camps/summer-camp",
  },
];

const expectations = [
  {
    icon: Users,
    title: "Age-appropriate planning",
    desc: "Every session is planned around the age and ability level of the group.",
  },
  {
    icon: Sparkles,
    title: "Confidence-building",
    desc: "Coaches meet kids where they are and build them up from there.",
  },
  {
    icon: Shield,
    title: "Coaching quality",
    desc: "The same coaching standards as our private and group programs.",
  },
];

export default function ClassesCampsPage() {
  return (
    <>
      <PageHero
        title="Classes & Camps"
        subtitle="Organized programs families can join — browse what's open now."
        tag="Scheduled Programs"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-navy/65">
            Unlike our custom coaching and party services, Classes &amp; Camps are
            LA Sports World-organized opportunities with set dates and locations that
            any family can register for. Pick a program type below to see
            what&apos;s currently scheduled.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Choose a program type
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {programTypes.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group rounded-2xl border border-navy/8 bg-white p-7 transition hover:border-gold/40 hover:shadow-sm"
              >
                <div className="text-lg font-extrabold text-navy">{p.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-navy/55">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-navy transition group-hover:text-gold">
                  View Details <ArrowRight className="h-3.5 w-3.5" />
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
              Current Opportunities
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <SawyerEmbed
            src={
              process.env.SAWYER_CLASSES_CAMPS_EMBED_URL ||
              process.env.SAWYER_REGISTER_EMBED_URL
            }
            title="LA Sports World classes and camps registration"
            minHeight={700}
            fallbackMessage="Live registration is being connected here. In the meantime, pick a program type above or contact us directly."
          />
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              What families can expect
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {expectations.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-navy/8 bg-white p-6 text-center">
                <Icon className="mx-auto mb-3 h-7 w-7 text-gold" />
                <div className="text-base font-extrabold text-navy">{title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/55">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-navy/55">
            See everything open for registration on the{" "}
            <Link href="/register" className="font-bold text-navy hover:text-gold hover:underline">
              full schedule
            </Link>
            , or{" "}
            <Link href="/contact" className="font-bold text-navy hover:text-gold hover:underline">
              contact us
            </Link>{" "}
            if you can&apos;t find the right program.
          </p>
        </div>
      </section>
    </>
  );
}
