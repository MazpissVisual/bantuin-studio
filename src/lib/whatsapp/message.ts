export type InquiryMessageInput = {
  name: string;
  categoryName: string;
  serviceName?: string;
  description: string;
  email?: string;
  deadline?: string; // yyyy-mm-dd dari input tanggal
  budgetRange?: string;
  referenceUrl?: string;
};

const MONTHS = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

export function formatDeadline(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  const month = MONTHS[Number(m[2]) - 1];
  return month ? `${Number(m[3])} ${month} ${m[1]}` : iso;
}

// Pesan yang dikirim lewat WhatsApp atau email. Baris opsional dilewati bila kosong.
export function buildInquiryMessage(i: InquiryMessageInput): string {
  const lines = [
    "Halo Bantuin Studio, saya ingin konsultasi.",
    "",
    `Nama: ${i.name}`,
    `Kategori: ${i.categoryName}`,
    ...(i.serviceName ? [`Layanan: ${i.serviceName}`] : []),
    `Kebutuhan: ${i.description}`,
    ...(i.deadline ? [`Deadline: ${formatDeadline(i.deadline)}`] : []),
    ...(i.budgetRange ? [`Kisaran budget: ${i.budgetRange}`] : []),
    ...(i.referenceUrl ? [`Link referensi: ${i.referenceUrl}`] : []),
    ...(i.email ? [`Email: ${i.email}`] : []),
  ];
  return lines.join("\n");
}

export function mailtoUrl(email: string, subject: string, body: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
