import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Experience.css";
import { containerVariants } from "../../utils/animations";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineMapPin,
} from "react-icons/hi2";

const Experience = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Graduate Assistant (Software Engineering)",
      company: "Miami University - Department of CS & SE",
      location: "Oxford, OH",
      period: "Aug 2024 - Present",
      description: [
        "Built and maintained internal web features used by students and faculty, translating workflows into UI + backend logic",
        "Developed React + TypeScript interfaces backed by Python services with focus on performance, clean API boundaries, and usability",
        "Improved responsiveness and reduced unnecessary API calls by restructuring client-side state management and request patterns",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Python",
        "PostgreSQL",
        "Performance",
      ],
      color: "#ea580c",
      current: true,
    },
    {
      title: "President",
      company: "Graduate Students of Color Association (GSCA)",
      location: "Oxford, OH",
      period: "Aug 2025 - Present",
      description: [
        "Led a 100+ member organization and coordinated cross-functional planning with university partners and stakeholders",
        "Organized multiple campus-wide events and managed communications, timelines, and execution with consistent delivery",
      ],
      technologies: ["Leadership", "Stakeholder Mgmt", "Execution"],
      color: "#f97316",
      current: true,
    },

    {
      title: "Software Engineering Intern",
      company: "Pathfinders Overseas Educations",
      location: "Hyderabad, India",
      period: "May 2025 - Aug 2025",
      description: [
        "Shipped production features across frontend and backend in an agile environment with code reviews and fast iteration",
        "Implemented REST APIs and user-facing components to support core workflows, improving correctness and maintainability",
        "Debugged issues across services and extended an existing codebase, contributing fixes that were reviewed and merged",
      ],
      technologies: ["React", "TypeScript", "Python", "REST APIs", "Git"],
      color: "#d97706",
      current: false,
    },
    {
      title: "Freelance Software Engineer",
      company: "Independent",
      location: "Oxford, OH",
      period: "Aug 2023 - Aug 2024",
      description: [
        "Designed and delivered a production payment gateway system end-to-end (API design, validations, persistence, error handling)",
        "Deployed cloud services on AWS and implemented MySQL-backed transaction workflows with reliability and audit-friendly logging",
        "Owned delivery from requirements to production support, balancing security, performance, and maintainability under real deadlines",
      ],
      technologies: [
        "AWS",
        "MySQL",
        "REST APIs",
        "Node.js/TypeScript",
        "Testing",
      ],
      color: "#d97706",
      current: false,
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="experience section" ref={containerRef}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-label">
              <HiOutlineBriefcase />
              Career Journey
            </span>
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">
              A timeline of my professional journey and the impact I've made
              along the way.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
              >
                {/* Timeline connector */}
                <div className="timeline-connector">
                  <motion.div
                    className="timeline-dot"
                    style={{
                      background: exp.current
                        ? exp.color
                        : "var(--bg-tertiary)",
                      boxShadow: exp.current
                        ? `0 0 20px ${exp.color}40`
                        : "none",
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {exp.current && (
                      <span
                        className="timeline-dot-pulse"
                        style={{ background: exp.color }}
                      />
                    )}
                  </motion.div>
                  {index < experiences.length - 1 && (
                    <div className="timeline-line" />
                  )}
                </div>

                {/* Content */}
                <motion.div
                  className="timeline-content glass-card"
                  whileHover={{ y: -4, x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Header */}
                  <div className="timeline-header">
                    <div className="timeline-title-group">
                      <h3 className="timeline-title">{exp.title}</h3>
                      <p
                        className="timeline-company"
                        style={{ color: exp.color }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <span
                        className="current-badge"
                        style={{ background: exp.color }}
                      >
                        Current
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="timeline-meta">
                    <span className="timeline-meta-item">
                      <HiOutlineCalendar />
                      {exp.period}
                    </span>
                    <span className="timeline-meta-item">
                      <HiOutlineMapPin />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="timeline-description">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="timeline-tech">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="timeline-tech-tag"
                        style={{
                          borderColor: `${exp.color}40`,
                          color: exp.color,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
