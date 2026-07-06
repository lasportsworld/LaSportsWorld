import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft, ArrowRight, Building2, CalendarDays, Instagram, School, Users } from "lucide-react";

const organizationServices = [
  { title: "School programs", icon: School },
  { title: "Camp activities", icon: CalendarDays },
  { title: "Sports clinics", icon: Users },
  { title: "Event activities", icon: Building2 },
  { title: "Soft play setups", icon: Users },
  { title: "Ongoing partnerships", icon: CalendarDays },
];

export default function OrganizationsPage() {
  return (
    <div className="bg-cream text-navy">
      <section className="relative isolate overflow-hidden bg-navy pt-28 text-white sm:pt-32">
        <Image
          src="/images/hero-kids-group.jpg"
          alt="Group sports activities with LA Sports World"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/80 to-navy" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-white/75 transition hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Parent / individual inquiry
          </Link>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-gold">
              Organization Inquiries
            </p>
            <h1 className="font-condensed text-5xl font-extrabold uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Programs & Activities for Schools, Camps, and Organizations
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/85">
              Bring LA Sports World to your school, camp, event, business, nonprofit, or community
              program.
            </p>
            <a
              href="#organization-form"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-gold-light"
            >
              Request Organization Info <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-gold">
            Group Programs
          </p>
          <h2 className="mt-2 font-condensed text-4xl font-extrabold uppercase sm:text-5xl">
            Flexible activities for your group
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {organizationServices.map(({ title, icon: Icon }) => {
            return (
              <div key={title} className="rounded-lg border border-navy/10 bg-white p-6 shadow-sm">
                <Icon className="mb-4 h-7 w-7 text-gold" />
                <h3 className="font-condensed text-2xl font-bold uppercase">{title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <section id="organization-form" className="bg-navy px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-gold">
              Tell us what you are planning
            </p>
            <h2 className="mt-2 font-condensed text-4xl font-extrabold uppercase sm:text-5xl">
              Organization / Business Inquiry
            </h2>
            <p className="mt-4 text-base leading-7 text-white/75">
              Share the event, program, age group, location, and timing you have in mind, and we
              will follow up with the right next step.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white p-3 text-navy shadow-2xl sm:p-5">
            <div
              className="pipedriveWebForms"
              data-pd-webforms="https://webforms.pipedrive.com/f/ctvPPCETdHiUDx8lpCntp6bkeHLKe8VLkJ6L1brOmpFBrRfjz3OvC08Ow4DEQXSHEn"
            />
            <Script src="https://webforms.pipedrive.com/f/loader" strategy="lazyOnload" />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-lg bg-white p-7 shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-condensed text-3xl font-extrabold uppercase">
              Looking for a birthday party, private coaching, or small group?
            </h2>
            <p className="mt-2 text-navy/65">Use the parent and individual inquiry form instead.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-navy-light"
            >
              Go Back Home <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://www.instagram.com/lasportsworld/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy/15 px-6 py-3 font-bold text-navy transition hover:border-gold hover:text-gold"
            >
              <Instagram className="h-5 w-5" />
              @lasportsworld
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
