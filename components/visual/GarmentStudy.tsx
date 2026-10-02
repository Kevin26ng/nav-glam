import { useId } from "react";
import { studies, type Silhouette, type StudyKey, type StudyVariant } from "@/lib/studies";

const viewBoxes: Record<StudyVariant, string> = {
  portrait: "0 0 400 520",
  detail: "70 40 260 300",
  textile: "90 80 220 280",
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
        <SilhouettePaths silhouette={silhouette} fill={tone.lift} opacity={0.22} />
        <rect width="400" height="520" fill={`url(#${id}-${tone.motif})`} opacity={0.85} />
      </g>
      <SilhouettePaths silhouette={silhouette} fill="none" stroke={tone.thread} strokeWidth={1.35} strokeOpacity={0.9} />
      <DetailLines silhouette={silhouette} stroke={tone.thread} />

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
  opacity,
}: {
  silhouette: Silhouette;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeOpacity?: number;
  opacity?: number;
}) {
  const props = { fill, stroke, strokeWidth, strokeOpacity, opacity, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };
  if (silhouette === "blouse") return <g {...props}><Blouse /></g>;
  if (silhouette === "jacket") return <g {...props}><Jacket /></g>;
  if (silhouette === "flare") return <g {...props}><Skirt flare /></g>;
  if (silhouette === "set2") return <g {...props}><Outfit jacket={false} /></g>;
  if (silhouette === "set") return <g {...props}><Outfit jacket /></g>;
  return <g {...props}><Skirt /></g>;
}

function Blouse() {
  return (
    <path
      fillRule="evenodd"
      d="M150 168c-28 10-62 34-78 62-8 16 8 30 28 22l34-16-6 112c28 16 116 16 144 0l-6-112 34 16c20 8 36-6 28-22-16-28-50-52-78-62-16-10-90-10-100 0zM176 164c0 34 48 34 48 0-12 8-36 8-48 0z"
    />
  );
}

function Jacket() {
  return (
    <>
      <path d="M156 156l34-14 12 36-8 132h-46l-10-118-42 18-12-34 48-28z" />
      <path d="M244 156l-34-14-12 36 8 132h46l10-118 42 18 12-34-48-28z" />
      <path d="M176 132h48l-4 28c-6 8-34 8-40 0z" />
    </>
  );
}

function Skirt({ flare = false }: { flare?: boolean }) {
  const hem = flare ? { left: 28, right: 372, waistL: 168, waistR: 232 } : { left: 58, right: 342, waistL: 158, waistR: 242 };
  return (
    <>
      <path d={`M${hem.waistL} 118h${hem.waistR - hem.waistL}l8 16c${flare ? 34 : 28} 52 ${flare ? 78 : 58} 150 ${hem.right - hem.waistR - 8} 300H${hem.left}c${hem.waistL - hem.left - 16} -150 ${flare ? 52 : 40} -248 ${hem.waistL - hem.left + 8} -300z`} />
      <path d={`M${hem.waistL - 6} 96h${hem.waistR - hem.waistL + 12}v28h-${hem.waistR - hem.waistL + 12}z`} />
    </>
  );
}

function Outfit({ jacket = false }: { jacket?: boolean }) {
  return (
    <>
      <path d="M148 268h104l8 14c26 46 52 110 70 176H78c18-66 44-130 70-176z" />
      <path d="M154 246h92v24h-92z" />
      <path fillRule="evenodd" d="M162 132c-16 6-38 20-48 38-6 12 6 20 16 14l18-8v78h104v-78l18 8c10 6 22-2 16-14-10-18-32-32-48-38-14-6-62-6-76 0zM178 134c0 20 44 20 44 0-10 6-34 6-44 0z" />
      {jacket ? (
        <>
          <path d="M132 150l22-8 8 28-4 86h-28l-8-78-24 12-8-22 30-18z" />
          <path d="M268 150l-22-8-8 28 4 86h28l8-78 24 12 8-22-30-18z" />
        </>
      ) : null}
    </>
  );
}

function DetailLines({ silhouette, stroke }: { silhouette: Silhouette; stroke: string }) {
  const props = { fill: "none", stroke, strokeOpacity: 0.45, strokeWidth: 0.8 };
  if (silhouette === "blouse") {
    return <path {...props} d="M200 196v92M128 214c18 10 36 14 72 14M272 214c-18 10-36 14-72 14" />;
  }
  if (silhouette === "jacket") {
    return <path {...props} d="M200 160v150M168 188h64" />;
  }
  if (silhouette === "flare" || silhouette === "skirt" || silhouette === "set" || silhouette === "set2") {
    return <path {...props} d="M168 150c-8 90-20 200-36 300M200 140v320M232 150c8 90 20 200 36 300" />;
  }
  return null;
}
