import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";
import { ROUTES } from "@/routes";

interface LogoProps {
  size?: "md" | "sm";
}

export default function Logo({ size = "md" }: LogoProps) {
  const isSmall = size === "sm";

  return (
    <Link href={ROUTES.HOME} className="inline-flex items-center gap-2.5" aria-label="FitLog home">
      <Image
        src={logo}
        alt=""
        className={isSmall ? "size-5" : "size-7"}
        priority={!isSmall}
      />
      <span
        className={`font-display font-bold tracking-wide text-white ${isSmall ? "text-base" : "text-[22px]"}`}
      >
        FITLOG
      </span>
    </Link>
  );
}
