import { ArrowDown } from "lucide-react";
import Image from "next/image";

import banner from "@/assets/banner.png";

export default function Hero() {
  return (
    <section className="mt-6 grid items-center gap-10 rounded-2xl border border-line bg-surface px-6 py-12 sm:mt-10 sm:px-10 md:grid-cols-[1fr_auto] lg:px-14 lg:py-16">
      <div className="max-w-[600px]">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
          Workout Library
        </p>
        <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl lg:text-[58px]">
          Train with intent. Log every set.
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan,
          and watch the week&apos;s work add up.
        </p>
        <a
          href="#library"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-xs font-bold uppercase tracking-wide text-black transition hover:brightness-110"
        >
          Browse Workouts
          <ArrowDown className="size-3.5" aria-hidden="true" />
        </a>
      </div>

      <div className="flex justify-center md:justify-end">
        <Image
          src={banner}
          alt="Athlete training on a preacher curl machine"
          priority
          sizes="(min-width: 1024px) 334px, 260px"
          className="w-64 lg:w-[334px]"
        />
      </div>
    </section>
  );
}
