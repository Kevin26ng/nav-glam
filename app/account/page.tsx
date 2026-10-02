import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Account",
  description: "Account access is not connected on this नव GLAM preview.",
};

export default function AccountPage() {
  return (
    <div className="bg-ivory px-5 pb-20 pt-32 md:px-10">
      <div className="mx-auto max-w-xl">
        <p className="eyebrow text-bronze">Account</p>
        <h1 className="mt-4 font-serif text-6xl leading-none">Not open yet.</h1>
        <p className="mt-5 text-sm leading-relaxed text-stone">Sign-in is not connected. Your bag and wishlist stay on this device until a real account exists.</p>
        <div className="mt-8 flex gap-3">
          <Link href="/wishlist" className="btn">Wishlist</Link>
          <Link href="/cart" className="btn">Bag</Link>
        </div>
      </div>
    </div>
  );
}
