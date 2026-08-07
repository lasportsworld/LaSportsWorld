import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Send } from "lucide-react";
import type { ReactNode } from "react";

export function HoneypotField({ id }: { id: string }) {
  return (
    <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden>
      <label htmlFor={id}>Website</label>
      <input id={id} name="website" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function InquiryError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <div aria-live="polite" className="mt-4">
      <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">{message}</p>
    </div>
  );
}

export function ReviewGrid({ items }: { items: Array<{ label: string; value?: string }> }) {
  return (
    <div className="grid gap-3 rounded-2xl bg-cream p-5 sm:grid-cols-2 sm:p-6">
      {items.filter((item) => item.value).map((item) => (
        <div key={item.label} className="border-b border-navy/8 pb-3">
          <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-gold">{item.label}</p>
          <p className="mt-1 whitespace-pre-line text-sm leading-6 text-navy/70">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export function InquiryActions({
  step,
  totalSteps,
  isPending,
  onBack,
  onNext,
  submitLabel,
}: {
  step: number;
  totalSteps: number;
  isPending: boolean;
  onBack: () => void;
  onNext: () => void;
  submitLabel: string;
}) {
  return (
    <div className="mt-7 flex flex-col-reverse gap-3 border-t border-navy/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
      {step > 0 ? (
        <button type="button" onClick={onBack} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-navy/12 px-4 text-xs font-extrabold uppercase tracking-[.13em] text-navy/60 transition hover:border-navy/30 hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
      ) : <span className="hidden sm:block" />}
      {step < totalSteps - 1 ? (
        <button type="button" onClick={onNext} className="button-gold w-full justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto sm:min-w-48">
          Continue <ArrowRight className="h-4 w-4" />
        </button>
      ) : (
        <button type="submit" disabled={isPending} className="button-gold w-full justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-48">
          {isPending ? "Sending…" : <>{submitLabel} <Send className="h-4 w-4" /></>}
        </button>
      )}
    </div>
  );
}

export function InquirySuccess({
  eyebrow = "Request received",
  title = "We’ve got it.",
  description,
  primary,
  secondary,
  focusRef,
}: {
  eyebrow?: string;
  title?: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  focusRef?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={focusRef} tabIndex={-1} className="flex min-h-[610px] flex-col justify-center outline-none">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold"><CheckCircle2 className="h-8 w-8" /></div>
      <p className="mt-8 text-xs font-extrabold uppercase tracking-[.22em] text-gold">{eyebrow}</p>
      <h2 className="mt-3 font-condensed text-5xl font-extrabold uppercase leading-[.92] text-navy sm:text-6xl">{title}</h2>
      <p className="mt-5 max-w-xl text-base leading-7 text-navy/62">{description}</p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href={primary.href} className="button-gold">{primary.label}</Link>
        {secondary && <Link href={secondary.href} className="inline-flex min-h-13 items-center rounded-xl border border-navy/15 px-5 text-xs font-extrabold uppercase tracking-[.12em] text-navy transition hover:border-navy/35">{secondary.label}</Link>}
      </div>
    </div>
  );
}

export function PrivacyNote({ children }: { children?: ReactNode }) {
  return (
    <p className="mt-4 text-center text-xs leading-5 text-navy/45">
      {children ? <>{children} · </> : null}
      <Link href="/privacy" className="underline decoration-navy/20 underline-offset-4 hover:text-navy">Privacy Policy</Link>
    </p>
  );
}
