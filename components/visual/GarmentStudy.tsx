import { useId } from "react";
import { studies, type Silhouette, type StudyKey, type StudyVariant } from "@/lib/studies";

const viewBoxes: Record<StudyVariant, string> = {
  portrait: "0 0 400 520",
  detail: "90 70 220 260",
  textile: "120 160 180 200",
};

export function GarmentStudy({
  study,
  silhouette,
  variant = "portrait",
  className,
  label,
}: {
  study: StudyKey;
  silhouette: Silhouette;
  variant?: StudyVariant;
  className?: string;
  label?: string;
}) {
  const tone = studies[study];
  const id = useId().replace(/:/g, "");
  const title = label ?? `${tone.name} ${silhouette} color study`;

  return (
    <svg
      viewBox={viewBoxes[variant]}
      className={className}
      role="img"
      aria-label={title}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${id}-ground`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={tone.lift} />
          <stop offset="0.45" stopColor={tone.ground} />
          <stop offset="1" stopColor={tone.depth} />
        </linearGradient>
        <linearGradient id={`${id}-cloth`} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor={tone.lift} />
          <stop offset="0.4" stopColor={tone.ground} />
          <stop offset="1" stopColor={tone.depth} />
        </linearGradient>
        <pattern id={`${id}-weave`} width="7" height="7" patternUnits="userSpaceOnUse">
          <path d="M0 6.4 H7" stroke={tone.thread} strokeOpacity="0.35" strokeWidth="0.45" />
          <path d="M0.6 0 V7" stroke={tone.thread} strokeOpacity="0.18" strokeWidth="0.35" />
        </pattern>
        <pattern id={`${id}-buti`} width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="8" r="1.15" fill={tone.thread} opacity="0.55" />
          <circle cx="18" cy="18" r="0.7" fill={tone.thread} opacity="0.35" />
        </pattern>
        <pattern id={`${id}-stripe`} width="14" height="14" patternUnits="userSpaceOnUse">
          <path d="M0 14 L14 0" stroke={tone.thread} strokeOpacity="0.28" strokeWidth="0.6" />
        </pattern>
        <filter id={`${id}-grain`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.22" />
          </feComponentTransfer>
        </filter>
        <clipPath id={`${id}-clip`}>
          <SilhouettePaths silhouette={silhouette} />
        </clipPath>
      </defs>

      <rect width="400" height="520" fill={`url(#${id}-ground)`} />
      <path
        d="M70 520 V230 C70 90 330 90 330 230 V520"
        fill="none"
        stroke={tone.thread}
        strokeOpacity="0.22"
        strokeWidth="1.25"
      />
      <circle cx="300" cy="120" r="90" fill={tone.lift} opacity="0.18" />
      <rect width="400" height="520" filter={`url(#${id}-grain)`} opacity="0.45" />

      <g clipPath={`url(#${id}-clip)`}>
        <SilhouettePaths silhouette={silhouette} fill={`url(#${id}-cloth)`} />
        <rect
          width="400"
          height="520"
          fill={`url(#${id}-${tone.motif})`}
          opacity={tone.motif === "buti" ? 0.9 : 0.75}
        />
      </g>
      <SilhouettePaths
        silhouette={silhouette}
        fill="none"
        stroke={tone.thread}
        strokeWidth={1.1}
        strokeOpacity={0.55}
      />

      <path d="M28 28 H58 M28 28 V58" fill="none" stroke={tone.thread} strokeOpacity="0.7" strokeWidth="0.8" />
      <path d="M372 28 H342 M372 28 V58" fill="none" stroke={tone.thread} strokeOpacity="0.7" strokeWidth="0.8" />
      <path d="M28 492 H58 M28 492 V462" fill="none" stroke={tone.thread} strokeOpacity="0.45" strokeWidth="0.8" />
      <path d="M372 492 H342 M372 492 V462" fill="none" stroke={tone.thread} strokeOpacity="0.45" strokeWidth="0.8" />
    </svg>
  );
}

function SilhouettePaths({
  silhouette,
  fill = "currentColor",
  stroke,
  strokeWidth,
  strokeOpacity,
}: {
  silhouette: Silhouette;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeOpacity?: number;
}) {
  const props = { fill, stroke, strokeWidth, strokeOpacity, strokeLinejoin: "round" as const };
  if (silhouette === "blouse") {
    return (
      <g {...props}>
        <path
          fillRule="evenodd"
          d="M148 132c0-28 104-28 104 0 8 4 46 14 58 48 6 20-12 32-28 24l-14 22-4 92c0 10-136 10-136 0l-4-92-14-22c-16 8-34-4-28-24 12-34 50-44 58-48z M176 138c0 22 48 22 48 0-14 10-34 10-48 0z"
        />
      </g>
    );
  }
  if (silhouette === "jacket") {
    return (
      <g {...props}>
        <path d="M118 128l28-8 18 62-8 150h-48l-16-132-28 16-10-42 46-28z" />
        <path d="M282 128l-28-8-18 62 8 150h48l16-132 28 16 10-42-46-28z" />
        <path d="M168 150h64l-6 24c-8 8-44 8-52 0z" fill={fill} />
      </g>
    );
  }
  if (silhouette === "flare") {
    return (
      <g {...props}>
        <path d="M156 86h88l10 18c36 62 78 150 112 250H34C68 254 110 166 146 104z" />
        <path d="M164 86h72v16h-72z" />
      </g>
    );
  }
  if (silhouette === "set2") {
    return (
      <g {...props}>
        <path d="M154 214h92l8 16c28 48 52 110 70 168H84c18-58 42-120 70-168z" />
        <path
          fillRule="evenodd"
          d="M168 78c0-20 64-20 64 0 6 4 30 12 38 34 4 14-8 22-18 16l-8 16-2 48h-84l-2-48-8-16c-10 6-22-2-18-16 8-22 32-30 38-34z M186 84c0 14 28 14 28 0-8 6-20 6-28 0z"
        />
      </g>
    );
  }
  if (silhouette === "set") {
    return (
      <g {...props}>
        <path d="M150 250h100l8 14c24 40 48 96 66 150H84c18-54 42-110 66-150z" />
        <path
          fillRule="evenodd"
          d="M176 92c0-16 48-16 48 0 4 3 22 10 28 26 3 10-6 16-14 12l-6 12v36h-64v-36l-6-12c-8 4-17-2-14-12 6-16 24-23 28-26z M188 96c0 10 24 10 24 0-6 5-18 5-24 0z"
        />
        <path d="M132 118l16-4 10 36-6 78h-28l-8-70-16 8-6-22 28-16z" />
        <path d="M268 118l-16-4-10 36 6 78h28l8-70 16 8 6-22-28-16z" />
      </g>
    );
  }
  return (
    <g {...props}>
      <path d="M150 96h100l10 18c32 58 64 140 86 250H64c22-110 54-192 86-250z" />
      <path d="M162 96h76v18h-76z" />
    </g>
  );
}

export function HeroStudy({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 1100" className={className} role="img" aria-label="नव GLAM campaign study of a set, blouse and jacket" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="hero-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1A1613" />
          <stop offset="1" stopColor="#0A0908" />
        </linearGradient>
        <linearGradient id="hero-rani" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor="#E07AA0" />
          <stop offset="0.35" stopColor="#A61E4D" />
          <stop offset="1" stopColor="#4C1028" />
        </linearGradient>
        <linearGradient id="hero-ivory" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F7F1E6" />
          <stop offset="1" stopColor="#CDBFA8" />
        </linearGradient>
        <linearGradient id="hero-ink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3A342C" />
          <stop offset="1" stopColor="#120F0D" />
        </linearGradient>
        <pattern id="hero-weave" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M0 7 H8" stroke="#E7D3A8" strokeOpacity="0.35" strokeWidth="0.5" />
        </pattern>
        <pattern id="hero-buti" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="7" cy="8" r="1.2" fill="#F4EFE6" opacity="0.45" />
        </pattern>
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.28" />
          </feComponentTransfer>
        </filter>
        <clipPath id="hero-skirt-clip">
          <path d="M250 430h250l20 36c70 120 150 280 190 430H70c40-150 110-310 180-430z" />
        </clipPath>
        <clipPath id="hero-blouse-clip">
          <path fillRule="evenodd" d="M330 250c0-62 210-62 210 0 16 10 90 30 112 96 12 40-24 62-54 46l-26 40-8 150c0 18-258 18-258 0l-8-150-26-40c-30 16-66-6-54-46 22-66 96-86 112-96z M392 262c0 40 96 40 96 0-28 18-68 18-96 0z" />
        </clipPath>
      </defs>
      <rect width="900" height="1100" fill="url(#hero-bg)" />
      <path d="M120 1040 V520 C120 220 760 220 760 520 V1040" fill="none" stroke="#B88A4A" strokeOpacity="0.28" strokeWidth="1.4" />
      <rect width="900" height="1100" filter="url(#hero-grain)" />
      <g clipPath="url(#hero-skirt-clip)">
        <path d="M250 430h250l20 36c70 120 150 280 190 430H70c40-150 110-310 180-430z" fill="url(#hero-rani)" />
        <rect width="900" height="1100" fill="url(#hero-buti)" />
        <rect width="900" height="1100" fill="url(#hero-weave)" opacity="0.7" />
      </g>
      <path d="M250 430h250l20 36c70 120 150 280 190 430H70c40-150 110-310 180-430z" fill="none" stroke="#F4EFE6" strokeOpacity="0.35" />
      <g clipPath="url(#hero-blouse-clip)">
        <path fillRule="evenodd" d="M330 250c0-62 210-62 210 0 16 10 90 30 112 96 12 40-24 62-54 46l-26 40-8 150c0 18-258 18-258 0l-8-150-26-40c-30 16-66-6-54-46 22-66 96-86 112-96z M392 262c0 40 96 40 96 0-28 18-68 18-96 0z" fill="url(#hero-ivory)" />
        <rect width="900" height="1100" fill="url(#hero-weave)" />
      </g>
      <path fillRule="evenodd" d="M330 250c0-62 210-62 210 0 16 10 90 30 112 96 12 40-24 62-54 46l-26 40-8 150c0 18-258 18-258 0l-8-150-26-40c-30 16-66-6-54-46 22-66 96-86 112-96z M392 262c0 40 96 40 96 0-28 18-68 18-96 0z" fill="none" stroke="#795B36" strokeOpacity="0.45" />
      <path d="M250 300l48-12 28 90-14 210h-70l-22-180-40 22-16-54 70-40z" fill="url(#hero-ink)" stroke="#B88A4A" strokeOpacity="0.8" />
      <path d="M610 290l-36-8-20 70 10 200h62l18-170 36 16 12-48-62-36z" fill="url(#hero-ink)" stroke="#B88A4A" strokeOpacity="0.65" />
      <path d="M70 90 H150 M70 90 V170" fill="none" stroke="#B88A4A" strokeOpacity="0.8" />
      <path d="M830 90 H750 M830 90 V170" fill="none" stroke="#B88A4A" strokeOpacity="0.5" />
    </svg>
  );
}
