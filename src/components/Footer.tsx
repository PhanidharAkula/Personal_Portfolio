import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./ui/icons";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { MagneticButton } from "./ui/MagneticButton";

export function Footer() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="relative border-t border-line overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-grid bg-[length:64px_64px] opacity-15" />
      <div className="relative">
        {/* Big sign-off */}
        <div className="px-5 md:px-10 pt-10 md:pt-16">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <p className="mono-mini text-bone/55 mb-6">/ THE END · SCROLL TOP</p>
              <h3 className="display-italic text-bone leading-[1.0] text-[clamp(56px,15vw,240px)] tracking-crush">
                <motion.span
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.1, ease: [0.7, 0, 0.2, 1] }}
                  className="block"
                >
                  Until soon.
                </motion.span>
              </h3>
            </div>
            <div className="col-span-12 md:col-span-3 flex justify-start md:justify-end pb-6">
              <MagneticButton
                href="#hero"
                className="btn-outline"
                cursor="link"
                cursorLabel="To the top"
              >
                <ArrowUp size={14} /> Top of page
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="mt-8 md:mt-12 border-y border-line py-3 overflow-hidden">
          <div className="marquee-track animate-marquee">
            {[...Array(4)].map((_, idx) => (
              <span
                key={idx}
                className="display-italic text-bone/85 px-6 md:px-10 inline-flex items-center gap-6 md:gap-10 text-2xl md:text-5xl whitespace-nowrap"
              >
                <span className="text-plasma">✶</span> Open to full-time · Oct 2026 (OPT + STEM OPT){" "}
                <span className="text-acid">·</span> Oxford · Bay Area · Remote{" "}
                <span className="text-lavender">✶</span> Always reading papers
              </span>
            ))}
          </div>
        </div>

        {/* Detail row */}
        <div className="px-5 md:px-10 grid grid-cols-12 gap-6 md:gap-8 py-8 md:py-12 border-b border-line">
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
            <span className="mono-mini text-bone/55">/ Contact</span>
            <a
              href={`mailto:${profile.email}`}
              className="text-2xl md:text-3xl display-italic leading-tight text-bone link-underline break-all"
              data-cursor="link"
              data-cursor-label="Send"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
              className="mono text-sm text-bone/55 link-underline w-fit"
              data-cursor="link"
              data-cursor-label="Call"
            >
              {profile.phone}
            </a>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col gap-3">
            <span className="mono-mini text-bone/55">/ Where</span>
            <span className="display text-2xl leading-tight text-bone">{profile.location}</span>
            <span className="mono text-sm text-bone/55 tabular">
              {time.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
                timeZone: profile.timezone,
              })}{" "}
              local
            </span>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-2 flex flex-col gap-3">
            <span className="mono-mini text-bone/55">/ Sites</span>
            <a className="link-underline" href={profile.socials.github} target="_blank" rel="noreferrer" data-cursor="link">
              <span className="inline-flex items-center gap-2"><Github size={14}/> GitHub</span>
            </a>
            <a className="link-underline" href={profile.socials.linkedin} target="_blank" rel="noreferrer" data-cursor="link">
              <span className="inline-flex items-center gap-2"><Linkedin size={14}/> LinkedIn</span>
            </a>
          </div>
          <div className="col-span-12 md:col-span-3 flex flex-col gap-3">
            <span className="mono-mini text-bone/55">/ Colophon</span>
            <p className="text-bone/70 text-sm leading-relaxed">
              Built with React, Framer Motion, React-Three-Fiber, Lenis. Display set in Fraunces, body in Bricolage
              Grotesque, machine read in JetBrains Mono. Hand-tuned in Oxford, OH.
            </p>
          </div>
        </div>

        {/* Footer terminus */}
        <div className="px-5 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mono-mini text-bone/55">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© {new Date().getFullYear()} Phanidhar Akula</span>
            <span className="hidden md:inline">·</span>
            <span className="text-bone/40">All rights reserved · Forever student.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={profile.cv} download className="chip" data-cursor="link" data-cursor-label="Download">
              <ArrowUpRight size={12} /> CV.PDF
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="chip" data-cursor="link">
              <ArrowUpRight size={12} /> Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
