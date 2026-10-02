import type { Metadata } from "next";
import { NotePage } from "@/components/layout/NotePage";

export const metadata: Metadata = { title: "Care", description: "Garment care notes are not published yet." };

export default function Page() {
  return (
    <NotePage kicker="Customer" title="Care">
      <p>Fabric content and wash instructions were not part of the supplied catalog, so none are invented here.</p>
      <p>Until a care label is connected, treat pieces as unconfirmed and follow the label that arrives with the garment.</p>
    </NotePage>
  );
}
