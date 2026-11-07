import { describe, expect, it } from "vitest";
import { buildWhatsAppLink } from "@/lib/whatsapp/link";

describe("buildWhatsAppLink", () => {
  it("mengembalikan null bila nomor kosong", () => {
    expect(buildWhatsAppLink({ number: "" })).toBeNull();
  });
  it("menyertakan nama layanan pada pesan", () => {
    const url = buildWhatsAppLink({ number: "6281234567890", serviceName: "Desain PPT" })!;
    expect(url.startsWith("https://wa.me/6281234567890?text=")).toBe(true);
    expect(decodeURIComponent(url.split("text=")[1])).toContain("layanan Desain PPT");
  });
  it("membersihkan karakter non-angka dari nomor", () => {
    expect(buildWhatsAppLink({ number: "+62 812-3456-7890" })).toContain("wa.me/6281234567890");
  });
});
