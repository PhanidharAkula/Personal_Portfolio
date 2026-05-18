import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LINES = [
  "[boot]  verifying manifest · sha256",
  "[slurm] requesting 16-way pool · pitzer.osc.edu",
  "[osm]   parsing network · ~200K directed links",
  "[sims]  sumo · matsim · dtalite · canonical routes ready",
  "[ok]    environment ready · loading editorial",
];

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Tuned so the loader finishes in roughly 3s total
    // (progress fill ~2.1s, brief hold, then 0.6s fade-out).
    let p = 0;
    const tick = setInterval(() => {
      p += Math.random() * 9 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(tick);
        setTimeout(() => setDone(true), 300);
      }
      setProgress(p);
      setLineIdx(Math.min(LINES.length - 1, Math.floor((p / 100) * LINES.length)));
    }, 220);

    return () => clearInterval(tick);
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(onDone, 400);
    return () => clearTimeout(t);
  }, [done, onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-end justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <motion.div
            className="absolute inset-0 bg-grid bg-[length:32px_32px] opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="absolute left-0 right-0 top-0 h-px origin-left bg-plasma"
            style={{ scaleX: progress / 100 }}
          />
          <div className="relative z-10 flex w-full max-w-[1280px] flex-col gap-12 px-6 pb-12 md:px-12 md:pb-16">
            <div className="flex items-end justify-between">
              <motion.div
                className="display-italic text-bone text-[clamp(80px,15vw,200px)] leading-[1.0] tracking-tightest"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
              >
                Phani.
              </motion.div>
              <div className="hidden md:flex flex-col items-end gap-2">
                <span className="mono-mini text-bone/60">Booting · v2026.04</span>
                <span className="display-italic tabular text-plasma text-5xl leading-none">
                  {Math.round(progress).toString().padStart(3, "0")}%
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 mono text-xs md:text-sm text-bone/70">
              {LINES.map((line, idx) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{
                    opacity: idx <= lineIdx ? 1 : 0.18,
                    x: idx <= lineIdx ? 0 : -12,
                    color: idx === lineIdx ? "var(--acid)" : undefined,
                  }}
                  transition={{ duration: 0.35 }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
            <div className="relative h-px w-full bg-line">
              <motion.div
                className="absolute left-0 top-0 h-full bg-acid"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
