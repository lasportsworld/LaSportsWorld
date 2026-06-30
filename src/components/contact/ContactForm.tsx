"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="bg-navy-light border border-gold/30 rounded-3xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
          <span className="text-gold text-3xl">✓</span>
        </div>
        <h3 className="font-condensed font-bold text-white text-3xl uppercase mb-2">Message Sent!</h3>
        <p className="text-white/60">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors text-sm";

  return (
    <form action={formAction} className="bg-navy-light border border-white/10 rounded-3xl p-8 space-y-5">
      <h2 className="font-condensed font-bold text-white text-3xl uppercase mb-2">Send a Message</h2>

      {state.status === "error" && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-white/50 text-xs uppercase tracking-wide mb-1.5 block">Name *</label>
          <input
            name="name"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-white/50 text-xs uppercase tracking-wide mb-1.5 block">Email *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="text-white/50 text-xs uppercase tracking-wide mb-1.5 block">Subject</label>
        <select name="subject" className={inputClass}>
          <option value="">Select a topic...</option>
          <option value="private-lessons">Private Lessons</option>
          <option value="clinics">Clinics</option>
          <option value="parties">Parties &amp; Events</option>
          <option value="summer-camp">Summer Camp</option>
          <option value="winter-camp">Winter Camp</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="text-white/50 text-xs uppercase tracking-wide mb-1.5 block">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us what you need..."
          className={inputClass + " resize-none"}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full flex items-center justify-center gap-2 bg-gold text-navy font-bold uppercase tracking-wide px-6 py-4 rounded-full hover:bg-gold-light transition-colors disabled:opacity-70"
      >
        {isPending ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
      </button>
    </form>
  );
}
