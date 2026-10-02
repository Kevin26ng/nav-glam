import type { Metadata } from "next";
import { NotePage } from "@/components/layout/NotePage";

export const metadata: Metadata = { title: "FAQs", description: "Questions the नव GLAM preview can answer." };

const faqs = [
  ["What is नव GLAM?", "The consumer-facing fashion identity presented by UH. A modern Indian wardrobe of sets, blouses, jackets and skirts."],
  ["Are the product names final?", "No. Names such as Nav Edit 01, Heritage Bloom and Midnight Muse are editorial placeholders. The catalog category on each piece is the factual label."],
  ["Which prices are real?", "The prices shown are taken from the supplied list: ₹1,250 to ₹4,200. They are not discounts, and no crossed-out price is shown."],
  ["What needs stitching?", "Some 3-piece sets require skirt-side stitching. Riwaayat carries that note."],
  ["Is checkout live?", "No. The bag works on this device. The checkout screen is a demo and does not take payment."],
  ["Where are the photographs?", "Catalog photography was not in the project files. Color studies hold the frames until images are added under public/products."],
];

export default function Page() {
  return (
    <NotePage kicker="Customer" title="FAQs">
      {faqs.map(([q, a]) => (
        <div key={q}>
          <h2 className="font-serif text-2xl text-ink">{q}</h2>
          <p className="mt-2">{a}</p>
        </div>
      ))}
    </NotePage>
  );
}
