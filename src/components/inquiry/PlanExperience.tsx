"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, RotateCcw } from "lucide-react";
import { useState } from "react";
import CoachingInquiryForm from "./CoachingInquiryForm";
import OrganizationInquiryForm from "./OrganizationInquiryForm";
import PartyInquiryForm from "./PartyInquiryForm";
import type { PlanPath } from "./plan-options";
type ClarifiedPath = "family-coaching" | "family-party" | "organization" | "recurring-family" | "recurring-organization";

const choices: Array<{ value: PlanPath; label: string; description: string }> = [
  { value: "private-coaching", label: "Private coaching", description: "One-on-one support built around a child’s goals and pace." },
  { value: "group-coaching", label: "Group coaching", description: "A pod, friend group, or small group that wants to train together." },
  { value: "birthday-party", label: "Birthday party", description: "Coach-led sports, games, soft play, or activity stations." },
  { value: "school-after-school", label: "School / after-school program", description: "PE, enrichment, or recurring programming for students." },
  { value: "camp-programming", label: "Camp programming", description: "Sports blocks, activity rotations, or full-day support." },
  { value: "community-event", label: "Community / organization event", description: "A one-time event, clinic, or scalable activity zone." },
  { value: "custom-recurring", label: "Custom recurring activity", description: "A repeating experience that does not fit a standard program." },
  { value: "unsure", label: "Not sure", description: "Answer one quick question and we’ll point you in the right direction." },
];

function SelectionButton({ label, description, onClick }: { label: string; description: string; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="group flex min-h-28 w-full items-start justify-between gap-4 rounded-2xl border border-navy/10 bg-cream p-5 text-left transition hover:-translate-y-0.5 hover:border-gold hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
      <span>
        <span className="block text-base font-extrabold text-navy">{label}</span>
        <span className="mt-1.5 block text-sm leading-6 text-navy/50">{description}</span>
      </span>
      <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-gold transition group-hover:translate-x-1" />
    </button>
  );
}

function ScheduleHandoff() {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-gold/25 bg-gold/8 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
        <div>
          <p className="text-sm font-extrabold text-navy">Looking for an existing class or camp?</p>
          <p className="mt-1 text-xs leading-5 text-navy/50">Browse scheduled programs and register through our schedule instead of sending an inquiry.</p>
        </div>
      </div>
      <Link href="/register" className="button-outline shrink-0">View Schedule</Link>
    </div>
  );
}

