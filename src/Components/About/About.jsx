import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import "./About.css";
import { containerVariants, itemVariants } from "../../utils/animations";
import {
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineBriefcase,
  HiOutlineCpuChip,
} from "react-icons/hi2";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const stats = [
    { value: "E2E", label: "Feature Ownership", icon: HiOutlineBriefcase },
    { value: "AWS", label: "Deploy + Operate", icon: HiOutlineCpuChip },
    { value: "Perf", label: "Latency & UX", icon: HiOutlineSparkles },
    { value: "MS", label: "Computer Science", icon: HiOutlineAcademicCap },
  ];

  const technologies = [
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { icon: FaPython, name: "Python", color: "#3776AB" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: FaAws, name: "AWS", color: "#FF9900" },
    { icon: FaDocker, name: "Docker", color: "#2496ED" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiOpenai, name: "AI APIs", color: "#00A67E" },
    { icon: FaGitAlt, name: "Git", color: "#F05032" },
  ];

  return (
    <section className="about section" ref={containerRef}>
      {/* Background decoration */}
      <div className="about-bg-decoration" aria-hidden="true">
        <motion.div className="about-bg-circle" style={{ y }} />
      </div>

      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-label">
              <HiOutlineSparkles />
              About Me
            </span>
            <h2 className="section-title">Shipping Products End-to-End</h2>
            <p className="section-subtitle">
              I ship user-facing features from UI to APIs to deployment, with a
              focus on speed, reliability, and performance.
            </p>
          </motion.div>

          {/* Main content grid */}
          <div className="about-grid">
            {/* Left - About text */}
            <motion.div className="about-text-section" variants={itemVariants}>
              <div className="about-card glass-card">
                <h3 className="about-card-title">Hello! I'm Phanidhar</h3>
                <p className="about-text">
                  I'm a <strong>Full-Stack Software Engineer</strong> who ships
                  user-facing features with a strong focus on usability,
                  performance, and reliability.
                </p>

                <p className="about-text">
                  I've owned end-to-end delivery using{" "}
                  <strong>React, TypeScript, and Python</strong>, and deployed
                  services on <strong>AWS</strong>. I'm comfortable debugging,
                  writing tests, and iterating quickly based on user feedback.
                </p>

                {/* Tech stack marquee */}
                <div className="about-tech-stack">
                  <p className="about-tech-label">Technologies I work with:</p>
                  <div className="tech-marquee">
                    <motion.div
                      className="tech-marquee-track"
                      animate={{ x: [0, -1200] }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {[...technologies, ...technologies].map((tech, index) => (
                        <div
                          key={`${tech.name}-${index}`}
                          className="tech-item"
                        >
                          <tech.icon style={{ color: tech.color }} />
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Stats & highlights */}
            <motion.div className="about-stats-section" variants={itemVariants}>
              {/* Stats grid */}
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="stat-card glass-card"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <stat.icon className="stat-icon" />
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Education card */}
              <motion.div
                className="education-card glass-card"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="education-header">
                  <HiOutlineAcademicCap className="education-icon" />
                  <div>
                    <h4 className="education-degree">Master of Science</h4>
                    <p className="education-field">Computer Science</p>
                  </div>
                </div>
                <div className="education-details">
                  <p className="education-school">Miami University</p>
                  <p className="education-location">
                    Oxford, Ohio | Aug 2024 - May 2026
                  </p>
                  <div className="education-focus">
                    <span className="focus-tag">Generative AI</span>
                    <span className="focus-tag">Machine Learning</span>
                    <span className="focus-tag">
                      Software Quality & Testing
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Quick facts */}
              <motion.div
                className="facts-card glass-card"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="facts-title">Quick Facts</h4>
                <ul className="facts-list">
                  <li>🎯 Graduate Assistant at Miami University</li>
                  <li>👥 GSCA President (100+ members)</li>
                  <li>🧩 End-to-end ownership of production features</li>
                  <li>☁️ Deployed and maintained AWS services</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
