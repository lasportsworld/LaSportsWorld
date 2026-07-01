import { Heart, Leaf, ShieldCheck, Smile, Star, Users } from "lucide-react";

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
    <section className="relative overflow-hidden bg-white py-14">
      <div className="absolute inset-x-0 top-4 bottom-4 bg-[#eef2e6]" />
      <div
        aria-hidden
        className="absolute left-0 top-10 h-28 w-40 opacity-[.16]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='150' height='120' viewBox='0 0 150 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%231c3325' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M12 25l20 18m0-18L12 43M55 18c18 4 26 14 24 30M92 75l16 16m0-16L92 91M34 88c20-18 42-18 66 0'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div
        aria-hidden
        className="absolute right-0 bottom-5 h-36 w-48 opacity-[.12]"
        style={{ backgroundImage: "radial-gradient(#c4852a 1.5px, transparent 1.5px)", backgroundSize: "14px 14px" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 text-center">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-gold">Why Parents Choose Us</p>
          <h2 className="font-condensed text-navy text-4xl font-extrabold uppercase leading-none md:text-5xl">
            More Than Just Sports
          </h2>
        </div>

        <div className="grid gap-y-8 divide-navy/15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:divide-x">
          {reasons.map(({ Icon, label, description }) => (
            <div key={label} className="px-4 text-center">
              <Icon className="mx-auto mb-4 h-11 w-11 text-navy" strokeWidth={1.35} />
              <h3 className="text-xs font-extrabold uppercase tracking-wide text-navy">{label}</h3>
              <p className="mx-auto mt-2 max-w-[10rem] text-xs leading-5 text-navy/65">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
