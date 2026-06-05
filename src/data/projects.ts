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
    repo: "https://github.com/PhanidharAkula/SimForge",
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
      "Production AI study platform that turns a student's own course materials into a personal tutor — grounded chat, auto-generated quizzes and flashcards, spaced-repetition review and hands-free voice mode.",
    description:
      "Solo-designed, built, deployed and operated studywithlumi.com end-to-end — product, design and engineering — now serving 55+ active students. Students sign in with Google, organize their work into classes, and upload their own materials (PDFs, lecture notes, slides, textbooks); the AI tutor answers strictly from that content rather than the open web. Lumi auto-generates scored practice quizzes with full review, one-click flashcard decks, and a daily spaced-repetition queue that resurfaces cards right before they'd be forgotten, plus hands-free voice study, per-session notes and revisitable history. Underneath: Google OAuth, row-level security on every table, hardened SECURITY DEFINER RPCs, self-service account deletion and an admin analytics panel, with every AI call routed through a Vercel serverless function that verifies each caller's Supabase token so the API key stays entirely server-side.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "LLMs",
      "Vercel",
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
    category: "Systems",
    year: "Aug 2025 – Present",
    role: "Open-Source Contributor",
    blurb:
      "Merged contributions to an open-source C++ population-synthesis research framework — fixing a ~1M-record data bug and tuning commute realism via HPC sweeps.",
    description:
      "Cityscape is an open-source C++ population-synthesis research framework in Dr. DJ Rao's group at Miami University. I diagnosed and fixed an OSM building-classification bug affecting ~1M data records, cutting synthetic-home artifacts from ~38% to ~5.5% across NYC, Chicago and LA, and ran a 4-city HPC parameter sweep on OSC Pitzer that improved worst-case commute-path realism (R²) from 0.81 to 0.92. Both contributions were merged into the public repository by the maintainer, and feed directly into the SimForge thesis demand pipeline. Continuing collaboration with Dr. Rao on a co-authored publication based on this work.",
    stack: ["C++", "OpenMP", "OSC HPC", "OSM", "US Census PUMS"],
    metrics: [
      { label: "Records fixed", value: "~1M" },
      { label: "Worst-case R²", value: "0.81 → 0.92" },
      { label: "Status", value: "Merged · Open Source" },
    ],
    repo: "https://github.com/raodj/cityscape/pulls?q=author%3APhanidharAkula",
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
    id: "sensor-har",
    index: "05",
    title: "SENSOR · HAR",
    category: "Research",
    year: "Jan 2025 – May 2025",
    role: "Developer · ML Coursework",
    blurb:
      "Human-activity-recognition pipeline classifying multi-sensor time-series from accelerometers, gyroscopes, magnetometers and pressure sensors.",
    description:
      "A machine-learning pipeline for human activity recognition built on multi-modal time-series data from accelerometers, gyroscopes, magnetometers and pressure sensors. Covers signal preprocessing, feature engineering across sensor streams, and training and comparison of classification models for activity prediction. Course project for Machine Learning at Miami University.",
    stack: ["Python", "scikit-learn", "NumPy", "pandas"],
    metrics: [
      { label: "Domain", value: "Time-series ML" },
      { label: "Sensors", value: "4 modalities" },
      { label: "Course", value: "ML · Miami" },
    ],
    href: "https://github.com/PhanidharAkula/Sensor_Data_Classification",
    cover: "/images/projects/sensor-har.jpg",
    accent: "bone",
  },
  {
    id: "soil-cnn",
    index: "06",
    title: "SOIL · CNN",
    category: "Research",
    year: "2023",
    role: "Author",
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
    index: "07",
    title: "LDA · TOPICS",
    category: "Research",
    year: "2023",
    role: "Author",
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