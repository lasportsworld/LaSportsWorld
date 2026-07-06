import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft, ArrowRight, Building2, CalendarDays, School, Users } from "lucide-react";

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
    <div className="min-h-screen bg-cream text-navy">
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <Image
          src="/images/hero-kids-group.jpg"
          alt="Group sports activities with LA Sports World"
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-12">
          <div className="flex flex-col justify-center">
            <p className="mb-4 inline-flex w-fit rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
              Website under development
            </p>
            <h1 className="font-condensed text-4xl font-extrabold uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl">
              Organization programs while our full site is being built
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              Tell us about your school, camp, business, nonprofit, community event, or organization
              program. We will follow up with the right options.
            </p>

            <div className="mt-7 rounded-xl border-2 border-gold/70 bg-white/10 p-5 shadow-xl shadow-black/20">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-gold">
                Parents and families
              </p>
              <h2 className="mt-2 font-condensed text-3xl font-extrabold uppercase leading-none text-white sm:text-4xl">
                Looking for a party, coaching, or small group?
              </h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-white/75">
                Use the parent / individual inquiry page instead so we route you correctly.
              </p>
              <Link
                href="/"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-5 py-4 text-sm font-extrabold uppercase tracking-wide text-navy transition hover:bg-gold-light sm:w-auto"
              >
                Go to Parent Form <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {organizationServices.map((service) => (
                <div key={service} className="rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white/85">
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div id="organization-form" className="flex items-center">
            <div className="w-full rounded-2xl border border-white/15 bg-white p-4 text-navy shadow-2xl sm:p-6 lg:p-7">
              <div className="mb-5">
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-gold">
                  Organization / Business Inquiry
                </p>
                <h2 className="mt-2 font-condensed text-4xl font-extrabold uppercase sm:text-5xl">
                  Start Here
                </h2>
                <p className="mt-2 text-sm leading-6 text-navy/70">
                  For schools, camps, businesses, nonprofits, community events, and organization
                  programs, fill out this form and we will follow up.
                </p>
              </div>
              <div
                className="pipedriveWebForms"
                data-pd-webforms="https://webforms.pipedrive.com/f/ctvPPCETdHiUDx8lpCntp6bkeHLKe8VLkJ6L1brOmpFBrRfjz3OvC08Ow4DEQXSHEn"
              />
              <Script src="https://webforms.pipedrive.com/f/loader" strategy="lazyOnload" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-4">
          <div className="rounded-lg bg-white p-5 shadow-sm">
            <School className="mb-3 h-7 w-7 text-gold" />
            <h3 className="font-condensed text-2xl font-bold uppercase">Schools</h3>
          </div>
          <div className="rounded-lg bg-white p-5 shadow-sm">
            <CalendarDays className="mb-3 h-7 w-7 text-gold" />
            <h3 className="font-condensed text-2xl font-bold uppercase">Camps</h3>
          </div>
          <div className="rounded-lg bg-white p-5 shadow-sm">
            <Building2 className="mb-3 h-7 w-7 text-gold" />
            <h3 className="font-condensed text-2xl font-bold uppercase">Events</h3>
          </div>
          <div className="rounded-lg bg-white p-5 shadow-sm">
            <Users className="mb-3 h-7 w-7 text-gold" />
            <h3 className="font-condensed text-2xl font-bold uppercase">Groups</h3>
          </div>
        </div>
      </section>

      <footer className="border-t border-navy/10 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-center">
          <a
            href="https://www.instagram.com/lasportsworld/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy/65 transition hover:text-gold"
          >
            <InstagramIcon className="h-5 w-5" />
            @lasportsworld
          </a>
        </div>
      </footer>
    </div>
  );
}
