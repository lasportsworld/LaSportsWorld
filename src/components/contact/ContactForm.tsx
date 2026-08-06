"use client";

import { useActionState, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

const SERVICES = [
  { value: "", label: "Select what you need..." },
  { value: "coaching", label: "Coaching" },
  { value: "birthday-party", label: "Birthday Party" },
  { value: "school-organization", label: "School / Organization" },
  { value: "general", label: "General Question" },
];

const LEGACY_COACHING_SERVICES = new Set(["private-coaching", "group-coaching-pods", "coaching"]);

interface ContactFormProps {
  initialService?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export default function ContactForm({
  initialService = "",
  utmSource = "",
  utmMedium = "",
  utmCampaign = "",
}: ContactFormProps) {
  const [service, setService] = useState(LEGACY_COACHING_SERVICES.has(initialService) ? "coaching" : initialService);
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const pathname = usePathname();

  const inputClass =
    "w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors text-sm";
  const labelClass = "text-white/50 text-xs uppercase tracking-wide mb-1.5 block";

  if (service === "coaching") {
    return (
      <div className="bg-navy-light border border-gold/30 rounded-3xl p-8 space-y-4">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">Coaching Inquiry</p>
        <h3 className="font-condensed font-bold text-white text-2xl uppercase">Use the Request Coaching form</h3>
        <p className="text-white/60 text-sm leading-relaxed">Our coaching form asks the right questions about your child, goals, format, and schedule so we can recommend a useful next step.</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/coaching/request?source=contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-navy transition hover:bg-gold-light">
            Request Coaching <ArrowRight className="h-4 w-4" />
          </Link>
          <button type="button" onClick={() => setService("")} className="text-xs font-extrabold uppercase tracking-wide text-white/50 hover:text-white">Choose something else</button>
        </div>
      </div>
    );
  }

  if (service === "school-organization") {
    return (
      <div className="bg-navy-light border border-gold/30 rounded-3xl p-8 space-y-4">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">
          Schools &amp; Organizations
        </p>
        <h3 className="font-condensed font-bold text-white text-2xl uppercase">
          Use the Organization Form
        </h3>
        <p className="text-white/60 text-sm leading-relaxed">
          School, camp, business, and organization inquiries go through a separate
          form so we can route your request correctly.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/schools-organizations"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-navy transition hover:bg-gold-light"
          >
            Go to Organization Form <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setService("")}
            className="text-xs font-extrabold uppercase tracking-wide text-white/50 hover:text-white"
          >
            Choose something else
          </button>
        </div>
      </div>
    );
  }

  if (state.status === "success") {
    return (
      <div className="bg-navy-light border border-gold/30 rounded-3xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
          <span className="text-gold text-3xl">✓</span>
        </div>
        <h3 className="font-condensed font-bold text-white text-3xl uppercase mb-2">
          Got It!
        </h3>
        <p className="text-white/60 max-w-xs">
          Thanks for reaching out — we&apos;ll be in touch soon. For anything urgent,
          call us at{" "}
          <a href="tel:3105550199" className="text-gold hover:underline">
            (310) 555-0199
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="bg-navy-light border border-white/10 rounded-3xl p-8 space-y-5"
    >
      <h2 className="font-condensed font-bold text-white text-3xl uppercase mb-2">
        Tell Us What You Need
      </h2>

      {state.status === "error" && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
          {state.message}
        </div>
      )}

      <input type="hidden" name="sourcePage" value={pathname} />
      <input
        type="hidden"
        name="landingPage"
        value={typeof window !== "undefined" ? window.location.href : ""}
      />
      <input type="hidden" name="utm_source" value={utmSource} />
      <input type="hidden" name="utm_medium" value={utmMedium} />
      <input type="hidden" name="utm_campaign" value={utmCampaign} />
      <input type="hidden" name="timestamp" value={new Date().toISOString()} />

      <div>
        <label className={labelClass}>What do you need? *</label>
        <select
          name="service"
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={inputClass}
        >
          {SERVICES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {service && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>First Name *</label>
              <input name="firstName" required placeholder="Your first name" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Phone *</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="(310) 555-0199"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Email (optional)</label>
            <input type="email" name="email" placeholder="your@email.com" className={inputClass} />
          </div>

          {service === "birthday-party" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Event Date</label>
                  <input type="date" name="field_event_date" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Neighborhood</label>
                  <input name="field_neighborhood" className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Child&apos;s Age</label>
                  <input name="field_child_age" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Estimated Guest Count</label>
                  <input type="number" name="field_guest_count" className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Activity Interests</label>
                <input
                  name="field_activity_interests"
                  placeholder="e.g. basketball, soft play"
                  className={inputClass}
                />
              </div>
            </>
          )}

          <div>
            <label className={labelClass}>
              {service === "general" ? "Message *" : "Anything else we should know?"}
            </label>
            <textarea
              name="details"
              required={service === "general"}
              rows={4}
              placeholder="Tell us what you need..."
              className={inputClass + " resize-none"}
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full flex items-center justify-center gap-2 bg-gold text-navy font-bold uppercase tracking-wide px-6 py-4 rounded-full hover:bg-gold-light transition-colors disabled:opacity-70"
          >
            {isPending ? (
              "Sending..."
            ) : (
              <>
                Submit <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </>
      )}
    </form>
  );
}
