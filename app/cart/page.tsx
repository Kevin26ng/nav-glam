"use client";

import Link from "next/link";
import { useState } from "react";
import { ProductVisual } from "@/components/visual/ProductVisual";
import { formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";

export default function CartPage() {
  const { detailed, subtotal, setQty, remove } = useStore();
  const [demo, setDemo] = useState(false);

  return (
    <div className="bg-ivory px-5 pb-20 pt-28 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <h1 className="font-serif text-6xl">Bag</h1>
        {detailed.length === 0 ? (
          <div className="mt-10">
            <p className="text-stone">Nothing here yet.</p>
            <Link href="/shop" className="btn mt-6">Shop the edit</Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <ul className="space-y-6">
              {detailed.map((line) => (
                <li key={line.slug} className="grid grid-cols-[104px_1fr] gap-4 border-b border-ink/10 pb-6">
                  <div className="overflow-hidden bg-mist"><ProductVisual product={line.product} className="h-36 w-full object-cover" /></div>
                  <div>
                    <div className="flex justify-between gap-3">
                      <div>
                        <Link href={`/product/${line.slug}`} className="font-serif text-3xl">{line.product.name}</Link>
                        <p className="text-xs uppercase tracking-[0.16em] text-stone">{line.product.categoryLabel}</p>
                      </div>
                      <p>{formatPrice(line.product.price * line.qty)}</p>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                      <label className="text-sm">Qty
                        <input
                          type="number"
                          min={1}
                          max={5}
                          value={line.qty}
                          onChange={(event) => setQty(line.slug, Number(event.target.value))}
                          className="ml-2 w-16 border border-ink/15 bg-transparent px-2 py-1"
                        />
                      </label>
                      <button className="text-sm underline" onClick={() => remove(line.slug)}>Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <aside className="h-fit border border-ink/10 p-6">
              <p className="eyebrow">Checkout</p>
              <div className="mt-4 flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-3 text-sm text-stone">This is a presentation checkout. No payment will be taken and no order will be placed.</p>
              <button className="btn btn-solid mt-6 w-full" onClick={() => setDemo(true)}>Continue</button>
              {demo ? (
                <form
                  className="mt-6 space-y-3"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setDemo(true);
                  }}
                >
                  <p className="font-serif text-3xl">Demo checkout</p>
                  <input required placeholder="Name" className="field" aria-label="Name" />
                  <input required type="email" placeholder="Email" className="field" aria-label="Email" />
                  <input placeholder="City" className="field" aria-label="City" />
                  <p className="text-sm leading-relaxed">
                    Payment is not implemented. Submitting this form does not charge a card, reserve stock, or create an order.
                  </p>
                  <button
                    className="btn w-full"
                    type="button"
                    onClick={() => {
                      const status = document.getElementById("demo-status");
                      if (status) status.textContent = "Recorded only as a demo on this screen. No payment was processed.";
                    }}
                  >
                    Review demo
                  </button>
                  <p id="demo-status" role="status" className="text-sm" />
                </form>
              ) : null}
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
