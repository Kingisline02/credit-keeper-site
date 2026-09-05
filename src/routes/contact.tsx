import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY, capabilities } from "@/components/site/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Halcyon Works" },
      {
        name: "description",
        content:
          "Tell us about your product, AI, automation, growth, IoT or research challenge and we will reply within two working days.",
      },
      { property: "og:title", content: "Contact — Halcyon Works" },
      {
        property: "og:description",
        content: "Start a conversation with our applied innovation studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation"
        intro={`Share the problem, the constraints and the timeline. ${COMPANY} will reply within two working days with a considered next step.`}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            {sent ? (
              <div className="surface-card p-8">
                <span className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary">
                  <Check className="size-5" />
                </span>
                <h2 className="mt-4 text-2xl font-semibold">Thank you — message noted</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  This enquiry form is not yet connected to an inbox, so nothing has been sent. Tell
                  us the email address enquiries should go to and we will wire it up.
                </p>
              </div>
            ) : (
              <form
                className="surface-card grid gap-5 p-6 sm:p-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Organisation" name="organisation" />
                  <div className="grid gap-2">
                    <label htmlFor="area" className="text-sm font-medium">
                      Area of interest
                    </label>
                    <select
                      id="area"
                      name="area"
                      className="rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                    >
                      {capabilities.map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.name}
                        </option>
                      ))}
                      <option value="other">Something else</option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    What are you trying to achieve?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="Context, constraints, timeline and what success looks like."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Send enquiry <ArrowRight className="size-4" />
                </button>
              </form>
            )}
          </Reveal>

          <aside className="lg:col-span-5">
            <Reveal delay={100} className="surface-card p-6">
              <p className="eyebrow">What happens next</p>
              <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">1. Reply.</span> A considered
                  response within two working days.
                </li>
                <li>
                  <span className="font-medium text-foreground">2. Framing call.</span> Forty-five
                  minutes to understand the problem and constraints.
                </li>
                <li>
                  <span className="font-medium text-foreground">3. Proposal.</span> Scope,
                  milestones and evidence gates in writing.
                </li>
              </ul>
            </Reveal>
            <Reveal delay={160} className="surface-card mt-5 p-6">
              <p className="eyebrow">Responsible practice</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Medical research enquiries are handled with stage and evidence status stated
                explicitly. Nothing we publish is medical advice or implies regulatory approval.
              </p>
            </Reveal>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
