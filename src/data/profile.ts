export const profile = {
  name: "Phanidhar Akula",
  alias: "P. Akula",
  initials: "PA",
  title: "Researcher · Engineer · Builder",
  tagline:
    "Engineering reproducible HPC research systems and shipping AI products that real students use.",
  location: "Oxford, Ohio — USA",
  timezone: "America/New_York",
  email: "phanidhar03@gmail.com",
  phone: "+1 (513) 886-5318",
  status: "Open to full-time · Oct 2026 (OPT + STEM OPT)",
  bio: [
    "I'm an M.S. Computer Science candidate at Miami University building software at the seam of urban simulation, HPC and AI. My thesis — SimForge — drives SUMO, MATSim and DTALite from a single byte-identical scenario bundle across the OSC Pitzer, Cardinal and Ascend clusters, with state-aware BFS pre-routing that compressed a 68-hour pre-route into ~5 hours.",
    "In parallel I solo-architect and operate LumiAI (studywithlumi.com), a production AI tutoring platform live with 55+ student users. Earlier I shipped a Salesforce-style CRM for a Hyderabad-based education startup, freelanced production payment flows under NDA, and co-authored two peer-reviewed IJSREM papers on CNNs and LDA topic modeling.",
  ],
  socials: {
    linkedin: "https://linkedin.com/in/phanidhar",
    github: "https://github.com/phanidhar",
    website: "https://phanidhar.dev",
    scholar: "https://scholar.google.com/scholar?q=phanidhar+akula",
  },
  cv: "/cv/Phanidhar-Akula-Resume.pdf",
};

export const heroLines = [
  "Reproducible HPC research",
  "and AI products that ship.",
];

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
  subtitle: string;
};

export const stats: Stat[] = [
  {
    label: "Pre-router Speedup",
    value: 25,
    suffix: "×",
    subtitle: "BFS canonicalization · 68h → ~5h on NYC 500K",
  },
  {
    label: "Directed Links",
    value: 200,
    suffix: "K",
    subtitle: "across Chicago · NYC · LA networks",
  },
  {
    label: "Pytest Coverage",
    value: 76,
    suffix: "%",
    subtitle: "~570 tests · mutation-validated · CI guarded",
  },
  {
    label: "LumiAI Users",
    value: 55,
    suffix: "+",
    subtitle: "studywithlumi.com · live in production",
  },
];
