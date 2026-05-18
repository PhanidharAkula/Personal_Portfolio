import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./ui/icons";
import { profile } from "../data/profile";

const NAV_ITEMS = [
  { id: "hero", label: "Index", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "experience", label: "Experience", num: "03" },
  { id: "projects", label: "Projects", num: "04" },
  { id: "research", label: "Research", num: "05" },
  { id: "testimonials", label: "Voices", num: "06" },
  { id: "contact", label: "Contact", num: "07" },
];

export function Navigation() {
  const [time, setTime] = useState(() => new Date());
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const trigger = window.innerHeight * 0.4;
      let active = NAV_ITEMS[0].id;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top - trigger <= 0) {
          active = item.id;
        }
      }
      setActiveId(active);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const formatted = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: profile.timezone,
  });

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-[80] transition-all ${
          scrolled
            ? "backdrop-blur-md bg-ink/60 border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="grid grid-cols-12 items-center px-5 py-4 md:px-8 md:py-5">
          <a
            href="#hero"
            className="col-span-3 flex items-center gap-3"
            data-cursor="link"
          >
            <span className="display-italic text-2xl md:text-3xl text-bone">P.</span>
            <span className="hidden md:flex flex-col leading-tight gap-1">
              <span className="mono-mini text-bone/60">PHANIDHAR · AKULA</span>
              <span className="mono-mini text-bone/40">PORTFOLIO · 2026</span>
            </span>
          </a>

          <nav className="col-span-6 hidden lg:flex items-center justify-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-cursor="link"
                className={`group relative px-4 py-2 transition-colors ${
                  activeId === item.id ? "text-bone" : "text-bone/55 hover:text-bone"
                }`}
              >
                <span className="mono-mini">
                  <span className="text-plasma mr-2">{item.num}</span>
                  {item.label}
                </span>
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-3 right-3 h-px bg-plasma"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="col-span-3 col-start-10 flex items-center justify-end gap-4">
            <div className="hidden md:flex flex-col items-end leading-tight gap-1">
              <span className="mono-mini text-acid tabular">{formatted} ET</span>
              <span className="mono-mini text-bone/45">39.5°N · 84.7°W</span>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden flex h-10 w-10 items-center justify-center border border-line text-bone"
              aria-label="Open menu"
              data-cursor="link"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[120] bg-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-grid bg-[length:32px_32px] opacity-20" />
            <div className="relative h-full flex flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="display-italic text-3xl">Phani.</span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center border border-line"
                  aria-label="Close menu"
                  data-cursor="link"
                >
                  <X size={18} />
                </button>
              </div>
              <ul className="mt-12 flex flex-col gap-6">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="display-italic text-5xl text-bone hover:text-plasma transition-colors"
                    >
                      <span className="mono text-sm text-plasma mr-3 tabular align-middle">
                        / {item.num}
                      </span>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex items-center gap-4 pt-12">
                <a href={profile.socials.github} target="_blank" rel="noreferrer" className="chip" data-cursor="link">
                  <Github size={14} /> GitHub
                </a>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="chip" data-cursor="link">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right-side dock · only visible while in the hero / index section */}
      <AnimatePresence>
        {activeId === "hero" && (
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ duration: 0.35, ease: [0.7, 0, 0.2, 1] }}
            className="fixed top-[calc(50%-50px)] right-4 z-[60] hidden xl:flex flex-col gap-3 -translate-y-1/2"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-center gap-3 justify-end"
                data-cursor="link"
              >
                <span
                  className={`mono-mini transition-all ${
                    activeId === item.id
                      ? "opacity-100 text-bone"
                      : "opacity-0 group-hover:opacity-70 text-bone/70"
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className={`block h-px transition-all ${
                    activeId === item.id ? "w-10 bg-plasma" : "w-5 bg-bone/40 group-hover:bg-bone"
                  }`}
                />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
