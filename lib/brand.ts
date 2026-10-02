import fs from "fs";
import path from "path";

export function brandLogoSrc() {
  const png = path.join(process.cwd(), "public/brand/nav-glam-logo.png");
  const svg = path.join(process.cwd(), "public/brand/nav-glam-logo.svg");
  if (fs.existsSync(png)) return "/brand/nav-glam-logo.png";
  if (fs.existsSync(svg)) return "/brand/nav-glam-logo.svg";
  return null;
}
