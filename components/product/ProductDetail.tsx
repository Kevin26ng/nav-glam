"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, X } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { OverlayDialog } from "@/components/ui/OverlayDialog";
import { GarmentStudy } from "@/components/visual/GarmentStudy";
import { formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";
import type { StudyVariant } from "@/lib/studies";
import type { Product } from "@/lib/types";

const views: Array<{ id: StudyVariant; label: string }> = [
  { id: "portrait", label: "Full" },
  { id: "detail", label: "Detail" },
  { id: "textile", label: "Textile" },
];

export function ProductDetail({ product, related }: { product: Product; related: Product[] }) {
  const { add, toggleWish, wished } = useStore();
  const [qty, setQty] = useState(1);
  const [view, setView] = useState<StudyVariant>("portrait");
  const [zoom, setZoom] = useState(false);
  const [open, setOpen] = useState<"story" | "details" | "shipping" | "returns">("story");
  const photo = product.images[0];

  return (
    <div className="bg-ivory pt-24">
      <div className="mx-auto grid max-w-[1500px] gap-8 px-5 py-6 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="relative overflow-hidden bg-mist">
            {photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photo} alt={product.name} className="aspect-[3/4] w-full object-cover" />
            ) : (
              <button className="block w-full" onClick={() => setZoom(true)} aria-label="Open larger study">
                <GarmentStudy study={product.study} silhouette={product.silhouette} variant={view} className="aspect-[3/4] w-full" label={product.name} />
              </button>
            )}
          </div>
          <div className="mt-3 flex gap-2">
            {views.map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id)}
                aria-pressed={view === item.id}
                className={`h-20 w-16 overflow-hidden border ${view === item.id ? "border-ink" : "border-transparent"}`}
              >
                <GarmentStudy study={product.study} silhouette={product.silhouette} variant={item.id} className="h-full w-full" label={item.label} />
              </button>
            ))}
          </div>
        </div>
        <div className="lg:pt-6">
          <p className="text-xs uppercase tracking-[0.18em] text-stone">
            <Link href="/shop">Shop</Link> / {product.categoryLabel}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-none md:text-7xl">{product.name}</h1>
          <p className="mt-3 text-sm text-stone">Editorial name. Catalog lists this as a {product.categoryLabel.toLowerCase()}.</p>
          <p className="mt-6 text-2xl">{formatPrice(product.price)}</p>
          <p className="mt-6 max-w-md text-sm leading-relaxed">{product.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {product.catalogNotes.map((note) => (
              <li key={note} className="border border-ink/15 px-2 py-1 text-[0.68rem] tracking-[0.14em] uppercase">{note}</li>
            ))}
          </ul>
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <p className="eyebrow">Size</p>
              <Link href="/size-guide" className="text-xs underline">Size guide</Link>
            </div>
            <div className="mt-3">
              {product.sizes.includes("Free size") ? (
                <span className="border border-ink px-3 py-2 text-sm">Free size</span>
              ) : (
                <p className="text-sm text-stone">A measurement chart for this piece has not been published. It will be added with the catalog sheet.</p>
              )}
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <label className="eyebrow" htmlFor="qty">Qty</label>
            <select id="qty" value={qty} onChange={(event) => setQty(Number(event.target.value))} className="border border-ink/15 bg-transparent px-3 py-2">
              {[1, 2, 3, 4, 5].map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="btn btn-solid" onClick={() => add(product.slug, qty)}>Add to bag</button>
            <Link href="/cart" onClick={() => add(product.slug, qty)} className="btn">Buy now</Link>
            <button className="btn" aria-pressed={wished(product.slug)} onClick={() => toggleWish(product.slug)}>
              <Heart size={14} fill={wished(product.slug) ? "currentColor" : "none"} />
              Wishlist
            </button>
          </div>
          <p className="mt-4 text-xs text-stone">Color shown is an editorial study{product.colorIsEditorial ? `: ${product.colorName}` : ""}. Availability in this preview is not live stock.</p>
          <div className="mt-10 border-t border-ink/10">
            <Accordion id="story" title="The story" open={open} setOpen={setOpen}>
              <p>{product.description} The name on this page is an editorial placeholder so the house can present the piece before the catalog title is connected.</p>
            </Accordion>
            <Accordion id="details" title="Details" open={open} setOpen={setOpen}>
              <ul className="space-y-1">
                {product.catalogNotes.map((note) => <li key={note}>{note}</li>)}
                <li>Collection edit: {product.collection}</li>
                <li>Price from the current catalog list: {formatPrice(product.price)}</li>
              </ul>
            </Accordion>
            <Accordion id="shipping" title="Shipping" open={open} setOpen={setOpen}>
              <p>Shipping timelines and charges are not published in this preview. Nothing here is a delivery promise.</p>
            </Accordion>
            <Accordion id="returns" title="Returns" open={open} setOpen={setOpen}>
              <p>A returns window is not stated because it has not been supplied. See the refund note before any live checkout.</p>
            </Accordion>
          </div>
        </div>
      </div>
      <section className="mx-auto max-w-[1500px] px-5 py-16 md:px-10">
        <h2 className="font-serif text-4xl md:text-5xl">Style with it</h2>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.slug} product={item} />)}
        </div>
      </section>
      <OverlayDialog open={zoom} onOpenChange={setZoom} title={`${product.name} study`} className="inset-4 bg-ink">
        <button aria-label="Close study" className="absolute right-4 top-4 z-10 bg-ivory p-2" onClick={() => setZoom(false)}><X size={16} /></button>
        <GarmentStudy study={product.study} silhouette={product.silhouette} variant={view} className="h-full w-full" label={product.name} />
      </OverlayDialog>
    </div>
  );
}

function Accordion({
  id,
  title,
  open,
  setOpen,
  children,
}: {
  id: "story" | "details" | "shipping" | "returns";
  title: string;
  open: string;
  setOpen: (id: "story" | "details" | "shipping" | "returns") => void;
  children: React.ReactNode;
}) {
  const expanded = open === id;
  return (
    <div className="border-b border-ink/10">
      <button className="flex w-full items-center justify-between py-4 text-left" aria-expanded={expanded} onClick={() => setOpen(id)}>
        <span className="eyebrow">{title}</span>
        <span>{expanded ? "–" : "+"}</span>
      </button>
      {expanded ? <div className="pb-4 text-sm leading-relaxed text-stone">{children}</div> : null}
    </div>
  );
}
