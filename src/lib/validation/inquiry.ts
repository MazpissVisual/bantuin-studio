import { z } from "zod";

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((v) => (v ? v : undefined));

// Validasi di browser sebelum pesan WhatsApp disusun. Situs ini statis: tidak ada server yang menyimpan isian.
export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter").max(80),
  email: z
    .string()
    .trim()
    .max(120)
    .optional()
    .transform((v) => (v ? v : undefined))
    .refine((v) => !v || z.email().safeParse(v).success, "Format email tidak valid"),
  categorySlug: z.string().trim().min(1, "Pilih kategori layanan"),
  serviceSlug: optionalText(80),
  description: z.string().trim().min(10, "Ceritakan kebutuhanmu minimal 10 karakter").max(1500),
  deadline: optionalText(40),
  budgetRange: optionalText(60),
  referenceUrl: z
    .string()
    .trim()
    .max(300)
    .optional()
    .transform((v) => (v ? v : undefined))
    .refine((v) => !v || /^https?:\/\//i.test(v), "Link referensi harus diawali http:// atau https://"),
  privacyConsent: z.literal(true, { error: "Kamu perlu menyetujui kebijakan privasi" }),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
