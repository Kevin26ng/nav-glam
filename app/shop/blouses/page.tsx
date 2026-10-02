import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopExperience } from "@/components/shop/ShopExperience";

export const metadata: Metadata = {
  title: "Blouses",
  description: "Free-size and padded free-size blouses from नव GLAM.",
};

export default function BlousesPage() {
  return (
    <Suspense fallback={null}>
      <ShopExperience title="Blouses" intro="Free-size blouses and padded free-size blouses, as listed in the catalog." categories={["blouse", "padded-blouse"]} />
    </Suspense>
  );
}
