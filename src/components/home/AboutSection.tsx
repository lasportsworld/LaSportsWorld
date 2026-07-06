import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Medal, ShieldCheck, Users } from "lucide-react";

const features = [
  { Icon: Users, label: "Experienced Coaches" },
  { Icon: Medal, label: "Positive Environment" },
  { Icon: Heart, label: "Focus on Character" },
  { Icon: ShieldCheck, label: "Safety Always First" },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      <div
        aria-hidden
        className="absolute right-0 top-8 h-40 w-40 opacity-[.08]"
        style={{
          backgroundImage: "radial-gradient(#c4852a 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1fr_.55fr] lg:gap-14 lg:px-8">
        <div className="relative hidden h-[360px] lg:block">
          <div className="absolute left-6 top-0 h-56 w-80 rotate-[-2deg] overflow-hidden rounded border-[7px] border-white shadow-xl">
            <Image
              src="/images/lasw_slideshow_001.jpg"
              alt="Coach talking with campers"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-4 right-2 h-44 w-56 rotate-[3deg] overflow-hidden rounded border-[7px] border-white shadow-xl">
            <Image
              src="/images/lasw_slideshow_003.jpg"
              alt="Coach leading sports drills"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
            About LA Sports World
          </p>
          <h2
            className="font-condensed text-navy font-extrabold uppercase leading-[.95]"
            style={{ fontSize: "clamp(2.4rem, 4.8vw, 4rem)" }}
          >
            Building Strong Kids.
            <br />
            Building Bright Futures.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-navy/65">
            At LA Sports World, we combine skill-building, character
            development, and good old-fashioned fun in a safe and supportive
            environment. Our programs are led by experienced coaches who care
            about every child&apos;s growth on and off the field.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-lg bg-navy px-7 py-3.5 text-xs font-extrabold uppercase tracking-wide text-white shadow-lg shadow-navy/15 transition hover:bg-navy-light"
            >
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/registration"
              className="inline-flex items-center gap-3 rounded-lg bg-gold px-7 py-3.5 text-xs font-extrabold uppercase tracking-wide text-white shadow-lg shadow-gold/20 transition hover:bg-gold-dark"
            >
              Book Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-0 divide-y divide-navy/15 border-y border-navy/15 lg:border-l lg:border-y-0 lg:pl-8">
          {features.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-4 py-5">
              <Icon className="h-9 w-9 shrink-0 text-gold" strokeWidth={1.5} />
              <p className="text-sm font-extrabold leading-tight text-navy">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
