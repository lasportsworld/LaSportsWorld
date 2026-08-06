import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import type { ReactNode } from "react";

export default function InquiryShell({
  eyebrow,
  title,
  description,
  backHref,
  backLabel,
  highlights,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  backHref: string;
  backLabel: string;
  highlights: string[];
  children: ReactNode;
}) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-cream pb-20 pt-28 sm:pt-32 lg:pb-28">
      <div className="absolute inset-x-0 top-0 h-[31rem] bg-navy" />
      <div className="brand-grid absolute inset-x-0 top-0 h-[31rem] opacity-[.12]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href={backHref} className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.15em] text-white/55 transition hover:text-gold">
          <ArrowLeft className="h-4 w-4" /> {backLabel}
        </Link>

        <div className="mt-9 grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:gap-16">
          <aside className="text-white lg:sticky lg:top-28">
            <p className="text-xs font-extrabold uppercase tracking-[.23em] text-gold">{eyebrow}</p>
            <h1 className="mt-4 max-w-xl font-condensed text-5xl font-extrabold uppercase leading-[.9] sm:text-6xl lg:text-7xl">{title}</h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/65">{description}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-white/72">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-navy"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          <div className="rounded-[2rem] border border-navy/8 bg-white p-5 shadow-2xl shadow-navy/15 sm:p-8 lg:p-10">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
