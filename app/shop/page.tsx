import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopExperience } from "@/components/shop/ShopExperience";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop sets, free-size blouses, jackets and skirts from नव GLAM.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopExperience
        title="Shop all"
        intro="Sets, free-size blouses, padded blouses, jackets and skirts from the current catalog."
      />
    </Suspense>
  );
}
