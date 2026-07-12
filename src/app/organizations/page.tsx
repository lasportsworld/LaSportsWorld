import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight } from "lucide-react";

const organizationServices = [
  "School programs",
  "Camp activities",
  "Sports clinics",
  "Event activities",
  "Soft play setups",
  "Ongoing partnerships",
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
    </svg>
  );
}

export default function OrganizationsPage() {
  return (
    <div className="h-screen overflow-hidden bg-navy text-white">
      <section className="relative isolate flex h-full flex-col overflow-hidden">
        <Image
          src="/images/hero-kids-group.jpg"
          alt="Group sports activities with LA Sports World"
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />

        <main className="relative mx-auto grid w-full max-w-7xl flex-1 gap-5 overflow-hidden px-4 py-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-6">
          <div className="flex min-h-0 flex-col justify-center">
            <p className="mb-3 inline-flex w-fit rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold">
              Website under development
            </p>
            <h1 className="font-condensed text-3xl font-extrabold uppercase leading-[0.95] text-white sm:text-4xl lg:text-5xl">
              Organization programs while our full site is being built
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              Tell us about your school, camp, business, nonprofit, community event, or organization
              program. We will follow up with the right options.
            </p>

            <div className="mt-4 rounded-xl border-2 border-gold/70 bg-white/10 p-4 shadow-xl shadow-black/20">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold">
                Parents and families
              </p>
              <h2 className="mt-1 font-condensed text-2xl font-extrabold uppercase leading-none text-white sm:text-3xl">
                Looking for a party, coaching, or small group?
              </h2>
              <p className="mt-2 text-sm font-semibold leading-5 text-white/75">
                Use the parent / individual inquiry page instead so we route you correctly.
              </p>
              <Link
                href="/"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-4 py-3 text-xs font-extrabold uppercase tracking-wide text-navy transition hover:bg-gold-light sm:w-auto"
              >
                Go to Parent Form <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {organizationServices.map((service) => (
                <div key={service} className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold text-white/85 sm:text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div id="organization-form" className="flex min-h-0 items-center">
            <div className="max-h-full w-full overflow-auto rounded-2xl border border-white/15 bg-white p-4 text-navy shadow-2xl sm:p-5 lg:p-6">
              <div className="mb-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">
                  Organization / Business Inquiry
                </p>
                <h2 className="mt-1 font-condensed text-3xl font-extrabold uppercase sm:text-4xl">
                  Start Here
                </h2>
                <p className="mt-1 text-sm leading-5 text-navy/70">
                  For schools, camps, businesses, nonprofits, community events, and organization programs, fill out this form.
                </p>
              </div>
              <div
                className="pipedriveWebForms"
                data-pd-webforms="https://webforms.pipedrive.com/f/ctvPPCETdHiUDx8lpCntp6bkeHLKe8VLkJ6L1brOmpFBrRfjz3OvC08Ow4DEQXSHEn"
              />
              <Script src="https://webforms.pipedrive.com/f/loader" strategy="lazyOnload" />
            </div>
          </div>
        </main>

        <footer className="relative shrink-0 border-t border-white/10 px-4 py-3 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-center">
            <a
              href="https://www.instagram.com/lasportsworld/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-white/65 transition hover:text-gold"
            >
              <InstagramIcon className="h-5 w-5" />
              @lasportsworld
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}
