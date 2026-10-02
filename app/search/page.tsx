"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product/ProductCard";
import { searchProducts } from "@/lib/catalog";

function SearchBody() {
  const params = useSearchParams();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);
  const results = useMemo(() => (query.trim() ? searchProducts(query) : []), [query]);
  return (
    <div className="bg-ivory px-5 pb-20 pt-28 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <h1 className="font-serif text-6xl">Search</h1>
        <label className="mt-6 block">
          <span className="sr-only">Search catalog</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} className="field font-serif text-3xl" placeholder="Sets, color, free size, mood" />
        </label>
        <p className="mt-4 text-xs uppercase tracking-[0.16em] text-stone">{query.trim() ? `${results.length} pieces` : "Type to search the local catalog"}</p>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {results.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={null}>
      <SearchBody />
    </Suspense>
  );
}
