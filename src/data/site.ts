export const site = {
  name: "Kenji Hilasaca",
  role: "Data & AI Engineer",
  location: "Leeds, United Kingdom",
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
  demo?: string;
  slug: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Align and Shine",
    eyebrow: "Multilingual NLP · Research",
    description:
      "A reproducible pipeline for extracting sentence-aligned corpora for text simplification across Catalan, English, French, Italian and Spanish.",
    outcome:
      "Built the data infrastructure behind a peer-reviewed LREC-BUCC 2026 paper and reduced a core processing workflow from 48 to 6 hours.",
    tags: ["Python", "Transformers", "GPU / HPC", "Data pipelines"],
    github: "https://github.com/kenjihilasak/Align-and-Shine",
    paper: "https://arxiv.org/abs/2605.09476",
    slug: "align-and-shine",
    featured: true,
  },
  {
    title: "Exchange-rate forecasting",
    eyebrow: "Time series · MSc dissertation",
    description:
      "A rigorous out-of-sample study comparing statistical, structural and machine-learning approaches to exchange-rate forecasting.",
    outcome:
      "Used rolling evaluation and Monte Carlo analysis to test whether added model complexity translates into reliable forecast improvements.",
    tags: ["Python", "ARIMA", "GARCH", "Monte Carlo"],
    github: "https://github.com/kenjihilasak/exchange-rate-forecasting",
    slug: "exchange-rate-forecasting",
    featured: true,
  },
  {
    title: "Late refill risk modelling",
    eyebrow: "Applied ML · Healthcare",
    description:
      "A leakage-aware temporal modelling pipeline for prescription refill risk, with calibration and explicit analysis of dataset shift.",
    outcome:
      "Surfaced a material performance drop on the later test period—evidence that the model should not be deployed without addressing temporal shift.",
    tags: ["Python", "Scikit-learn", "XGBoost", "Temporal validation"],
    github: "https://github.com/kenjihilasak/Pharmacy2U-Challenge",
    slug: "late-refill-risk",
    featured: true,
  },
  {
    title: "Agentic support intelligence",
    eyebrow: "Generative AI · Prototype",
    description:
      "An experimental retrieval system combining order histories, policy documents and task-specific tools for support questions.",
    outcome:
      "Currently being rebuilt around deterministic business rules, structured data and an explicit evaluation set.",
    tags: ["LangChain", "smolagents", "RAG", "Evaluation"],
    github: "https://github.com/kenjihilasak/agenticRAG",
    slug: "agentic-support-intelligence",
    featured: false,
  },
];

export const experience = [
  {
    period: "2026 — present",
    role: "Research Assistant · NLP & Data Science",
    organisation: "University of Leeds",
    summary:
      "Build and optimise distributed NLP pipelines on enterprise Linux and NVIDIA GPU infrastructure for accessible language technology research. Co-authored work on multilingual text alignment and corpus extraction.",
    tags: ["NLP", "GPU / HPC", "Data lineage", "Research"],
  },
  {
    period: "2024",
    role: "Data Engineer",
    organisation: "BBVA · Corporate & Investment Banking",
    summary:
      "Built distributed data pipelines with PySpark, Hadoop and AWS Step Functions, and integrated XGBoost classification through REST APIs for corporate-banking use cases.",
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

export const capabilities = [
  {
    number: "01",
    title: "Data systems",
    text: "Designing traceable, maintainable pipelines across batch processing, distributed compute and cloud workflows.",
    tools: "Python · SQL · PySpark · Hadoop · Airflow · AWS",
  },
  {
    number: "02",
    title: "Applied machine learning",
    text: "Turning ambiguous problems into measurable experiments, careful validation and systems that support real decisions.",
    tools: "Scikit-learn · XGBoost · TensorFlow · MLflow",
  },
  {
    number: "03",
    title: "NLP & generative AI",
    text: "Building multilingual corpora, retrieval workflows and language systems with reproducibility and evaluation in mind.",
    tools: "Transformers · RAG · LangGraph · Semantic search",
  },
];
