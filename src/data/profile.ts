export const profile = {
  name: "Phanidhar Akula",
  alias: "P. Akula",
  initials: "PA",
  title: "Researcher · Engineer · Builder",
  tagline:
    "Engineering reproducible HPC simulation and digital-twin systems, and shipping AI products that real students use.",
  location: "Oxford, Ohio, USA",
  timezone: "America/New_York",
  email: "phanidharakula@gmail.com",
  phone: "+1 (513) 886-4720",
  status: "Open to full-time · Authorized Oct 2026 – 2029 (OPT + STEM OPT)",
  bio: [
    "I'm an M.S. Computer Science candidate at Miami University building software at the seam of urban simulation, HPC and AI. My thesis, SimForge, drives SUMO, MATSim and DTALite from a single byte-identical scenario bundle across the OSC Pitzer, Cardinal and Ascend clusters, with state-aware BFS pre-routing that compressed a 68-hour pre-route into roughly 5-8 hours.",
    "In parallel I solo-architect and operate LumiAI (studywithlumi.com), a production AI tutoring platform live with 55+ student users. My Cityscape digital-twin research is now a first-author paper under review at Frontiers, alongside two peer-reviewed IJSREM papers on CNNs and LDA topic modeling. Earlier I shipped a Salesforce-style CRM for a Hyderabad-based education startup and freelanced full-stack work under NDA.",
  ],
  socials: {
    linkedin: "https://linkedin.com/in/phanidharakula",
    github: "https://github.com/PhanidharAkula",
  },
  cv: "/cv/Phanidhar-Akula-Resume.pdf",
  portrait: "/images/portrait.jpg",
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
    subtitle: "BFS canonicalization · 68h to ~5-8h on NYC 500K",
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