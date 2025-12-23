import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { HiArrowDown, HiOutlineSparkles } from "react-icons/hi2";
import { socialLinks } from "../../utils/socialLinks";

const Home = ({ scrollToAbout }) => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const springConfig = { stiffness: 100, damping: 30 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: i * 0.05,
      },
    }),
  };

  const name = "Phanidhar";
  const surname = "Akula";

  return (
    <div className="hero" ref={containerRef}>
      {/* Animated background grid */}
      <div className="hero-grid" aria-hidden="true">
        <div className="hero-grid-pattern" />
      </div>

      {/* Floating gradient orbs */}
      <motion.div
        className="hero-orb hero-orb-1"
        style={{ x: mouseX, y: mouseY }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-orb hero-orb-2"
        style={{ x: mouseX, y: mouseY }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-orb hero-orb-3"
        style={{ x: mouseX, y: mouseY }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="hero-content"
        ref={heroRef}
        style={{ y, opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Status badge */}
        <motion.div className="hero-badge" variants={itemVariants}>
          <span className="hero-badge-dot" />
          <span>Open to Full-Stack roles</span>
          <span className="hero-badge-dot" />
          {/* <HiOutlineSparkles className="hero-badge-icon" /> */}
        </motion.div>

        {/* Main title - Name */}
        <motion.div className="hero-title-wrapper" variants={itemVariants}>
          <h1 className="hero-title">
            <span className="hero-title-line">
              {name.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="hero-letter"
                  custom={i}
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span className="hero-title-line hero-title-outline">
              {surname.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="hero-letter"
                  custom={i + name.length}
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </h1>
        </motion.div>

        {/* Subtitle with typing effect */}
        <motion.div className="hero-subtitle-wrapper" variants={itemVariants}>
          <div className="hero-subtitle">
            <span className="hero-subtitle-label">I ship</span>
            <span className="hero-subtitle-rotating">
              <TypewriterText
                texts={[
                  "end-to-end product features",
                  "fast, reliable web experiences",
                  "APIs and data models that scale",
                  "interfaces users actually enjoy",
                ]}
              />
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p className="hero-description" variants={itemVariants}>
          Full-stack engineer shipping user-facing features end-to-end, from UI
          to APIs to deployment, with performance, reliability, and crisp UX.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="hero-cta" variants={itemVariants}>
          <motion.button
            className="btn btn-primary hero-btn"
            onClick={scrollToAbout}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            data-cursor="pointer"
          >
            Explore My Work
            <HiArrowDown className="hero-btn-icon" />
          </motion.button>
          <motion.a
            href="mailto:phanidharakula@gmail.com"
            className="btn btn-secondary hero-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            data-cursor="pointer"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div className="hero-social" variants={itemVariants}>
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="pointer"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="hero-scroll-text">Scroll to explore</span>
        <motion.div
          className="hero-scroll-line"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

// Typewriter component
const TypewriterText = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentIndex];

        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
          if (currentText === fullText) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 30 : 80
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <>
      {currentText}
      <span className="typewriter-cursor">|</span>
    </>
  );
};

export default Home;
