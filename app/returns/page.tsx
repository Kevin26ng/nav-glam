import type { Metadata } from "next";
import { NotePage } from "@/components/layout/NotePage";

export const metadata: Metadata = { title: "Returns", description: "Returns details are not published yet." };

export default function Page() {
  return (
    <NotePage kicker="Customer" title="Returns">
      <p>A returns window is not stated here. Pieces that require skirt-side stitching should be read with that catalog note before any return rule is written.</p>
      <p>No return has been accepted or refused by this preview.</p>
    </NotePage>
  );
}
