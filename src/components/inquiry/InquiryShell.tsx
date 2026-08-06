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
    <section className="relative min-h-screen overflow-hidden bg-navy pb-16 pt-24 sm:pt-28 lg:pb-24">
      <div className="brand-grid absolute inset-0 opacity-[.12]" />
      <div className="absolute -left-48 bottom-16 h-96 w-96 rounded-full border border-white/8" />
      <div className="absolute -left-28 bottom-36 h-56 w-56 rounded-full border border-gold/20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href={backHref} className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.15em] text-white/55 transition hover:text-gold">
          <ArrowLeft className="h-4 w-4" /> {backLabel}
        </Link>

        <div className="mt-7 grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start lg:gap-12 xl:gap-16">
          <aside className="text-white lg:sticky lg:top-28 lg:pt-4">
            <p className="text-xs font-extrabold uppercase tracking-[.23em] text-gold">{eyebrow}</p>
            <h1 className="mt-4 max-w-md font-condensed text-4xl font-extrabold uppercase leading-[.9] sm:text-6xl lg:text-[4.4rem] xl:text-7xl">{title}</h1>
            <p className="mt-5 max-w-md text-base leading-7 text-white/75">{description}</p>
            <ul className="mt-7 hidden gap-2.5 sm:grid sm:grid-cols-2 lg:max-w-md lg:grid-cols-1">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 border-t border-white/12 py-3 text-sm font-semibold text-white/85">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-navy"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 hidden max-w-md border-l-2 border-gold pl-4 text-xs font-semibold leading-5 text-white/58 sm:block">No commitment. Just enough context for a thoughtful recommendation.</p>
          </aside>

          <div className="rounded-[2rem] border border-white/15 bg-white p-4 shadow-2xl shadow-black/25 sm:p-7 lg:p-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
