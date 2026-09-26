import Logo from "@/components/ui/Logo";

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <Container className="flex flex-col items-center justify-between gap-3 py-7 sm:flex-row">
        <Logo size="sm" />
        <p className="text-center text-[13px] text-muted">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </Container>
    </footer>
  );
}
