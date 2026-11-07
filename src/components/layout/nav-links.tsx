"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioEnabled } from "@/content/features";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/layanan", label: "Layanan" },
  ...(portfolioEnabled ? [{ href: "/portfolio", label: "Portfolio" }] : []),
  { href: "/harga", label: "Harga" },
  { href: "/tentang", label: "Tentang" },
];

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks() {
  const pathname = usePathname();
  return (
    <nav aria-label="Navigasi utama" className="hidden items-center gap-7 md:flex">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className="nav-link" aria-current={isActive(pathname, item.href) ? "page" : undefined}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
