import React, { useRef } from "react";
import "./Playground.css";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/animations";
import { HiOutlineRocketLaunch, HiOutlineArrowUpRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import {
  SiPython,
  SiOpenai,
  SiNextdotjs,
  SiTypescript,
  SiAmazonwebservices,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiReact,
  SiNodedotjs,
  SiGraphql,
  SiDocker,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    featured: true,
    title: "LumiAI",
    subtitle: "AI-Powered Educational Platform",
    description:
      "Built and shipped a full-stack learning platform with LLM-powered chat, authentication, and persistent user sessions. Own the Next.js + TypeScript frontend and Python backend, deployed on AWS with production iteration based on real users.",
    tags: ["Next.js", "TypeScript", "Python", "AWS", "LLM APIs"],
    icons: [SiNextdotjs, SiTypescript, SiPython, SiAmazonwebservices, SiOpenai],
    liveUrl: "https://studywithlumi.com",
    githubUrl: "https://github.com/phanidharakula/lumiai", // change to real repo or set null
    color: "var(--accent-primary)", // Updated to use consistent theme color
    privateRepo: false, // Added privateRepo flag
  },
  {
    id: 2,
    featured: true,
    title: "Payment Gateway System",
    subtitle: "Production Payments + MySQL + AWS",
    description:
      "Designed and delivered a production payment flow end-to-end: request validation, secure API integration, database persistence, and operational reliability. Deployed and maintained AWS-hosted services with MySQL storage under real client constraints.",
    tags: ["Node.js", "TypeScript", "MySQL", "AWS", "REST APIs"],
    icons: [SiNodedotjs, SiTypescript, SiMysql, SiAmazonwebservices],
    liveUrl: null,
    githubUrl: null, // keep null if private; don’t pretend it’s public
    color: "var(--accent-primary)", // Updated to use consistent theme color
    privateRepo: true, // Added privateRepo flag
  },
  {
    id: 3,
    featured: false,
    title: "Workflow Optimization Tool",
    subtitle: "React + TypeScript + Python APIs",
    description:
      "Built a full-stack internal tool that streamlined multi-step workflows into a clean UI with predictable backend contracts. Focused on reducing friction, improving clarity, and speeding up task completion through iterative UX changes.",
    tags: ["React", "TypeScript", "Python", "REST APIs"],
    icons: [SiReact, SiTypescript, SiPython],
    liveUrl: null,
    githubUrl: "https://github.com/phanidharakula/workflow-tool", // change to real repo or null
    color: "var(--accent-primary)", // Fixed missing color value
    privateRepo: true, // Added privateRepo flag
  },
  // {
  //   id: 4,
  //   featured: false,
  //   title: "Chat + Document Context System",
  //   subtitle: "Conversation Persistence + Tagging",
  //   description:
  //     "Implemented a chat UI with conversation persistence, document selection, and context tagging backed by a database. Focused on clean state management, debugging UX edge cases, and building features that support real usage patterns.",
  //   tags: ["React", "TypeScript", "Supabase", "State Management"],
  //   icons: [SiReact, SiTypescript, SiSupabase],
  //   liveUrl: null,
  //   githubUrl: "https://github.com/phanidharakula/chat-component", // change to real repo or null
  //   color: "var(--accent-primary)", // Updated to use consistent theme color
  //   privateRepo: true, // Added privateRepo flag
  // },
  {
    id: 5,
    featured: false,
    title: "SimForge",
    subtitle: "Reproducible Benchmark Framework (Thesis)",
    description:
      "Building a reproducible framework to run the same scenario across multiple traffic simulators. Developing canonical schemas, adapters, validation, and automated execution workflows to enable consistent comparison of outputs and runtime behavior.",
    tags: ["Python", "Reproducibility", "Adapters", "Validation", "Automation"],
    icons: [SiPython, SiDocker],
    liveUrl: null,
    githubUrl: "https://github.com/phanidharakula/simforge", // change to real repo or null
    color: "var(--accent-primary)", // Updated to use consistent theme color
    privateRepo: true, // Added privateRepo flag
  },
];

const Playground = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="playground section" ref={containerRef}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-label">
              <HiOutlineRocketLaunch />
              Featured Work
            </span>
            <h2 className="section-title">Projects & Creations</h2>
            <p className="section-subtitle">
              A collection of projects that showcase my expertise in building
              modern, scalable applications.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="projects-grid">
            <AnimatePresence mode="wait">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card glass-card featured"
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Project Visual */}
                  <div className="project-image-container">
                    <div
                      className="project-visual"
                      style={{ "--project-color": project.color }}
                    >
                      <div className="project-links">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            data-cursor="pointer"
                          >
                            <HiOutlineArrowUpRight size={20} />
                            <span>Live Demo</span>
                          </motion.a>
                        )}
                        {!project.privateRepo && project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            data-cursor="pointer"
                          >
                            <FaGithub size={18} />
                            <span>Code</span>
                          </motion.a>
                        )}
                        {project.privateRepo && (
                          <span className="project-link-private">Private</span>
                        )}
                      </div>
                    </div>
                    {project.featured && (
                      <span className="featured-badge">Featured</span>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                    </div>

                    <p className="project-description">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="project-tech">
                      <div className="tech-icons">
                        {project.icons.map((Icon, idx) => (
                          <Icon
                            key={idx}
                            className="tech-icon"
                            style={{ color: project.color }}
                          />
                        ))}
                      </div>
                      <div className="tech-tags">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="tech-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* View More Button */}
          <motion.div className="projects-cta" variants={itemVariants}>
            <motion.a
              href="https://github.com/phanidharakula"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-cursor="pointer"
            >
              <FaGithub size={20} />
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Playground;
