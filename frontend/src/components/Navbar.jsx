import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaCode } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Education", href: "/#education" },
    { name: "Projects", href: "/#projects" },
   
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/" onClick={closeMenu}>
          <div className="brand-icon">
            <FaCode />
          </div>
          <span className="brand-text">
            OMM <span className="brand-highlight">PRASAD</span>
          </span>
        </Link>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nav items */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <a
                  className="nav-link custom-nav-link"
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="nav-social-wrapper ms-lg-4 d-flex align-items-center gap-3">
            <a
              href="https://github.com/OMMPRASAD952"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-icon"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/omm-prasad-sahoo-934a45336"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-icon"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;