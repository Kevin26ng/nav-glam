import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Account",
  description: "नव GLAM accounts open with the first drop.",
};

export default function AccountPage() {
  return (
    <div className="bg-ivory px-5 pb-20 pt-32 md:px-10">
      <div className="mx-auto max-w-xl">
        <p className="eyebrow text-bronze">Account</p>
        <h1 className="mt-4 font-serif text-6xl leading-none">Coming soon.</h1>
        <p className="mt-5 text-sm leading-relaxed text-stone">Accounts open with the first drop. Join the waitlist and your place is held under your email.</p>
        <div className="mt-8 flex gap-3">
          <Link href="/wishlist" className="btn">Wishlist</Link>
          <Link href="/cart" className="btn">Bag</Link>
        </div>
      </div>
    </div>
  );
}
