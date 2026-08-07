"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { submitOrganizationInquiry, type OrganizationInquiryState } from "@/app/actions/organization-inquiry";
import { engagementLabels, organizationProgramLabels, spaceLabels, type EngagementType, type OrganizationInquiryErrors, type OrganizationInquiryField, type OrganizationProgramType, type SpaceType } from "@/lib/inquiries/organization";
import { ChoiceCard, Field, InquiryProgress, SelectInput, TextArea, TextInput } from "./InquiryFormPrimitives";
import { HoneypotField, InquiryActions, InquiryError, InquirySuccess, PrivacyNote, ReviewGrid } from "./InquiryFormShared";

const steps = ["About You", "Program Need", "Timing & Location", "Review"];
const initialState: OrganizationInquiryState = { status: "idle" };
type Values = { contactName: string; workEmail: string; phone: string; organizationName: string; roleTitle: string; programType: OrganizationProgramType | ""; ageGradeRange: string; approximateParticipantCount: string; engagementType: EngagementType | ""; serviceNeeds: string; desiredTiming: string; frequency: string; location: string; spaceType: SpaceType | ""; goalsRequirements: string; additionalNotes: string };
const stepFields: OrganizationInquiryField[][] = [["contactName", "workEmail", "phone", "organizationName"], ["programType", "approximateParticipantCount", "engagementType", "serviceNeeds"], [], ["goalsRequirements"]];

