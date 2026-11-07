import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./logo";
import { categories } from "@/content/catalog";
import { portfolioEnabled } from "@/content/features";

export function Footer() {
  return (
    <footer className="on-field border-t border-on-field/15 bg-field text-on-field">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo onField />
          <p className="mt-2 text-sm text-on-field-2">{site.tagline}</p>
          <ul className="mt-4 space-y-1.5 text-sm text-on-field-2">
            <li><a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-on-field">WhatsApp {site.whatsappDisplay}</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold">Layanan</p>
          <ul className="mt-3 space-y-2 text-sm text-on-field-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/layanan/${c.slug}`} className="hover:text-on-field">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold">Jelajahi</p>
          <ul className="mt-3 space-y-2 text-sm text-on-field-2">
            {portfolioEnabled && <li><Link href="/portfolio" className="hover:text-on-field">Portfolio</Link></li>}
            <li><Link href="/harga" className="hover:text-on-field">Harga</Link></li>
            <li><Link href="/faq" className="hover:text-on-field">FAQ</Link></li>
            <li><Link href="/kontak" className="hover:text-on-field">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold">Kebijakan</p>
          <ul className="mt-3 space-y-2 text-sm text-on-field-2">
            <li><Link href="/kebijakan-privasi" className="hover:text-on-field">Kebijakan Privasi</Link></li>
            <li><Link href="/ketentuan-layanan" className="hover:text-on-field">Ketentuan Layanan</Link></li>
            <li><Link href="/integritas-akademik" className="hover:text-on-field">Integritas Akademik</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-on-field/15 px-4 py-4 text-center text-xs text-on-field-2">
        &copy; {new Date().getFullYear()} {site.name}. Semua hak dilindungi.
      </div>
    </footer>
  );
}
