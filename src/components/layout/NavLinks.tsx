"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "@/routes";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="order-last flex w-full items-center justify-center gap-2 md:order-none md:w-auto">
      {NAV_LINKS.map(({ label, href }) => {
        const isActive = pathname === href;

        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`inline-flex rounded-full px-5 py-1.5 text-[13px] font-medium transition-colors ${
                isActive ? "bg-accent-soft text-accent" : "text-muted hover:text-white"
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
