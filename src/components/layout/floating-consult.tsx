"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ConsultButton } from "@/components/ui/cta-button";

// Tombol konsultasi melayang, hanya di layar kecil (desktop sudah punya CTA di header).
// Supaya tidak menutupi bacaan atau tombol lain, ia:
//  - muncul hanya saat pengunjung menggulir ke ATAS (mencari navigasi), dan tersembunyi saat membaca ke bawah;
//  - tersembunyi saat ada area CTA lain di layar (elemen ber-atribut data-cta);
//  - tidak tampil di halaman kontak.
export function FloatingConsult() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [up, setUp] = useState(false);
  // Disimpan bersama halamannya, jadi nilai dari halaman sebelumnya otomatis tidak berlaku setelah pindah.
  const [cta, setCta] = useState<{ path: string; visible: boolean }>({ path: "", visible: false });
  const ctaVisible = cta.path === pathname && cta.visible;

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 480);
      if (Math.abs(y - last) > 8) {
        setUp(y < last);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-cta]");
    if (!targets.length) return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      setCta({ path: pathname, visible: visible.size > 0 });
    });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [pathname]);

  const show = scrolled && up && !ctaVisible && pathname !== "/kontak";

  return (
    <div
      data-show={show}
      aria-hidden={!show}
      inert={!show}
      className="floating-consult fixed bottom-4 right-4 z-40 shadow-lg md:hidden [&_a]:shadow-lg"
    >
      <ConsultButton label="Konsultasi" />
    </div>
  );
}
