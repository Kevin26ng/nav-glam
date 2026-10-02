import type { Metadata } from "next";
import { NotePage } from "@/components/layout/NotePage";

export const metadata: Metadata = { title: "Privacy", description: "Privacy note for this preview." };

export default function Page() {
  return (
    <NotePage kicker="Legal" title="Privacy">
      <p>This preview stores your bag, wishlist and newsletter address in local storage on your device. The contact form stores a message in session storage. Nothing is sent to a server.</p>
      <p>A full privacy policy should be published before any account, analytics or payment system is connected.</p>
    </NotePage>
  );
}
