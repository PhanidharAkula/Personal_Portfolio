import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Skills.css";
import { containerVariants, itemVariants } from "../../utils/animations";
import { HiOutlineCpuChip } from "react-icons/hi2";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiOpenai,
  SiRedux,
  SiGraphql,
  SiFirebase,
  SiVercel,
  SiKubernetes,
  SiTensorflow,
  SiPytorch,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Full-Stack & Cloud",
      description:
        "Product engineering across frontend, backend, and deployment",
      color: "#fbbf24",
      skills: [
        { name: "React.js", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express", icon: SiExpress },
        { name: "FastAPI", icon: FaPython },
        { name: "AWS", icon: FaAws },
        { name: "Docker", icon: FaDocker },
        { name: "Git", icon: FaGitAlt },
        { name: "Vercel", icon: SiVercel },
        { name: "Figma", icon: FaFigma },
      ],
    },
    {
      title: "Languages",
      description: "Core programming languages",
      color: "#f59e0b",
      skills: [
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Python", icon: FaPython },
        { name: "Java", icon: FaJava },
        { name: "SQL", icon: SiPostgresql },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
      ],
    },
    {
      title: "Databases & Backend",
      description: "Data modeling, APIs, and backend services",
      color: "#eab308",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Firebase", icon: SiFirebase },
        { name: "GraphQL", icon: SiGraphql },
      ],
    },
    {
      title: "AI & LLM Integrations",
      description: "Embedding AI capabilities into real products",
      color: "#d97706",
      skills: [
        { name: "OpenAI / LLM APIs", icon: SiOpenai },
        { name: "Prompt Engineering", icon: SiOpenai },
        { name: "AI Feature Integration", icon: SiOpenai },
      ],
    },
  ];

  return (
    <section className="skills section" ref={containerRef}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-label">
              <HiOutlineCpuChip />
              Technical Skills
            </span>
            <h2 className="section-title">Tools & Technologies</h2>
            <p className="section-subtitle">
              A comprehensive overview of my technical expertise and the
              technologies I work with daily.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="skill-category glass-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="skill-category-header">
                  <div
                    className="skill-category-indicator"
                    style={{ background: category.color }}
                  />
                  <div>
                    <h3 className="skill-category-title">{category.title}</h3>
                    <p className="skill-category-desc">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="skill-chips">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-chip"
                      style={{ "--chip-color": category.color }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <skill.icon className="skill-chip-icon" />
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional skills tags */}
          <motion.div className="skills-tags" variants={itemVariants}>
            <p className="skills-tags-label">Also experienced with:</p>
            <div className="skills-tags-list">
              {[
                "REST APIs",
                "OAuth",
                "JWT",
                "CI/CD",
                "Unit & Integration Testing",
                "Code Reviews",
                "Performance Optimization",
                "System Design",
                "Observability (Logs & Metrics)",
                "Caching",
                "Async Workflows",
                "SLURM (HPC)",
                "OSC Supercomputing",
                "PostGIS",
                "Reproducible Experiments",
              ].map((tag, index) => (
                <motion.span
                  key={index}
                  className="skill-tag"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
