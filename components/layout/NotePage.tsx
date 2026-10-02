export function NotePage({ kicker, title, children }: { kicker: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-ivory px-5 pb-20 pt-32 md:px-10">
      <article className="mx-auto max-w-2xl">
        <p className="eyebrow text-bronze">{kicker}</p>
        <h1 className="mt-4 font-serif text-5xl leading-none md:text-6xl">{title}</h1>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-stone">{children}</div>
      </article>
    </div>
  );
}
