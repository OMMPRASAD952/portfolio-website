import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
  FaArrowRight,
  FaCode,
  FaGraduationCap,
  FaAward
} from "react-icons/fa";

import profile from "../assets/images/omm.jpeg";
import resume from "../assets/resume.pdf";

function Hero() {
  return (
    <section id="home" className="hero-section position-relative overflow-hidden">
      {/* Visual background elements */}
      <div className="hero-bg-glow hero-glow-1"></div>
      <div className="hero-bg-glow hero-glow-2"></div>
      <div className="hero-grid-pattern"></div>

      <div className="container position-relative z-1">
        <div className="row align-items-center min-vh-100 py-5">
          {/* LEFT SIDE CONTENT */}
          <div className="col-lg-7 text-center text-lg-start pt-5 pt-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill hero-badge mb-3"
            >
              <span className="hero-badge-dot"></span>
              <span className="hero-badge-text">👋 WELCOME TO MY PORTFOLIO</span>
            </motion.div>

            <motion.h1
              className="hero-main-title"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I'm <span className="hero-name-highlight">Omm Prasad Sahoo</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-subtitle-badge my-3"
            >
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "3rd-Year CSE Student",
                  2000,
                  "React & Django Developer",
                  2000,
                  "NCC Cadet Corporal",
                  2000,
                  "Python Programmer",
                  2000,
                ]}
                wrapper="div"
                speed={50}
                repeat={Infinity}
                className="hero-type-text"
              />
            </motion.div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Passionate 3rd-year Computer Science Core student at ITER SOA University. Specialized in constructing modern web applications with <strong>React</strong>, <strong>Django</strong>, <strong>REST APIs</strong>, and <strong>MySQL</strong>. Driven by clean code engineering and national service.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="hero-buttons-wrapper d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3 mt-4"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#projects" className="btn btn-primary-cyan d-inline-flex align-items-center gap-2">
                <span>View Projects</span>
                <FaArrowRight className="btn-icon" />
              </a>

              <a
                href={resume}
                download="Omm_Prasad_Sahoo_Resume.pdf"
                className="btn btn-outline-cyan d-inline-flex align-items-center gap-2"
              >
                <FaDownload />
                <span>Download Resume</span>
              </a>

              <a href="#contact" className="btn btn-ghost-cyan d-inline-flex align-items-center gap-2">
                <FaEnvelope />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Quick stats / Socials */}
            <motion.div
              className="hero-footer-info d-flex align-items-center justify-content-center justify-content-lg-start gap-4 mt-5 pt-3 border-top border-secondary border-opacity-25"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="d-flex align-items-center gap-3">
                <a
                  href="https://github.com/OMMPRASAD952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/omm-prasad-sahoo-934a45336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>

              <div className="vr bg-secondary opacity-25"></div>

              <div className="hero-mini-tag d-flex align-items-center gap-2">
                <FaGraduationCap className="text-cyan" />
                <span>ITER SOA University</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE PROFILE PHOTO */}
          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <motion.div
              className="hero-image-container position-relative d-inline-block"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Decorative Rotating Ring */}
              <div className="hero-photo-ring"></div>
              <div className="hero-photo-ring-pulse"></div>

              {/* Profile Image */}
              <div className="hero-avatar-frame">
                <img
                  src={profile}
                  alt="Omm Prasad Sahoo"
                  className="hero-avatar-img img-fluid"
                />
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                className="hero-floating-badge badge-react"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaCode className="me-1 text-cyan" /> React & Django
              </motion.div>

              <motion.div
                className="hero-floating-badge badge-ncc"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaAward className="me-1 text-cyan" /> NCC Corporal
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;