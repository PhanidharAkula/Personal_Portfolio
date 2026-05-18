import { useEffect, useState } from "react";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Cursor } from "./components/Cursor";
import { Loader } from "./components/Loader";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";

import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Manifesto } from "./sections/Manifesto";
import { Research } from "./sections/Research";
import { Testimonials } from "./sections/Testimonials";
import { Awards } from "./sections/Awards";
import { Contact } from "./sections/Contact";

export default function App() {
  const [booted, setBooted] = useState(false);
  useSmoothScroll();

  useEffect(() => {
    if (booted) {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    } else {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    }
  }, [booted]);

  // Skip loader after 4 seconds if it stalls (safety net above the ~3s normal path).
  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative grain vignette text-bone bg-ink">
      <Loader onDone={() => setBooted(true)} />
      <Cursor />
      <ScrollProgress />
      <Navigation />
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-bone focus:text-ink focus:px-3 focus:py-2 focus:mono-mini"
      >
        Skip to content
      </a>
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Manifesto />
        <Research />
        <Testimonials />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
