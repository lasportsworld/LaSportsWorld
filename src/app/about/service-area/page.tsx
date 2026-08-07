import Link from "next/link";
import { ArrowRight, Home, MapPin, School, Trees } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Area | LA Sports World",
  description:
    "LA Sports World serves Los Angeles, with a primary focus on the Westside and nearby communities.",
};

const coreNeighborhoods = [
  "Beverly Hills",
  "Beverlywood",
  "Culver City",
  "Westwood",
  "La Cienega",
  "La Brea",
  "Brentwood",
  "Bel Air",
];

const whereWeWork = [
  { icon: Home, title: "Homes & backyards" },
  { icon: Trees, title: "Parks" },
  { icon: School, title: "Schools & synagogues" },
  { icon: MapPin, title: "Camps & community spaces" },
];

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        title="Service Area"
        subtitle="We serve Los Angeles, with a primary focus on the Westside and nearby communities."
        tag="About LASW"
        image="/images/hero-la-bg.jpg"
        imageAlt="Young children lining up with an LA Sports World coach in a gym"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Core neighborhoods
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {coreNeighborhoods.map((n) => (
              <span
                key={n}
                className="rounded-md bg-navy/[.055] px-4 py-2.5 text-sm font-semibold text-navy/72"
              >
                {n}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-navy/55">
            Don&apos;t see your neighborhood? Broader Los Angeles service may still
            be available depending on the program, schedule, travel, and cost.
            just ask.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Where we work
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whereWeWork.map(({ icon: Icon, title }) => (
              <div key={title} className="rounded-2xl border border-navy/8 bg-white p-6 text-center">
                <Icon className="mx-auto mb-3 h-7 w-7 text-gold" />
                <div className="text-sm font-extrabold text-navy">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-condensed text-3xl font-extrabold uppercase text-white lg:text-4xl">
            Check your location
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65">
            Tell us your city or ZIP code and what you&apos;re looking for. We&apos;ll
            let you know what&apos;s possible.
          </p>
          <Link
            href="/contact?service=general"
            className="button-gold mt-7"
          >
            Check Your Location <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
