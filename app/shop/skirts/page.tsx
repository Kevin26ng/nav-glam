import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopExperience } from "@/components/shop/ShopExperience";

export const metadata: Metadata = {
  title: "Skirts",
  description: "Skirts, skirt-only pieces and 15m-flare skirts from नव GLAM.",
};

export default function SkirtsPage() {
  return (
    <Suspense fallback={null}>
      <ShopExperience title="Skirts" intro="Skirts, skirt-only pieces and 15m-flare skirt pieces." categories={["skirt", "skirt-only", "flare-skirt"]} />
    </Suspense>
  );
}
