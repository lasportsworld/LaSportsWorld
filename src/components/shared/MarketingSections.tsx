import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type CtaLink = { label: string; href: string };

export function ServiceHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  note,
  imagePosition = "center",
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  note?: string;
  imagePosition?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-24 text-white sm:pt-28 lg:min-h-[680px] lg:pt-0">
      <div className="absolute inset-0 -z-20 bg-navy" />
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[58%] lg:block">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover"
          style={{ objectPosition: imagePosition }}
          sizes="58vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-navy/10" />
      </div>
      <div className="brand-grid absolute inset-0 -z-10 opacity-[.13]" />

      <div className="mx-auto grid min-h-[560px] max-w-7xl items-center px-4 sm:px-6 lg:min-h-[680px] lg:grid-cols-[.88fr_1.12fr] lg:px-8">
        <div className="relative z-10 max-w-2xl py-16 lg:py-24">
          <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[.24em] text-gold">
            <span className="h-px w-10 bg-gold" /> {eyebrow}
          </p>
          <h1 className="max-w-3xl font-condensed text-5xl font-extrabold uppercase leading-[.88] sm:text-6xl lg:text-[5.5rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta && (
                <Link href={primaryCta.href} className="button-gold">
                  {primaryCta.label} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="button-ghost">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
          {note && <p className="mt-6 text-xs font-semibold uppercase tracking-[.16em] text-white/45">{note}</p>}
        </div>
      </div>

      <div className="relative h-72 overflow-hidden lg:hidden">
        <Image src={image} alt={imageAlt} fill priority className="object-cover" style={{ objectPosition: imagePosition }} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy to-transparent" />
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && <p className="mb-3 text-xs font-extrabold uppercase tracking-[.22em] text-gold">{eyebrow}</p>}
      <h2 className={`font-condensed text-4xl font-extrabold uppercase leading-[.94] sm:text-5xl lg:text-6xl ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {description && <p className={`mt-5 max-w-2xl text-base leading-7 ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/65" : "text-navy/62"}`}>{description}</p>}
    </div>
  );
}

