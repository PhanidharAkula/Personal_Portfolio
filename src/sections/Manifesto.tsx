import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const LINES = [
  ["I build software", "that bridges"],
  ["the kernel and", "the keystroke."],
  ["Where the model", "meets the metal."],
];

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-line py-14 md:py-28 bg-ink"
    >
      <div className="absolute inset-0 bg-grid bg-[length:64px_64px] opacity-15 pointer-events-none" />
      <motion.div
        className="absolute inset-x-0 -top-32 -bottom-32 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,94,31,0.18), transparent 60%)",
          y: useTransform(scrollYProgress, [0, 1], [-200, 200]),
        }}
      />
      <div className="relative px-5 md:px-10">
        <div className="mono-mini text-plasma mb-10">/ MANIFESTO · 03</div>
        <div className="flex flex-col gap-2 md:gap-4">
          {LINES.map((pair, i) => (
            <Line key={i} index={i} progress={scrollYProgress} pair={pair as [string, string]} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-12 max-w-2xl text-bone/70 leading-relaxed text-lg md:text-xl"
        >
          The product is the experiment is the paper is the demo. Every project is an excuse to
          read one more paper, write one more line of CUDA, throw away one more abstraction that
          stopped earning its keep.
        </motion.div>
      </div>
    </section>
  );
}

function Line({
  pair,
  index,
  progress,
}: {
  pair: [string, string];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = 0.05 + index * 0.12;
  const end = start + 0.18;
  const x = useTransform(progress, [start, end], [index % 2 === 0 ? -120 : 120, 0]);
  const opacity = useTransform(progress, [start - 0.05, start, end], [0.15, 0.5, 1]);

  return (
    <motion.div
      style={{ x, opacity }}
      className="flex flex-wrap items-baseline gap-x-6 gap-y-4 display text-bone leading-[1.05] text-[clamp(44px,10vw,160px)] tracking-tightest"
    >
      <span>{pair[0]}</span>
      <span className="display-italic text-plasma">{pair[1]}</span>
    </motion.div>
  );
}
