import { categories, type CatalogCategory, type CatalogService } from "@/content/catalog";

// Lapisan akses data. Sprint 2/3 mengganti isi fungsi ini dengan query Prisma
// tanpa mengubah halaman yang memanggilnya.
export async function listCategories(): Promise<CatalogCategory[]> {
  return categories;
}

export async function getCategory(slug: string): Promise<CatalogCategory | null> {
  return categories.find((c) => c.slug === slug) ?? null;
}

export async function getService(
  categorySlug: string,
  serviceSlug: string,
): Promise<{ category: CatalogCategory; service: CatalogService } | null> {
  const category = await getCategory(categorySlug);
  const service = category?.services.find((s) => s.slug === serviceSlug);
  return category && service ? { category, service } : null;
}
