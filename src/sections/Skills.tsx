import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import { Reveal } from "../components/ui/Reveal";

export function Skills() {
  return (
    <section className="relative border-b border-line">
      <div className="px-5 md:px-10 pt-8 md:pt-10 pb-10">
        <span className="mono-mini text-plasma block mb-3">/ Toolkit</span>
        <h3 className="display text-bone leading-[1.02] text-[clamp(36px,6vw,88px)] tracking-tightest">
          Native to the stack
          <span className="display-italic text-bone/55"> From kernel to keystroke.</span>
        </h3>
      </div>

      <div className="px-5 md:px-10 pb-14 md:pb-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 md:gap-y-10">
          {skillGroups.map((group, gi) => (
            <Reveal
              key={group.domain}
              delay={gi * 0.1}
              className="col-span-12 md:col-span-6"
            >
              <div className="border-t border-line pt-6">
                <div className="flex items-baseline justify-between mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="num-badge text-plasma">{String(gi + 1).padStart(2, "0")}/</span>
                    <h4 className="display text-bone text-3xl md:text-4xl">{group.domain}</h4>
                  </div>
                  <span className="mono-mini text-bone/45 hidden md:inline">SET · {String(gi + 1).padStart(2, "0")}</span>
                </div>
                <p className="text-bone/65 text-base mb-6 max-w-prose">{group.caption}</p>
                <ul className="flex flex-col gap-3">
                  {group.items.map((it, idx) => (
                    <motion.li
                      key={it.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: 0.15 + idx * 0.05, duration: 0.5 }}
                      className="grid grid-cols-12 items-center gap-3"
                    >
                      <span className="col-span-7 md:col-span-5 mono text-sm md:text-base text-bone">
                        {it.name}
                      </span>
                      <div className="col-span-3 md:col-span-6 relative h-px bg-line">
                        <motion.div
                          className="absolute left-0 top-0 h-full bg-plasma"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: it.level / 100 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 1.2, ease: [0.7, 0, 0.2, 1], delay: 0.2 }}
                          style={{ transformOrigin: "left" }}
                        />
                      </div>
                      <span className="col-span-2 md:col-span-1 mono-mini tabular text-bone/55 text-right">
                        {it.level}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
