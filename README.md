# नव GLAM

The house site for **UH presents नव GLAM** — a modern Indian wardrobe of lehenga sets, free-size blouses, an embroidered jacket and flared skirts.

Indian heritage, rewritten for now. The shop uses the real garment photographs: filters, search, wishlist, bag, and a blouse + skirt + jacket look builder.

## Run

```bash
npm install
npm run dev
```

The dev server in this project is started on port **3847**.

```bash
npx next dev -p 3847 -H 0.0.0.0
```

## Photographs

Each piece in `lib/catalog.ts` points at a file in `public/products/`. Those files are the dresses, blouses, jacket and skirts supplied for the house.

Prices follow the house list (₹1,250–₹4,200).

## What is not live

Checkout does not take payment. Shipping, returns, care and refund copy stay unpublished on purpose. No founder story, reviews, or certifications are invented.
