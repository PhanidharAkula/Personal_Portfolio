import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Contact.css";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineDocumentArrowDown,
  HiOutlineClipboard,
  HiOutlineCheck,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const email = "phanidharakula@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/phanidharakula",
      color: "#0A66C2",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/phanidharakula",
      color: "#ffffff",
    },
    {
      name: "LeetCode",
      icon: SiLeetcode,
      href: "https://leetcode.com/u/PhanidharAkula/",
      color: "#FFA116",
    },
    {
      name: "Twitter",
      icon: FaXTwitter,
      href: "https://twitter.com",
      color: "#ffffff",
    },
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
    <section className="contact section" ref={containerRef}>
      {/* Background decoration */}
      <div className="contact-bg-decoration" aria-hidden="true">
        <div className="contact-bg-gradient" />
      </div>

      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-label">
              <HiOutlineEnvelope />
              Get In Touch
            </span>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle">
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="contact-grid">
            {/* Main CTA Card */}
            <motion.div
              className="contact-main glass-card"
              variants={itemVariants}
            >
              <div className="contact-main-content">
                <h3 className="contact-heading">
                  Ready to start something amazing?
                </h3>
                <p className="contact-text">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Let's create
                  something extraordinary together.
                </p>

                {/* Email */}
                <div className="contact-email-wrapper">
                  <a
                    href={`mailto:${email}`}
                    className="contact-email"
                    data-cursor="pointer"
                  >
                    {email}
                  </a>
                  <motion.button
                    className="copy-btn"
                    onClick={handleCopyEmail}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor="pointer"
                  >
                    {copied ? (
                      <>
                        <HiOutlineCheck />
                        Copied!
                      </>
                    ) : (
                      <>
                        <HiOutlineClipboard />
                        Copy
                      </>
                    )}
                  </motion.button>
                </div>

                {/* CTA Buttons */}
                <div className="contact-cta">
                  <motion.a
                    href={`mailto:${email}`}
                    className="btn btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor="pointer"
                  >
                    <HiOutlineEnvelope size={20} />
                    Send Email
                  </motion.a>
                  <motion.a
                    href="/resume.pdf"
                    download="Phanidhar_Akula_Resume.pdf"
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor="pointer"
                  >
                    <HiOutlineDocumentArrowDown size={20} />
                    Download CV
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Info Cards */}
            <div className="contact-info-grid">
              {/* Location Card */}
              <motion.div
                className="contact-info-card glass-card"
                variants={itemVariants}
              >
                <HiOutlineMapPin className="contact-info-icon" />
                <h4 className="contact-info-title">Location</h4>
                <p className="contact-info-text">Oxford, Ohio</p>
                <p className="contact-info-subtext">
                  Open to remote opportunities
                </p>
              </motion.div>

              {/* Social Links Card */}
              <motion.div
                className="contact-social-card glass-card"
                variants={itemVariants}
              >
                <h4 className="contact-social-title">Connect With Me</h4>
                <div className="contact-social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      style={{ "--hover-color": social.color }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      data-cursor="pointer"
                      aria-label={social.name}
                    >
                      <social.icon size={20} />
                      <span className="social-name">{social.name}</span>
                      <HiOutlineArrowUpRight className="social-arrow" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer */}
          <motion.div className="contact-footer" variants={itemVariants}>
            <p className="footer-text">
              Designed & Built by{" "}
              <span className="text-gradient">Phanidhar Akula</span>
            </p>
            <p className="footer-year">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
