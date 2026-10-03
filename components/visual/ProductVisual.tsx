import { GarmentStudy } from "@/components/visual/GarmentStudy";
import type { Product } from "@/lib/types";

export function ProductVisual({
  product,
  className,
  alt,
}: {
  product: Pick<Product, "images" | "name" | "study" | "silhouette">;
  className?: string;
  alt?: string;
}) {
  const photo = product.images[0];
  if (photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={photo} alt={alt ?? product.name} className={`h-full w-full object-cover ${className ?? ""}`} />
    );
  }
  return (
    <GarmentStudy
      study={product.study}
      silhouette={product.silhouette}
      className={className}
      label={alt ?? product.name}
    />
  );
}
