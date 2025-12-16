import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Experience.css";
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
      title: "Graduate Assistant",
      company: "Miami University – Department of CS & SE",
      location: "Oxford, OH",
      period: "Aug 2025 - Present",
      description: [
        "Lead AI-based geospatial research on digital cities using OSC and build reproducible HPC benchmarks",
        "Serve as GCSP Assistant: advise 10+ scholars, and support student research pathways",
        "Manage operations: run social media (3K followers, 2K reach), coordinate annual meetings and events",
      ],
      technologies: ["Python", "MPI", "OpenMP", "SLURM", "HPC", "PostGIS"],
      color: "#6366f1",
      current: true,
    },
    {
      title: "President",
      company: "Graduate Students of Color Association (GSCA)",
      location: "Oxford, OH",
      period: "Aug 2025 - Present",
      description: [
        "Lead a graduate organization of 100+ students, advancing diversity, equity, and inclusion across campus",
        "Organize 5+ campus-wide events with 80+ attendees, strengthening GSCA's reputation and reach",
        "Secure alumni and departmental partnerships, boosting visibility by 45% and expanding sponsorships",
      ],
      technologies: ["Leadership", "Event Management", "Community Building"],
      color: "#a855f7",
      current: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

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
