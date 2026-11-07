// Semua item di sini adalah CONCEPT PROJECT (contoh demonstrasi), bukan pekerjaan untuk pelanggan.
// Tidak ada klaim hasil/angka. Ganti dengan karya aktual (beserta izin publikasi) saat tersedia.
export type PortfolioItem = {
  slug: string;
  title: string;
  categorySlug: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  tools: string[];
  projectType: "CONCEPT" | "REAL";
};

export const portfolio: PortfolioItem[] = [
  {
    slug: "konsep-template-presentasi-seminar",
    title: "Template Presentasi Seminar",
    categorySlug: "creative-design",
    summary: "Contoh struktur slide seminar yang rapi dan mudah dibaca.",
    problem: "Slide seminar sering padat teks dan sulit diikuti audiens.",
    solution: "Hierarki judul yang jelas, kontras warna yang cukup, dan satu gagasan utama per slide.",
    role: "Desain PPT",
    tools: ["Canva", "PowerPoint"],
    projectType: "CONCEPT",
  },
  {
    slug: "konsep-lkpd-interaktif",
    title: "LKPD Interaktif Teks Prosedur",
    categorySlug: "educational-media",
    summary: "Contoh LKPD digital dengan alur latihan bertahap.",
    problem: "Lembar kerja cetak kurang menarik dan sulit dibagikan secara daring.",
    solution: "LKPD digital dengan langkah bertahap, contoh, dan latihan mandiri.",
    role: "LKPD Digital",
    tools: ["Canva", "Google Forms"],
    projectType: "CONCEPT",
  },
  {
    slug: "konsep-landing-page-umkm",
    title: "Landing Page UMKM Kuliner",
    categorySlug: "digital-development",
    summary: "Contoh landing page satu halaman untuk usaha kecil.",
    problem: "Usaha kecil membutuhkan halaman sederhana untuk memperkenalkan produk.",
    solution: "Satu halaman responsif berisi profil, produk, dan tombol pesan.",
    role: "Landing Page",
    tools: ["Next.js", "Tailwind CSS"],
    projectType: "CONCEPT",
  },
];
