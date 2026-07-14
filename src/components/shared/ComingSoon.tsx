import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description?: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-4 py-24 text-center">
      <p className="mb-4 font-condensed text-sm font-extrabold uppercase tracking-[0.22em] text-gold">
        Coming Soon
      </p>
      <h1 className="font-condensed text-5xl font-extrabold uppercase leading-none text-navy sm:text-6xl lg:text-7xl">
        {title}
      </h1>
      {description && (
        <p className="mt-5 max-w-md text-base leading-7 text-navy/60">{description}</p>
      )}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-gold-dark"
        >
          Get in Touch <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/site-preview"
          className="inline-flex items-center gap-2 rounded-lg border border-navy/20 px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-navy/70 transition hover:border-navy hover:text-navy"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
      </div>
    </section>
  );
}
