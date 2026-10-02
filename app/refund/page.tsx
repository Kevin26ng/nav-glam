import type { Metadata } from "next";
import { NotePage } from "@/components/layout/NotePage";

export const metadata: Metadata = { title: "Refund policy", description: "Refund terms are not published yet." };

export default function Page() {
  return (
    <NotePage kicker="Legal" title="Refund policy">
      <p>No refund policy has been supplied, and this preview takes no payment, so no refund can be issued from this site.</p>
      <p>Publish the real window, exceptions and process here before checkout goes live.</p>
    </NotePage>
  );
}