export default function OrganizationInquiryForm({ initialProgramType = "", initialEngagementType = "", entryContext = "organizations-overview", sourcePage = "/schools-organizations/request" }: { initialProgramType?: OrganizationProgramType | ""; initialEngagementType?: EngagementType | ""; entryContext?: string; sourcePage?: string }) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>({ contactName: "", workEmail: "", phone: "", organizationName: "", roleTitle: "", programType: initialProgramType, ageGradeRange: "", approximateParticipantCount: "", engagementType: initialEngagementType, serviceNeeds: "", desiredTiming: "", frequency: "", location: "", spaceType: "", goalsRequirements: "", additionalNotes: "" });
  const [errors, setErrors] = useState<OrganizationInquiryErrors>({});
  const [state, formAction, isPending] = useActionState(submitOrganizationInquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (state.status === "success") successRef.current?.focus(); }, [state]);
  const setValue = <K extends keyof Values>(key: K, value: Values[K]) => { setValues((current) => ({ ...current, [key]: value })); setErrors((current) => ({ ...current, [key]: undefined })); };
  const errorFor = (field: OrganizationInquiryField) => errors[field] || state.fieldErrors?.[field];
  const validateStep = (target: number) => {
    const next: OrganizationInquiryErrors = {};
    if (target === 0) {
      if (values.contactName.trim().length < 2) next.contactName = "Enter your name.";
      if (!/^\S+@\S+\.\S+$/.test(values.workEmail)) next.workEmail = "Enter a valid work email address.";
      if (values.phone.replace(/\D/g, "").length < 10) next.phone = "Enter a valid phone number.";
      if (values.organizationName.trim().length < 2) next.organizationName = "Enter the organization name.";
    }
    if (target === 1) {
      if (!values.programType) next.programType = "Choose the closest program type.";
      if (values.approximateParticipantCount && (!Number.isInteger(Number(values.approximateParticipantCount)) || Number(values.approximateParticipantCount) < 1 || Number(values.approximateParticipantCount) > 10000)) next.approximateParticipantCount = "Enter a reasonable estimate or leave this blank.";
      if (!values.engagementType) next.engagementType = "Tell us whether this is one-time, recurring, or undecided.";
      if (values.serviceNeeds.trim().length < 8) next.serviceNeeds = "Briefly tell us what you would like LASW to provide.";
    }
    if (target === 3 && values.goalsRequirements.trim().length < 8) next.goalsRequirements = "Briefly share the goals or requirements that matter most.";
    return next;
  };
  const focusFirstError = (next: OrganizationInquiryErrors) => window.setTimeout(() => formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus(), 0);
  const goNext = () => { const next = validateStep(step); if (Object.keys(next).length) { setErrors(next); focusFirstError(next); return; } setErrors({}); setStep((current) => Math.min(current + 1, 3)); formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  const validateBeforeSubmit = (event: React.FormEvent<HTMLFormElement>) => { const all = [0, 1, 2, 3].reduce<OrganizationInquiryErrors>((result, index) => ({ ...result, ...validateStep(index) }), {}); if (!Object.keys(all).length) return; event.preventDefault(); setErrors(all); const invalidStep = stepFields.findIndex((fields) => fields.some((field) => all[field])); if (invalidStep >= 0) setStep(invalidStep); focusFirstError(all); };

  if (state.status === "success") return <InquirySuccess focusRef={successRef} title="Your request is with us." description="Thanks for sharing the shape of your program or event. We’ll review the details and follow up with the most useful next questions." primary={{ label: "Back to Organizations", href: "/schools-organizations" }} secondary={{ label: "Return Home", href: "/" }} />;

  return (
    <form ref={formRef} action={formAction} onSubmit={validateBeforeSubmit} noValidate>
      <InquiryProgress steps={steps} current={step} /><InquiryError message={state.status === "error" ? state.message : undefined} />
      <input type="hidden" name="sourcePage" value={sourcePage} /><input type="hidden" name="entryContext" value={entryContext} /><HoneypotField id="organizationWebsite" />

      <fieldset hidden={step !== 0} className="mt-6 space-y-4">
        <legend className="font-condensed text-3xl font-extrabold uppercase text-navy">Who should we speak with?</legend>
        <p className="text-sm leading-6 text-navy/55">Tell us who you are and the organization you represent.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Contact name" htmlFor="contactName" error={errorFor("contactName")} required><TextInput id="contactName" name="contactName" autoComplete="name" value={values.contactName} onChange={(e) => setValue("contactName", e.target.value)} aria-invalid={Boolean(errorFor("contactName"))} /></Field>
          <Field label="Work email" htmlFor="workEmail" error={errorFor("workEmail")} required><TextInput id="workEmail" name="workEmail" type="email" inputMode="email" autoComplete="email" value={values.workEmail} onChange={(e) => setValue("workEmail", e.target.value)} aria-invalid={Boolean(errorFor("workEmail"))} /></Field>
          <Field label="Phone" htmlFor="phone" error={errorFor("phone")} required><TextInput id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(213) 301-6226" value={values.phone} onChange={(e) => setValue("phone", e.target.value)} aria-invalid={Boolean(errorFor("phone"))} /></Field>
          <Field label="Organization name" htmlFor="organizationName" error={errorFor("organizationName")} required><TextInput id="organizationName" name="organizationName" autoComplete="organization" value={values.organizationName} onChange={(e) => setValue("organizationName", e.target.value)} aria-invalid={Boolean(errorFor("organizationName"))} /></Field>
          <Field label="Role / title" htmlFor="roleTitle" optional><TextInput id="roleTitle" name="roleTitle" autoComplete="organization-title" value={values.roleTitle} onChange={(e) => setValue("roleTitle", e.target.value)} /></Field>
        </div>
      </fieldset>

      <fieldset hidden={step !== 1} className="mt-6 space-y-5">
        <legend className="font-condensed text-3xl font-extrabold uppercase text-navy">What are you looking to build?</legend>
        <p className="text-sm leading-6 text-navy/55">Choose the closest fit. You can change a preselected option or tell us you are still deciding.</p>
        <fieldset aria-describedby={errorFor("programType") ? "programType-error" : undefined}>
          <legend className="mb-3 text-sm font-extrabold text-navy">Program / service type <span className="text-gold" aria-hidden>*</span></legend>
          <div className="grid gap-3">{(Object.keys(organizationProgramLabels) as OrganizationProgramType[]).map((item) => <ChoiceCard key={item} name="programType" value={item} title={organizationProgramLabels[item]} description={item === "unsure-other" ? "Tell us the need and we’ll help identify the right format." : "You can refine the exact scope with us later."} checked={values.programType === item} onChange={() => setValue("programType", item)} />)}</div>
          {errorFor("programType") && <p id="programType-error" className="mt-2 text-xs font-semibold text-red-700">{errorFor("programType")}</p>}
        </fieldset>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Age or grade range" htmlFor="ageGradeRange" helper="An estimate or broad range is fine." optional><TextInput id="ageGradeRange" name="ageGradeRange" placeholder="For example, K–5" value={values.ageGradeRange} onChange={(e) => setValue("ageGradeRange", e.target.value)} /></Field>
          <Field label="Approximate participant count" htmlFor="approximateParticipantCount" error={errorFor("approximateParticipantCount")} optional><TextInput id="approximateParticipantCount" name="approximateParticipantCount" type="number" inputMode="numeric" min={1} max={10000} value={values.approximateParticipantCount} onChange={(e) => setValue("approximateParticipantCount", e.target.value)} aria-invalid={Boolean(errorFor("approximateParticipantCount"))} /></Field>
        </div>
        <fieldset aria-describedby={errorFor("engagementType") ? "engagementType-error" : undefined}>
          <legend className="mb-3 text-sm font-extrabold text-navy">Program cadence <span className="text-gold" aria-hidden>*</span></legend>
          <div className="grid gap-3 sm:grid-cols-3">{(Object.keys(engagementLabels) as EngagementType[]).map((item) => <ChoiceCard key={item} name="engagementType" value={item} title={engagementLabels[item]} description={item === "recurring" ? "Weekly, seasonal, or another repeating schedule." : item === "one-time" ? "A single event, activity day, or short engagement." : "We can help shape the format."} checked={values.engagementType === item} onChange={() => setValue("engagementType", item)} />)}</div>
          {errorFor("engagementType") && <p id="engagementType-error" className="mt-2 text-xs font-semibold text-red-700">{errorFor("engagementType")}</p>}
        </fieldset>
        <Field label="What would you like LASW to provide?" htmlFor="serviceNeeds" error={errorFor("serviceNeeds")} helper="Coaches, curriculum, equipment, activity stations, full program delivery, or a mix." required><TextArea id="serviceNeeds" name="serviceNeeds" rows={4} value={values.serviceNeeds} onChange={(e) => setValue("serviceNeeds", e.target.value)} aria-invalid={Boolean(errorFor("serviceNeeds"))} /></Field>
      </fieldset>

      <fieldset hidden={step !== 2} className="mt-6 space-y-5">
        <legend className="font-condensed text-3xl font-extrabold uppercase text-navy">What timing and setting are possible?</legend>
        <p className="text-sm leading-6 text-navy/55">Share what you know. Dates, schedules, and exact locations can stay open for now.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Desired date or general timing" htmlFor="desiredTiming" helper="A specific date, season, or ‘still exploring’ all work." optional><TextInput id="desiredTiming" name="desiredTiming" placeholder="For example, fall semester" value={values.desiredTiming} onChange={(e) => setValue("desiredTiming", e.target.value)} /></Field>
          {values.engagementType === "recurring" && <Field label="Expected frequency" htmlFor="frequency" helper="A best guess is enough." optional><SelectInput id="frequency" name="frequency" value={values.frequency} onChange={(e) => setValue("frequency", e.target.value)}><option value="">Not sure yet</option><option>Multiple times per week</option><option>Weekly</option><option>Every other week</option><option>Monthly</option><option>Seasonal / session-based</option><option>Other</option></SelectInput></Field>}
          <Field label="Location" htmlFor="location" helper="Campus, neighborhood, venue, or general service area." optional><TextInput id="location" name="location" value={values.location} onChange={(e) => setValue("location", e.target.value)} /></Field>
          <Field label="Available space" htmlFor="spaceType" optional><SelectInput id="spaceType" name="spaceType" value={values.spaceType} onChange={(e) => setValue("spaceType", e.target.value as SpaceType | "")}><option value="">Choose if known…</option>{(Object.keys(spaceLabels) as SpaceType[]).map((item) => <option key={item} value={item}>{spaceLabels[item]}</option>)}</SelectInput></Field>
        </div>
      </fieldset>

      <fieldset hidden={step !== 3} className="mt-6 space-y-5">
        <legend className="font-condensed text-3xl font-extrabold uppercase text-navy">Goals, requirements, and review</legend>
        <p className="text-sm leading-6 text-navy/55">Focus on what matters most. You do not need a finished brief.</p>
        <Field label="What should this program accomplish?" htmlFor="goalsRequirements" error={errorFor("goalsRequirements")} helper="Share goals, operational requirements, accessibility needs, or success criteria." required><TextArea id="goalsRequirements" name="goalsRequirements" rows={4} value={values.goalsRequirements} onChange={(e) => setValue("goalsRequirements", e.target.value)} aria-invalid={Boolean(errorFor("goalsRequirements"))} /></Field>
        <ReviewGrid items={[
          { label: "Contact", value: `${values.contactName} · ${values.workEmail} · ${values.phone}` },
          { label: "Organization", value: [values.organizationName, values.roleTitle].filter(Boolean).join(" · ") },
          { label: "Program", value: values.programType ? organizationProgramLabels[values.programType] : "" },
          { label: "Audience", value: [values.ageGradeRange, values.approximateParticipantCount ? `About ${values.approximateParticipantCount} participants` : ""].filter(Boolean).join(" · ") || "Still being defined" },
          { label: "Cadence", value: values.engagementType ? engagementLabels[values.engagementType] : "" },
          { label: "Timing & location", value: [values.desiredTiming, values.frequency, values.location, values.spaceType ? spaceLabels[values.spaceType] : ""].filter(Boolean).join(" · ") || "Still being defined" },
          { label: "LASW support", value: values.serviceNeeds },
        ]} />
        <Field label="Anything else we should know?" htmlFor="additionalNotes" optional><TextArea id="additionalNotes" name="additionalNotes" rows={4} value={values.additionalNotes} onChange={(e) => setValue("additionalNotes", e.target.value)} /></Field>
      </fieldset>
      <InquiryActions step={step} totalSteps={steps.length} isPending={isPending} onBack={() => setStep((current) => current - 1)} onNext={goNext} submitLabel="Send Program Request" />
      <PrivacyNote>We’ll use these details to understand and respond to your request</PrivacyNote>
    </form>
  );
}
