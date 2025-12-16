import React, { useRef, useState } from "react";
import "./Playground.css";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  HiOutlineRocketLaunch,
  HiOutlineArrowUpRight,
  HiOutlineFolderOpen,
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiOpenai,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "LumiAI",
    subtitle: "AI-Powered Educational Platform",
    description:
      "An intelligent study assistant that leverages AI to help students learn more effectively. Features include smart summaries, Q&A, document analysis, and personalized learning paths.",
    image: "/api/placeholder/800/500",
    tags: ["Next.js", "OpenAI", "MongoDB", "TypeScript"],
    icons: [SiNextdotjs, SiOpenai, SiMongodb, SiTypescript],
    liveUrl: "https://studywithlumi.com",
    githubUrl: "https://github.com/phanidharakula",
    color: "#6366f1",
    featured: true,
  },
  {
    id: 2,
    title: "Pathfinders Portal",
    subtitle: "Overseas Education Consultancy",
    description:
      "A comprehensive web platform for an overseas education consultancy, providing students with information, services, and application tracking for studying abroad.",
    image: "/api/placeholder/800/500",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    icons: [SiReact, SiNodedotjs, SiMongodb],
    liveUrl: "https://app.pathfindersoverseas.com",
    githubUrl: "https://github.com/phanidharakula",
    color: "#a855f7",
    featured: true,
  },
  {
    id: 3,
    title: "Pathfinders CRM",
    subtitle: "Customer Relationship Management",
    description:
      "A full-featured CRM portal for managing client relationships, tracking applications, and streamlining overseas education consultation services.",
    image: "/api/placeholder/800/500",
    tags: ["React", "Firebase", "Tailwind", "Node.js"],
    icons: [SiReact, SiFirebase, SiTailwindcss, SiNodedotjs],
    liveUrl: null,
    githubUrl: "https://github.com/phanidharakula",
    color: "#ec4899",
    featured: false,
  },
  {
    id: 4,
    title: "Spetech E-Commerce",
    subtitle: "Sustainable Tech Marketplace",
    description:
      "An e-commerce platform for a tech startup specializing in sustainable and eco-friendly products, featuring modern UI and seamless checkout experience.",
    image: "/api/placeholder/800/500",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [SiReact, SiNodedotjs, SiMongodb],
    liveUrl: null,
    githubUrl: "https://github.com/AkulaPhanidhar/Spetech-E-commerce.git",
    color: "#06b6d4",
    featured: false,
  },
];

const Playground = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : activeFilter === "featured"
      ? projects.filter((p) => p.featured)
      : projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
        damping: 15,
      },
    },
  };

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

          {/* Filter Tabs */}
          <motion.div className="project-filters" variants={itemVariants}>
            {["all", "featured"].map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === "all" ? "All Projects" : "Featured"}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="projects-grid">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`project-card glass-card ${
                    project.featured ? "featured" : ""
                  }`}
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
                  {/* Project Image */}
                  <div className="project-image-container">
                    <div
                      className="project-image-placeholder"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                      }}
                    >
                      <HiOutlineFolderOpen
                        className="project-placeholder-icon"
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
