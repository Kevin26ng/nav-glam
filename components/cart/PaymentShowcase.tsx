"use client";

import Link from "next/link";
import { useState } from "react";
import { formatProductPrice } from "@/lib/format";
import { useStore } from "@/lib/store";

const qrImage = "/payment/upi-qr.png";

export function PaymentShowcase() {
  const { detailed, subtotal } = useStore();
  const [qrLoaded, setQrLoaded] = useState(false);
  const hasEstimatedPrice = detailed.some((line) => line.product.priceIsEstimate);

  return (
    <div className="min-h-[75svh] bg-ivory px-5 pb-20 pt-28 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <p className="eyebrow text-bronze">Manual UPI</p>
        <h1 className="mt-3 font-serif text-6xl leading-none md:text-8xl">Payment</h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-stone">
          Scan the QR code with your UPI app to complete this showcase payment.
        </p>

        {detailed.length === 0 ? (
          <div className="mt-10 border-t border-ink/15 py-8">
            <p className="font-serif text-3xl">Your bag is empty.</p>
            <Link href="/shop" className="btn btn-solid mt-5">Browse the shop</Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-10 border-t border-ink/15 pt-8 md:grid-cols-[1fr_340px]">
            <section>
              <h2 className="eyebrow">Order summary</h2>
              <ul className="mt-5 divide-y divide-ink/10">
                {detailed.map((line) => (
                  <li key={line.slug} className="flex justify-between gap-5 py-4 text-sm">
                    <span>{line.product.name} <span className="text-stone">× {line.qty}</span></span>
                    <span className="shrink-0">{formatProductPrice(line.product.price * line.qty, line.product.priceOnRequest, line.product.priceIsEstimate)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex justify-between border-t border-ink/15 pt-4 font-medium">
                <span>{hasEstimatedPrice ? "Estimated total" : "Total"}</span>
                <span>{formatProductPrice(subtotal, detailed.some((line) => line.product.priceOnRequest), hasEstimatedPrice)}</span>
              </div>
              <p className="mt-4 max-w-lg text-xs leading-relaxed text-stone">
                This is a visual payment demo. Prices marked “Est.” are estimates, and this site does not verify or record UPI payments.
              </p>
            </section>

            <section className="flex flex-col items-center border border-ink/15 p-5 text-center">
              <p className="eyebrow">Scan to pay</p>
              <div className="mt-4 grid aspect-square w-full max-w-[260px] place-items-center bg-white p-3">
                {!qrLoaded ? (
                  <div className="flex aspect-square w-full flex-col items-center justify-center border border-dashed border-ink/20 px-4 text-center">
                    <p className="font-serif text-2xl">UPI QR</p>
                    <p className="mt-2 text-xs leading-relaxed text-stone">Place your QR image at <span className="whitespace-nowrap">public/payment/upi-qr.png</span>.</p>
                  </div>
                ) : null}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qrImage}
                  alt="UPI payment QR code"
                  className={qrLoaded ? "block h-full w-full object-contain" : "hidden"}
                  onLoad={() => setQrLoaded(true)}
                  onError={() => setQrLoaded(false)}
                />
              </div>
              <p className="mt-4 text-xs text-stone">Use any UPI app that can scan a QR code.</p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
