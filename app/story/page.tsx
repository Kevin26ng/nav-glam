import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Story",
  description: "The नव GLAM point of view: Indian silhouettes, styled for now.",
};

const sections = [
  { id: "heritage", kicker: "Heritage", title: "India has never stood still.", body: "Neither should fashion. The clothes in this house start from silhouettes this country already knows — the set, the blouse, the flare — and refuse to freeze them in one kind of occasion." },
  { id: "form", kicker: "Form", title: "The cut is the craft.", body: "A three-piece set can be worn whole. The blouse can leave. The jacket can arrive later. Where the catalog asks for skirt-side stitching, that is part of the form, and it is said on the piece." },
  { id: "color", kicker: "Color", title: "Rang, without the costume.", body: "Rani, emerald, midnight, saffron, ivory. Color is the first language. On this site, until catalog photography is connected, color is shown as a study — not as a claimed dye lot." },
  { id: "movement", kicker: "Movement", title: "How to style a 3-piece set.", body: "Wear the three together when the room asks for it. For a day out, keep the skirt and a free-size blouse. When the hour changes, add the jacket. Build the same idea in Style it your way." },
  { id: "self", kicker: "Self expression", title: "Wear the story. Make it yours.", body: "The customer is not being cast in a wedding, a festival, or a trend. She is being handed Indian clothes that can sit next to the rest of her wardrobe." },
  { id: "future", kicker: "The future of Indian dressing", title: "Not old. Not new. Nav.", body: "नव is the direction: forward, still rooted. This page does not invent a founder, a factory, a certificate or a famous wearer. The point of view is the wardrobe." },
];

export default function StoryPage() {
  return (
    <div className="bg-ivory">
      <header className="px-5 pb-16 pt-32 md:px-10 md:pt-40">
        <p className="eyebrow text-bronze">The story</p>
        <h1 className="mt-4 max-w-5xl font-serif text-6xl leading-[0.9] md:text-8xl">An old language. A new silhouette.</h1>
      </header>
      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className={index % 2 ? "bg-ink text-ivory" : "bg-ivory"}>
          <div className="mx-auto grid max-w-[1500px] gap-8 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">
            <p className={`eyebrow ${index % 2 ? "text-gold" : "text-bronze"}`}>{section.kicker}</p>
            <div>
              <h2 className="font-serif text-5xl leading-none md:text-6xl">{section.title}</h2>
              <p className={`mt-6 max-w-xl text-base leading-relaxed ${index % 2 ? "text-ivory/75" : "text-stone"}`}>{section.body}</p>
            </div>
          </div>
        </section>
      ))}
      <div className="px-5 py-16 md:px-10">
        <Link href="/shop" className="btn btn-solid">Shop the edit</Link>
      </div>
    </div>
  );
}
