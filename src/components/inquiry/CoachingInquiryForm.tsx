"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Send } from "lucide-react";
import { submitCoachingInquiry, type CoachingInquiryState } from "@/app/actions/coaching-inquiry";
import type { CoachingFormat, CoachingInquiryErrors, CoachingInquiryField } from "@/lib/inquiries/coaching";
import { formatParticipantAge, isSupportedParticipantAge, participantAgeOptions } from "@/lib/participant-age";
import {
  CheckboxChip,
  ChoiceCard,
  Field,
  InquiryProgress,
  SelectInput,
  TextArea,
  TextInput,
} from "./InquiryFormPrimitives";

const steps = ["Your Family", "Coaching Needs", "Schedule & Location", "Review"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const times = ["Morning", "Midday", "After school", "Evening"];
const initialState: CoachingInquiryState = { status: "idle" };

type Values = {
  parentGuardianName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  sportActivity: string;
  coachingFormat: CoachingFormat | "";
  approximateGroupSize: string;
  goals: string;
  preferredDays: string[];
  preferredTimes: string[];
  neighborhoodLocation: string;
  desiredStartTiming: string;
  additionalNotes: string;
};

const stepFields: CoachingInquiryField[][] = [
  ["parentGuardianName", "email", "phone", "childName", "childAge"],
  ["sportActivity", "coachingFormat", "approximateGroupSize", "goals"],
  ["preferredDays", "preferredTimes", "neighborhoodLocation", "desiredStartTiming"],
  [],
];

function formatLabel(format: Values["coachingFormat"]) {
  if (format === "private") return "Private Coaching";
  if (format === "group") return "Group Coaching & Pods";
  if (format === "unsure") return "Not sure / help me choose";
  return "Not selected";
}

export default function CoachingInquiryForm({
  initialFormat = "",
  entryContext = "coaching-overview",
}: {
  initialFormat?: Values["coachingFormat"];
  entryContext?: string;
}) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>({
    parentGuardianName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    sportActivity: "",
    coachingFormat: initialFormat,
    approximateGroupSize: "",
    goals: "",
    preferredDays: [],
    preferredTimes: [],
    neighborhoodLocation: "",
    desiredStartTiming: "",
    additionalNotes: "",
  });
  const [errors, setErrors] = useState<CoachingInquiryErrors>({});
  const [state, formAction, isPending] = useActionState(submitCoachingInquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === "success") successRef.current?.focus();
  }, [state]);

  const setValue = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const toggleList = (key: "preferredDays" | "preferredTimes", value: string) => {
    setValue(key, values[key].includes(value) ? values[key].filter((item) => item !== value) : [...values[key], value]);
  };

  function validateStep(targetStep: number) {
    const nextErrors: CoachingInquiryErrors = {};
    if (targetStep === 0) {
      if (values.parentGuardianName.trim().length < 2) nextErrors.parentGuardianName = "Enter the parent or guardian name.";
      if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Enter a valid email address.";
      if (values.phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Enter a valid phone number.";
      if (values.childName.trim().length < 2) nextErrors.childName = "Enter the child’s name.";
      const age = Number(values.childAge);
      if (!isSupportedParticipantAge(age)) nextErrors.childAge = "Choose an age from 6 months to 17 years.";
    }
    if (targetStep === 1) {
      if (!values.sportActivity.trim()) nextErrors.sportActivity = "Tell us the sport or activity of interest.";
      if (!values.coachingFormat) nextErrors.coachingFormat = "Choose a coaching format.";
      if (values.coachingFormat === "group" && Number(values.approximateGroupSize) < 2) nextErrors.approximateGroupSize = "Enter an approximate group size of 2 or more.";
      if (values.goals.trim().length < 5) nextErrors.goals = "Tell us a little about what would be helpful.";
    }
    if (targetStep === 2) {
      if (!values.preferredDays.length) nextErrors.preferredDays = "Choose at least one preferred day.";
      if (!values.preferredTimes.length) nextErrors.preferredTimes = "Choose at least one preferred time.";
      if (!values.neighborhoodLocation.trim()) nextErrors.neighborhoodLocation = "Enter a neighborhood or preferred location.";
      if (!values.desiredStartTiming) nextErrors.desiredStartTiming = "Choose when you would like to begin.";
    }
    return nextErrors;
  }

  function focusFirstError(nextErrors: CoachingInquiryErrors) {
    const first = Object.keys(nextErrors)[0];
    window.setTimeout(() => {
      const target = formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`);
      target?.focus();
    }, 0);
  }

  function goNext() {
    const nextErrors = validateStep(step);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      focusFirstError(nextErrors);
      return;
    }
    setErrors({});
    setStep((current) => Math.min(current + 1, steps.length - 1));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function validateBeforeSubmit(event: React.FormEvent<HTMLFormElement>) {
    const allErrors = [0, 1, 2].reduce<CoachingInquiryErrors>((result, index) => ({ ...result, ...validateStep(index) }), {});
    if (!Object.keys(allErrors).length) return;
    event.preventDefault();
    setErrors(allErrors);
    const firstInvalidStep = stepFields.findIndex((fields) => fields.some((field) => allErrors[field]));
    if (firstInvalidStep >= 0) setStep(firstInvalidStep);
    focusFirstError(allErrors);
  }

  const errorFor = (field: CoachingInquiryField) => errors[field] || state.fieldErrors?.[field];

  if (state.status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} className="flex min-h-[610px] flex-col justify-center outline-none">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold"><CheckCircle2 className="h-8 w-8" /></div>
        <p className="mt-8 text-xs font-extrabold uppercase tracking-[.22em] text-gold">Request received</p>
        <h2 className="mt-3 font-condensed text-5xl font-extrabold uppercase leading-[.92] text-navy sm:text-6xl">We’ve got it.</h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-navy/62">Thanks for telling us what you’re looking for. We’ll review the details and reach out with the best next step for your family.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/coaching" className="button-gold">Back to Coaching</Link>
          <Link href="/" className="inline-flex min-h-13 items-center rounded-xl border border-navy/15 px-5 text-xs font-extrabold uppercase tracking-[.12em] text-navy transition hover:border-navy/35">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} onSubmit={validateBeforeSubmit} noValidate>
      <InquiryProgress steps={steps} current={step} />

      {state.status === "error" && state.message && (
        <div aria-live="polite" className="mt-4">
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">{state.message}</p>
        </div>
      )}

      <input type="hidden" name="sourcePage" value="/coaching/request" />
      <input type="hidden" name="entryContext" value={entryContext} />
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset hidden={step !== 0} className="mt-6 space-y-4">
        <legend className="font-condensed text-3xl font-extrabold uppercase text-navy">First, tell us about your family</legend>
        <p className="text-sm leading-6 text-navy/55">We’ll use this information to recommend the right coaching setup.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Parent / guardian name" htmlFor="parentGuardianName" error={errorFor("parentGuardianName")} required>
            <TextInput id="parentGuardianName" name="parentGuardianName" autoComplete="name" value={values.parentGuardianName} onChange={(e) => setValue("parentGuardianName", e.target.value)} aria-invalid={Boolean(errorFor("parentGuardianName"))} />
          </Field>
          <Field label="Email" htmlFor="email" error={errorFor("email")} required>
            <TextInput id="email" name="email" type="email" inputMode="email" autoComplete="email" value={values.email} onChange={(e) => setValue("email", e.target.value)} aria-invalid={Boolean(errorFor("email"))} />
          </Field>
          <Field label="Phone" htmlFor="phone" error={errorFor("phone")} helper="A mobile number is best." required>
            <TextInput id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(213) 301-6226" value={values.phone} onChange={(e) => setValue("phone", e.target.value)} aria-invalid={Boolean(errorFor("phone"))} />
          </Field>
          <Field label="Child’s name" htmlFor="childName" error={errorFor("childName")} required>
            <TextInput id="childName" name="childName" autoComplete="off" value={values.childName} onChange={(e) => setValue("childName", e.target.value)} aria-invalid={Boolean(errorFor("childName"))} />
          </Field>
          <Field label="Child’s age" htmlFor="childAge" error={errorFor("childAge")} required>
            <SelectInput id="childAge" name="childAge" value={values.childAge} onChange={(e) => setValue("childAge", e.target.value)} aria-invalid={Boolean(errorFor("childAge"))}>
              <option value="">Choose age...</option>
              {participantAgeOptions.map((age) => <option key={age.value} value={age.value}>{age.label}</option>)}
            </SelectInput>
          </Field>
        </div>
      </fieldset>

      <fieldset hidden={step !== 1} className="mt-6 space-y-5">
        <legend className="font-condensed text-3xl font-extrabold uppercase text-navy">What kind of coaching would help?</legend>
        <p className="text-sm leading-6 text-navy/50">It’s okay if you are still deciding. Give us enough context to make a useful recommendation.</p>
        <Field label="Sport or activity" htmlFor="sportActivity" error={errorFor("sportActivity")} helper="For example: basketball, soccer, general movement, or confidence through sports." required>
          <TextInput id="sportActivity" name="sportActivity" value={values.sportActivity} onChange={(e) => setValue("sportActivity", e.target.value)} aria-invalid={Boolean(errorFor("sportActivity"))} />
        </Field>
        <fieldset aria-describedby={errorFor("coachingFormat") ? "coachingFormat-error" : undefined}>
          <legend className="mb-3 text-sm font-extrabold text-navy">Coaching format <span className="text-gold" aria-hidden>*</span></legend>
          <div className="grid gap-3">
            <ChoiceCard name="coachingFormat" value="private" title="Private Coaching" description="One-on-one attention and fully individualized pacing." checked={values.coachingFormat === "private"} onChange={() => setValue("coachingFormat", "private")} />
            <ChoiceCard name="coachingFormat" value="group" title="Group Coaching & Pods" description="Small-group coaching with shared energy and interaction." checked={values.coachingFormat === "group"} onChange={() => setValue("coachingFormat", "group")} />
            <ChoiceCard name="coachingFormat" value="unsure" title="Not sure / help me choose" description="Tell us your goals and we’ll recommend the best fit." checked={values.coachingFormat === "unsure"} onChange={() => setValue("coachingFormat", "unsure")} />
          </div>
          {errorFor("coachingFormat") && <p id="coachingFormat-error" className="mt-2 text-xs font-semibold text-red-700">{errorFor("coachingFormat")}</p>}
        </fieldset>
        {values.coachingFormat === "group" && (
          <Field label="Approximate number of children" htmlFor="approximateGroupSize" error={errorFor("approximateGroupSize")} helper="A best estimate is completely fine." required>
            <TextInput id="approximateGroupSize" name="approximateGroupSize" type="number" inputMode="numeric" min={2} max={100} value={values.approximateGroupSize} onChange={(e) => setValue("approximateGroupSize", e.target.value)} aria-invalid={Boolean(errorFor("approximateGroupSize"))} />
          </Field>
        )}
        <Field label="What would you like help with?" htmlFor="goals" error={errorFor("goals")} helper="Skills, confidence, engagement, tryout preparation, or anything else that matters." required>
          <TextArea id="goals" name="goals" rows={4} value={values.goals} onChange={(e) => setValue("goals", e.target.value)} aria-invalid={Boolean(errorFor("goals"))} />
        </Field>
      </fieldset>

      <fieldset hidden={step !== 2} className="mt-6 space-y-6">
        <legend className="font-condensed text-3xl font-extrabold uppercase text-navy">What could work for your schedule?</legend>
        <p className="text-sm leading-6 text-navy/50">Preferences are helpful, not a final booking. Choose everything that could reasonably work.</p>
        <fieldset aria-describedby={errorFor("preferredDays") ? "preferredDays-error" : undefined}>
          <legend className="mb-3 text-sm font-extrabold text-navy">Preferred days <span className="text-gold" aria-hidden>*</span></legend>
          <div className="flex flex-wrap gap-2">{days.map((day) => <CheckboxChip key={day} name="preferredDays" value={day} checked={values.preferredDays.includes(day)} onChange={() => toggleList("preferredDays", day)} />)}</div>
          {errorFor("preferredDays") && <p id="preferredDays-error" className="mt-2 text-xs font-semibold text-red-700">{errorFor("preferredDays")}</p>}
        </fieldset>
        <fieldset aria-describedby={errorFor("preferredTimes") ? "preferredTimes-error" : undefined}>
          <legend className="mb-3 text-sm font-extrabold text-navy">Preferred times <span className="text-gold" aria-hidden>*</span></legend>
          <div className="flex flex-wrap gap-2">{times.map((time) => <CheckboxChip key={time} name="preferredTimes" value={time} checked={values.preferredTimes.includes(time)} onChange={() => toggleList("preferredTimes", time)} />)}</div>
          {errorFor("preferredTimes") && <p id="preferredTimes-error" className="mt-2 text-xs font-semibold text-red-700">{errorFor("preferredTimes")}</p>}
        </fieldset>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Neighborhood / location" htmlFor="neighborhoodLocation" error={errorFor("neighborhoodLocation")} helper="Home neighborhood, nearby park, school, or another preferred area." required>
            <TextInput id="neighborhoodLocation" name="neighborhoodLocation" value={values.neighborhoodLocation} onChange={(e) => setValue("neighborhoodLocation", e.target.value)} aria-invalid={Boolean(errorFor("neighborhoodLocation"))} />
          </Field>
          <Field label="Desired start timing" htmlFor="desiredStartTiming" error={errorFor("desiredStartTiming")} required>
            <SelectInput id="desiredStartTiming" name="desiredStartTiming" value={values.desiredStartTiming} onChange={(e) => setValue("desiredStartTiming", e.target.value)} aria-invalid={Boolean(errorFor("desiredStartTiming"))}>
              <option value="">Choose one...</option><option>As soon as possible</option><option>Within the next month</option><option>In 1–3 months</option><option>Just exploring for now</option>
            </SelectInput>
          </Field>
        </div>
      </fieldset>

      <fieldset hidden={step !== 3} className="mt-6 space-y-5">
        <legend className="font-condensed text-3xl font-extrabold uppercase text-navy">Review your coaching request</legend>
        <p className="text-sm leading-6 text-navy/50">Make sure the essentials look right. You can go back to adjust anything before sending.</p>
        <div className="grid gap-3 rounded-2xl bg-cream p-5 sm:grid-cols-2 sm:p-6">
          {[
            ["Family", `${values.parentGuardianName} · ${values.childName}, ${values.childAge ? formatParticipantAge(Number(values.childAge)) : "age not selected"}`],
            ["Contact", `${values.email} · ${values.phone}`],
            ["Interest", values.sportActivity],
            ["Format", formatLabel(values.coachingFormat)],
            ...(values.coachingFormat === "group" ? [["Group size", values.approximateGroupSize]] : []),
            ["Goals", values.goals],
            ["Availability", `${values.preferredDays.join(", ")} · ${values.preferredTimes.join(", ")}`],
            ["Location & timing", `${values.neighborhoodLocation} · ${values.desiredStartTiming}`],
          ].map(([label, value]) => <div key={label} className="border-b border-navy/8 pb-3"><p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-gold">{label}</p><p className="mt-1 text-sm leading-6 text-navy/70">{value}</p></div>)}
        </div>
        <Field label="Additional notes" htmlFor="additionalNotes" helper="Optional. Share anything else that would help us understand the request.">
          <TextArea id="additionalNotes" name="additionalNotes" rows={4} value={values.additionalNotes} onChange={(e) => setValue("additionalNotes", e.target.value)} />
        </Field>
      </fieldset>

      <div className="mt-7 flex flex-col-reverse gap-3 border-t border-navy/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        {step > 0 ? <button type="button" onClick={() => setStep((current) => current - 1)} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-navy/12 px-4 text-xs font-extrabold uppercase tracking-[.13em] text-navy/60 transition hover:border-navy/30 hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto"><ArrowLeft className="h-4 w-4" /> Back</button> : <span className="hidden sm:block" />}
        {step < steps.length - 1 ? (
          <button type="button" onClick={goNext} className="button-gold w-full justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto sm:min-w-48">Continue <ArrowRight className="h-4 w-4" /></button>
        ) : (
          <button type="submit" disabled={isPending} className="button-gold w-full justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-48">{isPending ? "Sending…" : <>Send Request <Send className="h-4 w-4" /></>}</button>
        )}
      </div>
      <p className="mt-4 text-center text-xs text-navy/45">
        <Link href="/privacy" className="underline decoration-navy/20 underline-offset-4 hover:text-navy">Privacy Policy</Link>
      </p>
    </form>
  );
}
