import Link from "next/link";
import { ArrowRight, ClipboardList, ShieldCheck, Users, Wrench } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School PE Programs | LA Sports World",
  description:
    "Structured physical education programming delivered directly at your school. Choose recurring, supplemental, or temporary coverage.",
};

const situations = [
  "Recurring PE instruction",
  "Supplemental instruction alongside existing staff",
  "Temporary coverage during a staffing gap",
  "Specialized activity blocks",
];

const programDesign = [
  "Age & grade range",
  "Class size",
  "Frequency & schedule",
  "Curriculum goals",
  "Available space",
  "Equipment",
  "Staffing",
];

const delivery = [
  { icon: ClipboardList, title: "Planning", desc: "We plan the program around your school's needs and constraints." },
  { icon: Users, title: "School coordination", desc: "We work directly with your team to fit your calendar and space." },
  { icon: Wrench, title: "Equipment & coaches", desc: "We bring the gear and assign the right coach for your students." },
  { icon: ShieldCheck, title: "Communication", desc: "Clear updates throughout the program." },
];

export default function SchoolPEPage() {
  return (
    <>
      <PageHero
        title="School PE Programs"
        subtitle="Structured, high-quality physical education programming, delivered directly at your school."
        tag="Schools & Organizations"
        image="/images/kids-sports-3.jpg"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Where we can help
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {situations.map((s) => (
              <div
                key={s}
                className="rounded-xl border border-navy/8 bg-cream px-5 py-4 text-sm font-bold text-navy"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              Program design
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {programDesign.map((item) => (
              <span
                key={item}
                className="rounded-md bg-cream-dark px-4 py-2 text-sm font-semibold text-navy/75"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">
              How delivery works
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {delivery.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-navy/8 bg-cream p-6">
                <Icon className="mb-3 h-7 w-7 text-gold" />
                <div className="text-base font-extrabold text-navy">{title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/55">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <ShieldCheck className="mx-auto mb-4 h-9 w-9 text-gold" />
          <h2 className="font-condensed text-3xl font-extrabold uppercase text-white lg:text-4xl">
            Coaches your school can trust
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65">
            Every LA Sports World coach is Live Scanned and background checked before
            stepping in front of your students.
          </p>
          <Link
            href="/schools-organizations#organization-inquiry"
            className="button-gold mt-7"
          >
            Discuss a PE Program <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
