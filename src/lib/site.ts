export const site = {
  name: "Bantuin Studio",
  tagline: "Dari Ide Menjadi Karya.",
  description:
    "Partner kreatif untuk kebutuhan akademik, desain, media pembelajaran, dan pengembangan digital dengan harga bersahabat.",
  // Isi NEXT_PUBLIC_SITE_URL dengan alamat asli saat deploy (dipakai sitemap dan gambar pratinjau).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // Format internasional tanpa "+" atau spasi. Bisa ditimpa lewat NEXT_PUBLIC_WHATSAPP_NUMBER.
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6282374982681",
  whatsappDisplay: "0823-7498-2681",
  email: "mazpissiqbal@gmail.com",
} as const;
