"use client";

import { useWaitlist } from "@/lib/waitlist";

export function WaitlistButton({
  label,
  productName,
  className,
}: {
  label: string;
  productName?: string;
  className?: string;
}) {
  const { openWaitlist } = useWaitlist();
  return (
    <button type="button" className={className ?? "btn btn-solid"} onClick={() => openWaitlist({ productName })}>
      {label}
    </button>
  );
}
