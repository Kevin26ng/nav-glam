import type { Metadata } from "next";
import { NotePage } from "@/components/layout/NotePage";

export const metadata: Metadata = { title: "FAQs", description: "Questions the नव GLAM preview can answer." };

const faqs = [
  ["What is नव GLAM?", "The consumer-facing fashion identity presented by UH. A modern Indian wardrobe of sets, blouses, jackets and skirts."],
  ["Are the product names final?", "The names match the garments in the photographs: Neel Mandala, Hathi Mor, Ivory Paisley and the rest. The line under each name is the category."],
  ["Which prices are real?", "The prices shown follow the house list: ₹1,250 to ₹4,200. They are not discounts, and no crossed-out price is shown."],
  ["What is in a set?", "A lehenga set is shown as choli, flare and, where photographed, a dupatta. Blouses, the jacket and skirts are also sold on their own."],
  ["Is checkout live?", "No. The bag works on this device. The checkout screen is a demo and does not take payment."],
  ["Are the photographs of the clothes?", "Yes. Every piece in the shop uses a photograph of that garment."],
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
