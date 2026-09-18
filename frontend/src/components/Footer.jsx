import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp, FaHeart, FaCode } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="custom-footer position-relative">
      <div className="footer-gradient-border"></div>

      <div className="container py-5">
        <div className="row align-items-center g-4">
          {/* Left Brand */}
          <div className="col-lg-5 text-center text-lg-start">
            <div className="d-inline-flex align-items-center gap-2 mb-2">
              <FaCode className="text-cyan fs-4" />
              <h3 className="h4 text-white fw-bold mb-0">Omm Prasad Sahoo</h3>
            </div>
            <p className="small text-slate-400 mb-0">
              3rd-Year B.Tech Computer Science Core Student @ ITER SOA University.<br />
              Full-Stack Developer • React • Django • Python • NCC Corporal.
            </p>
          </div>

          {/* Center Links */}
          <div className="col-lg-4 text-center">
            <ul className="footer-nav-list d-flex flex-wrap justify-content-center gap-3 list-unstyled mb-0 small">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#experience" className="footer-link">Experience</a></li>
              <li><a href="#education" className="footer-link">Education</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#Nccjourney" className="footer-link">NCC</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Right Social & Top Action */}
          <div className="col-lg-3 text-center text-lg-end">
            <div className="d-inline-flex align-items-center gap-2">
              <a
                href="https://github.com/OMMPRASAD952"
                target="_blank"
                rel="noreferrer"
                className="footer-icon-btn"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/omm-prasad-sahoo-934a45336"
                target="_blank"
                rel="noreferrer"
                className="footer-icon-btn"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <button
                onClick={scrollToTop}
                className="footer-icon-btn footer-top-btn"
                aria-label="Scroll to top"
                title="Back to Top"
              >
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>

        <hr className="my-4 border-secondary border-opacity-25" />

        <div className="text-center small text-slate-400">
          <p className="mb-0">
            © {new Date().getFullYear()} Omm Prasad Sahoo. All rights reserved. Designed & Engineered with{" "}
            <FaHeart className="text-cyan mx-1" /> using React & Django.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
