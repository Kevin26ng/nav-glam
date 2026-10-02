export default function Loading() {
  return (
    <div className="min-h-[70svh] bg-ivory px-5 pt-28 md:px-10">
      <div className="h-8 w-40 animate-pulse bg-mist" />
      <div className="mt-6 h-16 w-2/3 animate-pulse bg-mist" />
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="aspect-[3/4] animate-pulse bg-mist" />
        ))}
      </div>
    </div>
  );
}
