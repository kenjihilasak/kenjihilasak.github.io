export type CaseStudy = {
  summary: string;
  problem: string;
  role: string;
  result: string;
  metrics: Array<{ value: string; label: string }>;
  pipeline: string[];
  decisions: Array<{ title: string; text: string }>;
  next: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  "align-and-shine": {
    summary:
      "A pipeline that turns noisy multilingual web text into clean sentence pairs for text simplification, in five languages.",
    problem:
      "Simplification datasets barely exist outside English, and raw comparable corpora are too noisy to train on.",
    role: "Designed and optimised the extraction and alignment pipeline on shared GPU infrastructure.",
    result:
      "Open corpus in five languages, workflow cut from 48 to 6 hours, paper at BUCC, LREC 2026.",
    metrics: [
      { value: "5", label: "languages" },
      { value: "48 → 6h", label: "runtime" },
      { value: "−87.5%", label: "processing time" },
    ],
    pipeline: [
      "Documents",
      "Normalise",
      "Embed",
      "Align",
      "Quality checks",
      "Open corpus",
    ],
    decisions: [
      {
        title: "Corpus as a data product",
        text: "Every intermediate file and its source are kept, so results can be traced and reproduced.",
      },
      {
        title: "Compare, don't assume",
        text: "Benchmarked LaBSE, BGE and SONAR encoders and tuned strict thresholds per language.",
      },
      {
        title: "Built for shared compute",
        text: "Batched, compressed SLURM jobs made the GPU cluster run eight times faster.",
      },
    ],
    next: "Add a quickstart, tests and CI on a small sample corpus.",
  },
  "exchange-rate-forecasting": {
    summary:
      "Can complex models beat a random walk at forecasting exchange rates? An out-of-sample test across three currency pairs.",
    problem:
      "Exchange rates are noisy and hard to predict; extra model complexity often fits the past but not the future.",
    role: "Designed the evaluation, implemented ARIMA, GARCH and structural models, and ran the simulations.",
    result:
      "The random walk wins at one month. Structural hybrids help at longer horizons for EUR/USD and PEN/USD.",
    metrics: [
      { value: "3", label: "currency pairs" },
      { value: "4", label: "forecast horizons" },
      { value: "1,000", label: "simulated paths per model" },
    ],
    pipeline: [
      "Market data",
      "Stationarity",
      "Estimation",
      "Simulation",
      "Forecasts",
      "Error analysis",
    ],
    decisions: [
      {
        title: "Hard baseline first",
        text: "Every model has to beat the random walk to count as useful.",
      },
      {
        title: "Horizons kept separate",
        text: "One average score would hide very different short- and long-term behaviour.",
      },
      {
        title: "Simulate uncertainty",
        text: "Monte Carlo paths separate a real signal from a lucky sample.",
      },
    ],
    next: "Package the code and add rolling-origin validation with an untouched test window.",
  },
  "late-refill-risk": {
    summary:
      "Predicting which customers will refill a prescription late, with a strict time-based evaluation.",
    problem:
      "Late refills are rare and customer behaviour changes over time, so a random split gives misleadingly good scores.",
    role: "Built time-aware features and a chronological validation, and compared logistic regression, random forest and XGBoost.",
    result:
      "Performance dropped on the later test period, so the honest recommendation was: do not deploy yet.",
    metrics: [
      { value: "0.087", label: "test PR-AUC" },
      { value: "0.052", label: "positive rate" },
      { value: "0", label: "test F1 at chosen threshold" },
    ],
    pipeline: [
      "Transactions",
      "Features",
      "Time split",
      "Training",
      "Calibration",
      "Shift analysis",
    ],
    decisions: [
      {
        title: "No look-ahead",
        text: "Features only use data available at prediction time; test periods come after training.",
      },
      {
        title: "Metrics for rare events",
        text: "PR-AUC and calibration instead of accuracy on a heavily imbalanced target.",
      },
      {
        title: "Report the failure",
        text: "A model that breaks on new data is a deployment blocker, not a number to hide.",
      },
    ],
    next: "Monitoring, a retraining policy and a cost-based threshold agreed with stakeholders.",
  },
  "agentic-support-intelligence": {
    summary:
      "A staff workbench that sorts university enquiries and drafts a cited answer only when it is safe to do so.",
    problem:
      "One team receives finance, student-record, IT and sensitive enquiries. Sensitive cases must never reach the AI.",
    role: "Built it end to end: ingestion, Azure search, classifier, routing rules, evaluation, API and staff UI.",
    result:
      "Eight approved sources across four domains. Every sensitive test case was routed to a person, not the AI.",
    metrics: [
      { value: "4", label: "answerable domains" },
      { value: "21", label: "evaluated triage cases" },
      { value: "0", label: "sensitive generation leaks" },
    ],
    pipeline: [
      "Enquiry",
      "Safety rules",
      "Classification",
      "Routing",
      "Filtered RAG",
      "Human review",
    ],
    decisions: [
      {
        title: "Escalation is one-way",
        text: "Rules or the model can escalate a case; nothing can send a sensitive case back to the AI.",
      },
      {
        title: "Route before retrieval",
        text: "Only answerable categories reach search, and the category limits which documents are used.",
      },
      {
        title: "Staff stay accountable",
        text: "Answers are drafts with citations. Staff review them; sensitive text is redacted in storage.",
      },
    ],
    next: "Institutional policy review and independent safety evaluation before production use.",
  },
};
