import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Parallax } from "./Parallax";
import heroImage from "@/assets/hero.jpg";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("container-page py-16 sm:py-20 lg:py-24", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-border/60">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Parallax speed={0.2} className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            width={1600}
            height={1000}
            className="bg-drift h-full w-full object-cover opacity-25"
          />
        </Parallax>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklch,var(--background)_55%,transparent),var(--background))]" />
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute inset-0 bg-veil" />
      </div>
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </Reveal>
      </div>
    </div>
  );
}
