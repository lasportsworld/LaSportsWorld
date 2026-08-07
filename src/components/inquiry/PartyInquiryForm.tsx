"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { submitPartyInquiry, type PartyInquiryState } from "@/app/actions/party-inquiry";
import { formatParticipantAge, isSupportedParticipantAge, participantAgeOptions } from "@/lib/participant-age";
import { partyExperienceLabels, venueTypeLabels, type PartyExperience, type PartyInquiryErrors, type PartyInquiryField, type VenueType } from "@/lib/inquiries/party";
import { CheckboxChip, ChoiceCard, Field, InquiryProgress, SelectInput, TextArea, TextInput } from "./InquiryFormPrimitives";
import { HoneypotField, InquiryActions, InquiryError, InquirySuccess, PrivacyNote, ReviewGrid } from "./InquiryFormShared";

const steps = ["Your Family", "The Party", "Location & Setup", "Review"];
const initialState: PartyInquiryState = { status: "idle" };
type Values = {
  parentGuardianName: string; email: string; phone: string; childName: string; childAge: string;
  preferredDate: string; preferredStartTime: string; estimatedChildCount: string; approximateAgeRange: string;
  experiences: PartyExperience[]; neighborhood: string; venueType: VenueType | ""; approximateLocation: string;
  preferredDuration: string; additionalNotes: string;
};
const stepFields: PartyInquiryField[][] = [
  ["parentGuardianName", "email", "phone", "childName", "childAge"],
  ["estimatedChildCount", "experiences"], ["neighborhood", "venueType"], [],
];

