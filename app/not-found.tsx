import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-[80svh] place-items-center bg-ink px-6 pt-24 text-ivory">
      <div className="max-w-xl text-center">
        <p className="eyebrow text-gold">404</p>
        <h1 className="mt-4 font-serif text-6xl">This page left the edit.</h1>
        <Link href="/" className="btn mt-8">Back to नव GLAM</Link>
      </div>
    </div>
  );
}
