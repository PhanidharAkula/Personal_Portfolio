import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Testimonials.css";
import { containerVariants, itemVariants } from "../../utils/animations";
import { HiOutlineChatBubbleLeftRight, HiOutlineStar } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa6";

const Testimonials = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: 1,
      name: "Dr. DJ Rao",
      role: "Associate Professor",
      organization: "Miami University",
      content:
        "Phanidhar approaches complex technical problems methodically and with strong attention to detail. In our research work, he consistently translated abstract ideas into working, reproducible systems and demonstrated solid judgment when reasoning about performance and design trade-offs.",
      linkedIn: "https://www.linkedin.com/in/dj-rao/",
      rating: 5,
    },
    {
      id: 2,
      name: "Rakesh Reddy",
      role: "Founder & CEO",
      organization: "Pathfinders Overseas Educations",
      content:
        "Phanidhar was reliable in delivering production-ready features across both frontend and backend. He communicated clearly, adapted quickly to feedback, and wrote code that was easy for the team to maintain and build on.",
      linkedIn:
        "https://www.linkedin.com/in/rakesh-reddy-saradigari-1b7ba921b/",
      rating: 5,
    },
  ];

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section className="testimonials section" ref={containerRef}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-label">
              <HiOutlineChatBubbleLeftRight />
              Testimonials
            </span>
            <h2 className="section-title">What People Say</h2>
            <p className="section-subtitle">
              Feedback from professors, colleagues, and collaborators I've had
              the pleasure of working with.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card glass-card"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Quote decoration */}
                <div className="testimonial-quote-icon" aria-hidden="true">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>

                {/* Rating */}
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiOutlineStar key={i} className="star-icon filled" />
                  ))}
                </div>

                {/* Content */}
                <p className="testimonial-content">"{testimonial.content}"</p>

                {/* Author */}
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        loading="lazy"
                      />
                    ) : (
                      <span className="avatar-initials">
                        {getInitials(testimonial.name)}
                      </span>
                    )}
                  </div>
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">
                      {testimonial.name}
                      {testimonial.linkedIn && (
                        <a
                          href={testimonial.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="linkedin-link"
                          aria-label={`${testimonial.name}'s LinkedIn`}
                        >
                          <FaLinkedinIn />
                        </a>
                      )}
                    </h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                    <p className="testimonial-org">
                      {testimonial.organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