export default function PartyInquiryForm({ entryContext = "parties-overview", sourcePage = "/parties/request" }: { entryContext?: string; sourcePage?: string }) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>({ parentGuardianName: "", email: "", phone: "", childName: "", childAge: "", preferredDate: "", preferredStartTime: "", estimatedChildCount: "", approximateAgeRange: "", experiences: [], neighborhood: "", venueType: "", approximateLocation: "", preferredDuration: "", additionalNotes: "" });
  const [errors, setErrors] = useState<PartyInquiryErrors>({});
  const [state, formAction, isPending] = useActionState(submitPartyInquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (state.status === "success") successRef.current?.focus(); }, [state]);

  const setValue = <K extends keyof Values>(key: K, value: Values[K]) => { setValues((current) => ({ ...current, [key]: value })); setErrors((current) => ({ ...current, [key]: undefined })); };
  const toggleExperience = (value: PartyExperience) => {
    if (value === "unsure") return setValue("experiences", values.experiences.includes(value) ? [] : [value]);
    const withoutUnsure = values.experiences.filter((item) => item !== "unsure");
    setValue("experiences", withoutUnsure.includes(value) ? withoutUnsure.filter((item) => item !== value) : [...withoutUnsure, value]);
  };
  const errorFor = (field: PartyInquiryField) => errors[field] || state.fieldErrors?.[field];
  const validateStep = (target: number) => {
    const next: PartyInquiryErrors = {};
    if (target === 0) {
      if (values.parentGuardianName.trim().length < 2) next.parentGuardianName = "Enter the parent or guardian name.";
      if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email address.";
      if (values.phone.replace(/\D/g, "").length < 10) next.phone = "Enter a valid phone number.";
      if (values.childName.trim().length < 2) next.childName = "Enter the child’s name.";
      if (!isSupportedParticipantAge(Number(values.childAge))) next.childAge = "Choose an age from 6 months to 17 years.";
    }
    if (target === 1) {
      if (values.estimatedChildCount && (!Number.isInteger(Number(values.estimatedChildCount)) || Number(values.estimatedChildCount) < 1 || Number(values.estimatedChildCount) > 500)) next.estimatedChildCount = "Enter a reasonable estimate or leave this blank.";
      if (!values.experiences.length) next.experiences = "Choose at least one experience, or select help me choose.";
    }
    if (target === 2) {
      if (!values.neighborhood.trim()) next.neighborhood = "Enter the neighborhood where you expect to celebrate.";
      if (!values.venueType) next.venueType = "Choose a venue type, or select not sure yet.";
    }
    return next;
  };
  const focusFirstError = (next: PartyInquiryErrors) => window.setTimeout(() => formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus(), 0);
  const goNext = () => { const next = validateStep(step); if (Object.keys(next).length) { setErrors(next); focusFirstError(next); return; } setErrors({}); setStep((current) => Math.min(current + 1, 3)); formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  const validateBeforeSubmit = (event: React.FormEvent<HTMLFormElement>) => { const all = [0, 1, 2].reduce<PartyInquiryErrors>((result, index) => ({ ...result, ...validateStep(index) }), {}); if (!Object.keys(all).length) return; event.preventDefault(); setErrors(all); const invalidStep = stepFields.findIndex((fields) => fields.some((field) => all[field])); if (invalidStep >= 0) setStep(invalidStep); focusFirstError(all); };

  if (state.status === "success") return <InquirySuccess focusRef={successRef} title="Your party request is in." description="Thanks for sharing what you know so far. We’ll review the details and follow up with the right questions and next steps for your celebration." primary={{ label: "Back to Parties", href: "/parties" }} secondary={{ label: "Return Home", href: "/" }} />;

  const venueHelper = values.venueType === "home" ? "A street or nearby cross streets are enough for now." : values.venueType === "park" ? "Share the park name if you know it." : "A venue name, address, or general area is enough.";
  return (
    <form ref={formRef} action={formAction} onSubmit={validateBeforeSubmit} noValidate className="scroll-mt-24">
      <InquiryProgress steps={steps} current={step} />
      <InquiryError message={state.status === "error" ? state.message : undefined} />
      <input type="hidden" name="sourcePage" value={sourcePage} /><input type="hidden" name="entryContext" value={entryContext} /><HoneypotField id="partyWebsite" />

      <fieldset hidden={step !== 0} className="mt-6 space-y-4">
        <legend className="font-condensed text-3xl font-extrabold uppercase text-navy">Who are we celebrating?</legend>
        <p className="text-sm leading-6 text-navy/55">Start with the basics. We’ll use this information to shape the conversation around your family.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Parent / guardian name" htmlFor="parentGuardianName" error={errorFor("parentGuardianName")} required><TextInput id="parentGuardianName" name="parentGuardianName" autoComplete="name" value={values.parentGuardianName} onChange={(e) => setValue("parentGuardianName", e.target.value)} aria-invalid={Boolean(errorFor("parentGuardianName"))} /></Field>
          <Field label="Email" htmlFor="email" error={errorFor("email")} required><TextInput id="email" name="email" type="email" inputMode="email" autoComplete="email" value={values.email} onChange={(e) => setValue("email", e.target.value)} aria-invalid={Boolean(errorFor("email"))} /></Field>
          <Field label="Phone" htmlFor="phone" error={errorFor("phone")} helper="A mobile number is best." required><TextInput id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(213) 301-6226" value={values.phone} onChange={(e) => setValue("phone", e.target.value)} aria-invalid={Boolean(errorFor("phone"))} /></Field>
          <Field label="Child’s name" htmlFor="childName" error={errorFor("childName")} required><TextInput id="childName" name="childName" value={values.childName} onChange={(e) => setValue("childName", e.target.value)} aria-invalid={Boolean(errorFor("childName"))} /></Field>
          <Field label="Child’s age" htmlFor="childAge" error={errorFor("childAge")} required><SelectInput id="childAge" name="childAge" value={values.childAge} onChange={(e) => setValue("childAge", e.target.value)} aria-invalid={Boolean(errorFor("childAge"))}><option value="">Choose age…</option>{participantAgeOptions.map((age) => <option key={age.value} value={age.value}>{age.label}</option>)}</SelectInput></Field>
        </div>
      </fieldset>

      <fieldset hidden={step !== 1} className="mt-6 space-y-5">
        <legend className="font-condensed text-3xl font-extrabold uppercase text-navy">Tell us what you know so far</legend>
        <p className="text-sm leading-6 text-navy/55">A date, headcount, or exact plan is not required to start. Estimates are completely fine.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Preferred party date" htmlFor="preferredDate" optional><TextInput id="preferredDate" name="preferredDate" type="date" value={values.preferredDate} onChange={(e) => setValue("preferredDate", e.target.value)} /></Field>
          <Field label="Preferred start time" htmlFor="preferredStartTime" optional><TextInput id="preferredStartTime" name="preferredStartTime" type="time" value={values.preferredStartTime} onChange={(e) => setValue("preferredStartTime", e.target.value)} /></Field>
          <Field label="Estimated number of children" htmlFor="estimatedChildCount" error={errorFor("estimatedChildCount")} helper="A rough estimate is enough." optional><TextInput id="estimatedChildCount" name="estimatedChildCount" type="number" inputMode="numeric" min={1} max={500} value={values.estimatedChildCount} onChange={(e) => setValue("estimatedChildCount", e.target.value)} aria-invalid={Boolean(errorFor("estimatedChildCount"))} /></Field>
          <Field label="Approximate age range" htmlFor="approximateAgeRange" helper="Useful if the guests span several ages." optional><TextInput id="approximateAgeRange" name="approximateAgeRange" placeholder="For example, ages 5–8" value={values.approximateAgeRange} onChange={(e) => setValue("approximateAgeRange", e.target.value)} /></Field>
        </div>
        <fieldset aria-describedby={errorFor("experiences") ? "experiences-error" : undefined}>
          <legend className="mb-1 text-sm font-extrabold text-navy">What sounds fun? <span className="text-gold" aria-hidden>*</span></legend>
          <p className="mb-3 text-xs leading-5 text-navy/45">Choose as many as you like. This is a starting point, not a final package.</p>
          <div className="flex flex-wrap gap-2">{(Object.keys(partyExperienceLabels) as PartyExperience[]).map((item) => <CheckboxChip key={item} name="experiences" value={item} label={partyExperienceLabels[item]} checked={values.experiences.includes(item)} onChange={() => toggleExperience(item)} />)}</div>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-navy/45">{values.experiences.map((item) => <span key={item}>{partyExperienceLabels[item]}</span>)}</div>
          {errorFor("experiences") && <p id="experiences-error" className="mt-2 text-xs font-semibold text-red-700">{errorFor("experiences")}</p>}
        </fieldset>
      </fieldset>

      <fieldset hidden={step !== 2} className="mt-6 space-y-5">
        <legend className="font-condensed text-3xl font-extrabold uppercase text-navy">Where should the fun happen?</legend>
        <p className="text-sm leading-6 text-navy/55">Tell us the general setup. You can finalize the exact address later.</p>
        <Field label="Neighborhood" htmlFor="neighborhood" error={errorFor("neighborhood")} helper="This helps us understand travel and setup." required><TextInput id="neighborhood" name="neighborhood" value={values.neighborhood} onChange={(e) => setValue("neighborhood", e.target.value)} aria-invalid={Boolean(errorFor("neighborhood"))} /></Field>
        <fieldset aria-describedby={errorFor("venueType") ? "venueType-error" : undefined}>
          <legend className="mb-3 text-sm font-extrabold text-navy">Venue type <span className="text-gold" aria-hidden>*</span></legend>
          <div className="grid gap-3 sm:grid-cols-2">{(Object.keys(venueTypeLabels) as VenueType[]).map((item) => <ChoiceCard key={item} name="venueType" value={item} title={venueTypeLabels[item]} description={item === "unsure" ? "We can discuss what works best." : "Select this if it is the closest fit."} checked={values.venueType === item} onChange={() => setValue("venueType", item)} />)}</div>
          {errorFor("venueType") && <p id="venueType-error" className="mt-2 text-xs font-semibold text-red-700">{errorFor("venueType")}</p>}
        </fieldset>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Address or approximate location" htmlFor="approximateLocation" helper={venueHelper} optional><TextInput id="approximateLocation" name="approximateLocation" value={values.approximateLocation} onChange={(e) => setValue("approximateLocation", e.target.value)} /></Field>
          <Field label="Preferred activity duration" htmlFor="preferredDuration" optional><SelectInput id="preferredDuration" name="preferredDuration" value={values.preferredDuration} onChange={(e) => setValue("preferredDuration", e.target.value)}><option value="">Not sure yet</option><option>About 60 minutes</option><option>About 90 minutes</option><option>About 2 hours</option><option>Something else</option></SelectInput></Field>
        </div>
      </fieldset>

      <fieldset hidden={step !== 3} className="mt-6 space-y-5">
        <legend className="font-condensed text-3xl font-extrabold uppercase text-navy">One quick look before you send</legend>
        <p className="text-sm leading-6 text-navy/55">These are conversation starters. Nothing here locks you into a final plan.</p>
        <ReviewGrid items={[
          { label: "Family", value: `${values.parentGuardianName} · ${values.childName}, ${values.childAge ? formatParticipantAge(Number(values.childAge)) : "age not selected"}` },
          { label: "Contact", value: `${values.email} · ${values.phone}` },
          { label: "Party timing", value: [values.preferredDate || "Date open", values.preferredStartTime || "Time open"].join(" · ") },
          { label: "Group", value: [values.estimatedChildCount ? `About ${values.estimatedChildCount} children` : "Headcount open", values.approximateAgeRange].filter(Boolean).join(" · ") },
          { label: "Experience", value: values.experiences.map((item) => partyExperienceLabels[item]).join(", ") },
          { label: "Location", value: [values.neighborhood, values.venueType ? venueTypeLabels[values.venueType] : "", values.approximateLocation].filter(Boolean).join(" · ") },
          { label: "Duration", value: values.preferredDuration || "Open to a recommendation" },
        ]} />
        <Field label="Anything else we should know?" htmlFor="additionalNotes" helper="Ideas, accessibility needs, setup questions, or anything else that would help." optional><TextArea id="additionalNotes" name="additionalNotes" rows={4} value={values.additionalNotes} onChange={(e) => setValue("additionalNotes", e.target.value)} /></Field>
      </fieldset>
      <InquiryActions step={step} totalSteps={steps.length} isPending={isPending} onBack={() => setStep((current) => current - 1)} onNext={goNext} submitLabel="Send Party Request" />
      <PrivacyNote>We’ll only use these details to respond to your request</PrivacyNote>
    </form>
  );
}
