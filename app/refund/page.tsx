import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = { title: "Refund policy", description: "Refund policy for नव GLAM." };

export default function Page() {
  return <ComingSoon title="Refund policy" />;
}
