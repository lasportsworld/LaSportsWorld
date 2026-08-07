import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const controlClass = "w-full rounded-lg border border-navy/15 bg-cream px-4 py-3.5 text-base text-navy outline-none transition placeholder:text-navy/30 hover:border-navy/30 focus:border-navy/55 focus:bg-white focus:ring-3 focus:ring-gold/12 disabled:cursor-not-allowed disabled:opacity-55";

export function InquiryProgress({ steps, current }: { steps: string[]; current: number }) {
  return (
    <nav aria-label={`Form progress: step ${current + 1} of ${steps.length}, ${steps[current]}`}>
      <div className="flex items-center justify-between gap-3 sm:hidden">
        <p className="text-[11px] font-extrabold uppercase tracking-[.18em] text-gold">Step {current + 1} of {steps.length}</p>
        <p className="text-xs font-extrabold text-navy">{steps[current]}</p>
      </div>
      <ol className="mt-3 grid grid-cols-4 gap-2 sm:mt-0 sm:gap-3">
        {steps.map((step, index) => (
          <li key={step} aria-current={index === current ? "step" : undefined}>
            <div className={`h-2 rounded-full transition-all ${index < current ? "bg-navy" : index === current ? "bg-gold shadow-[0_0_0_3px_rgba(196,133,42,.14)]" : "bg-navy/18"}`} />
            <div className="mt-2 hidden items-center gap-2 sm:flex">
              <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] font-extrabold ${index < current ? "bg-navy text-white" : index === current ? "bg-gold text-navy" : "bg-navy/10 text-navy/45"}`}>{index + 1}</span>
              <span className={`text-[10px] font-extrabold uppercase tracking-[.08em] ${index === current ? "text-navy" : "text-navy/42"}`}>{step}</span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Field({
  label,
  htmlFor,
  helper,
  error,
  required,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  helper?: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-extrabold text-navy">
        {label} {required && <span className="text-gold" aria-hidden>*</span>}
        {optional && <span className="ml-1 font-semibold text-navy/38">(optional)</span>}
      </label>
      {children}
      {helper && !error && <p className="mt-1.5 text-xs leading-5 text-navy/45">{helper}</p>}
      {error && <p id={`${htmlFor}-error`} className="mt-1.5 text-xs font-semibold text-red-700">{error}</p>}
    </div>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  const describedBy = props["aria-describedby"] ?? (props["aria-invalid"] && props.id ? `${props.id}-error` : undefined);
  return <input {...props} aria-describedby={describedBy} className={`${controlClass} ${props.className ?? ""}`} />;
}

export function SelectInput(props: SelectHTMLAttributes<HTMLSelectElement>) {
  const describedBy = props["aria-describedby"] ?? (props["aria-invalid"] && props.id ? `${props.id}-error` : undefined);
  return <select {...props} aria-describedby={describedBy} className={`${controlClass} ${props.className ?? ""}`} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const describedBy = props["aria-describedby"] ?? (props["aria-invalid"] && props.id ? `${props.id}-error` : undefined);
  return <textarea {...props} aria-describedby={describedBy} className={`${controlClass} resize-y ${props.className ?? ""}`} />;
}

export function ChoiceCard({
  name,
  value,
  title,
  description,
  checked,
  onChange,
}: {
  name: string;
  value: string;
  title: string;
  description: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className={`block cursor-pointer border-l-2 border-y border-r-0 p-4 transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gold ${checked ? "border-l-gold border-y-navy/12 bg-gold/[.07]" : "border-l-transparent border-y-navy/10 bg-cream/60 hover:bg-cream"}`}>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="sr-only" />
      <span className="flex items-start gap-3">
        <span className={`mt-0.5 h-5 w-5 shrink-0 rounded-full border-2 p-1 ${checked ? "border-gold" : "border-navy/25"}`}><span className={`block h-full w-full rounded-full ${checked ? "bg-gold" : ""}`} /></span>
        <span><span className="block text-sm font-extrabold text-navy">{title}</span><span className="mt-1 block text-xs leading-5 text-navy/50">{description}</span></span>
      </span>
    </label>
  );
}

export function CheckboxChip({ name, value, label = value, checked, onChange }: { name: string; value: string; label?: string; checked: boolean; onChange: () => void }) {
  return (
    <label className={`cursor-pointer rounded-lg border px-4 py-2.5 text-sm font-bold transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gold ${checked ? "border-navy bg-navy text-white" : "border-navy/12 bg-cream text-navy/65 hover:border-navy/30 hover:bg-white"}`}>
      <input type="checkbox" name={name} value={value} checked={checked} onChange={onChange} className="sr-only" />
      {label}
    </label>
  );
}
