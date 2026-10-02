import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopExperience } from "@/components/shop/ShopExperience";

export const metadata: Metadata = {
  title: "Jackets",
  description: "Jackets from the नव GLAM catalog.",
};

export default function JacketsPage() {
  return (
    <Suspense fallback={null}>
      <ShopExperience title="Jackets" intro="The layer that takes a set from ceremony to city." categories={["jacket"]} />
    </Suspense>
  );
}
