import type { Silhouette, StudyKey } from "./studies";

/** Merchandising moods. These are styled edits, not catalog categories. */
export type Mood =
  | "wedding-guest"
  | "festive"
  | "party"
  | "day-out"
  | "statement"
  | "everyday"
  | "mehfil"
  | "rang"
  | "midnight"
  | "after-dark";

export type Category =
  | "3-piece"
  | "2-piece"
  | "blouse"
  | "padded-blouse"
  | "jacket"
  | "skirt"
  | "skirt-only"
  | "flare-skirt";

export type Product = {
  id: string;
  /** Editorial placeholder. Not a confirmed catalog title. */
  name: string;
  nameIsPlaceholder: true;
  slug: string;
  category: Category;
  /** Factual label from the supplied catalog structure. */
  categoryLabel: string;
  /** Price taken from the supplied catalog price list. */
  price: number;
  /**
   * Real photography lives here, e.g. ["/products/nav-edit-01.jpg"].
   * Empty array renders the editorial color study.
   */
  images: string[];
  study: StudyKey;
  silhouette: Silhouette;
  description: string;
  /** Facts taken from the supplied catalog structure. */
  catalogNotes: string[];
  sizes: string[];
  colorName: string;
  /** Color is an editorial study until catalog color is confirmed. */
  colorIsEditorial: true;
  tags: Array<"NEW" | "EDITED">;
  keywords: string[];
  collection: string;
  moods: Mood[];
  featured: boolean;
  pieces: Array<"blouse" | "skirt" | "jacket">;
};
