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
          <p>A wardrobe of 3-piece sets, 2-piece sets, free-size blouses, padded free-size blouses, jackets, skirts, skirt-only pieces and 15m-flare skirts.</p>
          <p>The consumer-facing name is नव GLAM. The presentation line above it is UH presents. The mark, when the file is placed at public/brand/nav-glam-logo.png, is the gold monogram exactly as supplied. Until then, the wordmark holds the place.</p>
          <p>Prices on this site are the figures supplied with the catalog: ₹1,250, ₹1,300, ₹1,500, ₹2,800, ₹3,200, ₹3,300, ₹3,400, ₹3,500, ₹3,800 and ₹4,200. Names such as Nav Edit 01 or Heritage Bloom are editorial placeholders.</p>
          <p>No founder biography, artisan count, sustainability seal, celebrity or award is stated here, because none was supplied.</p>
        </div>
        <Link href="/story" className="btn mt-10">The point of view</Link>
      </div>
    </div>
  );
}
