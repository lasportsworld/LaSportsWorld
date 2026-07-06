import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft, ArrowRight, AtSign, Building2, CalendarDays, School, Users } from "lucide-react";

const organizationServices = [
  "School programs",
  "Camp activities",
  "Sports clinics",
  "Event activities",
  "Soft play setups",
  "Ongoing partnerships",
];

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

        <div className="relative mx-auto grid min-h-screen max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-12">
          <div className="flex flex-col justify-center">
            <Link
              href="/"
              className="mb-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-white/75 transition hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              Parent / individual inquiry
            </Link>
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

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {organizationServices.map((service) => (
                <div key={service} className="rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white/85">
                  {service}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:border-gold hover:text-gold"
              >
                Birthday, coaching, or small group? <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://www.instagram.com/lasportsworld/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:border-gold hover:text-gold"
              >
                <AtSign className="h-4 w-4" />
                @lasportsworld
              </a>
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
                  Fill out this quick form and we will follow up about your group, event, or program.
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
    </div>
  );
}
