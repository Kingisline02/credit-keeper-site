import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { work } from "@/components/site/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Halcyon Works" },
      {
        name: "description",
        content:
          "Selected engagements across medical research, AI, IoT, automation, SaaS and growth, each with the outcome it produced.",
      },
      { property: "og:title", content: "Work — Halcyon Works" },
      {
        property: "og:description",
        content: "Evidence of delivery across research, industry, energy and software.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [filter, setFilter] = useState("All");
  const filters = useMemo(() => ["All", ...new Set(work.map((w) => w.capability))], []);
  const visible = filter === "All" ? work : work.filter((w) => w.capability === filter);

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Engagements, outcomes and what they proved"
        intro="We describe what the problem was, what we built and what changed. Filter by capability to find the closest fit."
      />

      <Section>
        <Reveal>
          <div
            role="group"
            aria-label="Filter work by capability"
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  filter === f
                    ? "border-primary/60 bg-primary/15 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {visible.map((item, i) => (
            <Reveal key={item.title} delay={i * 60} className="surface-card h-full p-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-primary/40 px-2.5 py-1 text-xs text-primary">
                  {item.capability}
                </span>
                <span className="text-xs text-muted-foreground">{item.industry}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              <p className="mt-5 border-t border-border pt-4 text-sm font-medium text-primary">
                {item.metric}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Discuss a similar initiative <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
