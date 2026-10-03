import { Gem, Layers, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Modular Heritage",
    copy: "Traditional wear designed as versatile separates. Wear the lehenga to a wedding, wear the blouse with denim on a Friday night. Maximum utility.",
  },
  {
    icon: Sparkles,
    title: "Zero-Waste Philosophy",
    copy: "We use AI-driven pre-order models to only manufacture what is demanded, eliminating the 30% deadstock waste typical in Indian fashion.",
  },
  {
    icon: Gem,
    title: "Accessible Luxury",
    copy: "By cutting out middlemen and optimizing our local supply chain, we deliver premium craftsmanship at a fraction of boutique prices.",
  },
];

export function WhyNav() {
  return (
    <section className="bg-ivory px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1500px]">
        <p className="eyebrow text-bronze">The model</p>
        <h2 className="mt-3 font-serif text-5xl leading-none md:text-7xl">Why Nav GLAM?</h2>
        <div className="mt-10 grid gap-px bg-ink/10 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="bg-ivory p-6 md:p-8">
              <pillar.icon size={22} strokeWidth={1.4} className="text-bronze" aria-hidden />
              <h3 className="mt-5 font-serif text-3xl leading-none md:text-4xl">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone">{pillar.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
