import type { MetadataRoute } from "next";
import { categories } from "@/content/catalog";
import { portfolio } from "@/content/portfolio";
import { portfolioEnabled } from "@/content/features";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["", "/layanan", ...(portfolioEnabled ? ["/portfolio"] : []), "/harga", "/tentang", "/faq", "/kontak", "/kebijakan-privasi", "/ketentuan-layanan", "/integritas-akademik"];
  const urls = [
    ...fixed,
    ...categories.flatMap((c) => [`/layanan/${c.slug}`, ...c.services.map((s) => `/layanan/${c.slug}/${s.slug}`)]),
    ...(portfolioEnabled
      ? [...categories.map((c) => `/portfolio/kategori/${c.slug}`), ...portfolio.map((p) => `/portfolio/${p.slug}`)]
      : []),
  ];
  return urls.map((path) => ({ url: `${site.url}${path}` }));
}
