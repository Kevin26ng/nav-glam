import Link from "next/link";
import { Newsletter } from "@/components/home/Newsletter";

const columns = [
  {
    title: "House",
    links: [
      ["Shop", "/shop"],
      ["Collections", "/collections"],
      ["Lookbook", "/lookbook"],
      ["Story", "/story"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Customer",
    links: [
      ["Shipping", "/shipping"],
      ["Returns", "/returns"],
      ["Size guide", "/size-guide"],
      ["Care", "/care"],
      ["FAQs", "/faqs"],
    ],
  },
  {
    title: "Social",
    links: [
      ["Instagram", "/contact#social"],
      ["Pinterest", "/contact#social"],
      ["YouTube", "/contact#social"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
      ["Refund policy", "/refund"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ivory">
      <Newsletter />
      <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-10">
        <p className="font-sans text-[0.62rem] tracking-[0.42em] uppercase text-gold">UH presents</p>
        <p className="mt-3 flex items-baseline gap-3">
          <span className="font-deva text-5xl md:text-7xl">नव</span>
          <span className="font-serif text-5xl tracking-[0.14em] md:text-7xl">GLAM</span>
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="eyebrow text-gold">{column.title}</p>
              <ul className="mt-4 space-y-2">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-ivory/80 hover:text-ivory">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-14 max-w-xl text-sm leading-relaxed text-ivory/60">
          UH presents नव GLAM. The photographs are the current cloth: lehengas, blouses, the Hathi Mor jacket and skirts. Checkout on this site does not take payment yet. Social profiles are not linked yet.
        </p>
        <p className="mt-6 text-xs tracking-[0.18em] uppercase text-ivory/45">© {new Date().getFullYear()} UH presents नव GLAM</p>
      </div>
    </footer>
  );
}
