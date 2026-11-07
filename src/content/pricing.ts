// Isi paket per kategori. Angka harga BELUM ditetapkan, jadi semua paket tampil sebagai "Hubungi kami".
// Saat harga resmi disetujui: isi amount (rupiah) dan unit (misalnya "per dokumen") pada paket terkait.

export type PricingPlan = {
  tier: "BASIC" | "STANDARD" | "CUSTOM";
  name: string;
  description: string;
  amount: number | null; // null = "Hubungi kami"
  unit: string | null;
  recommended: boolean;
  inclusions: string[];
  exclusions: string[];
};

const custom = (description: string, inclusions: string[]): PricingPlan => ({
  tier: "CUSTOM",
  name: "Custom",
  description,
  amount: null,
  unit: null,
  recommended: false,
  inclusions,
  exclusions: [],
});

export const pricingByCategory: Record<string, PricingPlan[]> = {
  "academic-support": [
    { tier: "BASIC", name: "Basic", description: "Untuk satu dokumen pendek.", amount: null, unit: null, recommended: false, inclusions: ["Pemeriksaan ejaan dan tata bahasa", "Catatan perbaikan singkat"], exclusions: ["Formatting lengkap", "Sesi konsultasi"] },
    { tier: "STANDARD", name: "Standard", description: "Proofreading dan formatting.", amount: null, unit: null, recommended: true, inclusions: ["Semua isi Basic", "Formatting sesuai pedoman", "Daftar isi dan penomoran halaman", "Revisi sesuai kesepakatan"], exclusions: ["Sesi konsultasi panjang"] },
    custom("Dokumen panjang atau kebutuhan khusus.", ["Ruang lingkup disesuaikan", "Konsultasi terjadwal", "Penawaran tertulis"]),
  ],
  "creative-design": [
    { tier: "BASIC", name: "Basic", description: "Desain sederhana dan cepat.", amount: null, unit: null, recommended: false, inclusions: ["Satu desain (poster/CV/slide)", "File PNG atau PDF"], exclusions: ["File sumber", "Ilustrasi custom"] },
    { tier: "STANDARD", name: "Standard", description: "Paket desain yang paling lengkap.", amount: null, unit: null, recommended: true, inclusions: ["Beberapa halaman atau slide", "Konsistensi warna dan tipografi", "File sumber bila disepakati", "Revisi sesuai kesepakatan"], exclusions: ["Ilustrasi custom"] },
    custom("Identitas visual atau proyek besar.", ["Konsep visual", "Ilustrasi custom", "Penawaran tertulis"]),
  ],
  "educational-media": [
    { tier: "BASIC", name: "Basic", description: "Satu media pembelajaran.", amount: null, unit: null, recommended: false, inclusions: ["LKPD atau modul ajar satu materi", "Tampilan rapi siap pakai"], exclusions: ["Elemen interaktif", "Website"] },
    { tier: "STANDARD", name: "Standard", description: "Media dengan elemen interaktif.", amount: null, unit: null, recommended: true, inclusions: ["Semua isi Basic", "Elemen interaktif (kuis/tautan latihan)", "Panduan penggunaan singkat", "Revisi sesuai kesepakatan"], exclusions: ["Website penuh"] },
    custom("Website pembelajaran atau banyak materi.", ["Perencanaan alur belajar", "Website siap publikasi", "Penawaran tertulis"]),
  ],
  "digital-development": [
    { tier: "BASIC", name: "Basic", description: "Landing page sederhana.", amount: null, unit: null, recommended: false, inclusions: ["Satu halaman responsif", "Tombol kontak"], exclusions: ["Panel admin", "Fitur khusus"] },
    { tier: "STANDARD", name: "Standard", description: "Website profil beberapa halaman.", amount: null, unit: null, recommended: true, inclusions: ["Beberapa halaman responsif", "SEO dasar", "Setup deployment", "Revisi sesuai kesepakatan"], exclusions: ["Panel admin", "Fitur khusus"] },
    custom("Fitur khusus, panel admin, atau dashboard.", ["Analisis kebutuhan", "Fitur sesuai brief", "Penawaran tertulis"]),
  ],
};
