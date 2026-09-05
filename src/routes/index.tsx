import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Parallax } from "@/components/site/Parallax";
import { Section, SectionHeading } from "@/components/site/Section";
import { capabilities, principles, approachSteps, work } from "@/components/site/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Halcyon Works — Build what matters, end to end" },
      {
        name: "description",
        content:
          "An applied innovation studio combining product strategy, engineering, AI, automation, growth, IoT and medical research in one integrated team.",
      },
      { property: "og:title", content: "Halcyon Works — Build what matters, end to end" },
      {
        property: "og:description",
        content:
          "One partner across digital products, intelligent systems, connected devices, growth and research innovation.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Parallax speed={0.25} className="absolute inset-0">
            <img
              src={heroImage}
              alt=""
              width={1600}
              height={1000}
              className="bg-drift h-full w-full object-cover opacity-60"
            />
          </Parallax>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklch,var(--background)_45%,transparent),var(--background))]" />
          <div className="absolute inset-0 grid-lines" />
        </div>

        <div className="container-page relative grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:py-36">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Applied innovation studio</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
                Build what matters, <span className="text-gradient-ember">from first insight</span>{" "}
                to measurable outcome.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Product thinkers, engineers, researchers, designers and growth specialists working
                as one team across digital products, intelligent systems, connected devices,
                automation and responsible medical research.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Tell us what you are trying to build <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  See the work
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={200} className="surface-card p-6">
              <p className="eyebrow">Why teams choose us</p>
              <dl className="mt-5 space-y-5">
                {[
                  ["One integrated team", "Discovery, delivery, validation and deployment."],
                  ["Evidence-led", "Decisions defended by data, not opinion or hype."],
                  ["Responsible by default", "Security-conscious build, clear medical boundaries."],
                ].map(([term, desc]) => (
                  <div key={term} className="border-l-2 border-primary/50 pl-4">
                    <dt className="font-display text-base font-semibold">{term}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{desc}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border/60 bg-surface/30 py-4" aria-hidden>
        <div className="marquee-track flex w-max items-center gap-10">
          {[...capabilities, ...capabilities].map((cap, i) => (
            <span
              key={`${cap.slug}-${i}`}
              className="flex items-center gap-10 whitespace-nowrap font-display text-sm uppercase tracking-[0.22em] text-muted-foreground"
            >
              {cap.name}
              <span className="size-1.5 rounded-full bg-primary/70" />
            </span>
          ))}
        </div>
      </div>

      <Section>
        <SectionHeading
          eyebrow="Capabilities"
          title="Six connected capabilities, one delivery model"
          intro="Not a generic software agency. Each capability stands on its own and compounds when combined."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.slug} delay={i * 70}>
              <Link
                to="/capabilities/$slug"
                params={{ slug: cap.slug }}
                className="group flex h-full flex-col surface-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <span className="font-display text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{cap.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {cap.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Explore
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="border-y border-border/60 bg-surface/40">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="Approach"
            title="A path from curiosity to a working outcome"
            intro="Five stages, each with a defined output and a decision point."
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {approachSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 80} as="li" className="surface-card h-full p-5">
                <span className="font-display text-sm text-primary">{s.step}</span>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Selected work"
          title="Proof, not promises"
          intro="A sample of engagements across research, industry, energy and software."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {work.slice(0, 3).map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="surface-card h-full p-6">
              <p className="eyebrow">{item.capability}</p>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              <p className="mt-5 text-sm font-medium text-primary">{item.metric}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View all work <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="surface-card p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden border-y border-border/60">
        <Parallax speed={0.3} className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            width={1600}
            height={1000}
            className="bg-drift h-[130%] w-full object-cover opacity-30"
          />
        </Parallax>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--background),color-mix(in_oklch,var(--background)_40%,transparent),var(--background))]" />
        <div className="container-page relative py-20 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">In motion</p>
            <p className="mx-auto mt-4 max-w-2xl font-display text-2xl font-semibold leading-snug sm:text-3xl">
              Ideas researched, systems engineered, outcomes measured — moving as one.
            </p>
          </Reveal>
        </div>
      </section>

      <Section className="pt-0">
        <Reveal className="surface-card relative overflow-hidden p-8 text-center sm:p-14">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-veil" />
          <div className="relative">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Tell us what you are trying to build.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Share the problem, the constraint or the idea. We reply within two business days with
              a considered next step — not a sales sequence.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-ember)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start a conversation <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
