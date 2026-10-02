import type { Metadata } from "next";
import { NotePage } from "@/components/layout/NotePage";

export const metadata: Metadata = { title: "Shipping", description: "Shipping details are not published yet." };

export default function Page() {
  return (
    <NotePage kicker="Customer" title="Shipping">
      <p>Delivery areas, timelines and charges have not been supplied, so this preview does not promise any of them.</p>
      <p>When the store is live, this page should state where नव GLAM ships, how long it takes, and what it costs — and nothing before that.</p>
    </NotePage>
  );
}
