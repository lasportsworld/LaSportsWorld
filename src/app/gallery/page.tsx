import PageHero from "@/components/shared/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | LA Sports World",
  description: "Photos from LA Sports World camps, clinics, and training sessions.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Action shots, camp memories, and proud moments from our community."
        tag="Photos"
      />
      <GalleryGrid />
    </>
  );
}
