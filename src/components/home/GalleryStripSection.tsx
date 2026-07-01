import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const photos = [
  { src: "/images/lasw_slideshow_001.jpg", alt: "Kids running during camp" },
  { src: "/images/lasw_slideshow_003.jpg", alt: "Camp friends with basketballs" },
  { src: "/images/lasw_slideshow_004.jpg", alt: "Kids celebrating at LA Sports World" },
  { src: "/images/lasw_slideshow_005.jpg", alt: "Baseball at LA Sports World" },
  { src: "/images/lasw_slideshow_008.jpg", alt: "Soccer session at camp" },
  { src: "/images/lasw_slideshow_013.jpg", alt: "Young baseball player smiling" },
];

export default function GalleryStripSection() {
  return (
    <section className="bg-cream py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 text-center">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-gold">Gallery</p>
          <h2 className="font-condensed text-navy text-4xl font-extrabold uppercase leading-none md:text-5xl">
            See the LA Sports World Experience
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {photos.map(({ src, alt }) => (
            <Link key={src} href="/gallery" className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-md">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-navy transition hover:text-gold"
          >
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
