import type { Metadata } from "next";
import Link from "next/link";
import { lookbookChapters } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Lookbook",
  description: "An editorial look through the नव GLAM wardrobe: sets, blouses, jackets and skirts.",
};

export default function LookbookPage() {
  return (
    <div className="bg-ink text-ivory">
      <header className="px-5 pb-8 pt-28 md:px-10">
        <p className="eyebrow text-gold">Lookbook</p>
        <h1 className="mt-3 max-w-4xl font-serif text-6xl leading-[0.9] md:text-8xl">The cloth, not a costume.</h1>
      </header>
      {lookbookChapters.map((chapter) => (
        <section key={chapter.id} className="relative min-h-[100svh]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={chapter.image} alt="" className="kenburns absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/10" />
          <div className="relative mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-end px-5 pb-16 md:px-10">
            <p className="eyebrow text-gold">{chapter.index}</p>
            <h2 className="mt-3 max-w-3xl font-serif text-5xl md:text-7xl">{chapter.title}</h2>
            <p className="mt-4 max-w-md text-base text-ivory/85">{chapter.copy}</p>
            <Link href={chapter.href} className="btn mt-8 w-fit">{chapter.cta}</Link>
          </div>
        </section>
      ))}
    </div>
  );
}
