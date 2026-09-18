import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaSpinner,
  FaLayerGroup
} from "react-icons/fa";

const fallbackProjects = [
  {
    id: 101,
    title: "AgriConnect — Smart Farmer Portal",
    description:
      "Full-stack agriculture platform built to assist local farmers with crop advisory, real-time market prices, and direct equipment rental scheduling.",
    technology: "React, Django, Python, REST APIs, MySQL, Bootstrap",
    github: "https://github.com/OMMPRASAD952",
    live_demo: "",
    image: null,
  },
  {
    id: 102,
    title: "Developer Portfolio Platform",
    description:
      "Modern recruiter-focused web app showcasing B.Tech CSE projects, virtual internships, NCC cadet journey, certifications, and Django API contact system.",
    technology: "React 19, Vite, Django, Framer Motion, Bootstrap 5",
    github: "https://github.com/OMMPRASAD952",
    live_demo: "",
    image: null,
  },
  {
    id: 103,
    title: "Academic Management & NCC Portal",
    description:
      "Web application designed to catalog academic records, student achievements, certificates, and National Cadet Corps training camp history.",
    technology: "React, JavaScript, Python, REST APIs, MySQL",
    github: "https://github.com/OMMPRASAD952",
    live_demo: "",
    image: null,
  },
];

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch backend projects");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        } else {
          setProjects(fallbackProjects);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Backend API offline, utilizing fallback projects:", err);
        setProjects(fallbackProjects);
        setLoading(false);
      });
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">FEATURED ENGINEERING WORK</p>
          <h2 className="section-title">
            Featured <span className="text-cyan">Projects</span>
          </h2>
          <p className="text-muted-custom mx-auto" style={{ maxWidth: "650px" }}>
            A curated selection of web platforms and software applications engineered using React, Django, Python, and REST APIs.
          </p>
        </motion.div>

        {loading && (
          <div className="text-center py-5">
            <FaSpinner className="loading-spinner text-cyan" size={35} />
            <p className="mt-3 text-slate-300">Loading projects...</p>
          </div>
        )}

        {!loading && projects.length > 0 && (
          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-lg-4 col-md-6" key={project.id || index}>
                <motion.div
                  className="project-hero-card p-0 h-100"
                  onMouseMove={handleMouseMove}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Spotlight Radial Layer */}
                  <div className="project-spotlight-bg"></div>
                  {/* Diagonal Shine Pass */}
                  <div className="project-diagonal-shine"></div>

                  {/* Top Image Banner */}
                  <div className="project-img-wrapper position-relative overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-cover-img img-fluid"
                      />
                    ) : (
                      <div className="project-placeholder-bg d-flex align-items-center justify-content-center">
                        <FaLayerGroup size={45} className="text-cyan opacity-75" />
                      </div>
                    )}
                    <span className="project-number-badge font-monospace">0{index + 1}</span>
                  </div>

                  {/* Card Body */}
                  <div className="project-body-content p-4 d-flex flex-column justify-content-between">
                    <div>
                      <h3 className="h5 text-white fw-bold mb-2 project-title-text">{project.title}</h3>
                      <p className="small text-slate-300 line-height-relaxed mb-3">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Chips */}
                      {project.technology && (
                        <div className="d-flex flex-wrap gap-2 mb-4">
                          {project.technology.split(",").map((tech, techIdx) => (
                            <span key={techIdx} className="project-tech-chip">
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Action Links */}
                      <div className="d-flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-project-action btn-project-github flex-grow-1 d-inline-flex align-items-center justify-content-center gap-2"
                          >
                            <FaGithub /> GitHub
                          </a>
                        )}

                        {project.live_demo && (
                          <a
                            href={project.live_demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-project-action btn-project-demo flex-grow-1 d-inline-flex align-items-center justify-content-center gap-2"
                          >
                            <FaExternalLinkAlt /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;