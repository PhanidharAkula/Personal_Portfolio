import { motion } from "framer-motion";
import { Reveal } from "../components/ui/Reveal";
import { NumberTicker } from "../components/ui/NumberTicker";
import { ArrowUpRight } from "lucide-react";

const SECTION_NUM = "05";

const NODES = Array.from({ length: 64 });
const TIMELINE = [
  { t: "T+00:00", label: "Canonical bundle · 5 files · SHA-256 manifest", color: "var(--plasma)" },
  { t: "T+00:08", label: "BFS pre-router · 16-way pool · canonical routes", color: "var(--acid)" },
  { t: "T+02:30", label: "SUMO · MATSim · DTALite fire in lockstep", color: "var(--lavender)" },
  { t: "T+05:46", label: "Run end · Student's-t 95% CIs computed", color: "var(--bone)" },
];

const CHART_DATA = [
  { tier: "1K", t: 0.2 },
  { tier: "10K", t: 0.8 },
  { tier: "50K", t: 1.5 },
  { tier: "100K", t: 2.4 },
  { tier: "250K", t: 4.1 },
  { tier: "500K", t: 5.8 },
];

export function Research() {
  const max = Math.max(...CHART_DATA.map((d) => d.t));

  return (
    <section
      id="research"
      className="relative overflow-hidden border-b border-line bg-gradient-to-b from-ink via-ink-50 to-ink"
    >
      <div className="absolute inset-0 bg-grid bg-[length:48px_48px] opacity-15 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-plasma to-transparent" />

      <div className="relative px-5 md:px-10 pt-8 md:pt-10 pb-10">
        <span className="mono-mini text-plasma block mb-3">/ {SECTION_NUM} · Research</span>
        <h2 className="display text-bone leading-[1.02] text-[clamp(40px,7vw,104px)] tracking-tightest">
          The thesis: a fair benchmark
          <span className="display-italic text-plasma"> for how cities scale.</span>
        </h2>
      </div>

      <div className="relative px-5 md:px-10 pb-14 md:pb-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-y-12">
          {/* Abstract */}
          <Reveal className="col-span-12 lg:col-span-5">
            <div className="border-l-2 border-plasma pl-6 flex flex-col gap-6">
              <span className="mono-mini text-bone/55">/ ABSTRACT · M.S. THESIS</span>
              <p className="text-bone/85 leading-relaxed text-lg md:text-xl font-light">
                A reproducible cross-simulator benchmarking framework for urban traffic.{" "}
                <em className="display-italic text-plasma">SimForge</em> drives SUMO (micro + meso),
                MATSim queue-mobsim and DTALite DTA from a single canonical five-file scenario
                bundle so any cross-engine travel-time delta is provably an engine-internal
                property, not an input asymmetry.
              </p>
              <p className="text-bone/70 leading-relaxed">
                Across the OSC Pitzer, Cardinal and Ascend clusters, a state-aware BFS pre-router
                with OSM turn-restrictions compresses NYC 500K-trip pre-routing from ~68h to
                ~5–8h (~25–30× speedup) via 16-way multiprocessing and a JSONL content-addressed
                cache. Scaled to ~80K nodes / ~200K directed links across Chicago, NYC and LA;
                calibrated against US Census PUMS microdata (2.4M–6.8M persons), lifting realism
                from ~20–40% baseline to ~70–72%.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "SLURM", "SUMO", "MATSim", "DTALite", "OSM", "PUMS"].map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <a
                href="#"
                className="link-underline mono text-sm text-bone hover:text-plasma flex items-center gap-2 self-start"
                data-cursor="link"
              >
                Read the thesis <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>

          {/* Live HPC HUD */}
          <Reveal delay={0.2} className="col-span-12 lg:col-span-7">
            <div className="border border-line bg-ink/60 backdrop-blur-sm">
              <div className="flex items-center justify-between px-4 py-3 border-b border-line">
                <div className="flex items-center gap-3 mono-mini text-bone/65">
                  <span className="dot bg-acid h-2 w-2 rounded-full" /> RUN · NYC500 · LIVE
                </div>
                <div className="mono-mini text-bone/55">
                  OSC · PITZER · CARDINAL · ASCEND
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 p-5">
                {/* Node grid */}
                <div className="col-span-12 md:col-span-6">
                  <div className="mono-mini text-bone/55 mb-3">/ CANONICAL ROUTES · BATCH 064</div>
                  <div className="grid grid-cols-8 gap-1.5">
                    {NODES.map((_, i) => {
                      const intensity = 0.25 + (Math.sin(i * 1.3) + 1) * 0.4;
                      const isHot = i % 11 === 0;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.012, duration: 0.4 }}
                          className="aspect-square border border-line"
                          style={{
                            background: isHot
                              ? "var(--plasma)"
                              : `rgba(192,226,24,${intensity * 0.65})`,
                          }}
                        />
                      );
                    })}
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3 mono-mini text-bone/55">
                    <div>
                      <div className="text-bone display-italic text-2xl">
                        <NumberTicker value={200} suffix="K" />
                      </div>
                      DIR. LINKS
                    </div>
                    <div>
                      <div className="text-bone display-italic text-2xl">
                        <NumberTicker value={25} suffix="×" />
                      </div>
                      SPEEDUP
                    </div>
                    <div>
                      <div className="text-bone display-italic text-2xl">
                        <NumberTicker value={6.8} decimals={1} suffix="M" />
                      </div>
                      PUMS PERS.
                    </div>
                  </div>
                </div>

                {/* Scaling chart */}
                <div className="col-span-12 md:col-span-6">
                  <div className="mono-mini text-bone/55 mb-3">/ PRE-ROUTER · TRIPS vs HOURS</div>
                  <div className="relative h-44 md:h-52 border border-line p-3">
                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 120" preserveAspectRatio="none">
                      <g stroke="rgba(244,236,216,0.08)">
                        {[20, 40, 60, 80, 100].map((y) => (
                          <line key={y} x1="0" y1={y} x2="200" y2={y} />
                        ))}
                      </g>
                      <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.2, ease: [0.7, 0, 0.2, 1] }}
                        fill="none"
                        stroke="var(--plasma)"
                        strokeWidth="1.4"
                        d={CHART_DATA.map((d, i) => {
                          const x = (i / (CHART_DATA.length - 1)) * 200;
                          const y = 110 - (d.t / max) * 90;
                          return `${i === 0 ? "M" : "L"}${x},${y}`;
                        }).join(" ")}
                      />
                      {CHART_DATA.map((d, i) => {
                        const x = (i / (CHART_DATA.length - 1)) * 200;
                        const y = 110 - (d.t / max) * 90;
                        return (
                          <motion.circle
                            key={d.tier}
                            initial={{ opacity: 0, r: 0 }}
                            whileInView={{ opacity: 1, r: 2.4 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            cx={x}
                            cy={y}
                            fill="var(--bone)"
                          />
                        );
                      })}
                    </svg>
                    <div className="absolute bottom-1 left-2 mono-mini text-bone/45">trips</div>
                    <div className="absolute top-1 left-2 mono-mini text-bone/45">t (h)</div>
                  </div>
                  <div className="mt-3 mono-mini text-bone/55 flex justify-between">
                    {CHART_DATA.map((d) => (
                      <span key={d.tier}>{d.tier}</span>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="col-span-12 mt-2">
                  <div className="mono-mini text-bone/55 mb-3">/ EVENT TIMELINE</div>
                  <div className="relative">
                    <div className="absolute left-0 right-0 top-3 h-px bg-line hidden sm:block" />
                    <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6">
                      {TIMELINE.map((t, i) => (
                        <motion.div
                          key={t.t}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.12 }}
                          className="flex flex-col gap-2"
                        >
                          <span
                            className="block h-2 w-2 rounded-full"
                            style={{ background: t.color }}
                          />
                          <span className="mono-mini text-bone/65">{t.t}</span>
                          <span className="text-bone text-sm">{t.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
