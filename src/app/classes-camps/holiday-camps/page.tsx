import Link from "next/link";
import { Backpack, Clock, ShieldCheck, Users } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SawyerEmbed from "@/components/shared/SawyerEmbed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holiday Camps | LA Sports World",
  description:
    "Limited-time day camps around school breaks and holidays — active, structured coverage when school is out.",
};

const expectations = [
  {
    icon: Clock,
    title: "Full days, well structured",
    desc: "A mix of sports, games, and activities that keep kids active and engaged all day.",
  },
  {
    icon: Users,
    title: "Coached in groups",
    desc: "Campers are grouped by age so activities stay appropriate and fun for everyone.",
  },
  {
    icon: Backpack,
    title: "Equipment provided",
    desc: "We bring everything needed — just send your camper ready to move.",
  },
  {
    icon: ShieldCheck,
    title: "Supervised throughout",
    desc: "Coaches are with campers for the full day, from drop-off to pickup.",
  },
];

export default function HolidayCampsPage() {
  return (
    <>
      <PageHero
        title="Holiday Camps"
        subtitle="Active, structured day camps around school breaks and holidays."
        tag="Classes & Camps"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-navy/65">
            When school is closed for a holiday or break, LA Sports World keeps kids
            active with full days of sports, games, and structured fun. Camps run for
            limited windows around specific dates — browse what&apos;s currently
            scheduled below.
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
              Upcoming Holiday Camps
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <SawyerEmbed
            src={process.env.SAWYER_HOLIDAY_EMBED_URL || process.env.SAWYER_REGISTER_EMBED_URL}
            title="LA Sports World holiday camp registration"
            fallbackMessage="No holiday camp dates are open for registration right now. Contact us to hear about the next one first."
          />
        </div>
      </section>

      <section className="bg-cream py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-navy/55">
            Questions about drop-off, pickup, or what to bring?{" "}
            <Link
              href="/contact"
              className="font-bold text-navy hover:text-gold hover:underline"
            >
              Contact us
            </Link>{" "}
            and we&apos;ll fill you in.
          </p>
        </div>
      </section>
    </>
  );
}
