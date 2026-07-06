import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Leaf,
  ShieldCheck,
  Smile,
  Star,
  Users,
} from "lucide-react";

const reasons = [
  {
    Icon: ShieldCheck,
    label: "Safe & Secure",
    description: "Top-notch safety standards and background-checked staff.",
  },
  {
    Icon: Smile,
    label: "Built for Fun",
    description: "We make every day active, exciting, and memorable.",
  },
  {
    Icon: Users,
    label: "Experienced Staff",
    description: "Coaches who teach, mentor, and inspire kids.",
  },
  {
    Icon: Heart,
    label: "Positive Community",
    description: "A welcoming environment where every child belongs.",
  },
  {
    Icon: Star,
    label: "Confidence Boost",
    description: "Programs that build skills, self-esteem, and leadership.",
  },
  {
    Icon: Leaf,
    label: "Healthy Habits",
    description: "Encouraging active lifestyles for a brighter future.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#eef2e6] py-14">
      <div
        aria-hidden
        className="absolute right-0 bottom-5 h-36 w-48 opacity-[.12]"
        style={{
          backgroundImage: "radial-gradient(#c4852a 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 text-center">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
            Why Parents Choose Us
          </p>
          <h2 className="font-condensed text-navy text-4xl font-extrabold uppercase leading-none md:text-5xl">
            More Than Just Sports
          </h2>
        </div>

        <div className="grid gap-y-8 divide-navy/15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:divide-x">
          {reasons.map(({ Icon, label, description }) => (
            <div key={label} className="px-4 text-center">
              <Icon
                className="mx-auto mb-4 h-11 w-11 text-navy"
                strokeWidth={1.35}
              />
              <h3 className="text-xs font-extrabold uppercase tracking-wide text-navy">
                {label}
              </h3>
              <p className="mx-auto mt-2 max-w-[10rem] text-xs leading-5 text-navy/65">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-semibold text-navy/65">
            Ready to give your child the best sports experience in LA?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/registration"
              className="inline-flex items-center gap-3 rounded-lg bg-gold px-8 py-4 text-xs font-extrabold uppercase tracking-wide text-white shadow-xl shadow-gold/25 transition hover:bg-gold-dark"
            >
              Book A Program <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-3 rounded-lg border-2 border-navy px-8 py-4 text-xs font-extrabold uppercase tracking-wide text-navy transition hover:bg-navy hover:text-white"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
