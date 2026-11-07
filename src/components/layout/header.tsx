import { ConsultButton } from "@/components/ui/cta-button";
import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="site-header sticky top-0 z-40 border-b border-rule bg-ground">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Logo />
        <NavLinks />
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ConsultButton label="Konsultasi" />
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
