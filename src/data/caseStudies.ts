export type CaseStudy = {
  slug: string;
  status: string;
  summary: string;
  challenge: string;
  role: string;
  result: string;
  metrics: Array<{ value: string; label: string }>;
  pipeline: string[];
  approach: Array<{ title: string; text: string }>;
  findings: string[];
  reflection: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  "align-and-shine": {
    slug: "align-and-shine",
    status: "Multilingual data engineering · 2026",
    summary:
      "A production-minded data pipeline for constructing aligned text-simplification corpora across five languages.",
    challenge:
      "High-quality simplification datasets are scarce outside English. The project needed to turn noisy, document-level comparable corpora into traceable sentence pairs suitable for training and evaluating language systems.",
    role: "I designed and optimised extraction and alignment workflows for large-scale shared compute, keeping provenance, intermediate artefacts and reproducible releases visible.",
    result:
      "Released an open five-language data product, reduced a core workflow from 48 to 6 hours and supported a peer-reviewed paper presented at BUCC, LREC 2026.",
    metrics: [
      { value: "5", label: "languages aligned" },
      { value: "48 → 6h", label: "core workflow runtime" },
      { value: "87.5%", label: "runtime reduction" },
    ],
    pipeline: [
      "Comparable documents",
      "Normalisation",
      "Sentence embeddings",
      "Alignment",
      "Quality checks",
      "Open corpus",
    ],
    approach: [
      {
        title: "Treat the corpus as a data product",
        text: "The workflow keeps intermediate artefacts and provenance visible, rather than hiding the process inside a single notebook.",
      },
      {
        title: "Compare alignment strategies",
        text: "The repository brings together multilingual encoders and alignment methods, including BGE, LaBSE and SONAR-based workflows.",
      },
      {
        title: "Engineer for shared compute",
        text: "Batch execution, compression and SLURM-oriented processing made it possible to run the workflow efficiently on shared Linux and GPU infrastructure.",
      },
    ],
    findings: [
      "Released aligned simplification data for Catalan, English, French, Italian and Spanish.",
      "Created a consistent basis for cross-lingual text-simplification experiments.",
      "Documented the work in an open repository with separate code and data licensing.",
    ],
    reflection:
      "The next engineering step is to add a root-level quickstart, automated tests and CI around a small fixture corpus so contributors can validate the full pipeline without access to the shared compute environment.",
  },
  "exchange-rate-forecasting": {
    slug: "exchange-rate-forecasting",
    status: "Financial forecasting · MSc project, 2025",
    summary:
      "An out-of-sample comparison of random-walk, ARIMA, GARCH and structural exchange-rate models across multiple forecast horizons.",
    challenge:
      "Exchange rates are noisy, regime-sensitive and notoriously difficult to forecast. The central question was not which model best fits history, but whether added complexity produces reliable gains beyond a random-walk benchmark.",
    role: "I designed the empirical framework, implemented the models and simulations, and compared performance across three currency pairs and several forecast horizons.",
    result:
      "Random walks remained difficult to beat at one month. At longer horizons, structural hybrid models improved forecasts for EUR/USD and PEN/USD, while ZAR/USD produced no reliable signal.",
    metrics: [
      { value: "3", label: "currency pairs" },
      { value: "1,000", label: "simulated paths per model" },
      { value: "4", label: "forecast horizons" },
    ],
    pipeline: [
      "Market data",
      "Stationarity checks",
      "Model estimation",
      "Simulation",
      "Forecasts",
      "Error analysis",
    ],
    approach: [
      {
        title: "Start with a hard benchmark",
        text: "Random-walk forecasts provide the baseline that more complex time-series and structural models must beat.",
      },
      {
        title: "Evaluate across horizons",
        text: "Short-, medium- and longer-horizon results are kept separate because aggregate metrics can hide materially different behaviour.",
      },
      {
        title: "Use simulation to inspect uncertainty",
        text: "Monte Carlo analysis complements point estimates and helps distinguish a repeatable signal from a favourable sample.",
      },
    ],
    findings: [
      "At the one-month horizon, the random-walk benchmark was best or statistically tied across all three pairs.",
      "Structural models with dynamic errors improved longer-horizon forecasts for EUR/USD and PEN/USD in the submitted evaluation.",
      "ZAR/USD remained consistent with a random walk across the tested horizons, showing why conclusions must remain pair-specific.",
    ],
    reflection:
      "Before treating the repository as production-ready, I would package the code, remove generated artefacts and enforce rolling-origin validation with a final untouched test window. That improvement is now part of the repository roadmap.",
  },
  "late-refill-risk": {
    slug: "late-refill-risk",
    status: "Applied ML case study · 2026",
    summary:
      "A leakage-aware temporal modelling pipeline for prescription refill risk, with calibration and explicit analysis of dataset shift.",
    challenge:
      "The task was to identify customers at risk of a late refill from historical transactions. The rare positive class, time-dependent features and changing customer behaviour make a random train/test split misleading.",
    role: "I built temporal features, designed a chronological validation strategy and compared logistic regression, random forest and XGBoost models with probability calibration.",
    result:
      "The later test period exposed a substantial performance drop. Instead of presenting an optimistic validation score, the analysis concludes that the current model should not be deployed.",
    metrics: [
      { value: "0.0866", label: "test PR-AUC" },
      { value: "0.0517", label: "test prevalence" },
      { value: "0", label: "test F1 at chosen threshold" },
    ],
    pipeline: [
      "Transactions",
      "Temporal features",
      "Chronological split",
      "Model training",
      "Calibration",
      "Shift analysis",
    ],
    approach: [
      {
        title: "Make time part of the evaluation",
        text: "Features only use information available at prediction time, and validation/test periods follow training chronologically.",
      },
      {
        title: "Optimise for the real class balance",
        text: "PR-AUC, calibration and threshold behaviour are more informative than accuracy on a heavily imbalanced target.",
      },
      {
        title: "Treat failure as evidence",
        text: "A threshold selected on validation produced no useful test predictions. That is a deployment blocker, not a metric to hide.",
      },
    ],
    findings: [
      "The model retained some ranking signal above test prevalence but not enough for the selected operating point.",
      "The validation-to-test gap is consistent with temporal dataset shift.",
      "A production iteration would require monitoring, re-training policy and a cost-sensitive threshold agreed with stakeholders.",
    ],
    reflection:
      "This project is valuable because it demonstrates restraint: the right outcome of an ML experiment can be a well-supported decision not to deploy.",
  },
  "agentic-support-intelligence": {
    slug: "agentic-support-intelligence",
    status: "Prototype · being rebuilt",
    summary:
      "An experimental retrieval workflow combining order histories, policy documents and task-specific tools for customer-support questions.",
    challenge:
      "Support questions often need both semantic retrieval from policy documents and deterministic reasoning over structured order data. A language model alone should not decide business eligibility.",
    role: "I prototyped document and CSV retrieval, custom tools and a multi-step agent workflow using open language models.",
    result:
      "The prototype proved the integration path but also exposed rule and timestamp assumptions that need to be moved out of the agent before this can become a reliable system.",
    metrics: [
      { value: "2", label: "data modalities" },
      { value: "RAG", label: "grounding pattern" },
      { value: "WIP", label: "current status" },
    ],
    pipeline: [
      "Question",
      "Intent routing",
      "Policy retrieval",
      "Order lookup",
      "Rule engine",
      "Grounded answer",
    ],
    approach: [
      {
        title: "Separate retrieval from decisions",
        text: "The rebuild will keep semantic policy retrieval in the language layer while moving eligibility rules into deterministic functions.",
      },
      {
        title: "Use structured history",
        text: "Order events need explicit types and chronological guarantees rather than relying on ranking order from text retrieval.",
      },
      {
        title: "Evaluate before adding autonomy",
        text: "A labelled set will test retrieval, tool selection, rule accuracy and answer grounding independently.",
      },
    ],
    findings: [
      "The current notebook is a prototype and is not presented as production-ready.",
      "The most important next step is correctness evaluation, not adding more agent steps.",
      "The rebuild will include tests, a small API and traceable failure cases.",
    ],
    reflection:
      "This project remains visible as work in progress because showing the engineering gap between a demo and a dependable AI product is part of the story.",
  },
};
