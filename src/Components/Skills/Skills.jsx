import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Skills.css";
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
      title: "Languages",
      description: "Core programming languages I work with",
      color: "#6366f1",
      skills: [
        { name: "Python", icon: FaPython, level: 95 },
        { name: "JavaScript", icon: SiJavascript, level: 92 },
        { name: "TypeScript", icon: SiTypescript, level: 88 },
        { name: "Java", icon: FaJava, level: 85 },
        { name: "SQL", icon: SiPostgresql, level: 88 },
        { name: "HTML", icon: FaHtml5, level: 95 },
        { name: "CSS", icon: FaCss3Alt, level: 92 },
      ],
    },
    {
      title: "AI & Data",
      description: "Generative AI, Deep Learning & Data Science",
      color: "#a855f7",
      skills: [
        { name: "Generative AI", icon: SiOpenai, level: 92 },
        { name: "LLMs/NLP", icon: SiOpenai, level: 90 },
        { name: "TensorFlow", icon: SiTensorflow, level: 82 },
        { name: "PyTorch", icon: SiPytorch, level: 80 },
        { name: "Deep Learning", icon: SiTensorflow, level: 85 },
        { name: "Machine Learning", icon: FaPython, level: 88 },
      ],
    },
    {
      title: "HPC & Research",
      description: "High Performance Computing & Research Tools",
      color: "#ec4899",
      skills: [
        { name: "MPI", icon: FaPython, level: 88 },
        { name: "OpenMP", icon: FaPython, level: 85 },
        { name: "SLURM", icon: FaPython, level: 82 },
        { name: "OSC HPC", icon: FaPython, level: 88 },
        { name: "PostGIS", icon: SiPostgresql, level: 78 },
      ],
    },
    {
      title: "Full-Stack & Cloud",
      description: "Web development and cloud infrastructure",
      color: "#06b6d4",
      skills: [
        { name: "React.js", icon: FaReact, level: 92 },
        { name: "Next.js", icon: SiNextdotjs, level: 88 },
        { name: "Node.js", icon: FaNodeJs, level: 90 },
        { name: "FastAPI", icon: FaPython, level: 85 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 88 },
        { name: "MongoDB", icon: SiMongodb, level: 86 },
        { name: "AWS", icon: FaAws, level: 82 },
        { name: "Docker", icon: FaDocker, level: 80 },
        { name: "Git", icon: FaGitAlt, level: 95 },
        { name: "Tailwind", icon: SiTailwindcss, level: 90 },
        { name: "Figma", icon: FaFigma, level: 85 },
      ],
    },
  ];

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

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5,
      },
    }),
  };

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

                <div className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <skill.icon
                          className="skill-icon"
                          style={{ color: category.color }}
                        />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-bar-container">
                        <motion.div
                          className="skill-bar"
                          style={{ background: category.color }}
                          custom={skill.level}
                          variants={skillBarVariants}
                        />
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
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
                "WebSockets",
                "OAuth",
                "JWT",
                "MVC",
                "Agile/Scrum",
                "CI/CD",
                "Testing",
                "Responsive Design",
                "SEO",
                "Performance Optimization",
                "System Design",
                "Data Structures",
                "Algorithms",
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
