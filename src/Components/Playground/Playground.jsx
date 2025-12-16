import React, { useRef, useState } from "react";
import "./Playground.css";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/animations";
import {
  HiOutlineRocketLaunch,
  HiOutlineArrowUpRight,
  HiOutlineFolder,
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import {
  SiPython,
  SiMongodb,
  SiOpenai,
  SiNextdotjs,
  SiTypescript,
  SiAmazonwebservices,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "LumiAI",
    subtitle: "AI-Powered Educational Platform",
    description:
      "An AI-powered learning assistant integrating LLM reasoning, TTS/STT, and a scalable AWS backend. Features authentication, chat persistence, and contextual tagging. Live with 50+ beta users.",
    tags: ["Next.js", "OpenAI", "AWS", "TypeScript"],
    icons: [SiNextdotjs, SiOpenai, SiAmazonwebservices, SiTypescript],
    liveUrl: "https://studywithlumi.com",
    githubUrl: "https://github.com/phanidharakula",
    color: "#f59e0b",
  },
  {
    id: 2,
    title: "SimForge",
    subtitle: "HPC Thesis Research",
    description:
      "A reproducible cross-simulator benchmark for urban commute simulations at scale. Deployed on Ohio Supercomputer Center (OSC) with MPI + OpenMP parallelization. Scales to 100k+ agents with 40% runtime reduction.",
    tags: ["Python", "MPI", "OpenMP", "SLURM", "HPC"],
    icons: [SiPython, SiMongodb],
    liveUrl: null,
    githubUrl: "https://github.com/phanidharakula",
    color: "#d97706",
  },
];

const Playground = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState(null);

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
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Visual */}
                  <div className="project-image-container">
                    <div
                      className="project-visual"
                      style={{ "--project-color": project.color }}
                    >
                      <HiOutlineFolder
                        className="project-folder-icon"
                        style={{ color: project.color }}
                      />
                    </div>
                    <motion.div
                      className="project-image-overlay"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="project-links">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            data-cursor="pointer"
                          >
                            <HiOutlineArrowUpRight size={20} />
                            <span>Live Demo</span>
                          </motion.a>
                        )}
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn secondary"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          data-cursor="pointer"
                        >
                          <FaGithub size={18} />
                          <span>Code</span>
                        </motion.a>
                      </div>
                    </motion.div>
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
