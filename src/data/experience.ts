export type Experience = {
  id: string;
  role: string;
  org: string;
  type: "Research" | "Industry" | "Leadership" | "Teaching";
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    id: "exp-ga",
    role: "Graduate Assistant — Department of CSE",
    org: "Miami University · Dr. DJ Rao's research group",
    type: "Research",
    period: "Aug 2025 — May 2026",
    location: "Oxford, OH",
    bullets: [
      "Lead developer on Cityscape, an open-source PUMS-driven population synthesizer and trip-demand generator (github.com/raodj/cityscape); contributions feed directly into the SimForge thesis demand pipeline.",
      "Co-administer the Grand Challenges Scholars Program (GCSP), mentoring undergraduate researchers across the cohort.",
      "Drive cross-cluster experiments across OSC Pitzer, Cardinal and Ascend — including SBATCH tuning and reproducibility guards baked into the experiment harness.",
    ],
    tags: ["Python", "SLURM", "OSC HPC", "PUMS", "OSM", "Mentoring"],
  },
  {
    id: "exp-pathfinders",
    role: "Software Engineering Intern",
    org: "Pathfinders Overseas Education",
    type: "Industry",
    period: "May 2025 — Aug 2025",
    location: "Hyderabad, India",
    bullets: [
      "Shipped production React/TypeScript features for an internal staff management and organizational-hierarchy platform (Salesforce-style CRM).",
      "Partnered with product and design across iterative releases; addressed UI regressions and edge cases identified in post-release feedback.",
      "Owned features end-to-end from spec to deploy in a small-team startup environment.",
    ],
    tags: ["React", "TypeScript", "REST APIs", "Figma", "Product"],
  },
  {
    id: "exp-freelance",
    role: "Freelance Software Engineer",
    org: "Independent Clients · 3 startups (under NDA)",
    type: "Industry",
    period: "Aug 2023 — Aug 2024",
    location: "Remote",
    bullets: [
      "Delivered production user-facing payment flows, frontend integrations and design work end-to-end under real client timelines.",
      "Built React components with client-side validation, REST API integration and robust error handling for three early-stage startup clients.",
    ],
    tags: ["React", "TypeScript", "REST APIs", "Design", "Freelance"],
  },
  {
    id: "exp-gsca",
    role: "President · Graduate Students of Color Association",
    org: "Miami University",
    type: "Leadership",
    period: "2025 — 2026",
    location: "Oxford, OH",
    bullets: [
      "Elected to lead a 104-member graduate organization with a full executive team (VP, Treasurer, Social Chair); ran candidate speeches, elections and ongoing operations.",
      "Organized org-wide events, coordinated cross-org collaborations and advocated for graduate-student interests directly with the Dean and Associate Dean.",
      "Formally recognized by the Graduate School with a Certificate of Appreciation (2026).",
    ],
    tags: ["Leadership", "Operations", "Advocacy", "Mentoring"],
  },
  {
    id: "exp-gsc",
    role: "Elected Member · Graduate Student Council Board",
    org: "Miami University",
    type: "Leadership",
    period: "2025 — 2026",
    location: "Oxford, OH",
    bullets: [
      "Serve on a deliberative body reviewing student petitions and voting on academic-policy matters affecting graduate students university-wide.",
    ],
    tags: ["Governance", "Policy"],
  },
];

export const education = [
  {
    degree: "M.S. Computer Science",
    org: "Miami University · College of Engineering and Computing",
    period: "2024 — 2026",
    detail:
      "Thesis: \"SimForge — A Reproducible, Cross-Simulator Benchmarking Framework for Urban Traffic Simulation,\" committee of three faculty advisors. GPA 3.85 / 4.00. Full scholarship + assistantship. Coursework: Generative AI, Machine Learning, Advanced Database Systems, Software Quality, Software Testing, Cryptography.",
  },
  {
    degree: "B.Tech. Computer Science",
    org: "Malla Reddy University · Hyderabad, India",
    period: "2020 — 2024",
    detail:
      "CGPA 8.2 / 10. Two peer-reviewed IJSREM publications (CNN soil classification, LDA topic modeling). Final-year work in deep learning and applied NLP.",
  },
];
