export type Project = {
  id: string;
  index: string;
  title: string;
  category: "Research" | "GenAI" | "Full-Stack" | "Systems" | "Tooling";
  year: string;
  role: string;
  blurb: string;
  description: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  href?: string;
  repo?: string;
  cover: string;
  accent: "plasma" | "acid" | "lavender" | "bone";
};

export const projects: Project[] = [
  {
    id: "simforge",
    index: "01",
    title: "SIMFORGE",
    category: "Research",
    year: "Aug 2024 – Present",
    role: "Lead Researcher · M.S. Thesis",
    blurb:
      "Reproducible cross-simulator benchmarking framework driving SUMO, MATSim and DTALite from a single byte-identical scenario bundle.",
    description:
      "SimForge unifies three heterogeneous traffic engines under one canonical five-file scenario bundle (network, demand, signals, config, SHA-256 manifest) so any cross-engine travel-time delta is provably an engine-internal property, not an input asymmetry. A state-aware BFS pre-router enforces OSM turn-restrictions and strongly-connected-component feasibility, forcing every engine onto byte-identical canonical routes. Scaled to ~80K nodes / ~200K directed links across Chicago, NYC and LA at five demand tiers from 1K to 500K trips, deployed across the OSC Pitzer, Cardinal and Ascend clusters with cluster-specific SBATCH tuning. Validated by ~570 pytest tests, mutation tests on load-bearing modules, byte-identity guards and Student's-t 95% CIs at 76% coverage.",
    stack: [
      "Python",
      "OpenMP",
      "multiprocessing",
      "SLURM",
      "OSC HPC",
      "SUMO",
      "MATSim",
      "DTALite",
      "OSM",
      "US Census PUMS",
    ],
    metrics: [
      { label: "Pre-router speedup", value: "~25–30×" },
      { label: "Network scale", value: "200K links" },
      { label: "Realism vs PUMS", value: "70–72%" },
    ],
    cover: "/images/projects/simforge.jpg",
    accent: "plasma",
  },
  {
    id: "lumiai",
    index: "02",
    title: "LUMI·AI",
    category: "GenAI",
    year: "Nov 2025 – Present",
    role: "Solo Founder · Operator",
    blurb:
      "Production AI tutoring platform with domain-restricted LLM prompting, contextual class material upload, auto-generated quizzes and flashcards.",
    description:
      "Solo-architected, built, deployed and operate studywithlumi.com, a production AI tutoring platform serving 55+ active student users. Students upload per-class material (docs, spreadsheets, code) which the system contextually tags. The LLM is then prompted under a domain-restricted retrieval contract so answers stay scoped to the student's own coursework. Auto-generates quizzes and flashcards from uploaded material. Owns the full stack end-to-end: frontend, auth, routing, cloud storage, LLM integration and custom-domain hosting.",
    stack: [
      "React",
      "TypeScript",
      "REST APIs",
      "LLM APIs",
      "Cloud storage",
      "RAG",
    ],
    metrics: [
      { label: "Active users", value: "55+" },
      { label: "Status", value: "Live · 2025+" },
      { label: "Surface", value: "studywithlumi.com" },
    ],
    href: "https://studywithlumi.com",
    cover: "/images/projects/lumiai.jpg",
    accent: "acid",
  },
  {
    id: "cityscape",
    index: "03",
    title: "CITYSCAPE",
    category: "Tooling",
    year: "Aug 2025 – Present",
    role: "Lead Developer",
    blurb:
      "Open-source PUMS-driven population synthesizer and trip-demand generator powering the SimForge demand pipeline.",
    description:
      "Cityscape is a research-grade open-source tool that turns US Census PUMS microdata into a synthetic population and matched trip-demand stream for downstream traffic simulators. Built in Dr. DJ Rao's research group at Miami University. My contributions feed directly into the SimForge thesis demand pipeline and are used to calibrate scenarios against 2.4M to 6.8M PUMS persons across three U.S. metros.",
    stack: ["Python", "US Census PUMS", "SLURM", "OSM", "Pandas"],
    metrics: [
      { label: "PUMS persons", value: "2.4M–6.8M" },
      { label: "Calibrated", value: "Chicago · NYC · LA" },
      { label: "License", value: "Open Source" },
    ],
    repo: "https://github.com/raodj/cityscape",
    cover: "/images/projects/cityscape.jpg",
    accent: "lavender",
  },
  {
    id: "vault",
    index: "04",
    title: "VAULT · INTELLIGENCE",
    category: "Tooling",
    year: "2026",
    role: "Solo Developer",
    blurb:
      "Personal loan intelligence dashboard for a multi-tranche education loan, with live amortization, rate-phase timeline and dual-currency views.",
    description:
      "Vault Intelligence is a self-built analytics dashboard for tracking a real multi-tranche education loan end-to-end. Models per-tranche disbursements, variable interest-rate phases and a full month-by-month amortization schedule, then exposes the live state of the loan across an Overview, Master Schedule, Tranche performance and Rate History. Surfaces lifetime cost, principal vs interest makeup, outstanding-over-time, next combined payment and burn-rate against tenure. Ships with INR/USD currency toggle, light/dark theme, deep-link URL params for sharing snapshots, and a static GitHub Pages build for zero-cost hosting.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Recharts",
      "Tailwind",
      "date-fns",
      "GitHub Pages",
    ],
    metrics: [
      { label: "Surface", value: "Loan analytics" },
      { label: "Currencies", value: "INR · USD" },
      { label: "Theme", value: "Light · Dark" },
    ],
    href: "https://phanidharakula.github.io/Vault_Dashboard/",
    cover: "/images/projects/vault.jpg",
    accent: "acid",
  },
  {
    id: "pathfinders",
    index: "05",
    title: "PATHFINDERS · CRM",
    category: "Full-Stack",
    year: "May 2024 - Jul 2024",
    role: "Software Engineering Intern",
    blurb:
      "Internal staff and organizational-hierarchy platform: a Salesforce-style CRM for a Hyderabad-based education startup.",
    description:
      "Shipped production React/TypeScript features for an internal staff management and organizational hierarchy platform at Pathfinders Overseas Education. Partnered with product and design across iterative releases, addressed UI regressions and edge cases identified in post-release feedback, and contributed to the platform's growing surface across the summer 2025 term.",
    stack: ["React", "TypeScript", "REST APIs", "Figma"],
    metrics: [
      { label: "Surface", value: "Internal CRM" },
      { label: "Team", value: "Product · Design · Eng" },
      { label: "Cadence", value: "Iterative releases" },
    ],
    cover: "/images/projects/pathfinders.jpg",
    accent: "plasma",
  },
  {
    id: "freelance-payments",
    index: "06",
    title: "PAYMENT · FLOWS",
    category: "Full-Stack",
    year: "Aug 2023 – May 2024",
    role: "Freelance Engineer",
    blurb:
      "Production user-facing payment flows and frontend integrations for three early-stage startup clients under NDA.",
    description:
      "Delivered production-grade React components with client-side validation, REST API integration and robust error handling for three early-stage startup clients under NDA. Worked end-to-end across user-facing payment flows, frontend integrations and design hand-offs on real client timelines.",
    stack: ["React", "TypeScript", "REST APIs", "Figma"],
    metrics: [
      { label: "Clients", value: "3 (NDA)" },
      { label: "Surface", value: "Checkout · billing" },
      { label: "Mode", value: "End-to-end" },
    ],
    cover: "/images/projects/payments.jpg",
    accent: "acid",
  },
  {
    id: "soil-cnn",
    index: "07",
    title: "SOIL · CNN",
    category: "Research",
    year: "2023",
    role: "Co-Author",
    blurb:
      "Deep-learning image classifier for soil-type identification, peer-reviewed in IJSREM (DOI 10.55041/IJSREM23138).",
    description:
      "A convolutional neural network trained to classify soil images into agriculturally relevant categories. Published as a peer-reviewed paper in the International Journal of Scientific Research in Engineering and Management (IJSREM, 2023). Covers dataset curation, augmentation strategy, architecture choice and confusion-matrix error analysis.",
    stack: ["Python", "PyTorch", "TensorFlow", "CNNs", "OpenCV"],
    metrics: [
      { label: "Venue", value: "IJSREM 2023" },
      { label: "DOI", value: "23138" },
      { label: "Status", value: "Peer-reviewed" },
    ],
    href: "https://doi.org/10.55041/IJSREM23138",
    cover: "/images/projects/soil-cnn.jpg",
    accent: "lavender",
  },
  {
    id: "lda-topics",
    index: "08",
    title: "LDA · TOPICS",
    category: "Research",
    year: "2023",
    role: "Co-Author",
    blurb:
      "Latent-Dirichlet-Allocation topic modeling over crawled web pages, peer-reviewed in IJSREM (DOI 10.55041/IJSREM27350).",
    description:
      "An LDA pipeline for topic discovery over a corpus of crawled web pages. Covers tokenization, stop-word handling, coherence-based topic-count selection and qualitative inspection of discovered topics. Published in IJSREM (2023).",
    stack: ["Python", "scikit-learn", "Gensim", "NLTK", "LDA"],
    metrics: [
      { label: "Venue", value: "IJSREM 2023" },
      { label: "DOI", value: "27350" },
      { label: "Status", value: "Peer-reviewed" },
    ],
    href: "https://doi.org/10.55041/IJSREM27350",
    cover: "/images/projects/lda-topics.jpg",
    accent: "plasma",
  },
];
