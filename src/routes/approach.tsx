import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { approachSteps, principles } from "@/components/site/content";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Approach — Halcyon Works" },
      {
        name: "description",
        content:
          "Discover, design, build, validate and deploy: an evidence-led delivery model with transparent decisions and security-conscious implementation.",
      },
      { property: "og:title", content: "Approach — Halcyon Works" },
      {
        property: "og:description",
        content: "How an idea becomes a validated, deployed and measured system.",
      },
    ],
  }),
  component: ApproachPage,
});

function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Approach"
        title="Evidence-led delivery, transparent at every stage"
        intro="We connect discovery, development, validation and responsible deployment through one team, with a defined output and decision point at each stage."
      />

      <Section>
        <ol className="space-y-5">
          {approachSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 60} as="li">
              <div className="surface-card grid gap-4 p-7 sm:grid-cols-12">
                <div className="sm:col-span-3">
                  <span className="font-display text-4xl text-gradient-ember">{s.step}</span>
                  <h2 className="mt-2 text-xl font-semibold">{s.title}</h2>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-9">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <section className="border-y border-border/60 bg-surface/40">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="Standards"
            title="The principles we will not trade away"
            intro="These are enforced at component level, not added at the end of a project."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="surface-card p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "Accessibility",
              "Keyboard operability, visible focus, sufficient contrast, semantic structure and honored motion preferences.",
            ],
            [
              "Performance",
              "Budgets for load, interaction readiness, layout stability, animation consistency and script payload.",
            ],
            [
              "Responsible AI and research",
              "No guaranteed-accuracy claims, no autonomous decisions in high-stakes contexts, no clinical claims.",
            ],
          ].map(([title, body], i) => (
            <Reveal key={title} delay={i * 70} className="surface-card p-6">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Start a conversation <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
