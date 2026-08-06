"use client";

import { useActionState } from "react";
import Link from "next/link";
import { ClipboardList } from "lucide-react";
import { submitRegistration, type RegistrationState } from "@/app/actions/registration";
import { participantAgeOptions } from "@/lib/participant-age";

const initialState: RegistrationState = { status: "idle" };

const programLabels: Record<string, string> = {
  "summer-camp": "Summer Camp",
  "winter-camp": "Winter Camp",
  "day-camp": "Day Camp",
  "passover-camp": "Passover Camp",
  "private-lessons": "Private Coaching",
  "clinics": "Group Coaching & Pods",
  "parties": "Parties & Events",
  "work-with-us": "Work With Us",
};

interface Props {
  slug: string;
}

export default function RegistrationForm({ slug }: Props) {
  const [state, formAction, isPending] = useActionState(submitRegistration, initialState);

  const programLabel = programLabels[slug] ?? slug;

  if (state.status === "success") {
    return (
      <div className="bg-navy-light border border-gold/30 rounded-3xl p-12 flex flex-col items-center justify-center text-center min-h-[500px]">
        <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-6">
          <span className="text-gold text-4xl">✓</span>
        </div>
        <h3 className="font-condensed font-bold text-white text-4xl uppercase mb-3">
          You&rsquo;re Registered!
        </h3>
        <p className="text-white/60 max-w-sm">
          We received your registration for <span className="text-gold font-semibold">{programLabel}</span>. We&rsquo;ll review the details and follow up with next steps.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors text-sm";

  const isWorkWithUs = slug === "work-with-us";

  return (
    <form action={formAction} className="bg-navy-light border border-white/10 rounded-3xl p-8 space-y-5">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
          <ClipboardList className="w-5 h-5 text-gold" />
        </div>
        <div>
          <p className="text-gold text-xs font-bold uppercase tracking-widest">Registering for</p>
          <h2 className="font-condensed font-bold text-white text-2xl uppercase">{programLabel}</h2>
        </div>
      </div>

      {/* Hidden program type */}
      <input type="hidden" name="program_type" value={slug} />
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="registrationWebsite">Website</label>
        <input id="registrationWebsite" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
          {state.message}
        </div>
      )}

      {/* Parent / Contact info */}
      <div>
        <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-semibold">
          {isWorkWithUs ? "Your Information" : "Parent / Guardian"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="registrationParentName" className="text-white/50 text-xs uppercase tracking-wide mb-1.5 block">
              {isWorkWithUs ? "Full Name" : "Parent Name"} *
            </label>
            <input id="registrationParentName" name="parent_name" required autoComplete="name" placeholder="Full name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="registrationEmail" className="text-white/50 text-xs uppercase tracking-wide mb-1.5 block">Email *</label>
            <input id="registrationEmail" type="email" name="email" required autoComplete="email" placeholder="your@email.com" className={inputClass} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="registrationPhone" className="text-white/50 text-xs uppercase tracking-wide mb-1.5 block">Phone *</label>
            <input id="registrationPhone" type="tel" name="phone" required autoComplete="tel" placeholder="(213) 301-6226" className={inputClass} />
          </div>
        </div>
      </div>

      {/* Child info (hidden for work-with-us) */}
      {!isWorkWithUs && (
        <div>
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-semibold">Child&rsquo;s Information</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="registrationChildName" className="text-white/50 text-xs uppercase tracking-wide mb-1.5 block">Child&rsquo;s Name *</label>
              <input id="registrationChildName" name="child_name" required autoComplete="off" placeholder="Child's first name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="registrationChildAge" className="text-white/50 text-xs uppercase tracking-wide mb-1.5 block">Age *</label>
              <select id="registrationChildAge" name="child_age" required className={inputClass} defaultValue="">
                <option value="">Choose age...</option>
                {participantAgeOptions.map((age) => <option key={age.value} value={age.label}>{age.label}</option>)}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* If work-with-us, use child fields for applicant context */}
      {isWorkWithUs && (
        <>
          <input type="hidden" name="child_name" value="N/A" />
          <input type="hidden" name="child_age" value="N/A" />
        </>
      )}

      {/* Notes */}
      <div>
        <label htmlFor="registrationNotes" className="text-white/50 text-xs uppercase tracking-wide mb-1.5 block">
          {isWorkWithUs
            ? "Tell us about yourself & your coaching experience"
            : "Anything else we should know? (allergies, scheduling, sport preference…)"}
        </label>
        <textarea
          id="registrationNotes"
          name="notes"
          rows={4}
          placeholder={
            isWorkWithUs
              ? "Sports background, availability, why you want to coach..."
              : "Optional notes..."
          }
          className={inputClass + " resize-none"}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="button-gold w-full disabled:opacity-70"
      >
        {isPending ? "Submitting..." : `Register for ${programLabel}`}
      </button>

      <p className="text-white/30 text-xs text-center">
        We&rsquo;ll review your registration and follow up by email.
      </p>
      <p className="text-center text-xs text-white/35">
        <Link href="/privacy" className="underline decoration-white/20 underline-offset-4 hover:text-white">Privacy Policy</Link>
      </p>
    </form>
  );
}
