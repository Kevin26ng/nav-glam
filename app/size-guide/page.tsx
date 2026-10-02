import type { Metadata } from "next";
import { NotePage } from "@/components/layout/NotePage";

export const metadata: Metadata = { title: "Size guide", description: "What the catalog says about size." };

export default function Page() {
  return (
    <NotePage kicker="Customer" title="Size guide">
      <p>Free-size blouses and padded free-size blouses are marked Free size, because that is how the catalog lists them.</p>
      <p>Sets, jackets and skirts do not have a published measurement chart in the material supplied for this site. They are marked “Catalog size unspecified” rather than given an invented size run.</p>
      <p>When a measurement sheet exists, it belongs on this page — bust, waist, hip, blouse length, skirt length — in centimetres, next to the piece it describes.</p>
    </NotePage>
  );
}
