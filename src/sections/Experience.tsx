import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { education, experiences, type Experience as ExperienceT } from "../data/experience";
import { Reveal } from "../components/ui/Reveal";
import { ScrambleText } from "../components/ui/ScrambleText";

const SECTION_NUM = "03";

export function Experience() {
  return (
    <section id="experience" className="relative border-b border-line">
      <div className="px-5 md:px-10 pt-8 md:pt-10 pb-10">
        <span className="mono-mini text-plasma block mb-3">/ {SECTION_NUM} · Experience</span>
        <h2 className="display text-bone leading-[1.02] text-[clamp(40px,7vw,104px)] tracking-tightest">
          A trajectory
          <span className="display-italic text-bone/55"> that bends toward systems.</span>
        </h2>
      </div>

      <div className="px-5 md:px-10 pb-8 md:pb-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 mono-mini text-bone/55 hidden md:block sticky top-32 self-start">
            <span>/ Roles</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <ul className="flex flex-col">
              {experiences.map((exp, i) => (
                <ExperienceRow key={exp.id} exp={exp} index={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="px-5 md:px-10 py-10 md:py-16 border-t border-line">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <span className="mono-mini text-plasma">/ Schooling</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <div className="flex flex-col gap-10">
              {education.map((e, i) => (
                <Reveal key={e.degree} delay={i * 0.1}>
                  <div className="grid grid-cols-12 gap-4 border-b border-line pb-8">
                    <div className="col-span-12 md:col-span-2 mono-mini text-bone/55">{e.period}</div>
                    <div className="col-span-12 md:col-span-5">
                      <div className="display text-2xl md:text-3xl text-bone leading-tight">
                        {e.degree}
                      </div>
                      <div className="mono text-sm text-bone/55 mt-1">{e.org}</div>
                    </div>
                    <div className="col-span-12 md:col-span-5 text-bone/70 leading-relaxed">
                      {e.detail}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({ exp, index }: { exp: ExperienceT; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setOpen((s) => !s)}
      className="group relative cursor-pointer border-t border-line py-7 md:py-9 last:border-b"
      data-cursor="link"
      data-cursor-label={open ? "Collapse" : "Expand"}
    >
      <div className="grid grid-cols-12 gap-3 md:gap-6 items-baseline">
        <div className="col-span-2 md:col-span-1 mono-mini text-plasma">{String(index + 1).padStart(2, "0")}</div>
        <div className="col-span-10 md:col-span-5">
          <div className="flex flex-col">
            <span className="mono-mini text-bone/55 mb-1">
              <ScrambleText text={exp.type.toUpperCase()} trigger="hover" />
            </span>
            <span className="display text-bone text-2xl md:text-4xl leading-tight">{exp.role}</span>
            <span className="mono text-sm text-bone/55 mt-1">{exp.org}</span>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 mono-mini text-bone/55">{exp.period}</div>
        <div className="col-span-6 md:col-span-3 mono-mini text-bone/55 flex items-center justify-end gap-3">
          <span>{exp.location}</span>
          <ArrowUpRight
            size={16}
            className={`transition-transform ${open ? "rotate-90" : "rotate-0 group-hover:translate-x-1 group-hover:-translate-y-1"}`}
          />
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.7, 0, 0.2, 1] }}
        className="overflow-hidden"
      >
        <div className="pt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7 md:col-start-2 flex flex-col gap-3 text-bone/80 leading-relaxed">
            {exp.bullets.map((b) => (
              <div key={b} className="flex gap-3">
                <span className="text-plasma mono-mini mt-2">→</span>
                <p>{b}</p>
              </div>
            ))}
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-wrap gap-2 self-start">
            {exp.tags.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Expanding underline */}
      <motion.div
        className="absolute left-0 right-0 bottom-0 h-px bg-plasma origin-left"
        animate={{ scaleX: hovered || open ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
      />
    </motion.li>
  );
}
