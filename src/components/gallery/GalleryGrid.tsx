"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/images/lasw_slideshow_001.jpg", alt: "Youth basketball training", category: "Basketball" },
  { src: "/images/lasw_slideshow_003.jpg", alt: "Camp action", category: "Camp" },
  { src: "/images/lasw_slideshow_004.jpg", alt: "Football drills", category: "Football" },
  { src: "/images/lasw_slideshow_005.jpg", alt: "Group training session", category: "Training" },
  { src: "/images/lasw_slideshow_008.jpg", alt: "Coaching moment", category: "Training" },
  { src: "/images/lasw_slideshow_013.jpg", alt: "Summer camp fun", category: "Camp" },
  { src: "/images/lasw_slideshow_0014.jpg", alt: "Camp highlights", category: "Camp" },
  { src: "/images/lasw_slideshow_0015.jpg", alt: "Sports activities", category: "Training" },
];

const categories = ["All", "Basketball", "Football", "Soccer", "Camp", "Training"];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border transition-colors ${
                active === cat
                  ? "bg-gold text-navy border-gold"
                  : "border-white/20 text-white/60 hover:border-gold/40 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-white/40 py-20">No photos in this category yet.</p>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <div
                key={img.src}
                className="relative break-inside-avoid overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={i % 3 === 0 ? 500 : 380}
                  className="w-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="rounded-md bg-navy/70 px-2.5 py-1 text-xs font-bold uppercase text-white/80 backdrop-blur-sm">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
