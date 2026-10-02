import { getByMood, getFeatured, products } from "./catalog";
import type { StudyKey } from "./studies";
import type { Mood, Product } from "./types";

export type Collection = {
  slug: string;
  title: string;
  kicker: string;
  headline: string;
  copy: string;
  study: StudyKey;
  mood?: Mood;
  products: () => Product[];
};

export const collections: Collection[] = [
  {
    slug: "the-nav-edit",
    title: "The Nav Edit",
    kicker: "Featured",
    headline: "The pieces we would put on the table first.",
    copy: "A styled selection across sets, blouses, jackets and skirts. This is a merchandising edit, not a separate catalog category.",
    study: "gulnaar",
    products: () => getFeatured(),
  },
  {
    slug: "mehfil",
    title: "Mehfil",
    kicker: "Shop by mood",
    headline: "For the room that gathers.",
    copy: "Styled for a mehfil. These pieces are grouped by mood. The catalog still lists them as sets, blouses, jackets or skirts.",
    study: "royal",
    mood: "mehfil",
    products: () => getByMood("mehfil"),
  },
  {
    slug: "rang",
    title: "Rang",
    kicker: "Shop by mood",
    headline: "Color, worn out loud.",
    copy: "A color-led edit. Mood grouping only — confirm category on each piece.",
    study: "magenta",
    mood: "rang",
    products: () => getByMood("rang"),
  },
  {
    slug: "midnight",
    title: "Midnight",
    kicker: "Shop by mood",
    headline: "When the hour changes, the layer does.",
    copy: "Darker studies from the edit. A styling mood, not a catalog division.",
    study: "midnight",
    mood: "midnight",
    products: () => getByMood("midnight"),
  },
  {
    slug: "festive",
    title: "Festive",
    kicker: "Shop by mood",
    headline: "Ceremony, without costume.",
    copy: "Pieces styled for festive hours. Occasion is a merchandising idea. Each product keeps its catalog category.",
    study: "emerald",
    mood: "festive",
    products: () => getByMood("festive"),
  },
  {
    slug: "after-dark",
    title: "After Dark",
    kicker: "Shop by mood",
    headline: "The same wardrobe, later.",
    copy: "Evening styling. Not a claim that these pieces are a separate after-dark line.",
    study: "ink",
    mood: "after-dark",
    products: () => getByMood("after-dark"),
  },
  {
    slug: "everyday-glam",
    title: "Everyday Glam",
    kicker: "Shop by mood",
    headline: "Heritage, on a weekday.",
    copy: "The quieter edit. Still Indian. Still dressed. Grouped for mood, sold as catalogued.",
    study: "ivory",
    mood: "everyday",
    products: () => getByMood("everyday"),
  },
  {
    slug: "wedding-guest",
    title: "Wedding Guest",
    kicker: "Shop by mood",
    headline: "Dressed for someone else's day.",
    copy: "A guest edit. These are not labelled as bridal in the catalog.",
    study: "maroon",
    mood: "wedding-guest",
    products: () => getByMood("wedding-guest"),
  },
  {
    slug: "party",
    title: "Party",
    kicker: "Shop by mood",
    headline: "Volume, then a jacket.",
    copy: "Styled for a party hour. Mood only.",
    study: "rani",
    mood: "party",
    products: () => getByMood("party"),
  },
  {
    slug: "day-out",
    title: "Day Out",
    kicker: "Shop by mood",
    headline: "Sunlight, not costume.",
    copy: "Daytime styling from the same wardrobe.",
    study: "mustard",
    mood: "day-out",
    products: () => getByMood("day-out"),
  },
  {
    slug: "statement",
    title: "Statement",
    kicker: "Shop by mood",
    headline: "One piece, doing the most.",
    copy: "The louder studies in the edit. A merchandising mood.",
    study: "turquoise",
    mood: "statement",
    products: () => getByMood("statement"),
  },
];

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export const homeMoods = [
  "mehfil",
  "rang",
  "midnight",
  "festive",
  "after-dark",
  "everyday-glam",
] as const;

export const navMoods = [
  "wedding-guest",
  "festive",
  "party",
  "day-out",
  "statement",
  "everyday-glam",
] as const;

export function productsInCollection(slug: string) {
  return getCollection(slug)?.products() ?? [];
}

export const allProductSlugs = products.map((product) => product.slug);
