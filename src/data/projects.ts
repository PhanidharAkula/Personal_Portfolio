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
    year: "2024 — 2026",
    role: "Lead Researcher · M.S. Thesis",
    blurb:
      "Reproducible cross-simulator benchmarking framework driving SUMO, MATSim and DTALite from a single byte-identical scenario bundle.",
    description:
      "SimForge unifies three heterogeneous traffic engines under one canonical five-file scenario bundle (network · demand · signals · config · SHA-256 manifest) so any cross-engine travel-time delta is provably an engine-internal property, not an input asymmetry. A state-aware BFS pre-router enforces OSM turn-restrictions and strongly-connected-component feasibility, forcing every engine onto byte-identical canonical routes. Scaled to ~80K nodes / ~200K directed links across Chicago, NYC and LA at five demand tiers from 1K → 500K trips; deployed across the OSC Pitzer, Cardinal and Ascend clusters with cluster-specific SBATCH tuning. Validated by ~570 pytest tests, mutation tests on load-bearing modules, byte-identity guards and Student's-t 95% CIs at 76% coverage.",
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
    cover:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=80",
    accent: "plasma",
  },
  {
    id: "lumiai",
    index: "02",
    title: "LUMI·AI",
    category: "GenAI",
    year: "2025 — Present",
    role: "Solo Founder · Operator",
    blurb:
      "Production AI tutoring platform — domain-restricted LLM prompting, contextual class material upload, auto-generated quizzes and flashcards.",
    description:
      "Solo-architected, built, deployed and operate studywithlumi.com — a production AI tutoring platform serving 55+ active student users. Students upload per-class material (docs, spreadsheets, code) which the system contextually tags; the LLM is then prompted under a domain-restricted retrieval contract so answers stay scoped to the student's own coursework. Auto-generates quizzes and flashcards from uploaded material. Owns the full stack end-to-end: frontend, auth, routing, cloud storage, LLM integration and custom-domain hosting.",
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
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80",
    accent: "acid",
  },
  {
    id: "cityscape",
    index: "03",
    title: "CITYSCAPE",
    category: "Tooling",
    year: "2025 — Present",
    role: "Lead Developer",
    blurb:
      "Open-source PUMS-driven population synthesizer and trip-demand generator powering the SimForge demand pipeline.",
    description:
      "Cityscape is a research-grade open-source tool that turns US Census PUMS microdata into a synthetic population and matched trip-demand stream for downstream traffic simulators. Built in Dr. DJ Rao's research group at Miami University; my contributions feed directly into the SimForge thesis demand pipeline and are used to calibrate scenarios against 2.4M–6.8M PUMS persons across three U.S. metros.",
    stack: ["Python", "US Census PUMS", "SLURM", "OSM", "Pandas"],
    metrics: [
      { label: "PUMS persons", value: "2.4M–6.8M" },
      { label: "Calibrated", value: "Chicago · NYC · LA" },
      { label: "License", value: "Open Source" },
    ],
    repo: "https://github.com/raodj/cityscape",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
    accent: "lavender",
  },
  {
    id: "pathfinders",
    index: "04",
    title: "PATHFINDERS · CRM",
    category: "Full-Stack",
    year: "2025",
    role: "Software Engineering Intern",
    blurb:
      "Internal staff and organizational-hierarchy platform — a Salesforce-style CRM for a Hyderabad-based education startup.",
    description:
      "Shipped production React/TypeScript features for an internal staff management and organizational hierarchy platform at Pathfinders Overseas Education. Partnered with product and design across iterative releases, addressed UI regressions and edge cases identified in post-release feedback, and contributed to the platform's growing surface across the summer 2025 term.",
    stack: ["React", "TypeScript", "REST APIs", "Figma"],
    metrics: [
      { label: "Surface", value: "Internal CRM" },
      { label: "Team", value: "Product · Design · Eng" },
      { label: "Cadence", value: "Iterative releases" },
    ],
    cover:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80",
    accent: "plasma",
  },
  {
    id: "freelance-payments",
    index: "05",
    title: "PAYMENT · FLOWS",
    category: "Full-Stack",
    year: "2023 — 2024",
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
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
    accent: "acid",
  },
  {
    id: "soil-cnn",
    index: "06",
    title: "SOIL · CNN",
    category: "Research",
    year: "2023",
    role: "Co-Author",
    blurb:
      "Deep-learning image classifier for soil-type identification — peer-reviewed in IJSREM (DOI 10.55041/IJSREM23138).",
    description:
      "A convolutional neural network trained to classify soil images into agriculturally relevant categories. Published as a peer-reviewed paper in the International Journal of Scientific Research in Engineering and Management (IJSREM, 2023). Covers dataset curation, augmentation strategy, architecture choice and confusion-matrix error analysis.",
    stack: ["Python", "PyTorch", "TensorFlow", "CNNs", "OpenCV"],
    metrics: [
      { label: "Venue", value: "IJSREM 2023" },
      { label: "DOI", value: "23138" },
      { label: "Status", value: "Peer-reviewed" },
    ],
    href: "https://doi.org/10.55041/IJSREM23138",
    cover:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=2000&q=80",
    accent: "lavender",
  },
  {
    id: "lda-topics",
    index: "07",
    title: "LDA · TOPICS",
    category: "Research",
    year: "2023",
    role: "Co-Author",
    blurb:
      "Latent-Dirichlet-Allocation topic modeling over crawled web pages — peer-reviewed in IJSREM (DOI 10.55041/IJSREM27350).",
    description:
      "An LDA pipeline for topic discovery over a corpus of crawled web pages. Covers tokenization, stop-word handling, coherence-based topic-count selection and qualitative inspection of discovered topics. Published in IJSREM (2023).",
    stack: ["Python", "scikit-learn", "Gensim", "NLTK", "LDA"],
    metrics: [
      { label: "Venue", value: "IJSREM 2023" },
      { label: "DOI", value: "27350" },
      { label: "Status", value: "Peer-reviewed" },
    ],
    href: "https://doi.org/10.55041/IJSREM27350",
    cover:
      "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&w=2000&q=80",
    accent: "plasma",
  },
];
