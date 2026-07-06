import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, AtSign, PartyPopper, Users, Zap } from "lucide-react";

const services = [
  {
    title: "Birthday Parties",
    text: "High-energy sports parties and activities built around your child and their friends.",
  },
  {
    title: "Private Coaching",
    text: "One-on-one training for basketball, soccer, football, baseball, volleyball, and more.",
  },
  {
    title: "Small Groups / Pods",
    text: "Parent-friendly group sessions for families who want consistent coaching together.",
  },
  {
    title: "Event Activities",
    text: "Sports, games, soft play, and active fun for community events and celebrations.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-cream text-navy">
      <section className="relative isolate overflow-hidden bg-navy pt-28 text-white sm:pt-32">
        <Image
          src="/images/hero-kids-camp.jpg"
          alt="Kids playing sports with LA Sports World"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/80 to-navy" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-gold">
              LA Sports World
            </p>
            <h1 className="font-condensed text-5xl font-extrabold uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Youth Sports, Parties & Programs in Los Angeles
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              LA Sports World brings fun, high-energy sports and activity experiences to families,
              schools, camps, and organizations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#request-info"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-gold-light"
              >
                Request Info <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/organizations"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:border-gold hover:text-gold"
              >
                School, Camp, Business, or Organization?
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-xl bg-white/10 p-5">
                <PartyPopper className="mb-3 h-7 w-7 text-gold" />
                <p className="font-condensed text-2xl font-bold uppercase">Parties</p>
                <p className="mt-1 text-sm text-white/70">Active birthdays and celebrations.</p>
              </div>
              <div className="rounded-xl bg-white/10 p-5">
                <Zap className="mb-3 h-7 w-7 text-gold" />
                <p className="font-condensed text-2xl font-bold uppercase">Coaching</p>
                <p className="mt-1 text-sm text-white/70">Private lessons and small groups.</p>
              </div>
              <div className="rounded-xl bg-white/10 p-5">
                <Users className="mb-3 h-7 w-7 text-gold" />
                <p className="font-condensed text-2xl font-bold uppercase">Programs</p>
                <p className="mt-1 text-sm text-white/70">Schools, camps, events, and pods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-gold">
            What We Offer
          </p>
          <h2 className="mt-2 font-condensed text-4xl font-extrabold uppercase sm:text-5xl">
            Sports and activities made easy for busy families
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-lg border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="font-condensed text-2xl font-bold uppercase text-navy">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-navy/70">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="request-info" className="bg-navy px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-gold">
              Request Info
            </p>
            <h2 className="mt-2 font-condensed text-4xl font-extrabold uppercase sm:text-5xl">
              Tell us what you are planning
            </h2>
            <p className="mt-4 text-base leading-7 text-white/75">
              Share a few details about your party, coaching request, small group, or activity
              idea, and we will get back to you.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white p-3 text-navy shadow-2xl sm:p-5">
            <div
              className="pipedriveWebForms"
              data-pd-webforms="https://webforms.pipedrive.com/f/6qhytWbE7SHcR13wuYTNhO18oktcwDKzBjz0iUMDHfBiIKkO4K3ZW1GxZfhOoBSkqT"
            />
            <Script src="https://webforms.pipedrive.com/f/loader" strategy="lazyOnload" />
          </div>
        </div>
      </section>

      <section className="bg-cream-dark px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-lg bg-white p-7 shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-condensed text-3xl font-extrabold uppercase sm:text-4xl">
              Planning something for a school, camp, business, or organization?
            </h2>
            <p className="mt-3 text-navy/70">
              We also partner with schools, camps, nonprofits, businesses, and community
              organizations.
            </p>
          </div>
          <Link
            href="/organizations"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-navy px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-navy-light"
          >
            Organization Inquiry <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <h2 className="font-condensed text-3xl font-extrabold uppercase">Follow the action</h2>
            <p className="mt-1 text-navy/65">See parties, programs, camps, and coaching moments.</p>
          </div>
          <a
            href="https://www.instagram.com/lasportsworld/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy/15 px-6 py-3 font-bold text-navy transition hover:border-gold hover:text-gold"
          >
            <AtSign className="h-5 w-5" />
            @lasportsworld
          </a>
        </div>
      </section>
    </div>
  );
}
