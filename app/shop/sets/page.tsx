import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopExperience } from "@/components/shop/ShopExperience";

export const metadata: Metadata = {
  title: "Sets",
  description: "3-piece and 2-piece sets from the नव GLAM catalog.",
};

export default function SetsPage() {
  return (
    <Suspense fallback={null}>
      <ShopExperience title="Sets" intro="Lehenga sets from the current edit — choli, flare and dupatta, photographed as they are." categories={["3-piece", "2-piece"]} />
    </Suspense>
  );
}
