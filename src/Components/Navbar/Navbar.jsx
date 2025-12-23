import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = ({
  activeSection,
  scrollToHome,
  scrollToAbout,
  scrollToSkills,
  scrollToPlayground,
  scrollToExperience,
  scrollToTestimonials,
  scrollToContact,
  toggleTheme,
  isDark,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { name: "Home", action: scrollToHome, id: "home" },
      { name: "About", action: scrollToAbout, id: "about" },
      { name: "Skills", action: scrollToSkills, id: "skills" },
      { name: "Projects", action: scrollToPlayground, id: "projects" },
      { name: "Experience", action: scrollToExperience, id: "experience" },
      { name: "Testimonials", action: scrollToTestimonials, id: "testimonials" },
      { name: "Contact", action: scrollToContact, id: "contact" },
    ],
    [
      scrollToHome,
      scrollToAbout,
      scrollToSkills,
      scrollToPlayground,
      scrollToExperience,
      scrollToTestimonials,
      scrollToContact,
    ]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Close mobile menu on scroll to prevent re-animation issues
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const handleNavClick = (action) => {
    action?.();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="nav-container">
          {/* Logo */}
          <motion.a
            href="#"
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToHome?.();
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-text">PA</span>
            <span className="logo-dot" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                className={`nav-link ${activeSection === link.name ? "active" : ""
                  }`}
                onClick={() => handleNavClick(link.action)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    className="nav-indicator"
                    layoutId="navIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right side controls */}
          <div className="nav-controls">
            {/* Theme Toggle */}
            <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.svg
                    key="sun"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="moon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}>
                <span />
                <span />
                <span />
              </span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mobile-menu-links">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  className={`mobile-nav-link ${activeSection === link.name ? "active" : ""
                    }`}
                  onClick={() => handleNavClick(link.action)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="mobile-link-number">0{index + 1}</span>
                  <span className="mobile-link-text">{link.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
