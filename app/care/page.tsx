import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = { title: "Care", description: "Garment care for नव GLAM." };

export default function Page() {
  return <ComingSoon title="Care" />;
}
