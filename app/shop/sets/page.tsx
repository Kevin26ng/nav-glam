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
      <ShopExperience title="Sets" intro="3-piece and 2-piece sets. Some 3-piece sets require skirt-side stitching — that note stays on the piece." categories={["3-piece", "2-piece"]} />
    </Suspense>
  );
}
