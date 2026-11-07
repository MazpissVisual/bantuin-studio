import { describe, expect, it } from "vitest";
import { inquirySchema } from "@/lib/validation/inquiry";
import { buildInquiryMessage, formatDeadline, mailtoUrl } from "@/lib/whatsapp/message";
import { whatsAppUrl } from "@/lib/whatsapp/link";

const valid = {
  name: "Budi",
  categorySlug: "creative-design",
  description: "Butuh desain PPT untuk sidang",
  privacyConsent: true as const,
};

describe("inquirySchema", () => {
  it("menerima data valid", () => {
    expect(inquirySchema.safeParse(valid).success).toBe(true);
  });
  it("menolak tanpa persetujuan privasi", () => {
    expect(inquirySchema.safeParse({ ...valid, privacyConsent: false }).success).toBe(false);
  });
  it("menolak kebutuhan terlalu pendek", () => {
    expect(inquirySchema.safeParse({ ...valid, description: "PPT" }).success).toBe(false);
  });
  it("menolak link referensi non-http", () => {
    expect(inquirySchema.safeParse({ ...valid, referenceUrl: "javascript:alert(1)" }).success).toBe(false);
  });
  it("menolak email tidak valid tetapi menerima kosong", () => {
    expect(inquirySchema.safeParse({ ...valid, email: "bukan-email" }).success).toBe(false);
    expect(inquirySchema.safeParse({ ...valid, email: "" }).success).toBe(true);
  });
});

describe("buildInquiryMessage", () => {
  it("menyusun semua baris yang terisi", () => {
    const m = buildInquiryMessage({
      name: "Budi",
      categoryName: "Creative Design",
      serviceName: "Desain PPT",
      description: "PPT sidang",
      deadline: "2026-11-20",
      budgetRange: "Belum tahu",
      referenceUrl: "https://contoh.com",
      email: "b@x.com",
    });
    expect(m).toContain("Nama: Budi");
    expect(m).toContain("Layanan: Desain PPT");
    expect(m).toContain("Deadline: 20 November 2026");
    expect(m).toContain("Email: b@x.com");
  });
  it("melewati baris opsional yang kosong", () => {
    const m = buildInquiryMessage({ name: "Budi", categoryName: "Creative Design", description: "PPT sidang" });
    expect(m).not.toMatch(/Layanan:|Deadline:|Kisaran budget:|Link referensi:|Email:/);
  });
});

describe("tautan kontak", () => {
  it("formatDeadline mengembalikan teks asli bila format tidak dikenal", () => {
    expect(formatDeadline("besok")).toBe("besok");
  });
  it("whatsAppUrl membersihkan nomor dan meng-encode pesan", () => {
    const u = whatsAppUrl("+62 823-7498-2681", "Halo & salam")!;
    expect(u.startsWith("https://wa.me/6282374982681?text=")).toBe(true);
    expect(decodeURIComponent(u.split("text=")[1])).toBe("Halo & salam");
  });
  it("mailtoUrl meng-encode subjek dan isi", () => {
    const u = mailtoUrl("a@b.com", "Konsultasi baru", "baris 1\nbaris 2");
    expect(u).toContain("mailto:a@b.com?subject=Konsultasi%20baru");
    expect(u).toContain("body=baris%201%0Abaris%202");
  });
});
