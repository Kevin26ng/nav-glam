import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "UH presents नव GLAM — a modern Indian wardrobe.",
};

export default function AboutPage() {
  return (
    <div className="bg-ivory px-5 pb-20 pt-32 md:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow text-bronze">The house</p>
        <h1 className="mt-4 font-serif text-6xl leading-[0.9] md:text-7xl">UH presents नव GLAM.</h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-stone">
          <p>A wardrobe of lehenga sets, free-size blouses, an embroidered jacket and flared skirts. The photographs on this site are the garments themselves.</p>
          <p>The consumer-facing name is नव GLAM. The presentation line above it is UH presents.</p>
          <p>Prices on this site follow the house list, from ₹1,250 to ₹4,200. They are not discounts.</p>
          <p>No founder biography, artisan count, sustainability seal, celebrity or award is stated here, because none was supplied.</p>
        </div>
        <Link href="/story" className="btn mt-10">The point of view</Link>
      </div>
    </div>
  );
}
