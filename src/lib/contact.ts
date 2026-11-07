type CategoryLike = { slug: string; services: { slug: string }[] };

export type ContactDefaults = { categorySlug?: string; serviceSlug?: string; description?: string };

// Tautan ke /kontak dengan isian awal (dipakai kartu kebutuhan dan pencari layanan).
export function contactHref(o: { categorySlug?: string; serviceSlug?: string; message?: string }): string {
  const p = new URLSearchParams();
  if (o.categorySlug) p.set("kategori", o.categorySlug);
  if (o.serviceSlug) p.set("layanan", o.serviceSlug);
  if (o.message) p.set("pesan", o.message);
  const q = p.toString();
  return q ? `/kontak?${q}` : "/kontak";
}

// Parameter datang dari URL (bisa diubah siapa saja), jadi divalidasi: kategori dan layanan harus ada
// di katalog, dan pesan dibatasi panjangnya. Hanya mengisi form milik pengunjung itu sendiri.
export function pickDefaults(
  params: { kategori?: string; layanan?: string; pesan?: string },
  categories: CategoryLike[],
): ContactDefaults {
  const category = categories.find((c) => c.slug === params.kategori);
  const service = category?.services.find((s) => s.slug === params.layanan);
  const description = params.pesan?.trim().slice(0, 300);
  return {
    categorySlug: category?.slug,
    serviceSlug: service?.slug,
    description: description || undefined,
  };
}
