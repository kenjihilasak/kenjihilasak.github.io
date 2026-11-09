export const site = {
  name: "Kenji Hilasaca",
  role: "Data & AI Engineer",
  location: "Leeds, United Kingdom",
  locationShort: "Leeds, UK",
  rolesLine:
    "Data & AI Engineer, NLP Researcher, Former Co-founder. Mechatronic engineer by training.",
  description:
    "Data & AI Engineer building reliable data pipelines, production-focused machine-learning systems and multilingual NLP tools.",
  url: "https://kenjihilasak.github.io",
  email: "lhilasacas@uni.pe",
  github: "https://github.com/kenjihilasak",
  linkedin: "https://www.linkedin.com/in/kenjihilasak/",
  cv: "/kenji-hilasaca-cv.pdf",
};

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  outcome: string;
  tags: string[];
  github: string;
  paper?: string;
  preprint?: string;
  report?: string;
  demo?: string;
  slug: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Align and Shine",
    eyebrow: "Data engineering · Multilingual NLP",
    description:
      "A traceable pipeline that transforms noisy multilingual source data into aligned corpora across Catalan, English, French, Italian and Spanish.",
    outcome:
      "Cut a core workflow from 48 to 6 hours and released the resulting corpus as an open, reproducible data product.",
    tags: ["Python", "Transformers", "GPU / HPC", "Data pipelines"],
    github: "https://github.com/kenjihilasak/Align-and-Shine",
    paper:
      "http://lrec-conf.org/proceedings/lrec2026/workshops/bucc/2026.bucc-1.0.pdf#page=72",
    preprint: "https://arxiv.org/abs/2605.09476",
    slug: "align-and-shine",
    featured: true,
  },
  {
    title: "Exchange-rate forecasting",
    eyebrow: "Forecasting · Decision science",
    description:
      "A simulation-based, out-of-sample comparison of statistical, structural and machine-learning approaches to foreign-exchange forecasting.",
    outcome:
      "Found that random walks remained difficult to beat at short horizons, while structural hybrids improved longer-horizon forecasts for selected currency pairs.",
    tags: ["Python", "ARIMA", "GARCH", "Monte Carlo"],
    github: "https://github.com/kenjihilasak/exchange-rate-forecasting",
    report: "/kenji-hilasaca-msc-dissertation-2025.pdf",
    slug: "exchange-rate-forecasting",
    featured: true,
  },
  {
    title: "Late refill risk modelling",
    eyebrow: "Applied ML · Model risk",
    description:
      "A leakage-aware temporal modelling pipeline for prescription refill risk, with calibration and explicit analysis of dataset shift.",
    outcome:
      "Surfaced a material performance drop on the later test period—evidence that the model should not be deployed without addressing temporal shift.",
    tags: ["Python", "Scikit-learn", "XGBoost", "Temporal validation"],
    github: "https://github.com/kenjihilasak/Pharmacy2U-Challenge",
    slug: "late-refill-risk",
    featured: false,
  },
  {
    title: "Agentic Support Intelligence",
    eyebrow: "Azure AI · Safe enquiry triage",
    description:
      "A staff-facing university enquiry workbench that classifies unstructured requests, applies deterministic safety routing and drafts cited responses from approved evidence.",
    outcome:
      "Combines four evaluated knowledge domains with a hard-coded sensitive referral branch, structured outputs and human review.",
    tags: [
      "Python",
      "Azure AI Search",
      "FastAPI",
      "PostgreSQL",
      "Responsible AI",
    ],
    github: "https://github.com/kenjihilasak/agentic-support-intelligence",
    demo: "/work/agentic-support-intelligence/#live-workbench",
    slug: "agentic-support-intelligence",
    featured: true,
  },
];

const alignAndShine = projects.find((p) => p.slug === "align-and-shine")!;
const exchangeRate = projects.find(
  (p) => p.slug === "exchange-rate-forecasting",
)!;

