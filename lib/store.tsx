"use client";

import { createContext, useContext, useMemo, useState, useSyncExternalStore } from "react";
import { getProduct } from "./catalog";
import type { Product } from "./types";

export type CartLine = { slug: string; qty: number };

type Persisted = { lines: CartLine[]; wishlist: string[] };

const CART_KEY = "nav-glam-cart";
const WISH_KEY = "nav-glam-wishlist";
const empty: Persisted = { lines: [], wishlist: [] };

let persisted: Persisted = empty;
const listeners = new Set<() => void>();

function readStorage(): Persisted {
  try {
    const cart = localStorage.getItem(CART_KEY);
    const wish = localStorage.getItem(WISH_KEY);
    return {
      lines: cart ? (JSON.parse(cart) as CartLine[]) : [],
      wishlist: wish ? (JSON.parse(wish) as string[]) : [],
    };
  } catch {
    return empty;
  }
}

if (typeof window !== "undefined") {
  persisted = readStorage();
}

function emit() {
  listeners.forEach((listener) => listener());
}

function write(next: Persisted) {
  persisted = next;
  localStorage.setItem(CART_KEY, JSON.stringify(next.lines));
  localStorage.setItem(WISH_KEY, JSON.stringify(next.wishlist));
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return persisted;
}

function getServerSnapshot() {
  return empty;
}

type Store = {
  ready: boolean;
  lines: CartLine[];
  wishlist: string[];
  cartOpen: boolean;
  searchOpen: boolean;
  quickView: string | null;
  setCartOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  setQuickView: (slug: string | null) => void;
  add: (slug: string, qty?: number) => void;
  addMany: (slugs: string[]) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  toggleWish: (slug: string) => void;
  wished: (slug: string) => boolean;
  count: number;
  subtotal: number;
  detailed: Array<CartLine & { product: Product }>;
};

const Ctx = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const data = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const ready = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickView, setQuickView] = useState<string | null>(null);

  const value = useMemo<Store>(() => {
    const detailed = data.lines
      .map((line) => {
        const product = getProduct(line.slug);
        return product ? { ...line, product } : null;
      })
      .filter((line): line is CartLine & { product: Product } => Boolean(line));
    return {
      ready,
      lines: data.lines,
      wishlist: data.wishlist,
      cartOpen,
      searchOpen,
      quickView,
      setCartOpen,
      setSearchOpen,
      setQuickView,
      add: (slug, qty = 1) => {
        const existing = data.lines.find((line) => line.slug === slug);
        const lines = existing
          ? data.lines.map((line) => (line.slug === slug ? { ...line, qty: line.qty + qty } : line))
          : [...data.lines, { slug, qty }];
        write({ ...data, lines });
        setCartOpen(true);
      },
      addMany: (slugs) => {
        const lines = [...data.lines];
        slugs.forEach((slug) => {
          const index = lines.findIndex((line) => line.slug === slug);
          if (index >= 0) lines[index] = { ...lines[index], qty: lines[index].qty + 1 };
          else lines.push({ slug, qty: 1 });
        });
        write({ ...data, lines });
        setCartOpen(true);
      },
      setQty: (slug, qty) => {
        const lines = qty <= 0 ? data.lines.filter((line) => line.slug !== slug) : data.lines.map((line) => (line.slug === slug ? { ...line, qty } : line));
        write({ ...data, lines });
      },
      remove: (slug) => write({ ...data, lines: data.lines.filter((line) => line.slug !== slug) }),
      clear: () => write({ ...data, lines: [] }),
      toggleWish: (slug) => {
        const wishlist = data.wishlist.includes(slug)
          ? data.wishlist.filter((item) => item !== slug)
          : [...data.wishlist, slug];
        write({ ...data, wishlist });
      },
      wished: (slug) => data.wishlist.includes(slug),
      count: detailed.reduce((sum, line) => sum + line.qty, 0),
      subtotal: detailed.reduce((sum, line) => sum + line.product.price * line.qty, 0),
      detailed,
    };
  }, [data, ready, cartOpen, searchOpen, quickView]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const value = useContext(Ctx);
  if (!value) throw new Error("useStore must be used within StoreProvider");
  return value;
}
