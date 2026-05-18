import { motion } from "framer-motion";
import { profile, stats } from "../data/profile";
import { Reveal } from "../components/ui/Reveal";
import { NumberTicker } from "../components/ui/NumberTicker";
import { Marquee } from "../components/ui/Marquee";
import { techMarquee } from "../data/skills";

const SECTION_NUM = "02";

export function About() {
  return (
    <section id="about" className="relative border-b border-line">
      {/* Section header */}
      <div className="px-5 md:px-10 pt-8 md:pt-10 pb-10">
        <span className="mono-mini text-plasma block mb-3">/ {SECTION_NUM} · About</span>
        <h2 className="display text-bone leading-[1.02] text-[clamp(40px,7vw,104px)] tracking-tightest">
          Builder
          <span className="display-italic text-bone/55"> of strange and fast software.</span>
        </h2>
      </div>

      {/* Image + bio split */}
      <div className="px-5 md:px-10 pb-12 md:pb-16">                                                                  
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 md:gap-y-12 items-start">
          {/* Portrait card */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden border border-line group bg-ink">
                <svg
                  viewBox="0 0 400 500"
                  preserveAspectRatio="xMidYMid slice"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden
                >
                  <defs>
                    <radialGradient id="port-bg" cx="50%" cy="40%" r="80%">
                      <stop offset="0%" stopColor="#1a1715" />
                      <stop offset="60%" stopColor="#0a0908" />
                      <stop offset="100%" stopColor="#000000" />
                    </radialGradient>
                    <linearGradient id="port-aura" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff5e1f" stopOpacity="0.7" />
                      <stop offset="55%" stopColor="#c0e218" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#847fe3" stopOpacity="0.6" />
                    </linearGradient>
                    <radialGradient id="port-head" cx="50%" cy="40%" r="50%">
                      <stop offset="0%" stopColor="#ff5e1f" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#847fe3" stopOpacity="0.0" />
                    </radialGradient>
                    <filter id="port-blur">
                      <feGaussianBlur stdDeviation="14" />
                    </filter>
                  </defs>
                  <rect width="400" height="500" fill="url(#port-bg)" />
                  {/* Soft aura halo */}
                  <ellipse cx="200" cy="220" rx="170" ry="220" fill="url(#port-aura)" filter="url(#port-blur)" opacity="0.55" />
                  {/* Head + shoulders silhouette */}
                  <circle cx="200" cy="195" r="78" fill="url(#port-head)" />
                  <path
                    d="M 60 500 L 60 410 C 60 320, 130 290, 200 290 C 270 290, 340 320, 340 410 L 340 500 Z"
                    fill="url(#port-head)"
                  />
                  {/* Neural network nodes + edges */}
                  <g stroke="#c0e218" strokeOpacity="0.45" strokeWidth="1" fill="#c0e218">
                    <line x1="80" y1="120" x2="160" y2="180" />
                    <line x1="160" y1="180" x2="240" y2="180" />
                    <line x1="240" y1="180" x2="320" y2="120" />
                    <line x1="80" y1="320" x2="160" y2="270" />
                    <line x1="240" y1="270" x2="320" y2="320" />
                    <line x1="160" y1="180" x2="200" y2="240" />
                    <line x1="240" y1="180" x2="200" y2="240" />
                    <line x1="160" y1="270" x2="200" y2="240" />
                    <line x1="240" y1="270" x2="200" y2="240" />
                    <circle cx="80" cy="120" r="3" />
                    <circle cx="160" cy="180" r="3" />
                    <circle cx="240" cy="180" r="3" />
                    <circle cx="320" cy="120" r="3" />
                    <circle cx="80" cy="320" r="3" />
                    <circle cx="160" cy="270" r="3" />
                    <circle cx="240" cy="270" r="3" />
                    <circle cx="320" cy="320" r="3" />
                    <circle cx="200" cy="240" r="4" fill="#ff5e1f" />
                  </g>
                  {/* Glitch / data lines */}
                  <g stroke="#f4ecd8" strokeOpacity="0.08" strokeWidth="1">
                    <line x1="0" y1="92" x2="400" y2="92" />
                    <line x1="0" y1="178" x2="400" y2="178" />
                    <line x1="0" y1="306" x2="400" y2="306" />
                    <line x1="0" y1="412" x2="400" y2="412" />
                  </g>
                  <g fill="#f4ecd8" fillOpacity="0.4" fontFamily="JetBrains Mono, monospace" fontSize="9">
                    <text x="20" y="490">SDXL · seed:0xA3F2 · cfg 7.5</text>
                  </g>
                </svg>
                <img
                  src="https://thispersondoesnotexist.com/"
                  alt="AI-generated human portrait placeholder"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback chain: try Unsplash if thispersondoesnotexist
                    // is blocked, then hide entirely if that also fails.
                    const el = e.currentTarget;
                    if (!el.dataset.fallback) {
                      el.dataset.fallback = "1";
                      el.src =
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80";
                    } else {
                      el.style.display = "none";
                    }
                  }}
                  className="absolute inset-0 h-full w-full object-cover contrast-[1.05] saturate-[0.95] transition-all duration-1000 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                <div className="absolute inset-x-8 top-7 flex items-center justify-between mono-mini text-bone z-[2]">
                  <span><span className="text-acid">●</span> 39.5°N · 84.7°W</span>
                  <span>FRAME 0001</span>
                </div>
                <div className="absolute inset-x-8 bottom-7 flex items-center justify-between mono-mini text-bone z-[2]">
                  <span>{profile.alias}</span>
                  <span>EOS · R5C</span>
                </div>
                <div className="bracket absolute inset-3 pointer-events-none" />
              </div>
            </Reveal>
          </div>

          {/* Bio + stats */}
          <div className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-start-6 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              {profile.bio.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.12, duration: 0.9 }}
                  className="text-bone/85 text-lg md:text-xl leading-relaxed font-light"
                >
                  {p}
                </motion.p>
              ))}
              <Reveal delay={0.25}>
                <p className="display-italic text-plasma text-2xl md:text-3xl leading-snug">
                  I'm happiest when I'm tightening an SBATCH script before lunch and shipping a polished React surface before dinner.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.08, duration: 0.7 }}
                  className="bracket border border-line/40 p-5 hover:border-plasma/60 transition-colors"
                >
                  <div className="display-italic text-plasma text-3xl md:text-4xl leading-none">
                    <NumberTicker
                      value={s.value}
                      decimals={s.decimals ?? 0}
                      suffix={s.suffix}
                    />
                  </div>
                  <div className="mt-2 mono-mini text-bone">{s.label}</div>
                  <div className="mt-1 mono text-[11px] text-bone/45">{s.subtitle}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="border-y border-line py-6 bg-ink-50/50">
        <Marquee>
          {techMarquee.map((tech, i) => (
            <div key={tech} className="flex items-center gap-8">
              <span className="display-italic text-bone/85 text-3xl md:text-5xl whitespace-nowrap">
                {tech}
              </span>
              <span className="text-plasma display-italic text-3xl">
                {i % 3 === 0 ? "✶" : i % 3 === 1 ? "·" : "/"}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
