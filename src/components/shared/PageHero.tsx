import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  tag?: string;
}

export default function PageHero({ title, subtitle, image, tag }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {image && (
        <>
          <Image src={image} alt={title} fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
        </>
      )}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {tag && (
          <p className="text-gold font-bold text-xs uppercase tracking-widest mb-3">{tag}</p>
        )}
        <h1 className="font-condensed font-extrabold text-white uppercase leading-none"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/60 text-lg md:text-xl mt-4 max-w-2xl">{subtitle}</p>
        )}
        <div className="divider-gold mt-6" />
      </div>
    </section>
  );
}
