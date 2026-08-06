import Link from "next/link";
import { ArrowRight } from "lucide-react";

const recoveryLinks = [
  ["Home", "/"],
  ["Coaching", "/coaching"],
  ["Parties & Events", "/parties"],
  ["Classes & Camps", "/classes-camps"],
  ["Schools & Organizations", "/schools-organizations"],
] as const;

export default function NotFound() {
  return (
    <section className="flex min-h-[72vh] items-center bg-cream px-4 pb-20 pt-32 sm:px-6">
      <div className="mx-auto w-full max-w-4xl text-center">
        <p className="text-xs font-extrabold uppercase tracking-[.22em] text-gold">404</p>
        <h1 className="mt-4 font-condensed text-5xl font-extrabold uppercase leading-none text-navy sm:text-7xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-navy/65">
          The page may have moved. Choose a service below or return to the homepage.
        </p>
        <nav aria-label="Helpful pages" className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
          {recoveryLinks.map(([label, href], index) => (
            <Link
              key={href}
              href={href}
              className={index === 0 ? "button-gold justify-center sm:col-span-2" : "button-outline justify-center"}
            >
              {label} <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
