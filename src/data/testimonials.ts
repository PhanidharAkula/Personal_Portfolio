export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  org: string;
  initials: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t-djrao",
    quote:
      "Phanidhar approaches complex technical problems methodically and with strong attention to detail. In our research work, he consistently translated abstract ideas into working, reproducible systems and demonstrated solid judgment when reasoning about performance and design trade-offs.",
    name: "Dr. DJ Rao",
    role: "Associate Professor",
    org: "Miami University",
    initials: "DDR",
  },
  {
    id: "t-rakesh",
    quote:
      "Phanidhar was reliable in delivering production-ready features across both frontend and backend. He communicated clearly, adapted quickly to feedback, and wrote code that was easy for the team to maintain and build on.",
    name: "Rakesh Reddy",
    role: "Founder & CEO",
    org: "Pathfinders Overseas Education",
    initials: "RR",
  },
];