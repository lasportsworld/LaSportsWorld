import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  tag?: string;
}

export default function PageHero({ title, subtitle, image, tag }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-navy/8 bg-white pt-24 text-navy sm:pt-28">
      <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-cream" />
      <div className="mx-auto grid min-h-[460px] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-16">
        <div className="relative z-10 max-w-2xl">
          {tag && <p className="mb-4 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[.22em] text-gold"><span className="h-px w-9 bg-gold" />{tag}</p>}
          <h1 className="font-condensed text-5xl font-extrabold uppercase leading-[.88] sm:text-6xl lg:text-7xl">{title}</h1>
          {subtitle && <p className="mt-6 max-w-xl text-base leading-7 text-navy/62 sm:text-lg">{subtitle}</p>}
        </div>
        {image ? (
          <div className="relative h-72 overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] sm:h-96 lg:h-[430px]">
            <Image src={image} alt={title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 ring-1 ring-inset ring-navy/10" />
          </div>
        ) : (
          <div className="relative hidden h-[360px] lg:block" aria-hidden>
            <div className="absolute inset-8 rounded-full border border-navy/10" />
            <div className="absolute inset-20 rounded-full border border-gold/28" />
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-navy/8" />
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-navy/8" />
            <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
          </div>
        )}
      </div>
    </section>
  );
}
