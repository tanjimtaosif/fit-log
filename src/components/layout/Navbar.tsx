import Logo from "@/components/ui/Logo";

import Container from "./Container";
import NavBadges from "./NavBadges";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <header className="border-b border-line bg-page">
      <Container>
        <nav className="flex flex-wrap items-center justify-between gap-y-3 py-4 md:grid md:h-20 md:grid-cols-[1fr_auto_1fr] md:py-0">
          <Logo />
          <NavLinks />
          <NavBadges />
        </nav>
      </Container>
    </header>
  );
}
