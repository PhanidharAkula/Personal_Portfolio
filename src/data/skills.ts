export type SkillGroup = {
  domain: string;
  caption: string;
  items: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    domain: "Languages",
    caption: "Daily drivers from research to product.",
    items: [
      { name: "Python", level: 95 },
      { name: "C++", level: 80 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "SQL (MySQL · PostgreSQL)", level: 85 },
      { name: "Java", level: 55 },
    ],
  },
  {
    domain: "HPC & Systems",
    caption: "Where the bytes meet the metal.",
    items: [
      { name: "OpenMP · multiprocessing", level: 90 },
      { name: "SLURM · SBATCH tuning", level: 88 },
      { name: "OSC Pitzer · Cardinal · Ascend", level: 86 },
      { name: "Content-addressed caching", level: 85 },
      { name: "Linux · Docker · Git", level: 90 },
    ],
  },
  {
    domain: "AI / ML",
    caption: "Productionising the models, not just demoing them.",
    items: [
      { name: "PyTorch · TensorFlow", level: 88 },
      { name: "CNNs · vision pipelines", level: 86 },
      { name: "LDA · topic modeling", level: 82 },
      { name: "LLM API integration", level: 92 },
      { name: "Document-grounded prompting · agentic workflows", level: 90 },
    ],
  },
  {
    domain: "Web & Data",
    caption: "From the form field down to the cache key.",
    items: [
      { name: "React · component design", level: 94 },
      { name: "REST APIs · GraphQL", level: 90 },
      { name: "MySQL · PostgreSQL", level: 88 },
      { name: "AWS · Cloud Foundations", level: 80 },
      { name: "OSM · Geofabrik · PUMS pipelines", level: 86 },
    ],
  },
  {
    domain: "Engineering & QA",
    caption: "Rigor that survives a review.",
    items: [
      { name: "pytest · mutation testing", level: 90 },
      { name: "Byte-identity reproducibility guards", level: 88 },
      { name: "Statistical CIs · Student's-t", level: 82 },
      { name: "Code review · technical writing", level: 88 },
      { name: "Figma · Adobe (design)", level: 80 },
    ],
  },
];

export const techMarquee = [
  "Python",
  "C++",
  "TypeScript",
  "React",
  "PyTorch",
  "TensorFlow",
  "OpenMP",
  "SLURM",
  "SUMO",
  "MATSim",
  "DTALite",
  "OSC Pitzer",
  "OSM",
  "US Census PUMS",
  "PostgreSQL",
  "MySQL",
  "GraphQL",
  "AWS",
  "Docker",
  "Linux",
  "Git",
  "pytest",
  "Figma",
  "Supabase",
  "Anthropic Claude",
  "LLM APIs",
];

export const tools = [
  "Figma",
  "Adobe",
  "VS Code",
  "Git",
  "Docker",
  "pytest",
  "SLURM",
  "OSC HPC",
  "Linux",
  "Notion",
];