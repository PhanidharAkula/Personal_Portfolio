import { motion, AnimatePresence } from "framer-motion";
import { forwardRef, useMemo, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { GithubIcon as Github } from "../components/ui/icons";
import { projects, type Project } from "../data/projects";
import { Tilt } from "../components/ui/Tilt";

const SECTION_NUM = "04";
const FILTERS = ["All", "Research", "GenAI", "Full-Stack", "Tooling"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="relative border-b border-line">
      <div className="px-5 md:px-10 pt-8 md:pt-10 pb-10">
        <span className="mono-mini text-plasma block mb-3">/ {SECTION_NUM} · Projects</span>
        <h2 className="display text-bone leading-[1.02] text-[clamp(40px,7vw,104px)] tracking-tightest">
          Selected work
          <span className="display-italic text-bone/55"> from the lab and the wild.</span>
        </h2>
      </div>

      <div className="px-5 md:px-10 mb-10">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            <p className="text-bone/70 max-w-2xl">
              Seven artifacts spanning HPC research, generative AI, full-stack and open-source tooling.
              Each one tackled a constraint that didn't have a textbook answer.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-wrap gap-2 md:justify-end">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`mono-mini px-3 py-1.5 border transition-all ${
                  filter === f
                    ? "border-plasma bg-plasma text-ink"
                    : "border-line text-bone/65 hover:text-bone hover:border-bone/40"
                }`}
                data-cursor="link"
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative px-5 md:px-10 pb-12 md:pb-20">
        <motion.div layout className="relative grid grid-cols-12 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                onOpen={() => setActive(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

const ACCENT_MAP: Record<Project["accent"], string> = {
  plasma: "var(--plasma)",
  acid: "var(--acid)",
  lavender: "var(--lavender)",
  bone: "var(--bone)",
};

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: () => void;
};

const ProjectCard = forwardRef<HTMLElement, ProjectCardProps>(function ProjectCard(
  { project, index, onOpen },
  ref
) {
  const span = index === 0 ? "lg:col-span-8" : index === 1 || index === 4 ? "lg:col-span-4" : "lg:col-span-6";
  const accent = ACCENT_MAP[project.accent];

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.7, 0, 0.2, 1] }}
      className={`group col-span-12 md:col-span-6 ${span}`}
    >
      <Tilt intensity={3} className="relative">
        <button
          onClick={onOpen}
          className="text-left block w-full"
          data-cursor="view"
          data-cursor-label="Open"
        >
          <div className="project-figure relative aspect-[16/10] overflow-hidden border border-line bg-ink-50">
            <img
              src={project.cover}
              alt={project.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="h-full w-full object-cover opacity-80 transition duration-[800ms] ease-[cubic-bezier(0.3,0,0.3,1)] group-hover:opacity-100 group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute inset-x-7 top-6 flex items-center justify-between mono-mini text-bone z-[2]">
              <span>/ {project.index} · {project.category.toUpperCase()}</span>
              <span style={{ color: accent }}>{project.year}</span>
            </div>
            <div className="absolute inset-x-7 bottom-7 flex items-end justify-between gap-4 z-[2]">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="mono-mini text-bone/65">{project.role}</span>
                <h3 className="display text-bone leading-[1.02] text-2xl md:text-4xl">
                  {project.title}
                </h3>
              </div>
              <span className="display-italic text-bone/85 text-2xl md:text-3xl shrink-0">
                <ArrowUpRight />
              </span>
            </div>
            <div className="bracket absolute inset-3 z-[1]" />
          </div>

          <div className="mt-4 grid grid-cols-12 gap-3">
            <p className="col-span-12 md:col-span-7 text-bone/70 leading-relaxed text-base">
              {project.blurb}
            </p>
            <div className="col-span-12 md:col-span-5 flex flex-wrap content-start items-start gap-1.5 md:justify-end">
              {project.stack.slice(0, 4).map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        </button>
      </Tilt>
    </motion.article>
  );
});

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[180] flex items-center justify-center p-3 md:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-md" />
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 30 }}
            className="relative w-full max-w-5xl max-h-[88vh] overflow-y-auto bg-ink border border-line"
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
          >
            <div className="relative aspect-[16/8] overflow-hidden">
              <img
                src={project.cover}
                alt={project.title}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center bg-ink/70 backdrop-blur border border-line text-bone hover:bg-plasma hover:text-ink transition"
                data-cursor="link"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <div className="absolute inset-x-6 bottom-6">
                <div className="mono-mini text-bone/85 mb-3">
                  / {project.index} · {project.category.toUpperCase()} · {project.year}
                </div>
                <h3 className="display text-bone text-4xl md:text-6xl leading-[1.0] tracking-tightest">
                  {project.title}
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6 p-6 md:p-10">
              <div className="col-span-12 md:col-span-7 flex flex-col gap-5">
                <span className="mono-mini text-bone/55">{project.role}</span>
                <p className="display-italic text-bone text-2xl leading-snug">{project.blurb}</p>
                <p className="text-bone/75 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 mt-2 flex-wrap">
                  {project.href && (
                    <a className="btn-solid" href={project.href} target="_blank" rel="noopener noreferrer" data-cursor="link">
                      <ArrowUpRight size={14} /> Visit
                    </a>
                  )}
                  {project.repo && (
                    <a className="btn-outline" href={project.repo} target="_blank" rel="noopener noreferrer" data-cursor="link">
                      <Github size={14} /> Source
                    </a>
                  )}
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 flex flex-col gap-3">
                <span className="mono-mini text-bone/55 mb-1">/ Metrics</span>
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex items-baseline justify-between border-t border-line pt-3">
                    <span className="mono-mini text-bone/55">{m.label}</span>
                    <span className="display-italic text-plasma text-2xl">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
