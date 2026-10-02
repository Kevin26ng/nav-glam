"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { getProduct } from "@/lib/catalog";
import { useStore } from "@/lib/store";

export default function WishlistPage() {
  const { wishlist, ready } = useStore();
  const items = wishlist.map((slug) => getProduct(slug)).filter((item) => item !== undefined);
  return (
    <div className="bg-ivory px-5 pb-20 pt-28 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <h1 className="font-serif text-6xl">Wishlist</h1>
        {!ready ? <p className="mt-6 text-sm text-stone">Opening your saved pieces.</p> : null}
        {ready && items.length === 0 ? (
          <div className="mt-8">
            <p className="text-stone">Nothing saved yet. The heart on a piece keeps it on this device.</p>
            <Link href="/shop" className="btn mt-6">Shop the edit</Link>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
            {items.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        )}
      </div>
    </div>
  );
}
