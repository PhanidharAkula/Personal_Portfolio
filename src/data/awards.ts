export type Award = {
  year: string;
  title: string;
  org: string;
};

export const awards: Award[] = [
  {
    year: "2026",
    title: "Certificate of Appreciation · Graduate School",
    org: "Miami University",
  },
  {
    year: "2025",
    title: "Elected President · Graduate Students of Color Association (100+ members)",
    org: "Miami University",
  },
  {
    year: "2025",
    title: "Elected Member · Graduate Student Council Board",
    org: "Miami University",
  },
  {
    year: "2024",
    title: "Full scholarship + assistantship · M.S. Computer Science",
    org: "Miami University",
  },
  {
    year: "2023",
    title: "Peer-reviewed publication · Topic Modelling of Web Pages with LDA",
    org: "IJSREM · DOI 27350",
  },
  {
    year: "2023",
    title: "Peer-reviewed publication · Soil Image Classification with CNNs",
    org: "IJSREM · DOI 23138",
  },
  {
    year: "2022 - 2025",
    title: "10+ technical certifications · AWS Cloud Foundations · Applied ML & AI · Software Engineering",
    org: "AICTE · Coursera · NPTEL · Forage · AWS",
  },
];

export const press: { source: string; title: string; href: string }[] = [
  {
    source: "IJSREM · 2023",
    title: "Topic Modelling of Web Pages with LDA Methods",
    href: "https://doi.org/10.55041/IJSREM27350",
  },
  {
    source: "IJSREM · 2023",
    title: "Soil Image Classification using Deep Learning",
    href: "https://doi.org/10.55041/IJSREM23138",
  },
];
