export const COMPANY = "Halcyon Works";

export type Capability = {
  slug: string;
  name: string;
  summary: string;
  outcomes: string[];
  proof: string;
  cta: string;
};

export const capabilities: Capability[] = [
  {
    slug: "saas",
    name: "SaaS product development",
    summary:
      "From user problem and product strategy through UX, architecture, engineering, QA, analytics and launch — shipped in validated increments.",
    outcomes: [
      "Product strategy and opportunity framing",
      "Interface design and design systems",
      "Web and mobile engineering with integrations",
      "Analytics, QA and iterative post-launch improvement",
    ],
    proof: "Multi-tenant platforms taken from first prototype to production release cycles.",
    cta: "Request a discovery session",
  },
  {
    slug: "ai",
    name: "AI models and intelligent systems",
    summary:
      "Model strategy, evaluation, retrieval-augmented generation, workflow intelligence and monitored deployment — with clear boundaries on what AI decides.",
    outcomes: [
      "Model selection, evaluation harnesses and benchmarks",
      "Retrieval-augmented generation over your own corpus",
      "Production integration with observability and cost control",
      "Human oversight for anything consequential",
    ],
    proof:
      "We separate experiments, production features and custom research, and we do not promise autonomous decisions in high-stakes contexts.",
    cta: "Start a strategic conversation",
  },
  {
    slug: "automation",
    name: "Automations and operational systems",
    summary:
      "Repeatability, visibility and human productivity: process mapping, integrations, approvals, document processing, reporting and exception handling.",
    outcomes: [
      "Process mapping and opportunity sizing",
      "API integration between fragmented systems",
      "Approval workflows and internal tools",
      "Exception handling with a human in the loop",
    ],
    proof: "Manual back-office loops reduced to reviewed exceptions rather than daily rework.",
    cta: "Request an automation assessment",
  },
  {
    slug: "growth",
    name: "Digital marketing and growth",
    summary:
      "Positioning, acquisition, content, analytics and conversion experimentation, run as a measured program instead of disconnected campaigns.",
    outcomes: [
      "Positioning and message architecture",
      "Content and acquisition programs",
      "Instrumentation and attribution you can trust",
      "Structured conversion experimentation",
    ],
    proof: "Growth work is tied to qualified pipeline, not traffic volume alone.",
    cta: "Discuss a growth initiative",
  },
  {
    slug: "iot",
    name: "IoT and connected devices",
    summary:
      "Device-to-cloud architecture, telemetry pipelines, dashboards, provisioning and the operational discipline that keeps fleets healthy.",
    outcomes: [
      "Firmware-to-cloud data architecture",
      "Telemetry ingestion and time-series storage",
      "Operational dashboards and alerting",
      "Provisioning, updates and fleet observability",
    ],
    proof: "Connected deployments designed for intermittent networks and constrained hardware.",
    cta: "Discuss an IoT initiative",
  },
  {
    slug: "research",
    name: "Medical research innovation",
    summary:
      "Research tooling, data workflows and digital health innovation delivered with explicit governance. Research support — never medical advice.",
    outcomes: [
      "Study and data-capture tooling",
      "Privacy-conscious data workflows",
      "Evidence review and analysis support",
      "Documented stage and evidence status for every claim",
    ],
    proof:
      "All medical research content states its stage. We make no clinical claims and imply no regulatory approval.",
    cta: "Explore a research collaboration",
  },
];

export const principles = [
  {
    title: "Motion with purpose",
    body: "Every animation orients, explains, transitions, reveals hierarchy or rewards interaction. Nothing moves for decoration alone.",
  },
  {
    title: "Mobile is not a reduced desktop",
    body: "Small screens get deliberately designed compositions, not stacked desktop sections with the padding removed.",
  },
  {
    title: "No accidental overflow",
    body: "Horizontal overflow, clipped content and off-canvas interactive elements are treated as release-blocking defects.",
  },
  {
    title: "Content before animation",
    body: "Everything meaningful is in the DOM immediately. Fast scrolling, keyboard use and reduced motion all give a complete experience.",
  },
];

export const approachSteps = [
  {
    step: "01",
    title: "Discover",
    body: "Frame the problem, the constraints and the measurable outcome. We map users, systems, data and risk before proposing a build.",
  },
  {
    step: "02",
    title: "Design",
    body: "Interface, architecture and delivery plan move together so the shape of the product and the shape of the system agree.",
  },
  {
    step: "03",
    title: "Build",
    body: "Short increments with visible progress, security-conscious implementation and quality gates that run continuously.",
  },
  {
    step: "04",
    title: "Validate",
    body: "Evidence over opinion: instrumentation, usability review, evaluation sets for AI, and field testing for connected devices.",
  },
  {
    step: "05",
    title: "Deploy and improve",
    body: "Responsible release, monitoring, and an improvement loop tied to the outcome we agreed at the start.",
  },
];

export const work = [
  {
    title: "Clinical study data capture",
    capability: "Medical research",
    industry: "Health research",
    body: "A consent-aware capture and review workflow for a multi-site observational study, with audit trails and role-scoped access.",
    metric: "Site data turnaround cut from days to hours",
  },
  {
    title: "Retrieval assistant for field engineers",
    capability: "AI",
    industry: "Industrial",
    body: "A grounded assistant over maintenance manuals and service history, with citation-first answers and a human escalation path.",
    metric: "Answer grounding verified against a 400-case evaluation set",
  },
  {
    title: "Fleet telemetry platform",
    capability: "IoT",
    industry: "Energy",
    body: "Device-to-cloud ingestion, anomaly alerting and an operations dashboard designed for intermittent connectivity.",
    metric: "Fleet visibility across thousands of endpoints",
  },
  {
    title: "Back-office exception automation",
    capability: "Automation",
    industry: "Logistics",
    body: "Document intake, validation and approval routing, leaving only genuine exceptions for human review.",
    metric: "Manual touches reduced to reviewed exceptions",
  },
  {
    title: "Vertical SaaS launch",
    capability: "SaaS",
    industry: "Professional services",
    body: "Strategy, design and engineering for a multi-tenant platform taken from first prototype to a paying customer base.",
    metric: "Prototype to production in two release cycles",
  },
  {
    title: "Demand program rebuild",
    capability: "Growth",
    industry: "B2B software",
    body: "Positioning, content architecture, instrumentation and a structured experimentation cadence.",
    metric: "Reporting rebuilt around qualified pipeline",
  },
];
