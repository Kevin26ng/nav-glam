import Link from "next/link";
import { siteUrl } from "@/lib/site";

export function Breadcrumbs({ items }: { items: Array<{ href?: string; label: string }> }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="text-[0.68rem] uppercase tracking-[0.18em] text-stone">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
      <ol className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex gap-2">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
