import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  tag?: string;
}

export default function PageHero({ title, subtitle, image, tag }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-24 text-white sm:pt-28">
      <div className="brand-grid absolute inset-0 -z-10 opacity-[.12]" />
      <div className="mx-auto grid min-h-[460px] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-16">
        <div className="relative z-10 max-w-2xl">
          {tag && <p className="mb-4 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[.22em] text-gold"><span className="h-px w-9 bg-gold" />{tag}</p>}
          <h1 className="font-condensed text-5xl font-extrabold uppercase leading-[.88] sm:text-6xl lg:text-7xl">{title}</h1>
          {subtitle && <p className="mt-6 max-w-xl text-base leading-7 text-white/68 sm:text-lg">{subtitle}</p>}
        </div>
        {image ? (
          <div className="relative h-72 overflow-hidden rounded-tl-[5rem] rounded-br-[5rem] shadow-2xl sm:h-96 lg:h-[430px]">
            <Image src={image} alt={title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        ) : (
          <div className="relative hidden h-[360px] lg:block" aria-hidden>
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <div className="absolute inset-20 rounded-full border border-gold/35" />
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />
            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_80px_rgba(196,133,42,.4)]" />
          </div>
        )}
      </div>
      <div className="h-8 bg-cream [clip-path:polygon(0_0,15%_50%,31%_12%,49%_62%,68%_18%,84%_55%,100%_8%,100%_100%,0_100%)]" />
    </section>
  );
}
