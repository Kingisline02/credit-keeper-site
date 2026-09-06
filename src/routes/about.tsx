import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY, photos } from "@/components/site/content";

const disciplines = [
  ["Product strategy", "Framing problems, sizing opportunity and defining what success means."],
  ["Design", "Interface, interaction and design systems that survive real content."],
  ["Engineering", "Web, mobile, backend, data and device-to-cloud implementation."],
  ["Applied research", "Evaluation, experimentation and evidence review."],
  ["Growth", "Positioning, acquisition, instrumentation and experimentation."],
  ["Delivery", "Planning, quality gates and transparent progress."],
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Halcyon Works" },
      {
        name: "description",
        content:
          "A multidisciplinary applied-innovation studio: product thinkers, engineers, designers, researchers and growth specialists working as one team.",
      },
      { property: "og:title", content: "About — Halcyon Works" },
      {
        property: "og:description",
        content: "Our mission, values, disciplines and standards for responsible delivery.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A studio built for ambitious, cross-disciplinary work"
        intro={`${COMPANY} exists to make complex technology understandable and to turn ambitious ideas into practical, deployable outcomes.`}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              For organizations that need to turn ambitious ideas into practical outcomes,{" "}
              {COMPANY} is an applied innovation studio combining product strategy, software
              engineering, AI, automation, digital growth, IoT and medical research capabilities.
              Unlike narrow agencies or disconnected vendors, we connect discovery, development,
              validation and responsible deployment through one integrated team.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We prefer evidence over superlatives. That means benchmarks instead of adjectives,
              measured outcomes instead of feature counts, and honest boundaries where a technology
              is not yet ready for the responsibility being asked of it.
            </p>
          </Reveal>

          <Reveal delay={120} className="surface-card lg:col-span-5 p-6">
            <p className="eyebrow">Values</p>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Clarity.</span> Complex systems
                explained without jargon or hype.
              </li>
              <li>
                <span className="font-medium text-foreground">Evidence.</span> Decisions we can
                defend with data.
              </li>
              <li>
                <span className="font-medium text-foreground">Care.</span> Security, privacy and
                accessibility treated as requirements.
              </li>
              <li>
                <span className="font-medium text-foreground">Candour.</span> We say what we do not
                know, and what we will not claim.
              </li>
            </ul>
          </Reveal>
        </div>
      </Section>

      <section className="border-y border-border/60 bg-surface/40">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="Disciplines"
            title="The people in the room"
            intro="Every engagement is staffed with the mix the problem actually needs."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map(([title, body], i) => (
              <Reveal key={title} delay={i * 60} className="surface-card p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <Reveal className="surface-card p-8 sm:p-12">
          <h2 className="text-2xl font-semibold">Collaborate or join us</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            We work with founders, innovation teams, operators, growth leaders, hardware teams and
            research groups. If you want to build something demanding — or help build it — we would
            like to hear from you.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Get in touch <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
