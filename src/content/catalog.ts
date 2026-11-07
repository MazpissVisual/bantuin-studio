// Konten awal berbentuk sama dengan model ServiceCategory/Service di prisma/schema.prisma.
// Daftar layanan final dan harga BELUM ditetapkan (PRD bagian 19): jangan isi harga di sini
// sebelum disetujui pemilik. Semua layanan memakai "Hubungi untuk penawaran".

export type CatalogService = {
  slug: string;
  name: string;
  shortDescription: string;
  deliverables: string[];
  startingPrice: number | null;
  priceLabel: string;
};

export type CatalogCategory = {
  slug: string;
  name: string;
  description: string;
  icon: "graduation-cap" | "palette" | "book-open" | "code";
  audience: string[];
  services: CatalogService[];
};

const PRICE = "Hubungi untuk penawaran";

export const categories: CatalogCategory[] = [
  {
    slug: "academic-support",
    name: "Academic Support",
    description:
      "Pendampingan belajar dan penulisan: konsultasi, feedback, proofreading, dan formatting. Kamu tetap penulis karyamu.",
    icon: "graduation-cap",
    audience: ["Mahasiswa dan pelajar", "Siapa pun yang ingin tulisannya lebih rapi"],
    services: [
      { slug: "proofreading-akademik", name: "Proofreading Akademik", shortDescription: "Pemeriksaan ejaan, tata bahasa, dan kejelasan kalimat pada tulisanmu.", deliverables: ["Naskah dengan perbaikan ejaan dan tata bahasa", "Catatan saran perbaikan"], startingPrice: null, priceLabel: PRICE },
      { slug: "formatting-makalah", name: "Formatting Makalah", shortDescription: "Perapian format sesuai pedoman penulisan kampus atau lembaga.", deliverables: ["Dokumen terformat rapi", "Daftar isi dan penomoran halaman"], startingPrice: null, priceLabel: PRICE },
      { slug: "konsultasi-analisis-data", name: "Konsultasi Analisis Data", shortDescription: "Diskusi metode dan cara membaca hasil analisis datamu sendiri.", deliverables: ["Sesi konsultasi", "Ringkasan saran metode"], startingPrice: null, priceLabel: PRICE },
    ],
  },
  {
    slug: "creative-design",
    name: "Creative Design",
    description: "Desain presentasi, poster, infografis, dan materi visual yang rapi dan mudah dipahami.",
    icon: "palette",
    audience: ["Mahasiswa", "Organisasi dan komunitas", "UMKM"],
    services: [
      { slug: "desain-ppt", name: "Desain PPT", shortDescription: "Slide presentasi yang bersih dan enak dibaca.", deliverables: ["File PPT/Canva siap pakai", "Revisi sesuai kesepakatan"], startingPrice: null, priceLabel: PRICE },
      { slug: "poster-infografis", name: "Poster & Infografis", shortDescription: "Visual informatif untuk acara, kampanye, atau pembelajaran.", deliverables: ["File desain PNG/PDF", "File sumber bila disepakati"], startingPrice: null, priceLabel: PRICE },
      { slug: "desain-cv", name: "Desain CV", shortDescription: "CV yang rapi dan profesional dengan data milikmu.", deliverables: ["CV format PDF", "Versi editable bila disepakati"], startingPrice: null, priceLabel: PRICE },
    ],
  },
  {
    slug: "educational-media",
    name: "Educational Media",
    description: "Media pembelajaran interaktif untuk guru dan calon guru: LKPD, modul ajar, kuis, dan website belajar.",
    icon: "book-open",
    audience: ["Guru dan pendidik", "Mahasiswa pendidikan / calon guru"],
    services: [
      { slug: "lkpd-digital", name: "LKPD Digital", shortDescription: "Lembar kerja peserta didik yang interaktif dan mudah dibagikan.", deliverables: ["LKPD digital", "Panduan penggunaan singkat"], startingPrice: null, priceLabel: PRICE },
      { slug: "modul-ajar-digital", name: "Modul Ajar Digital", shortDescription: "Penataan modul ajar dengan tampilan menarik dari rancanganmu.", deliverables: ["Modul ajar terformat", "Elemen visual pendukung"], startingPrice: null, priceLabel: PRICE },
      { slug: "website-pembelajaran", name: "Website Pembelajaran", shortDescription: "Situs belajar interaktif sesuai tujuan pembelajaranmu.", deliverables: ["Website siap dipublikasikan", "Panduan mengganti konten"], startingPrice: null, priceLabel: PRICE },
    ],
  },
  {
    slug: "digital-development",
    name: "Web & Digital Development",
    description: "Landing page dan website untuk UMKM, organisasi, dan komunitas.",
    icon: "code",
    audience: ["UMKM", "Organisasi dan komunitas", "Guru yang butuh website belajar"],
    services: [
      { slug: "landing-page", name: "Landing Page", shortDescription: "Satu halaman fokus untuk memperkenalkan produk atau acara.", deliverables: ["Landing page responsif", "Setup deployment"], startingPrice: null, priceLabel: PRICE },
      { slug: "website-umkm-organisasi", name: "Website UMKM & Organisasi", shortDescription: "Website profil lengkap untuk bisnis atau komunitas.", deliverables: ["Website multi-halaman", "Panduan pengelolaan"], startingPrice: null, priceLabel: PRICE },
      { slug: "dashboard-web-sederhana", name: "Dashboard Web Sederhana", shortDescription: "Tampilan data sederhana untuk kebutuhan internal.", deliverables: ["Dashboard web", "Dokumentasi singkat"], startingPrice: null, priceLabel: PRICE },
    ],
  },
];
