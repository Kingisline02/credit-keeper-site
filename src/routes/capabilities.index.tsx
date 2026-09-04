import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { capabilities } from "@/components/site/content";

export const Route = createFileRoute("/capabilities/")({
  head: () => ({
    meta: [
      { title: "Capabilities — Halcyon Works" },
      {
        name: "description",
        content:
          "SaaS product development, AI systems, automation, digital growth, IoT and medical research innovation delivered by one integrated team.",
      },
      { property: "og:title", content: "Capabilities — Halcyon Works" },
      {
        property: "og:description",
        content: "Six connected capabilities, each with proof and a clear next step.",
      },
    ],
  }),
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Connected capabilities, not disconnected vendors"
        intro="Each capability is a complete practice. Together they cover the path from an idea to a deployed, measured system."
      />
      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.slug} delay={i * 60} className="surface-card flex h-full flex-col p-7">
              <h2 className="text-2xl font-semibold">{cap.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cap.summary}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
                {cap.outcomes.map((o) => (
                  <li key={o} className="flex gap-2.5">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {o}
                  </li>
                ))}
              </ul>
              <Link
                to="/capabilities/$slug"
                params={{ slug: cap.slug }}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                {cap.cta} <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
