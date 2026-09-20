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
  "uol-finance-ai-assistant": {
    slug: "uol-finance-ai-assistant",
    status: "Azure RAG engineering · 2026",
    summary:
      "An evidence-led assistant for exploring public university financial reports, built around measurable retrieval, page-level provenance and safe abstention.",
    challenge:
      "Financial reports combine narrative, tables, changing periods and similar figures. The system must retrieve the right evidence, preserve scope and units, cite the original PDF and decline questions the indexed documents cannot answer.",
    role: "I designed the staged ingestion and evaluation pipeline, implemented Azure hybrid search and grounded generation, and separated the public interface from credentials and model access.",
    result:
      "The reviewed ten-question baseline achieved 100% Recall@5 and 0.825 MRR@5. A separate ten-question negative set produced 100% correct, citation-free abstention.",
    metrics: [
      { value: "1.00", label: "hybrid Recall@5" },
      { value: "0.825", label: "hybrid MRR@5" },
      { value: "10/10", label: "correct abstentions" },
    ],
    pipeline: [
      "Public PDF",
      "Validated chunks",
      "Azure embeddings",
      "Hybrid retrieval",
      "Grounded answer",
      "Page citations",
    ],
    approach: [
      {
        title: "Evaluate retrieval before generation",
        text: "Reviewed question sets measure Recall@k and MRR independently, so a plausible language-model answer cannot hide missing evidence.",
      },
      {
        title: "Make provenance part of the contract",
        text: "Every answer must cite retrieved chunk IDs that map back to a public source document and exact PDF page.",
      },
      {
        title: "Test when the system should refuse",
        text: "A separate negative dataset checks that unsupported questions produce an abstention without decorative or misleading citations.",
      },
    ],
    findings: [
      "Hybrid BM25 and vector retrieval found a relevant chunk in the top five for all ten reviewed questions.",
      "The first negative-dataset draft exposed a labelling error: the supposedly missing Moody’s rating was present on page 83.",
      "The public serving boundary keeps Azure credentials out of GitHub Pages and supports an immediate cost-control switch.",
    ],
    reflection:
      "The current evaluation is intentionally small and development-reviewed. Before production use, I would add independent domain review, multi-document regression tests, persistent distributed rate limiting and operational monitoring.",
  },
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
    status: "Azure AI engineering · staff triage · 2026",
    summary:
      "A staff-facing university enquiry workbench that turns unstructured requests into a safe route, clarification request or cited draft response.",
    challenge:
      "A shared administrative team receives finance, student-record, digital-learning and sensitive-support enquiries. The system must identify intent, detect missing information and prevent sensitive cases from reaching answer generation.",
    role: "I designed the ingestion, Azure hybrid retrieval, structured classifier, deterministic routing policy, evaluation harness, FastAPI boundary and staff review interface.",
    result:
      "The working system indexes eight approved sources across four answerable domains. Either conservative rules or the classifier can escalate a case, while code prevents every escalated case from entering RAG generation.",
    metrics: [
      { value: "4", label: "answerable domains" },
      { value: "8", label: "approved sources" },
      { value: "0", label: "allowed sensitive generations" },
    ],
    pipeline: [
      "Staff enquiry",
      "Safety rules",
      "Structured classification",
      "Routing policy",
      "Category-filtered RAG",
      "Human review",
    ],
    approach: [
      {
        title: "Make escalation one-way",
        text: "Rules and model classification can both escalate an enquiry. Neither can override a sensitive referral and send it to generation.",
      },
      {
        title: "Route before retrieval",
        text: "Only answerable categories reach Azure hybrid search; the selected category becomes an enforced index filter rather than a user-controlled document choice.",
      },
      {
        title: "Keep staff accountable",
        text: "Generated text is a draft with source citations. Persistence records the action and review state, while sensitive raw text is redacted.",
      },
    ],
    findings: [
      "The corpus separates corporate finance from operational expense guidance, avoiding retrieval from the wrong financial source.",
      "Minerva enquiries can identify missing module, assignment and error details before staff draft a response.",
      "Sensitive cases return a specialist route without retrieval, citations or a generated substantive answer.",
    ],
    reflection:
      "This is a decision-support prototype, not an autonomous case-management system. Production use would require institutional policy review, Entra-authenticated staff access, independent safety evaluation and agreed retention controls.",
  },
};
