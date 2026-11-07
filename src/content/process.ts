// Penjelasan tiap langkah memakai janji yang sudah ada di PRD (estimasi sebelum mulai, ruang lingkup
// disepakati, revisi sesuai kesepakatan). Tidak memuat angka atau klaim waktu.
export const processDetails = [
  { title: "Konsultasi", text: "Kamu ceritakan kebutuhan, tujuan, dan tenggatmu lewat formulir atau WhatsApp." },
  { title: "Estimasi", text: "Kami kirim estimasi biaya dan ruang lingkup sebelum kamu memutuskan." },
  { title: "Konfirmasi", text: "Setelah kamu setuju, ruang lingkup dan biaya kami catat sebagai kesepakatan." },
  { title: "Pengerjaan", text: "Kami kerjakan sesuai brief, dan kamu bisa menanyakan progres kapan saja." },
  { title: "Review & serah terima", text: "Kamu cek hasilnya, revisi dibahas sesuai kesepakatan, lalu file diserahkan." },
] as const;

// Hanya nama langkah (dipakai beranda, Tentang, dan ilustrasi hero).
export const processSteps: string[] = processDetails.map((d) => d.title);

// Informasi umum yang membantu kami memahami kebutuhan (selaras dengan kolom formulir kontak).
export const prepareList = [
  "Gambaran kebutuhan dan tujuanmu",
  "Tenggat yang kamu inginkan",
  "Link referensi atau materi (pastikan aksesnya dibuka)",
  "Kisaran budget bila sudah ada",
];
