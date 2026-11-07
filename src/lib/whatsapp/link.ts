/** Tautan wa.me dengan pesan awal. Mengembalikan null bila nomor kosong. */
export function whatsAppUrl(number: string, text: string): string | null {
  const digits = number.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppLink(opts: {
  number: string;
  categoryName?: string;
  serviceName?: string;
  /** Catatan kebutuhan yang diisi setelah "Kebutuhan saya:". */
  note?: string;
}): string | null {
  const topic = opts.serviceName
    ? `layanan ${opts.serviceName}`
    : opts.categoryName
      ? `layanan ${opts.categoryName}`
      : "layanan Bantuin Studio";
  return whatsAppUrl(opts.number, `Halo Bantuin Studio, saya ingin konsultasi ${topic}. Kebutuhan saya: ${opts.note ?? ""}`);
}
