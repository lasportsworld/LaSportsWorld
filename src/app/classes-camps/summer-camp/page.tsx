import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SawyerEmbed from "@/components/shared/SawyerEmbed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summer Camp | LA Sports World",
  description:
    "Summer programming is being developed. Join the interest list to be the first to hear when dates and registration open.",
};

const otherOptions = [
  {
    title: "Classes",
    desc: "Browse ongoing and pop-up classes open right now.",
    href: "/classes-camps/classes",
  },
  {
    title: "Holiday Camps",
    desc: "Full-day camps around school breaks and holidays.",
    href: "/classes-camps/holiday-camps",
  },
  {
    title: "Private & Group Coaching",
    desc: "Custom coaching built around your child's schedule.",
    href: "/coaching",
  },
];

export default function SummerCampPage() {
  return (
    <>
      <PageHero
        title="Summer Camp"
        subtitle="Our summer programming is being developed. Here is how to be first in line."
        tag="Coming for Summer"
        image="/images/lasw-design-1.jpg"
        imageAlt="LA Sports World coaches leading an outdoor movement activity with children"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-navy/65">
            We&apos;re building out a summer camp program with active, multi-sport
            programming designed to build skills and confidence over the break.
            Dates, location, and pricing aren&apos;t finalized yet, so we&apos;re not
            publishing details until they&apos;re confirmed. You can join the
            interest list below and we&apos;ll reach out as soon as things are locked
            in.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Join the Interest List
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
            <p className="mt-3 text-sm text-navy/55">
              We&apos;ll email you as soon as dates, location, and registration are
              confirmed.
            </p>
          </div>
          <SawyerEmbed
            src={process.env.SAWYER_SUMMER_EMBED_URL}
            title="LA Sports World summer camp interest list"
            fallbackMessage="Online interest-list signup is unavailable right now. Contact us and we'll add your family manually."
          />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Looking for something sooner?
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {otherOptions.map((opt) => (
              <Link
                key={opt.title}
                href={opt.href}
                className="group rounded-2xl border border-navy/8 bg-cream p-6 transition hover:border-gold/40 hover:shadow-sm"
              >
                <div className="text-base font-extrabold text-navy">
                  {opt.title}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/55">
                  {opt.desc}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-navy transition group-hover:text-gold">
                  Join the Interest List <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
