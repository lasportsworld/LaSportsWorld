"use client";

import { useActionState } from "react";
import { ClipboardList } from "lucide-react";
import { submitRegistration, type RegistrationState } from "@/app/actions/registration";

const initialState: RegistrationState = { status: "idle" };

const programLabels: Record<string, string> = {
  "summer-camp": "Summer Camp",
  "winter-camp": "Winter Camp",
  "day-camp": "Day Camp",
  "passover-camp": "Passover Camp",
  "private-lessons": "Private Lessons",
  "clinics": "Clinics",
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
          We received your registration for <span className="text-gold font-semibold">{programLabel}</span>. We&rsquo;ll be in touch within 24 hours with next steps.
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
            <label className="text-white/50 text-xs uppercase tracking-wide mb-1.5 block">
              {isWorkWithUs ? "Full Name" : "Parent Name"} *
            </label>
            <input name="parent_name" required placeholder="Full name" className={inputClass} />
          </div>
          <div>
            <label className="text-white/50 text-xs uppercase tracking-wide mb-1.5 block">Email *</label>
            <input type="email" name="email" required placeholder="your@email.com" className={inputClass} />
          </div>
          <div className="sm:col-span-2">
            <label className="text-white/50 text-xs uppercase tracking-wide mb-1.5 block">Phone *</label>
            <input type="tel" name="phone" required placeholder="(310) 000-0000" className={inputClass} />
          </div>
        </div>
      </div>

      {/* Child info (hidden for work-with-us) */}
      {!isWorkWithUs && (
        <div>
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-semibold">Child&rsquo;s Information</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-white/50 text-xs uppercase tracking-wide mb-1.5 block">Child&rsquo;s Name *</label>
              <input name="child_name" required placeholder="Child's first name" className={inputClass} />
            </div>
            <div>
              <label className="text-white/50 text-xs uppercase tracking-wide mb-1.5 block">Age / Grade *</label>
              <input name="child_age" required placeholder="e.g. 8 years / 3rd grade" className={inputClass} />
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
        <label className="text-white/50 text-xs uppercase tracking-wide mb-1.5 block">
          {isWorkWithUs
            ? "Tell us about yourself & your coaching experience"
            : "Anything else we should know? (allergies, scheduling, sport preference…)"}
        </label>
        <textarea
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
        className="w-full flex items-center justify-center gap-2 bg-gold text-navy font-bold uppercase tracking-wide px-6 py-4 rounded-full hover:bg-gold-light transition-colors disabled:opacity-70 text-sm"
      >
        {isPending ? "Submitting..." : `Register for ${programLabel}`}
      </button>

      <p className="text-white/30 text-xs text-center">
        We&rsquo;ll confirm your registration via email within 24 hours.
      </p>
    </form>
  );
}
