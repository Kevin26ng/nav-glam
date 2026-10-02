import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MixMatch } from "@/components/home/MixMatch";
import { Reveal } from "@/components/motion/Reveal";
import { ProductCard } from "@/components/product/ProductCard";
import { GarmentStudy, HeroStudy } from "@/components/visual/GarmentStudy";
import { getFeatured } from "@/lib/catalog";
import { collections, homeMoods } from "@/lib/collections";
import { journal } from "@/lib/journal";
import type { Silhouette, StudyKey } from "@/lib/studies";

const edits: Array<{ href: string; title: string; kicker: string; study: StudyKey; silhouette: Silhouette }> = [
  { href: "/shop/sets?piece=3", title: "The 3-piece edit", kicker: "Sets", study: "gulnaar", silhouette: "set" },
  { href: "/shop/blouses", title: "Blouse stories", kicker: "Free size", study: "ivory", silhouette: "blouse" },
  { href: "/shop/jackets", title: "The jacket edit", kicker: "Layer", study: "midnight", silhouette: "jacket" },
  { href: "/shop/skirts", title: "Skirt culture", kicker: "Volume", study: "turquoise", silhouette: "flare" },
];

const spread: Array<{ title: string; caption: string; study: StudyKey; silhouette: Silhouette; wide?: boolean }> = [
  { title: "01 — Volume", caption: "A skirt that holds the room.", study: "rani", silhouette: "flare" },
  { title: "02 — The blouse", caption: "Free size. Worn inside the set, or out of it.", study: "ivory", silhouette: "blouse" },
  { title: "03 — Textile", caption: "Color before costume.", study: "emerald", silhouette: "set", wide: true },
  { title: "04 — The jacket", caption: "The piece that makes it now.", study: "ink", silhouette: "jacket" },
  { title: "05 — After dark", caption: "Same wardrobe. Later hour.", study: "maroon", silhouette: "set2" },
];

const mosaic: Array<{ study: StudyKey; silhouette: Silhouette; label: string }> = [
  { study: "gulnaar", silhouette: "set", label: "Editorial study, set" },
  { study: "midnight", silhouette: "jacket", label: "Editorial study, jacket" },
  { study: "ivory", silhouette: "blouse", label: "Editorial study, blouse detail" },
  { study: "royal", silhouette: "skirt", label: "Editorial study, skirt" },
  { study: "saffron", silhouette: "set2", label: "Editorial study, two-piece" },
  { study: "turquoise", silhouette: "flare", label: "Editorial study, flare" },
];

