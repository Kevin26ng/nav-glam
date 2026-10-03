import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = { title: "Shipping", description: "Shipping details for नव GLAM." };

export default function Page() {
  return <ComingSoon title="Shipping" />;
}
