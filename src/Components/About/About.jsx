import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import "./About.css";
import {
  HiOutlineAcademicCap,
  HiOutlineMapPin,
  HiOutlineCodeBracket,
  HiOutlineSparkles,
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
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
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
    { value: "4+", label: "Years Experience", icon: HiOutlineCodeBracket },
    { value: "15+", label: "Projects Completed", icon: HiOutlineSparkles },
    { value: "MS", label: "Computer Science", icon: HiOutlineAcademicCap },
    { value: "USA", label: "Based In", icon: HiOutlineMapPin },
  ];

  const technologies = [
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { icon: FaPython, name: "Python", color: "#3776AB" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
    { icon: FaAws, name: "AWS", color: "#FF9900" },
    { icon: FaDocker, name: "Docker", color: "#2496ED" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiOpenai, name: "OpenAI", color: "#00A67E" },
    { icon: FaGitAlt, name: "Git", color: "#F05032" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

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
            <h2 className="section-title">Turning Ideas Into Reality</h2>
            <p className="section-subtitle">
              A passionate developer who loves building innovative solutions and
              creating exceptional user experiences.
            </p>
          </motion.div>

          {/* Main content grid */}
          <div className="about-grid">
            {/* Left - About text */}
            <motion.div className="about-text-section" variants={itemVariants}>
              <div className="about-card glass-card">
                <h3 className="about-card-title">Hello! I'm Phanidhar</h3>
                <p className="about-text">
                  I'm a <strong>Software Developer</strong> with a passion for
                  creating elegant, efficient, and user-centric digital
                  solutions. Currently pursuing my Master's degree in Computer
                  Science at <strong>Miami University</strong>, I specialize in
                  full-stack development, AI/ML integration, and building
                  scalable systems.
                </p>
                <p className="about-text">
                  My journey in tech began with a fascination for how software
                  can transform ideas into impactful solutions. Today, I channel
                  that passion into building applications that not only work
                  flawlessly but also provide delightful user experiences.
                </p>
                <p className="about-text">
                  When I'm not coding, you'll find me exploring the latest in AI
                  technologies, contributing to open-source projects, or solving
                  algorithmic challenges on LeetCode.
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
                        <div key={index} className="tech-item">
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
                  <p className="education-location">Oxford, Ohio</p>
                  <div className="education-focus">
                    <span className="focus-tag">
                      High Performance Computing
                    </span>
                    <span className="focus-tag">AI & Machine Learning</span>
                    <span className="focus-tag">Software Engineering</span>
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
                  <li>🎯 Focused on clean, maintainable code</li>
                  <li>🚀 Passionate about performance optimization</li>
                  <li>🤖 Exploring AI-powered applications</li>
                  <li>📚 Continuous learner & tech enthusiast</li>
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