export default function PlanExperience({ initialPath = "" }: { initialPath?: PlanPath | "" }) {
  const [path, setPath] = useState<PlanPath | "">(initialPath);
  const [clarifiedPath, setClarifiedPath] = useState<ClarifiedPath | "">("");
  const reset = () => { setPath(""); setClarifiedPath(""); };
  const selectedLabel = choices.find((choice) => choice.value === path)?.label;

  if (!path) {
    return (
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[.2em] text-gold">Choose a starting point</p>
        <h2 className="mt-3 font-condensed text-4xl font-extrabold uppercase leading-[.92] text-navy sm:text-5xl">What are you planning?</h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-navy/55">Pick the closest fit. You can still change the details inside the form.</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">{choices.map((choice) => <SelectionButton key={choice.value} label={choice.label} description={choice.description} onClick={() => setPath(choice.value)} />)}</div>
        <ScheduleHandoff />
      </div>
    );
  }

  if ((path === "unsure" || path === "custom-recurring") && !clarifiedPath) {
    const recurring = path === "custom-recurring";
    return (
      <div>
        <button type="button" onClick={reset} className="inline-flex min-h-11 items-center gap-2 text-xs font-extrabold uppercase tracking-[.13em] text-navy/50 hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"><RotateCcw className="h-4 w-4" /> Change plan</button>
        <p className="mt-6 text-xs font-extrabold uppercase tracking-[.2em] text-gold">One quick question</p>
        <h2 className="mt-3 font-condensed text-4xl font-extrabold uppercase leading-[.92] text-navy sm:text-5xl">{recurring ? "Who is the recurring activity for?" : "Who are you planning for?"}</h2>
        <p className="mt-4 text-sm leading-6 text-navy/55">This keeps the next questions relevant and short.</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {recurring ? (
            <>
              <SelectionButton label="A child, family, or small group" description="We’ll ask about the activity, group, goals, schedule, and location." onClick={() => setClarifiedPath("recurring-family")} />
              <SelectionButton label="A school, camp, or organization" description="We’ll ask about the audience, cadence, setting, and program goals." onClick={() => setClarifiedPath("recurring-organization")} />
            </>
          ) : (
            <>
              <SelectionButton label="A child or family — coaching" description="For skill-building, confidence, movement, or help choosing a coaching format." onClick={() => setClarifiedPath("family-coaching")} />
              <SelectionButton label="A child or family — party" description="For a birthday or custom celebration experience." onClick={() => setClarifiedPath("family-party")} />
              <SelectionButton label="A school, camp, or organization" description="For programs, enrichment, recurring activities, or events." onClick={() => setClarifiedPath("organization")} />
              <Link href="/contact?service=general" className="group flex min-h-28 items-start justify-between gap-4 rounded-2xl border border-navy/10 bg-cream p-5 text-left transition hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
                <span><span className="block text-base font-extrabold text-navy">Something else</span><span className="mt-1.5 block text-sm leading-6 text-navy/50">Use General Contact for a question that is not a service request.</span></span><ArrowRight className="mt-1 h-5 w-5 text-gold" />
              </Link>
            </>
          )}
        </div>
        <ScheduleHandoff />
      </div>
    );
  }

  const form = (() => {
    if (path === "private-coaching") return <CoachingInquiryForm key="private" initialFormat="private" entryContext="plan-private-coaching" sourcePage="/plan" />;
    if (path === "group-coaching") return <CoachingInquiryForm key="group" initialFormat="group" entryContext="plan-group-coaching" sourcePage="/plan" />;
    if (path === "birthday-party") return <PartyInquiryForm key="party" entryContext="plan-birthday-party" sourcePage="/plan" />;
    if (path === "school-after-school") return <OrganizationInquiryForm key="school" initialProgramType="enrichment-after-school" initialEngagementType="recurring" entryContext="plan-school-after-school" sourcePage="/plan" />;
    if (path === "camp-programming") return <OrganizationInquiryForm key="camp" initialProgramType="camps-activity" entryContext="plan-camp-programming" sourcePage="/plan" />;
    if (path === "community-event") return <OrganizationInquiryForm key="event" initialProgramType="community-event" initialEngagementType="one-time" entryContext="plan-community-event" sourcePage="/plan" />;
    if (clarifiedPath === "family-party") return <PartyInquiryForm key="unsure-party" entryContext="plan-unsure-party" sourcePage="/plan" />;
    if (clarifiedPath === "organization") return <OrganizationInquiryForm key="unsure-organization" initialProgramType="unsure-other" entryContext="plan-unsure-organization" sourcePage="/plan" />;
    if (clarifiedPath === "recurring-organization") return <OrganizationInquiryForm key="recurring-organization" initialProgramType="unsure-other" initialEngagementType="recurring" entryContext="plan-custom-recurring-organization" sourcePage="/plan" />;
    return <CoachingInquiryForm key={clarifiedPath || "unsure-coaching"} initialFormat={clarifiedPath === "recurring-family" ? "group" : "unsure"} entryContext={clarifiedPath === "recurring-family" ? "plan-custom-recurring-family" : "plan-unsure-coaching"} sourcePage="/plan" />;
  })();

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-navy/10 pb-4">
        <div><p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-gold">Planning</p><p aria-live="polite" className="mt-1 text-sm font-extrabold text-navy">{selectedLabel}{clarifiedPath ? " · Refined path" : ""}</p></div>
        <button type="button" onClick={reset} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-navy/12 px-4 text-xs font-extrabold uppercase tracking-[.12em] text-navy/55 transition hover:border-navy/30 hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"><RotateCcw className="h-4 w-4" /> Change plan</button>
      </div>
      <div>{form}</div>
    </div>
  );
}
