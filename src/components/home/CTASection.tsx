import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gold">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-navy" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-navy" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-condensed font-extrabold text-navy text-5xl md:text-7xl uppercase leading-none mb-4">
          Ready to Play?
        </h2>
        <p className="text-navy/70 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Join hundreds of LA youth athletes. Register for a camp, clinic, or private lesson today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/registration"
            className="bg-navy text-white font-bold uppercase tracking-wide px-10 py-4 rounded-full hover:bg-navy-light transition-colors text-base"
          >
            Register Now
          </Link>
          <Link
            href="/contact"
            className="border-2 border-navy text-navy font-bold uppercase tracking-wide px-10 py-4 rounded-full hover:bg-navy/10 transition-colors text-base"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
