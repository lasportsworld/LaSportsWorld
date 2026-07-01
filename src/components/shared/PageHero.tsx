import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  tag?: string;
}

export default function PageHero({ title, subtitle, image, tag }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pb-16 pt-32 md:pb-24 md:pt-40">
      {image ? (
        <>
          <Image src={image} alt={title} fill className="absolute inset-0 -z-20 object-cover opacity-35" priority />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(28,51,37,.96),rgba(28,51,37,.78),rgba(28,51,37,.48))]" />
        </>
      ) : (
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#122019,#1c3325_55%,#274035)]" />
      )}
      <div
        aria-hidden
        className="absolute left-0 top-16 h-52 w-80 opacity-[.11]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-20 40c45-28 88-28 128 0s83 28 128 0M-20 82c45-28 88-28 128 0s83 28 128 0M-20 124c45-28 88-28 128 0s83 28 128 0' fill='none' stroke='%23faf8f2' stroke-width='1.4'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        aria-hidden
        className="absolute right-0 bottom-8 h-40 w-48 opacity-[.14]"
        style={{ backgroundImage: "radial-gradient(#c4852a 1.5px, transparent 1.5px)", backgroundSize: "16px 16px" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {tag && <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-gold">{tag}</p>}
        <h1
          className="font-condensed max-w-4xl font-extrabold uppercase leading-[.88] text-white"
          style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
        >
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">{subtitle}</p>}
      </div>

      <div className="absolute inset-x-0 bottom-[-1px] h-14 bg-cream [clip-path:polygon(0_48%,10%_58%,24%_45%,38%_59%,52%_46%,67%_60%,82%_45%,100%_58%,100%_100%,0_100%)]" />
    </section>
  );
}