export function EditorialSplit({
  eyebrow,
  title,
  children,
  image,
  imageAlt,
  imagePosition = "center",
  reverse = false,
  dark = false,
  accent,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  reverse?: boolean;
  dark?: boolean;
  accent?: string;
}) {
  return (
    <section className={`relative overflow-hidden py-20 lg:py-28 ${dark ? "bg-navy text-white" : "bg-cream text-navy"}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/15 sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image src={image} alt={imageAlt} fill className="object-cover transition duration-700 hover:scale-[1.025]" style={{ objectPosition: imagePosition }} sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div className="absolute -bottom-5 -right-2 h-28 w-28 rounded-full border-[18px] border-gold/80 sm:-right-6" aria-hidden />
          {accent && (
            <div className="absolute -bottom-6 left-4 max-w-[250px] rounded-2xl bg-gold px-5 py-4 font-condensed text-2xl font-extrabold uppercase leading-none text-navy shadow-xl sm:left-8">
              {accent}
            </div>
          )}
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          <SectionHeading eyebrow={eyebrow} title={title} light={dark} />
          <div className={`mt-7 space-y-5 text-base leading-8 ${dark ? "text-white/68" : "text-navy/66"}`}>{children}</div>
        </div>
      </div>
    </section>
  );
}

export type FeatureItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  href?: string;
  label?: string;
};

export function FeaturePanels({ items, dark = false }: { items: FeatureItem[]; dark?: boolean }) {
  return (
    <div className={`grid gap-5 ${items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
      {items.map((item, index) => {
        const Icon = item.icon;
        const content = (
          <>
            {item.image && (
              <div className="relative h-56 overflow-hidden">
                <Image src={item.image} alt="" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 font-condensed text-6xl font-extrabold text-white/25">0{index + 1}</span>
              </div>
            )}
            <div className="p-6 sm:p-8">
              {Icon && <Icon className="mb-5 h-8 w-8 text-gold" strokeWidth={1.7} />}
              {item.label && <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[.2em] text-gold">{item.label}</p>}
              <h3 className={`font-condensed text-2xl font-extrabold uppercase ${dark ? "text-white" : "text-navy"}`}>{item.title}</h3>
              <p className={`mt-3 text-sm leading-6 ${dark ? "text-white/58" : "text-navy/58"}`}>{item.description}</p>
              {item.href && <span className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.14em] text-gold">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>}
            </div>
          </>
        );
        const className = `group overflow-hidden rounded-[1.5rem] border transition duration-300 hover:-translate-y-1 hover:shadow-xl ${dark ? "border-white/10 bg-white/[.055]" : "border-navy/8 bg-white"}`;
        return item.href ? <Link key={item.title} href={item.href} className={className}>{content}</Link> : <article key={item.title} className={className}>{content}</article>;
      })}
    </div>
  );
}

export function ProcessTimeline({ steps, light = false }: { steps: Array<{ title: string; description: string }>; light?: boolean }) {
  return (
    <ol className="relative grid gap-4 lg:grid-cols-5 lg:gap-0">
      <div className={`absolute left-[10%] right-[10%] top-7 hidden h-px lg:block ${light ? "bg-white/20" : "bg-navy/15"}`} aria-hidden />
      {steps.map((step, index) => (
        <li key={step.title} className={`relative grid grid-cols-[3.5rem_1fr] gap-4 rounded-2xl p-4 lg:block lg:px-4 lg:py-0 lg:text-center ${light ? "bg-white/[.045] lg:bg-transparent" : "bg-white lg:bg-transparent"}`}>
          <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-gold bg-navy font-condensed text-2xl font-extrabold text-white shadow-lg lg:mx-auto">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="lg:mt-5">
            <h3 className={`font-condensed text-xl font-extrabold uppercase ${light ? "text-white" : "text-navy"}`}>{step.title}</h3>
            <p className={`mt-1 text-sm leading-5 ${light ? "text-white/55" : "text-navy/55"}`}>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Checklist({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold ${light ? "bg-white/[.06] text-white/80" : "bg-white text-navy/75"}`}>
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-navy"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function PhotoMosaic({ images }: { images: Array<{ src: string; alt: string; position?: string }> }) {
  return (
    <div className="grid h-[520px] grid-cols-12 grid-rows-12 gap-3 sm:h-[620px]">
      {images.slice(0, 3).map((image, index) => {
        const layout = index === 0 ? "col-span-8 row-span-7" : index === 1 ? "col-span-4 row-span-5" : "col-span-4 row-span-7 col-start-9 row-start-6";
        return <div key={image.src} className={`relative overflow-hidden rounded-2xl ${layout}`}><Image src={image.src} alt={image.alt} fill className="object-cover" style={{ objectPosition: image.position ?? "center" }} sizes="50vw" /></div>;
      })}
      <div className="col-span-8 row-span-5 flex items-end rounded-2xl bg-gold p-6 text-navy sm:p-8">
        <p className="max-w-xl font-condensed text-3xl font-extrabold uppercase leading-[.95] sm:text-4xl">Real coaches. Real connection. A lot of joyful movement.</p>
      </div>
    </div>
  );
}

export function PageCTA({
  eyebrow,
  title,
  description,
  cta,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  cta: CtaLink;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 text-white lg:py-28">
      <Image src={image} alt={imageAlt} fill className="-z-20 object-cover opacity-35" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/35" />
      <div className="brand-grid absolute inset-0 -z-10 opacity-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[.22em] text-gold">{eyebrow}</p>
          <h2 className="mt-4 font-condensed text-5xl font-extrabold uppercase leading-[.9] sm:text-6xl lg:text-7xl">{title}</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/68">{description}</p>
          <Link href={cta.href} className="button-gold mt-8">{cta.label} <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
