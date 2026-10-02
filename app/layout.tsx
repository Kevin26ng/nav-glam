import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Noto_Sans_Devanagari } from "next/font/google";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { QuickView } from "@/components/product/QuickView";
import { SearchDialog } from "@/components/search/SearchDialog";
import { brandLogoSrc } from "@/lib/brand";
import { StoreProvider } from "@/lib/store";
import { brand, siteUrl } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-deva",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} — Heritage, reimagined`,
    template: `%s — ${brand.name}`,
  },
  description: "Indian heritage, rewritten for now. Sets, free-size blouses, jackets and skirts from UH presents नव GLAM.",
  openGraph: {
    title: `${brand.name} — Heritage, reimagined`,
    description: brand.idea,
    locale: "en_IN",
    type: "website",
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UH presents नव GLAM",
  alternateName: "Nav Glam",
  url: siteUrl,
  description: brand.idea,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const logoSrc = brandLogoSrc();
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${devanagari.variable} h-full antialiased`}>
      <body className="min-h-full bg-ivory text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <StoreProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:bg-ivory focus:px-3 focus:py-2">Skip to content</a>
          <SiteHeader logoSrc={logoSrc} />
          <CartDrawer />
          <SearchDialog />
          <QuickView />
          <main id="main">{children}</main>
          <SiteFooter />
        </StoreProvider>
      </body>
    </html>
  );
}
