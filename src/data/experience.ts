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
    role: "Graduate Assistant · Department of CSE",
    org: "Miami University · Dr. DJ Rao's research group",
    type: "Research",
    period: "Aug 2025 - May 2026",
    location: "Oxford, OH",
    bullets: [
      "Contributor to Cityscape, an open-source C++ population-synthesis research framework (github.com/raodj/cityscape); diagnosed and fixed an OSM building-classification bug affecting ~1M records (cut synthetic-home artifacts from ~38% to ~5.5%) and ran a 4-city HPC parameter sweep improving worst-case commute realism (R²) from 0.81 to 0.92. Both contributions merged into the public repo; work feeds the SimForge thesis demand pipeline.",
      "Co-administer the Grand Challenges Scholars Program (GCSP), mentoring undergraduate researchers across the cohort.",
      "Drive cross-cluster experiments across OSC Pitzer, Cardinal and Ascend, including SBATCH tuning and reproducibility guards baked into the experiment harness.",
    ],
    tags: ["C++", "OpenMP", "SLURM", "OSC HPC", "PUMS", "Mentoring"],
  },
  {
    id: "exp-pathfinders",
    role: "Software Engineering Intern",
    org: "Smart Pathfinders Overseas Education",
    type: "Industry",
    period: "May 2024 - Jul 2024",
    location: "Hyderabad, India",
    bullets: [
      "Shipped production React/TypeScript features for an internal staff management and organizational-hierarchy platform (Salesforce-style CRM).",
      "Partnered with product and design across iterative releases. Addressed UI regressions and edge cases identified in post-release feedback.",
      "Owned features end-to-end from spec to deploy in a small-team startup environment.",
    ],
    tags: ["React", "TypeScript", "REST APIs", "Figma", "Product"],
  },
  {
    id: "exp-freelance",
    role: "Freelance Software Engineer",
    org: "Independent Clients · 3 startups (under NDA)",
    type: "Industry",
    period: "Aug 2023 - May 2024",
    location: "Remote",
    bullets: [
      "Delivered full-stack features end-to-end for three early-stage startup clients under real timelines (engagements under NDA).",
      "Built React/TypeScript frontends and Python backends with REST APIs, MySQL, and AWS deployment.",
    ],
    tags: ["React", "TypeScript", "Python", "MySQL", "AWS", "Full-Stack"],
  },
  {
    id: "exp-gsca",
    role: "President · Graduate Students of Color Association",
    org: "Miami University",
    type: "Leadership",
    period: "Aug 2025 - May 2026",
    location: "Oxford, OH",
    bullets: [
      "Elected to lead a 104-member graduate organization with a full executive team (VP, Treasurer, Social Chair). Ran candidate speeches, elections and ongoing operations.",
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
    period: "Aug 2025 - May 2026",
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
    period: "2024 - 2026",
    detail:
      "Thesis: \"SimForge: A Reproducible, Cross-Simulator Benchmarking Framework for Urban Traffic Simulation,\" committee of three faculty advisors. GPA 3.86 / 4.00. Full scholarship and assistantship. Coursework: Generative AI, Machine Learning, Advanced Database Systems, Software Quality, Software Quality Assurance, Cryptography.",
  },
  {
    degree: "B.Tech. Computer Science",
    org: "Malla Reddy University · Hyderabad, India",
    period: "2020 - 2024",
    detail:
      "CGPA 8.2 / 10. Two peer-reviewed IJSREM publications (CNN soil classification, LDA topic modeling). Final-year work in deep learning and applied NLP.",
  },
];