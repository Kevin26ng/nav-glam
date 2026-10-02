import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/format";

export function Logo({
  src,
  tone = "ivory",
  compact = false,
  priority = false,
}: {
  src: string | null;
  tone?: "ivory" | "ink";
  compact?: boolean;
  priority?: boolean;
}) {
  const color = tone === "ivory" ? "text-ivory" : "text-ink";
  return (
    <Link href="/" className={cn("logo-lockup items-center", color)} aria-label="नव GLAM home">
      {src ? (
        <Image
          src={src}
          alt="नव GLAM"
          width={compact ? 120 : 168}
          height={compact ? 48 : 68}
          priority={priority}
          className={cn("w-auto object-contain", compact ? "h-9" : "h-12 md:h-14")}
        />
      ) : (
        <span className={cn("flex flex-col items-center leading-none", compact ? "gap-0.5" : "gap-1")}>
          <span className="font-sans text-[0.52rem] tracking-[0.42em] uppercase opacity-80">UH presents</span>
          <span className="flex items-baseline gap-1.5">
            <span className={cn("font-deva font-medium", compact ? "text-lg" : "text-2xl")}>नव</span>
            <span className={cn("font-serif tracking-[0.16em]", compact ? "text-lg" : "text-[1.65rem]")}>GLAM</span>
          </span>
        </span>
      )}
    </Link>
  );
}
