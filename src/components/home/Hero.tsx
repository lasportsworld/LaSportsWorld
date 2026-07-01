import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, ShieldCheck, Sparkles, Star, Users } from "lucide-react";

const trustBadges = [
  { Icon: Users, label: "Ages 4-16", sub: "Programs for every stage of growth" },
  { Icon: ShieldCheck, label: "Safe & Supervised", sub: "Trained staff and premier facilities" },
  { Icon: Star, label: "Built for Fun", sub: "Active, engaging, confidence-building" },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-cream pt-20 lg:min-h-[780px]">
      <Image
        src="/images/hero-soccer-2.jpg"
        alt="Kids playing soccer at LA Sports World"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#faf8f2_0%,rgba(250,248,242,.96)_33%,rgba(250,248,242,.65)_58%,rgba(250,248,242,.16)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-36 bg-[linear-gradient(180deg,rgba(28,51,37,.28),transparent)]" />
      <div
        aria-hidden
        className="absolute left-0 top-16 h-72 w-72 opacity-[.08]"
        style={{
          backgroundImage: "repeating-radial-gradient(circle at center, #1c3325 0 1px, transparent 1px 12px)",
        }}
      />
      <div
        aria-hidden
        className="absolute left-0 top-20 h-80 w-[44rem] opacity-[.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-20 40c45-28 88-28 128 0s83 28 128 0M-20 82c45-28 88-28 128 0s83 28 128 0M-20 124c45-28 88-28 128 0s83 28 128 0' fill='none' stroke='%231c3325' stroke-width='1.4'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto grid min-h-[640px] w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-gold">
            Play. Learn. Grow.
          </p>
          <h1
            className="font-condensed text-navy font-extrabold uppercase leading-[.9]"
            style={{ fontSize: "clamp(3rem, 6vw, 5.8rem)" }}
          >
            Confidence
            <br />
            Through Play.
            <br />
            Friends For Life.
          </h1>
          <p className="mt-6 max-w-[32rem] text-base leading-7 text-navy/70 md:text-lg">
            Fun, structured sports and enrichment programs that help kids grow, learn, and thrive in a safe,
            high-energy environment.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center gap-3 rounded-lg bg-navy px-7 py-4 text-xs font-extrabold uppercase tracking-wide text-white shadow-xl shadow-navy/20 transition hover:bg-navy-light"
            >
              Explore Programs <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/registration"
              className="inline-flex items-center gap-3 rounded-lg border border-navy/25 bg-white/65 px-7 py-4 text-xs font-extrabold uppercase tracking-wide text-navy backdrop-blur transition hover:border-gold hover:text-gold"
            >
              Book A Camp <CalendarDays className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {trustBadges.map(({ Icon, label, sub }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="mt-1 h-7 w-7 shrink-0 text-navy/55" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-extrabold text-navy">{label}</p>
                  <p className="mt-1 text-xs leading-5 text-navy/55">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden h-[590px] lg:block">
          <div className="absolute left-6 top-0 h-[520px] w-[360px] overflow-hidden rounded-[24px] border-[7px] border-white shadow-2xl shadow-navy/25">
            <Image
              src="/images/lasw_slideshow_005.jpg"
              alt="Young athlete running at camp"
              fill
              priority
              sizes="360px"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute left-2 top-6 h-[520px] w-[360px] rounded-[24px] border-2 border-navy/20" />
          <div className="absolute right-2 top-10 rotate-[7deg] bg-white p-3 pb-10 shadow-2xl shadow-navy/25">
            <div className="relative h-40 w-56 overflow-hidden">
              <Image src="/images/lasw_slideshow_008.jpg" alt="Kids smiling with a basketball" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute right-8 top-64 rotate-[-3deg] bg-white p-3 pb-10 shadow-2xl shadow-navy/20">
            <div className="relative h-40 w-52 overflow-hidden">
              <Image src="/images/lasw_slideshow_004.jpg" alt="Kids playing soccer at camp" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute bottom-16 right-0 rotate-[-7deg] text-center font-condensed text-2xl font-bold leading-none text-gold">
            <Sparkles className="mx-auto mb-2 h-5 w-5" />
            More than
            <br />
            just sports
          </div>
          <div className="absolute bottom-2 right-24 grid h-24 w-24 place-items-center rounded-full border-2 border-navy bg-cream/80 text-center font-condensed text-[11px] font-extrabold uppercase tracking-[.22em] text-navy shadow-xl">
            Play
            <br />
            Learn
            <br />
            Grow
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[-1px] h-16 bg-white [clip-path:polygon(0_48%,8%_58%,19%_44%,30%_56%,43%_45%,56%_58%,70%_46%,84%_58%,100%_44%,100%_100%,0_100%)]" />
    </section>
  );
}
