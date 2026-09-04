import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { capabilities, approachSteps, work } from "@/components/site/content";

export const Route = createFileRoute("/capabilities/$slug")({
  loader: ({ params }) => {
    const capability = capabilities.find((c) => c.slug === params.slug);
    if (!capability) throw notFound();
    return { capability };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable — Halcyon Works" }, { name: "robots", content: "noindex" }],
      };
    }
    const { capability } = loaderData;
    return {
      meta: [
        { title: `${capability.name} — Halcyon Works` },
        { name: "description", content: capability.summary.slice(0, 155) },
        { property: "og:title", content: `${capability.name} — Halcyon Works` },
        { property: "og:description", content: capability.summary.slice(0, 155) },
      ],
    };
  },
  component: CapabilityDetail,
});

function CapabilityDetail() {
  const { capability } = Route.useLoaderData();
  const related = work.filter((w) =>
    capability.name.toLowerCase().includes(w.capability.toLowerCase().split(" ")[0]),
  );

  return (
    <>
      <PageHero eyebrow="Capability" title={capability.name} intro={capability.summary} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-2xl font-semibold">What the engagement covers</h2>
              <ul className="mt-6 space-y-4">
                {capability.outcomes.map((o, i) => (
                  <li key={o} className="surface-card flex gap-4 p-5">
                    <span className="font-display text-sm text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{o}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="text-2xl font-semibold">How we run it</h2>
              <ol className="mt-6 space-y-4 border-l border-border pl-6">
                {approachSteps.map((s) => (
                  <li key={s.step} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[1.9rem] top-1.5 size-2.5 rounded-full bg-primary"
                    />
                    <p className="font-display font-semibold">
                      {s.step} · {s.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal className="surface-card p-6">
              <p className="eyebrow">Proof</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {capability.proof}
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                {capability.cta} <ArrowRight className="size-4" />
              </Link>
            </Reveal>

            {related.length > 0 && (
              <Reveal delay={100} className="surface-card mt-5 p-6">
                <p className="eyebrow">Related work</p>
                <ul className="mt-4 space-y-4">
                  {related.map((r) => (
                    <li key={r.title}>
                      <p className="font-medium">{r.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{r.metric}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal delay={150} className="mt-5">
              <Link
                to="/capabilities"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="size-4" /> All capabilities
              </Link>
            </Reveal>
          </aside>
        </div>
      </Section>
    </>
  );
}
