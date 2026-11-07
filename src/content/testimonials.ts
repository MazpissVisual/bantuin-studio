// Bentuknya sama dengan model Testimonial di prisma/schema.prisma.
// Item dengan isDemo = true adalah TEKS CONTOH untuk pratinjau desain, bukan ulasan pelanggan. Hanya tampil saat
// development (npm run dev) dan TIDAK PERNAH ikut ke build produksi. Testimoni nyata wajib punya izin tercatat
// (consentRecorded) sebelum dipublikasikan. Nama memakai inisial. Tidak ada angka atau klaim hasil.
export type TestimonialItem = {
  displayName: string;
  quote: string;
  serviceLabel: string;
  consentRecorded: boolean;
  isDemo: boolean;
};

const demo = (displayName: string, serviceLabel: string, quote: string): TestimonialItem => ({
  displayName,
  quote,
  serviceLabel,
  consentRecorded: false,
  isDemo: true,
});

export const testimonials: TestimonialItem[] = [
  demo("AN", "Creative Design", "Awalnya bingung mau mulai dari mana, tapi dibantu ngerapiin ide dulu. Jadi enak pas masuk ke bagian desainnya."),
  demo("RS", "Web & Digital Development", "Suka banget karena dari awal udah dikasih tahu kisaran biayanya. Nggak ada drama di akhir."),
  demo("DP", "Creative Design", "Aku cuma kirim materi mentah, terus dikasih saran urutan slide yang lebih masuk akal. Makasih ya!"),
  demo("MK", "Academic Support", "Balasnya sopan dan nggak bikin aku ngerasa nanya hal bodoh, padahal pertanyaanku banyak banget wkwk."),
  demo("FH", "Educational Media", "LKPD-nya jadi rapi dan gampang dibagiin ke murid. Cara pakainya juga dijelasin singkat."),
  demo("YL", "Academic Support", "Tulisanku cuma dibenerin ejaan sama formatnya, isinya tetap punyaku. Itu yang memang aku cari."),
  demo("BT", "Web & Digital Development", "Halaman usahaku akhirnya punya tampilan yang layak dikirim ke pelanggan. Cara ganti isinya juga diajarin."),
];

const showDemo = process.env.NODE_ENV !== "production";

export function visibleTestimonials(): TestimonialItem[] {
  return testimonials.filter((t) => (t.isDemo ? showDemo : t.consentRecorded));
}
