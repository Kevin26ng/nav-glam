# नव GLAM

The house site for **UH presents नव GLAM** — a modern Indian wardrobe of sets, blouses, jackets and skirts.

Indian heritage, rewritten for now. Editorial type, a charcoal and ivory ground, gold used only as a signature, and a catalog you can actually shop: filters, search, wishlist, bag, and a blouse + skirt + jacket look builder.

## Run

```bash
npm install
npm run dev
```

The dev server in this project is started on port **3847**.

```bash
npx next dev -p 3847 -H 0.0.0.0
```

## Connect the real brand files

The logo and catalog photography were not in the repository when this site was built.

- Place the supplied logo at `public/brand/nav-glam-logo.png` (or `.svg`). The header and footer wordmark swap to that file. It is not redrawn.
- Place photography at `public/products/…` and set each product’s `images` array in `lib/catalog.ts`, for example `["/products/nav-edit-01.jpg", "/products/nav-edit-01-b.jpg"]`. Empty arrays render an editorial color study instead of a stock photo.

Editorial names (Nav Edit 01, Heritage Bloom, and the rest) are placeholders. The category line on each piece is the catalog fact: 3-piece set, free-size blouse, 15m-flare skirt, skirt-side stitching, and so on. Prices are taken from the supplied list (₹1,250–₹4,200).

## What is not live

Checkout does not take payment. Shipping, returns, care and refund copy stay unpublished on purpose. No founder story, reviews, or certifications are invented.
