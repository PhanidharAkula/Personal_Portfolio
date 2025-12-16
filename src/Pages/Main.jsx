import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import "./Main.css";
import { ThemeContext } from "../Context/ThemeContext";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Playground from "../Components/Playground/Playground";
import Experience from "../Components/Experience/Experience";
import Contact from "../Components/Contact/Contact";
import { motion, AnimatePresence } from "framer-motion";

const Main = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, [setTheme]);

  // Section refs
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const playgroundRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("Home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle scroll for showing scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const smoothScroll = (target) => {
    if (!target) return;
    const elementPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    const duration = 1000;
    let startTime = null;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const scrollToSection = (sectionRef) => {
    if (sectionRef?.current) {
      smoothScroll(sectionRef.current);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Intersection observer for active section tracking
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const sectionMap = {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionMap[sectionId] || sectionId);
        }
      });
    }, options);

    const sections = [
      homeRef,
      aboutRef,
      skillsRef,
      playgroundRef,
      experienceRef,
      contactRef,
    ];

    sections.forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    return () => {
      sections.forEach((sectionRef) => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      });
    };
  }, []);

  return (
    <div className={`main ${isDark ? "dark" : "light"}`}>
      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToPlayground={() => scrollToSection(playgroundRef)}
        scrollToExperience={() => scrollToSection(experienceRef)}
        scrollToContact={() => scrollToSection(contactRef)}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />

      {/* Hero / Home Section */}
      <div ref={homeRef} id="home">
        <Home
          scrollToAbout={() => scrollToSection(aboutRef)}
          scrollToContact={() => scrollToSection(contactRef)}
        />
      </div>

      {/* About Section */}
      <div ref={aboutRef} id="about">
        <About />
      </div>

      {/* Skills Section */}
      <div ref={skillsRef} id="skills">
        <Skills />
      </div>

      {/* Projects Section */}
      <div ref={playgroundRef} id="projects">
        <Playground />
      </div>

      {/* Experience Section */}
      <div ref={experienceRef} id="experience">
        <Experience />
      </div>

      {/* Contact Section */}
      <div ref={contactRef} id="contact">
        <Contact />
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-top-btn"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Main;
