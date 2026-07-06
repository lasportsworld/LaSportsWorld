import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, CalendarDays, ShieldCheck, Star, Users } from "lucide-react";

const trustBadges = [
  { Icon: Users, label: "Ages 6mo–14", sub: "Programs for every stage of growth" },
  { Icon: ShieldCheck, label: "Safe & Supervised", sub: "Trained staff and premier facilities" },
  { Icon: Star, label: "Built for Fun", sub: "Active, engaging, confidence-building" },
];

function HandUnderline() {
  return (
    <span
      aria-hidden
      className="absolute bottom-0 left-0 block w-full leading-none pointer-events-none"
    >
      <svg
        viewBox="0 0 400 14"
        preserveAspectRatio="none"
        height="9"
        className="w-full"
        fill="none"
      >
        <path
          d="M3 9 C70 5, 150 13, 230 8 C290 4, 350 11, 397 8"
          stroke="#C4852A"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate min-h-[620px] overflow-hidden pt-20 sm:min-h-[700px] lg:min-h-[780px]">

      {/* Full-bleed background photo */}
      <Image
        src="/images/hero-soccer-2.jpg"
        alt="Kids playing soccer at LA Sports World"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />

      {/* Dark green gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(28,51,37,0.78)_0%,rgba(28,51,37,0.55)_45%,rgba(28,51,37,0.18)_100%)]" />

      {/* Top darkening for navbar contrast */}
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(28,51,37,.42),transparent)]" />

      {/* Wind/wave pattern — white stroke visible over photo */}
      <div
        aria-hidden
        className="absolute left-0 top-12 h-full w-full opacity-[.15] lg:w-[58rem]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-20 45c50-32 100-32 145 0s95 32 145 0M-20 90c50-32 100-32 145 0s95 32 145 0M-20 135c50-32 100-32 145 0s95 32 145 0M-20 180c50-32 100-32 145 0s95 32 145 0' fill='none' stroke='%23ffffff' stroke-width='1.8'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1fr_.9fr] lg:px-8 lg:py-16">

        {/* LEFT: Frosted cream card */}
        <div className="w-full max-w-2xl rounded-2xl border border-white/40 bg-cream/90 px-5 py-6 shadow-2xl shadow-navy/25 backdrop-blur-sm sm:px-7 sm:py-7 lg:max-w-[520px] lg:px-8 lg:py-8">

          <p className="mb-3 font-condensed text-sm font-extrabold uppercase tracking-[0.2em] text-gold sm:mb-4">
            We Bring the Action.
          </p>

          {/* Headline — underline only "Confidence" and "Friends For Life." */}
          <h1
            className="font-condensed font-extrabold uppercase text-navy"
            style={{ fontSize: "clamp(2rem, 3.2vw, 3.4rem)", lineHeight: "1.08" }}
          >
            {/* Underlined */}
            <span className="block pb-4">
              <span className="relative inline-block pb-3">
                Confidence
                <HandUnderline />
              </span>
            </span>

            {/* Plain */}
            <span className="block pb-4">
              Through Play.
            </span>

            {/* Underlined */}
            <span className="block pb-4">
              <span className="relative inline-block pb-3">
                Friends For Life.
                <HandUnderline />
              </span>
            </span>
          </h1>

          <p className="mt-2 max-w-[30rem] text-sm leading-6 text-navy/70 sm:text-base sm:leading-7">
            Fun, structured sports and enrichment programs that help kids grow,
            learn, and thrive in a safe, high-energy environment.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 sm:mt-7 sm:gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-white shadow-lg transition hover:bg-gold-dark sm:gap-3 sm:px-7 sm:py-4"
            >
              Explore Programs <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/registration"
              className="inline-flex items-center gap-2 rounded-lg border border-navy/25 bg-white/65 px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-navy backdrop-blur transition hover:border-gold hover:text-gold sm:gap-3 sm:px-7 sm:py-4"
            >
              Book A Camp <CalendarDays className="h-4 w-4" />
            </Link>
          </div>

          {/* Business / Org secondary CTA */}
          <div className="mt-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-xs font-semibold text-navy/65 transition hover:text-navy"
            >
              <Building2 className="h-3.5 w-3.5 shrink-0 text-gold" />
              <span>Business or Organization?</span>
              <span className="font-extrabold text-gold group-hover:underline underline-offset-2">
                Ask about on-site programs →
              </span>
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {trustBadges.map(({ Icon, label, sub }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-navy/55 sm:h-7 sm:w-7" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-extrabold text-navy">{label}</p>
                  <p className="mt-0.5 text-xs leading-5 text-navy/55">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: image collage — desktop only */}
        <div className="relative hidden h-[540px] lg:block xl:h-[590px]">

          {/* Large framed main image */}
          <div className="absolute left-6 top-0 h-[480px] w-[340px] overflow-hidden rounded-[24px] border-[7px] border-white shadow-2xl shadow-navy/25 xl:h-[520px] xl:w-[360px]">
            <Image
              src="/images/lasw_slideshow_005.jpg"
              alt="Young athlete running at camp"
              fill
              priority
              sizes="(min-width: 1280px) 360px, 340px"
              className="object-cover object-center"
            />
          </div>
          {/* Offset decorative border behind */}
          <div className="absolute left-2 top-6 h-[480px] w-[340px] rounded-[24px] border-2 border-white/40 xl:h-[520px] xl:w-[360px]" />

          {/* Polaroid */}
          <div className="absolute right-4 top-56 rotate-[-3deg] bg-white p-3 pb-10 shadow-2xl shadow-navy/20 xl:right-8 xl:top-64">
            <div className="relative h-36 w-48 overflow-hidden xl:h-40 xl:w-52">
              <Image
                src="/images/lasw_slideshow_004.jpg"
                alt="Kids playing soccer at camp"
                fill
                sizes="208px"
                className="object-cover"
              />
            </div>
          </div>

          {/* "More Than Just Sports" pill badge */}
          <div className="absolute bottom-20 right-0 z-10 rotate-[-5deg] xl:bottom-24">
            <div className="rounded-full border border-gold/50 bg-navy/80 px-4 py-2 shadow-xl backdrop-blur-sm xl:px-5 xl:py-2.5">
              <p className="font-condensed text-[12px] font-extrabold uppercase tracking-[0.18em] text-gold xl:text-[13px]">
                More Than Just Sports
              </p>
            </div>
          </div>

          {/* PLAY. LEARN. GROW. circular badge */}
          <div className="absolute bottom-2 right-20 grid h-[80px] w-[80px] place-items-center rounded-full border-[3px] border-white bg-gold shadow-2xl xl:right-24 xl:h-[88px] xl:w-[88px]">
            <p className="text-center font-condensed text-[10px] font-extrabold uppercase leading-snug tracking-[0.08em] text-white xl:text-[11px]">
              PLAY.<br />LEARN.<br />GROW.
            </p>
          </div>
        </div>
      </div>

      {/* Wavy bottom edge */}
      <div className="absolute inset-x-0 bottom-[-1px] h-12 bg-white [clip-path:polygon(0_48%,8%_58%,19%_44%,30%_56%,43%_45%,56%_58%,70%_46%,84%_58%,100%_44%,100%_100%,0_100%)] sm:h-16" />
    </section>
  );
}
