import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY } from "./content";
import { ScrollProgress } from "./ScrollProgress";

const nav = [
  { to: "/capabilities", label: "Capabilities" },
  { to: "/work", label: "Work" },
  { to: "/approach", label: "Approach" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <ScrollProgress />
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid size-7 place-items-center rounded-md bg-[image:var(--gradient-ember)] text-[13px] font-bold text-primary-foreground">
            H
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight">{COMPANY}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-3.5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
          >
            Start a conversation <ArrowUpRight className="size-4" />
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-md border border-border md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 md:hidden" aria-label="Mobile">
          <div className="container-page flex flex-col py-3">
            {[...nav, { to: "/contact", label: "Contact" } as const].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-1 py-3 text-base text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-surface/40">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold">{COMPANY}</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            An applied innovation studio. We build what matters, from first insight to measurable
            outcome.
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted-foreground hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Disciplines</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>SaaS products</li>
            <li>AI and intelligent systems</li>
            <li>Automation</li>
            <li>Growth</li>
            <li>IoT</li>
            <li>Medical research innovation</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Responsible practice</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Medical research content states its stage and evidence status. It is not medical advice
            and implies no regulatory approval or clinical claim.
          </p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY}. All rights reserved.
          </p>
          <p>Evidence-led delivery. Accessibility and motion preferences respected.</p>
        </div>
      </div>
    </footer>
  );
}
