import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product/ProductDetail";
import { getProduct, getRelated, products } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Piece" };
  return {
    title: product.name,
    description: `${product.categoryLabel}. ${product.description}`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getRelated(product);
  const json = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: `${product.description} Editorial placeholder name. Catalog category: ${product.categoryLabel}.`,
    category: product.categoryLabel,
    sku: product.id,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/PreOrder",
      url: `${siteUrl}/product/${product.slug}`,
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
      <p className="sr-only">{formatPrice(product.price)}</p>
      <ProductDetail product={product} related={related} />
    </>
  );
}
