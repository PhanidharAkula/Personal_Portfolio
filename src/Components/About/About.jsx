import { useState, useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./About.css";
import Lottie from "lottie-react";
import Coding from "../Assets/Coding.json";
import Design from "../Assets/Design.json";
import ChatBot from "../Assets/ChatBot.json";
// import City from "../Assets/City.json";
import SmartCity from "../Assets/SmartCity.json";
import miamiLight from "../Images/Miami University.png";
import miamiDark from "../Images/Miami_University_white_thinner.png";

import { ThemeContext } from "../../Context/ThemeContext";

const professions = [
  "Software Developer",
  "Full Stack Developer & Designer",
  "Generative AI Specialist",
  "Automation & Workflow Engineer",
  "High Performance Computing Enthusiast",
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const nameVariants = {
    hidden: { opacity: 0, rotateX: 90, scale: 0.8 },
    visible: {
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const textRevealVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  };

  const bounceVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        delay: 0.8,
      },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const featureCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.8 + i * 0.2,
      },
    }),
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStartTyping(true);
    }, 800);

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    const typingTimeout = setTimeout(() => {
      if (isDeleting) {
        setText((prevText) => prevText.substring(0, prevText.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % professions.length);
        }
      } else {
        setText(professions[currentIndex].substring(0, text.length + 1));
        if (text === professions[currentIndex]) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    }, 30);

    return () => clearTimeout(typingTimeout);
  }, [text, currentIndex, isDeleting, startTyping]);

  const { theme } = useContext(ThemeContext); // "light" or "dark"

  return (
    <>
      <motion.div
        className="about"
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="heroLeftTextBox"
          custom={0}
          variants={nameVariants}
        >
          <p className="heroSubText">Hello, it's</p>
          <motion.div className="heroNameContent" variants={nameVariants}>
            <p className="heroTextTop">Phanidhar Akula</p>
            <p className="heroText">Phanidhar Akula</p>
          </motion.div>
          <p className="heroSubText">
            I'm a <span className="animatedHeroSubText">{text}</span>
          </p>
        </motion.div>

        <motion.p
          className="heroStatsContainer"
          custom={1}
          variants={textRevealVariants}
        >
          <div className="welcome-features">
            {[
              {
                animation: Coding,
                title: "10+ Full-Stack Projects",
                description:
                  "Developed web applications using React, Node.js, and MongoDB. And more",
              },
              {
                animation: Design,
                title: "4+ Years in Design & Development",
                description:
                  "Skilled in UI/UX design, prototyping, and front-end development.",
              },
              {
                animation: ChatBot,
                title: "Generative AI Systems Built",
                description:
                  "Created AI-driven chatbots and content generation tools.",
              },
              {
                animation: SmartCity,
                title: "HPC Simulations & Research",
                description:
                  "Conducted simulations using MPI and CUDA for performance optimization.",
              },
            ].map((feature, i) => (
              <motion.div
                className="feature-card"
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={featureCardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="feature-icon">
                  <Lottie
                    style={{ height: 200 }}
                    animationData={feature.animation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <motion.p
                  className="feature-name"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 1.0 + i * 0.2 },
                  }}
                >
                  {feature.title}
                </motion.p>
                <motion.p
                  className="feature-description"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 1.2 + i * 0.2 },
                  }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.p>

        <motion.div
          className="universityContainer"
          custom={2}
          variants={bounceVariants}
        >
          {/* <motion.img
            className="universityLogo"
            src={theme === "dark" ? miamiImageDark : miamiImageLight}
            alt="University Logo"
          /> */}
          <motion.img
            key={theme}
            className="universityLogo"
            src={theme === "dark" ? miamiDark : miamiLight}
            alt="University Logo"
            // style={{
            //   display: "block",
            //   border: "none",
            //   outline: "none",
            //   boxShadow: "none",
            // }}
          />
          <p className="universityName">Miami University</p>
          <p className="universityDiscription">
            Master of Science in Computer Science
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
