import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative z-10 bg-cream px-4 pb-10 pt-4 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
      <div className="mx-auto grid max-w-7xl items-center gap-6 overflow-hidden rounded-2xl border border-gold/35 bg-navy px-6 py-7 shadow-2xl shadow-navy/20 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
        <Image
          src="/images/logo-white.png"
          alt="LA Sports World"
          width={128}
          height={80}
          className="hidden h-20 w-auto object-contain opacity-65 lg:block"
        />
        <div>
          <h2 className="font-condensed text-4xl font-extrabold uppercase leading-none text-white md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mt-2 text-sm font-semibold text-white/70 md:text-base">Join the LA Sports World family today.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/registration"
            className="inline-flex items-center gap-3 rounded-lg bg-gold px-8 py-3.5 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-gold-light"
          >
            Book Now <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg border border-white/55 px-8 py-3.5 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-white hover:text-navy"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