export type Publication = {
  title: string;
  /** Omitted for anonymous submissions under review. */
  authors?: string;
  venue: string;
  year: number;
  status: "published" | "under-review" | "thesis";
  links: { label: string; href: string }[];
  /** Hidden until title and authors are confirmed. */
  draft?: boolean;
};

export const publications: Publication[] = [
  {
    title:
      "Align and Shine: Building High-Quality Sentence-Aligned Corpora for Multilingual Text Simplification",
    authors: "Kenji Hilasaca, Nouran Khallaf, Serge Sharoff",
    venue: "BUCC Workshop at LREC 2026",
    year: 2026,
    status: "published",
    links: [
      { label: "Paper", href: alignAndShine.paper! },
      { label: "arXiv", href: alignAndShine.preprint! },
      { label: "Code", href: alignAndShine.github },
    ],
  },
  {
    title:
      "Multi-robot Exploration and Mapping Strategy in Underground Mines by Behavior Control",
    venue: "Springer",
    year: 2015,
    status: "published",
    links: [
      { label: "DOI", href: "https://doi.org/10.1007/978-3-319-09858-6_10" },
    ],
  },
  {
    title:
      "Show, Don’t Just Attribute: Grounding Interpretability Scores in Human Edits",
    venue: "Submitted to COLING 2027",
    year: 2027,
    status: "under-review",
    links: [],
    draft: true,
  },
  {
    title:
      "Don’t Scale, Reformulate: Output Structure Outweighs Parameter Count in Multilingual Easy-to-Read Strategy Prediction",
    venue: "Submitted to TACL",
    year: 2026,
    status: "under-review",
    links: [],
    draft: true,
  },
  {
    title:
      "Exchange-rate forecasting: statistical, structural and machine-learning models",
    authors: "Kenji Hilasaca",
    venue: "MSc Data Science & Analytics dissertation, University of Leeds",
    year: 2025,
    status: "thesis",
    links: [{ label: "PDF", href: exchangeRate.report! }],
  },
];

export const education = [
  {
    period: "2024 — 2025 · United Kingdom",
    degree: "MSc Data Science & Analytics · Distinction",
    institution: "University of Leeds",
  },
  {
    period: "2022 — 2023 · Remote",
    degree: "MicroMasters programme · Statistics and Data Science",
    institution: "MITx",
  },
  {
    period: "2010 — 2016 · Peru",
    degree: "BSc Mechatronic Engineering",
    institution: "National University of Engineering",
  },
];

export const experience = [
  {
    period: "2026 — present",
    role: "Research Assistant · NLP & Data Science",
    organisation: "University of Leeds",
    summary:
      "Build and optimise distributed NLP pipelines on enterprise Linux and NVIDIA GPU infrastructure, and released an open five-language corpus as a reproducible data product.",
    tags: ["NLP", "GPU / HPC", "Data lineage", "Reproducibility"],
  },
  {
    period: "2024",
    role: "Data Engineer",
    organisation: "BBVA · Corporate & Investment Banking",
    summary:
      "Built PySpark and Hadoop pipelines orchestrated with AWS Step Functions, cutting processing latency by 50%, and integrated XGBoost classification through REST APIs.",
    tags: ["PySpark", "Hadoop", "AWS", "APIs"],
  },
  {
    period: "2022 — 2024",
    role: "Database Analyst",
    organisation: "INDRA",
    summary:
      "Developed Python and SQL feature-engineering and ETL pipelines for late-payment and fraud modelling, translating model outputs into decision-ready KPIs.",
    tags: ["Python", "SQL", "ETL", "Applied ML"],
  },
  {
    period: "2016 — 2020",
    role: "Co-founder · Software Engineer",
    organisation: "PlayTec",
    summary:
      "Co-founded a technology company delivering software, immersive products and hands-on technology education across Peru.",
    tags: ["Product delivery", "Software", "Embedded systems"],
  },
];
