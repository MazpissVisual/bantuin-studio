import { describe, expect, it } from "vitest";
import { contactHref, pickDefaults } from "@/lib/contact";

const categories = [
  { slug: "creative-design", services: [{ slug: "desain-ppt" }] },
  { slug: "educational-media", services: [{ slug: "lkpd-digital" }] },
];

describe("contactHref", () => {
  it("tanpa parameter mengarah ke /kontak", () => {
    expect(contactHref({})).toBe("/kontak");
  });
  it("meng-encode pesan", () => {
    const href = contactHref({ categorySlug: "creative-design", serviceSlug: "desain-ppt", message: "PPT & poster" });
    expect(href).toContain("kategori=creative-design");
    expect(href).toContain("layanan=desain-ppt");
    expect(new URL(href, "http://x").searchParams.get("pesan")).toBe("PPT & poster");
  });
});

describe("pickDefaults", () => {
  it("menerima kategori dan layanan yang valid", () => {
    expect(pickDefaults({ kategori: "creative-design", layanan: "desain-ppt", pesan: " halo " }, categories)).toEqual({
      categorySlug: "creative-design",
      serviceSlug: "desain-ppt",
      description: "halo",
    });
  });
  it("mengabaikan kategori tidak dikenal", () => {
    expect(pickDefaults({ kategori: "hacker", layanan: "desain-ppt" }, categories)).toEqual({
      categorySlug: undefined,
      serviceSlug: undefined,
      description: undefined,
    });
  });
  it("mengabaikan layanan yang bukan milik kategori", () => {
    expect(pickDefaults({ kategori: "creative-design", layanan: "lkpd-digital" }, categories).serviceSlug).toBeUndefined();
  });
  it("memotong pesan terlalu panjang", () => {
    expect(pickDefaults({ pesan: "a".repeat(1000) }, categories).description).toHaveLength(300);
  });
});
