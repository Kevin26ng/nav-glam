"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { GarmentStudy } from "@/components/visual/GarmentStudy";
import { formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const { add, toggleWish, wished, setQuickView } = useStore();
  const saved = wished(product.slug);
  const photo = product.images[0];
  const hover = product.images[1];

  return (
    <article className="group">
      <div className="relative overflow-hidden bg-mist">
        <Link href={`/product/${product.slug}`} className="block aspect-[3/4]">
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photo} alt={product.name} className="study-zoom h-full w-full object-cover" />
          ) : (
            <GarmentStudy
              study={product.study}
              silhouette={product.silhouette}
              className="study-zoom h-full w-full"
              label={`${product.name}, ${product.categoryLabel}`}
            />
          )}
          {!photo && hover ? null : hover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={hover} alt="" className="absolute inset-0 hidden h-full w-full object-cover group-hover:block" />
          ) : (
            <GarmentStudy
              study={product.study}
              silhouette={product.silhouette}
              variant="detail"
              className="absolute inset-0 hidden h-full w-full group-hover:block"
              label=""
            />
          )}
        </Link>
        {product.tags[0] ? (
          <span className="absolute left-3 top-3 bg-ivory/90 px-2 py-1 text-[0.58rem] tracking-[0.18em]">{product.tags[0]}</span>
        ) : null}
        <button
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name}`}
          aria-pressed={saved}
          onClick={() => toggleWish(product.slug)}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center bg-ivory/90"
        >
          <Heart size={16} strokeWidth={1.5} fill={saved ? "currentColor" : "none"} />
        </button>
        <div className="absolute inset-x-0 bottom-0 flex gap-2 p-3 opacity-100 md:translate-y-2 md:opacity-0 md:transition md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100">
          <button className="btn btn-solid flex-1" onClick={() => add(product.slug)}>Quick add</button>
          <button className="btn bg-ivory/90" onClick={() => setQuickView(product.slug)}>View</button>
        </div>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-2xl leading-none">
            <Link href={`/product/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="mt-1 text-[0.68rem] uppercase tracking-[0.16em] text-stone">{product.categoryLabel}</p>
          <p className="mt-1 text-xs text-stone">{product.sizes.join(" · ")}</p>
        </div>
        <p className="pt-1 text-sm">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
