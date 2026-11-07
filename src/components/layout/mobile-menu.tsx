"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ConsultButton } from "@/components/ui/cta-button";
import { isActive, navItems } from "./nav-links";

export function MobileMenu() {
  const pathname = usePathname();
  // Menyimpan halaman tempat menu dibuka: otomatis tertutup begitu pindah halaman (tanpa efek tambahan).
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const setOpen = (value: boolean) => setOpenAt(value ? pathname : null);
  const root = useRef<HTMLDivElement>(null);

  // Tutup dengan Escape atau klik di luar.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenAt(null);
    };
    const onClick = (e: MouseEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setOpenAt(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={root} className="relative md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen(!open)}
        className="btn btn-secondary !min-w-11 !px-3"
      >
        {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
        <span className="sr-only">{open ? "Tutup menu" : "Buka menu"}</span>
      </button>

      <nav
        id="menu-mobile"
        aria-label="Navigasi mobile"
        data-open={open}
        className="menu-panel card absolute right-0 mt-2 flex w-60 flex-col gap-1 p-3"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(pathname, item.href) ? "page" : undefined}
            className="rounded-lg px-3 py-2.5 text-[15px] font-semibold text-ink hover:bg-ground-muted aria-[current=page]:bg-accent/10 aria-[current=page]:text-accent"
          >
            {item.label}
          </Link>
        ))}
        <div className="pt-2 [&>a]:w-full">
          <ConsultButton label="Konsultasi" />
        </div>
      </nav>
    </div>
  );
}