export function HomePage() {
  const featured = getFeatured().slice(0, 8);
  return (
    <>
      <section className="relative min-h-[100svh] bg-ink text-ivory">
        <div className="grid min-h-[100svh] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="relative z-10 flex flex-col justify-end px-5 pb-16 pt-32 md:px-10 md:pb-20 lg:justify-center lg:pt-24">
            <p className="eyebrow text-gold">UH presents</p>
            <h1 className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-deva text-6xl md:text-8xl">नव</span>
              <span className="font-serif text-6xl tracking-[0.12em] md:text-8xl">GLAM</span>
            </h1>
            <p className="mt-6 max-w-md font-serif text-3xl leading-tight md:text-4xl">Heritage, reimagined.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn">Shop the edit</Link>
              <Link href="/story" className="btn border-ivory/40">Explore the story</Link>
            </div>
          </div>
          <div className="absolute inset-0 lg:relative">
            <HeroStudy className="h-full min-h-[100svh] w-full opacity-80 lg:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10 lg:bg-gradient-to-r lg:from-ink lg:via-ink/20 lg:to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-24 md:px-10 md:py-36">
        <Reveal className="mx-auto max-w-5xl text-center">
          <h2 className="display text-[clamp(3.4rem,9vw,7.4rem)]">
            Tradition
            <span className="mt-2 block">with an attitude.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-stone md:text-lg">
            A modern Indian wardrobe for the hours between a wedding and a weeknight. Sets, blouses, jackets and skirts — heritage in the silhouette, none of the costume.
          </p>
        </Reveal>
      </section>

      <section className="bg-ivory px-5 pb-20 md:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-4 md:grid-cols-2">
          {edits.map((edit) => (
            <Link key={edit.href} href={edit.href} className="group relative block min-h-[70vw] overflow-hidden bg-ink md:min-h-[34rem]">
              <GarmentStudy study={edit.study} silhouette={edit.silhouette} className="study-zoom absolute inset-0 h-full w-full" label={edit.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory md:p-8">
                <p className="eyebrow text-gold">{edit.kicker}</p>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <h3 className="font-serif text-4xl md:text-6xl">{edit.title}</h3>
                  <ArrowUpRight className="mb-2 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <span className="card-line mt-4 block h-px w-24 bg-gold" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-ivory md:py-24">
        <div className="mb-8 flex items-end justify-between px-5 md:px-10">
          <div>
            <p className="eyebrow text-gold">The new Indian wardrobe</p>
            <h2 className="mt-3 font-serif text-5xl md:text-6xl">A spread, not a grid.</h2>
          </div>
          <p className="hidden max-w-xs text-sm text-ivory/70 md:block">Scroll the edit. Silhouette, color, layer.</p>
        </div>
        <div className="hide-scroll flex snap-x gap-4 overflow-x-auto px-5 pb-4 md:px-10">
          {spread.map((panel) => (
            <figure key={panel.title} className={`snap-start shrink-0 ${panel.wide ? "w-[86vw] md:w-[46vw]" : "w-[78vw] md:w-[28vw]"}`}>
              <div className="h-[70vh] overflow-hidden bg-ink">
                <GarmentStudy study={panel.study} silhouette={panel.silhouette} variant={panel.wide ? "textile" : "portrait"} className="h-full w-full" label={panel.caption} />
              </div>
              <figcaption className="mt-4">
                <p className="font-serif text-3xl">{panel.title}</p>
                <p className="mt-1 text-sm text-ivory/70">{panel.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-ivory px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <p className="eyebrow text-bronze">Shop by mood</p>
          <h2 className="mt-3 max-w-3xl font-serif text-5xl leading-none md:text-7xl">Where you are wearing it.</h2>
          <p className="mt-4 max-w-lg text-sm text-stone">Moods are styling edits. Every piece keeps the category it has in the catalog.</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {homeMoods.map((slug) => {
              const mood = collections.find((item) => item.slug === slug);
              if (!mood) return null;
              return (
                <Link key={slug} href={`/collections/${slug}`} className="group relative flex min-h-64 items-end overflow-hidden bg-ink p-6 text-ivory">
                  <GarmentStudy study={mood.study} silhouette="set" variant="textile" className="study-zoom absolute inset-0 h-full w-full opacity-80" label={mood.title} />
                  <div className="absolute inset-0 bg-ink/35" />
                  <div className="relative">
                    <h3 className="font-serif text-5xl">{mood.title}</h3>
                    <span className="card-line mt-4 block h-px w-16 bg-gold" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-bronze">Featured</p>
              <h2 className="mt-3 font-serif text-5xl md:text-6xl">From the edit</h2>
            </div>
            <Link href="/shop" className="eyebrow hover:text-bronze">Shop all</Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
            {featured.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <p className="eyebrow text-bronze">The Nav Glam journal</p>
          <h2 className="mt-3 font-serif text-5xl md:text-6xl">Read the wardrobe.</h2>
          <div className="mt-10 grid gap-px bg-ink/10 md:grid-cols-2">
            {journal.map((entry) => (
              <Link key={entry.slug} href={entry.href} className="group bg-ivory p-8 md:p-10">
                <p className="eyebrow text-bronze">{entry.kicker}</p>
                <h3 className="mt-4 font-serif text-4xl leading-none group-hover:text-bronze md:text-5xl">{entry.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">{entry.excerpt}</p>
                <span className="card-line mt-6 block h-px w-16 bg-gold" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MixMatch />

      <section className="bg-ivory px-5 py-20 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <p className="eyebrow text-bronze">Seen in Nav Glam</p>
          <h2 className="mt-3 font-serif text-5xl md:text-6xl">The mosaic is waiting.</h2>
          <p className="mt-4 max-w-xl text-sm text-stone">
            Community photographs are not published here. These frames are editorial studies — stand-ins for customer looks, close-ups and behind-the-scenes, clearly not real posts.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-3">
            {mosaic.map((item) => (
              <div key={item.label} className="relative aspect-square overflow-hidden">
                <GarmentStudy study={item.study} silhouette={item.silhouette} variant="detail" className="h-full w-full" label={item.label} />
                <span className="absolute bottom-2 left-2 bg-ivory/90 px-2 py-1 text-[0.58rem] tracking-[0.14em] uppercase">Study</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-ivory md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h2 className="display text-[clamp(4rem,10vw,8rem)]">
            Not old.
            <span className="block">Not new.</span>
            <span className="block text-gold">Nav.</span>
          </h2>
          <div className="max-w-md pb-3">
            <p className="text-base leading-relaxed text-ivory/80">
              Indian silhouettes. A contemporary hand. Clothes for self-expression, not for a single kind of occasion or a single kind of woman. Heritage without the rigidity.
            </p>
            <Link href="/story" className="btn mt-8">Read the point of view</Link>
          </div>
        </div>
      </section>
    </>
  );
}
