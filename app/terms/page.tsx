import type { Metadata } from "next";
import { NotePage } from "@/components/layout/NotePage";

export const metadata: Metadata = { title: "Terms", description: "Terms for this preview." };

export default function Page() {
  return (
    <NotePage kicker="Legal" title="Terms">
      <p>This website is a presentation of the नव GLAM house. It is not a live store. Adding a piece to the bag does not create a contract of sale.</p>
      <p>Prices on this preview follow the house list. Photographs show the garments in the current edit. A bag on this site is not an order.</p>
    </NotePage>
  );
}
