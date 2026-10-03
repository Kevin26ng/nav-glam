import Link from "next/link";

export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="bg-ivory px-5 pb-24 pt-32 md:px-10">
      <div className="mx-auto max-w-2xl">
        <p className="eyebrow text-bronze">{title}</p>
        <h1 className="mt-4 font-serif text-6xl leading-[0.9] md:text-7xl">Coming soon.</h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-stone">
          This page is being finished with the first drop. The edit is open, and the waitlist is taking names.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/shop" className="btn btn-solid">Shop the edit</Link>
          <Link href="/" className="btn">Back home</Link>
        </div>
      </div>
    </div>
  );
}
