import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { Reveal } from "../components/ui/Reveal";
import { Tilt } from "../components/ui/Tilt";

const SECTION_NUM = "06";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  const total = testimonials.length;

  return (
    <section id="testimonials" className="relative border-b border-line overflow-hidden">
      <div className="absolute inset-0 bg-grid-fine bg-[length:32px_32px] opacity-30 pointer-events-none" />
      <div className="px-5 md:px-10 pt-8 md:pt-10 pb-10">
        <span className="mono-mini text-plasma block mb-3">/ {SECTION_NUM} · Voices</span>
        <h2 className="display text-bone leading-[1.02] text-[clamp(40px,7vw,104px)] tracking-tightest">
          What collaborators
          <span className="display-italic text-bone/55"> say after the demo.</span>
        </h2>
      </div>

      <div className="px-5 md:px-10 pb-12 md:pb-20">
        <div className="grid grid-cols-12 gap-6">
          {/* Featured quote */}
          <Reveal className="col-span-12 lg:col-span-8">
            <Tilt intensity={4} className="relative">
              <div className="relative border border-line bg-ink-50/40 backdrop-blur p-6 md:p-12 overflow-hidden min-h-[360px] md:min-h-[420px] flex flex-col justify-between">
                <div className="absolute -top-8 -left-4 text-[200px] leading-none text-plasma/15 display-italic select-none">
                  "
                </div>
                <Quote className="text-plasma" size={26} />
                <motion.blockquote
                  key={t.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
                  className="display text-bone text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight max-w-4xl my-6 md:my-10"
                >
                  "{t.quote}"
                </motion.blockquote>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <motion.div
                    key={`who-${t.id}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border border-plasma/40 bg-ink-50 flex items-center justify-center">
                      {t.avatar ? (
                        <img src={t.avatar} alt={t.name} className="h-full w-full object-cover" />
                      ) : (
                        <span className="display-italic text-plasma text-base tracking-tight">
                          {t.initials}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="display text-bone text-xl">{t.name}</span>
                      <span className="mono-mini text-bone/55">{t.role} · {t.org}</span>
                    </div>
                  </motion.div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIdx((idx - 1 + total) % total)}
                      className="flex h-11 w-11 items-center justify-center border border-line text-bone hover:border-plasma hover:text-plasma transition"
                      aria-label="Previous"
                      data-cursor="link"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <span className="mono-mini text-bone/65 tabular text-center whitespace-nowrap min-w-[5rem]">
                      {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>
                    <button
                      onClick={() => setIdx((idx + 1) % total)}
                      className="flex h-11 w-11 items-center justify-center border border-line text-bone hover:border-plasma hover:text-plasma transition"
                      aria-label="Next"
                      data-cursor="link"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </Tilt>
          </Reveal>

          {/* Side stack */}
          <Reveal delay={0.2} className="col-span-12 lg:col-span-4">
            <div className="flex flex-col gap-3 h-full">
              {testimonials.map((tt, i) => (
                <button
                  key={tt.id}
                  onClick={() => setIdx(i)}
                  className={`group text-left border p-4 transition-all ${
                    i === idx
                      ? "border-plasma bg-plasma/5"
                      : "border-line hover:border-bone/40"
                  }`}
                  data-cursor="link"
                  data-cursor-label="Read"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        i === idx ? "bg-plasma" : "bg-bone/30"
                      }`}
                    />
                    <span className="mono-mini text-bone/65">
                      {String(i + 1).padStart(2, "0")} · {tt.org}
                    </span>
                  </div>
                  <div className="mt-2 text-bone text-base line-clamp-2">"{tt.quote}"</div>
                  <div className="mt-2 mono-mini text-bone/55">— {tt.name}</div>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
