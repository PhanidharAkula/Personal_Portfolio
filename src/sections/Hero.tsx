import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight, Download } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../components/ui/icons";
import { HeroScene } from "../components/three/HeroScene";
// import { SceneWaves as HeroScene } from "../components/three/scenes/SceneWaves";
// import { SceneNetwork as HeroScene } from "../components/three/scenes/SceneNetwork";
// import { SceneCrystal as HeroScene } from "../components/three/scenes/SceneCrystal";
// import { ScenePlanet as HeroScene } from "../components/three/scenes/ScenePlanet";
// import { SceneGalaxy as HeroScene } from "../components/three/scenes/SceneGalaxy";
// import { SceneSolarSystem as HeroScene } from "../components/three/scenes/SceneSolarSystem";
import { profile } from "../data/profile";
import { MagneticButton } from "../components/ui/MagneticButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  // Only fade the canvas, never CSS-transform it. Scaling a WebGL canvas with
  // a CSS transform stretches the pixel buffer instead of re-rendering, which
  // is what was making the scene look distorted while scrolling.
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden border-b border-line"
    >
      {/* 3D scene · opacity only, no transforms */}
      <motion.div
        style={{ opacity: sceneOpacity }}
        className="absolute inset-0 z-0 will-change-[opacity]"
      >
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-ink/30 to-ink z-10 pointer-events-none" />
        <HeroScene />
      </motion.div>

      {/* Grid */}
      <div className="absolute inset-0 z-[1] bg-grid bg-[length:48px_48px] opacity-[0.18] pointer-events-none" />

      {/* Floating HUD - top right */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-24 right-5 md:right-10 z-20 hidden md:flex flex-col gap-2 items-end pointer-events-none"
      >
        <div className="bracket px-4 py-3">
          <div className="flex flex-col gap-1 mono-mini text-bone/65">
            <span><span className="text-acid">●</span> System nominal</span>
            <span>Latency · 22ms</span>
            <span>Cluster · PITZER/OSC</span>
            <span>Process · ./portfolio</span>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y: titleY }}
        className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 md:px-10 pt-20 sm:pt-24 md:pt-36 pb-10 md:pb-12"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex items-center gap-3 mb-6 flex-wrap"
        >
          <span className="chip">
            <span className="dot" /> 2026 · Open to full-time roles
          </span>
        </motion.div>

        <h1 className="display-italic text-bone tracking-crush leading-[1.0] text-[clamp(56px,13vw,224px)]">
          <motion.span
            className="block"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.1, ease: [0.7, 0, 0.2, 1] }}
          >
            Phanidhar
          </motion.span>
          <motion.span
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.55, duration: 1.1, ease: [0.7, 0, 0.2, 1] }}
          >
            <span>Akula</span>
            <span
              aria-hidden
              className="inline-flex items-center justify-center text-plasma w-[0.55em] h-[0.55em]"
              style={{ transform: "translateY(15px)" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                preserveAspectRatio="xMidYMid meet"
                className="h-full w-full block"
              >
                <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
              </svg>
            </span>
            <span className="display-italic text-bone/40 text-[0.7em] md:text-[1em]">
              developer
            </span>
          </motion.span>
        </h1>

        {/* Sub */}
        <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="col-span-12 lg:col-span-4"
          >
            <p className="text-bone/80 text-base md:text-lg leading-relaxed">
              {profile.tagline} Reproducible HPC simulators by morning, production AI products by night,
              where the model meets the metal.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col gap-1 mono-mini text-bone/60 lg:pt-[6px]"
          >
            <span>/ NOW</span>
            <span className="text-bone">M.S. CS · Miami University</span>
            <span className="text-bone/55">Thesis · SimForge · cross-simulator HPC</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="col-span-12 sm:col-span-6 lg:col-span-5 flex flex-wrap items-center gap-3 lg:justify-end"
          >
            <MagneticButton
              href="#projects"
              className="btn-solid"
              cursor="link"
              cursorLabel="See work"
            >
              <span>Selected Work</span>
              <ArrowDownRight size={14} />
            </MagneticButton>
            <MagneticButton
              href={profile.cv}
              download
              className="btn-outline"
              cursor="link"
              cursorLabel="Download"
            >
              <Download size={14} /> CV.PDF
            </MagneticButton>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-8 md:mt-12 flex flex-wrap items-start justify-between gap-4"
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="chip"
              data-cursor="link"
            >
              <Github size={12} /> github
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="chip"
              data-cursor="link"
            >
              <Linkedin size={12} /> linkedin
            </a>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="mono-mini text-bone/50">SCROLL</span>
            <motion.span
              className="block h-12 w-px bg-bone/40"
              animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
