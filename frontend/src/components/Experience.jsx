import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode, FaAward, FaCode, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const experiences = [
  {
  role: "Web Development Intern",
  organization: "Pinnacle Labs Pvt. Ltd.",
  period: "July 2026 - August 2026",
  description:
    "Completed a one-month Web Development Internship focused on building real-world web applications, including an E-Commerce Website, Personal Portfolio, and AI-Powered Resume Screening & ATS system.",
  tech: ["React.js", "JavaScript", "Python", "Django", "REST API", "HTML", "CSS"],
  icon: FaBriefcase,
},
  
  {
    role: "National Web Development Hackathon",
    organization: "IIT Bhubaneswar",
    period: "Competitive Hackathon",
    description:
      "Built innovative web solutions under timed competitive conditions, demonstrating full-stack frontend/backend integration, REST APIs, and rapid deployment.",
    tech: ["React", "JavaScript", "REST APIs", "Web Development"],
    icon: FaCode,
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section py-5">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">CAREER & LEARNING MILESTONES</p>
          <h2 className="section-title">
            Experience & <span className="text-cyan">Internships</span>
          </h2>
          <p className="text-muted-custom mx-auto" style={{ maxWidth: "600px" }}>
            Virtual internships, hackathons, and certified technology programs completed during my undergraduate degree.
          </p>
        </motion.div>

        <div className="vertical-timeline-container mx-auto" style={{ maxWidth: "900px" }}>
          <div className="timeline-center-line"></div>

          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`timeline-row ${isEven ? "timeline-row-left" : "timeline-row-right"}`}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Timeline Icon Node */}
                <div className="timeline-node-circle">
                  <IconComponent />
                </div>

                {/* Content Card */}
                <div className="timeline-content-card p-4">
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                    <div>
                      <h3 className="h5 text-white fw-bold mb-1">{exp.role}</h3>
                      <div className="d-flex align-items-center gap-2 text-cyan font-monospace small">
                        <FaBuilding /> {exp.organization}
                      </div>
                    </div>
                    <span className="badge-period px-3 py-1 rounded-pill small">
                      <FaCalendarAlt className="me-1" /> {exp.period}
                    </span>
                  </div>

                  <p className="exp-description text-slate-300 small mt-3">
                    {exp.description}
                  </p>

                  <div className="d-flex flex-wrap gap-2 mt-3 pt-2 border-top border-secondary border-opacity-25">
                    {exp.tech.map((t, idx) => (
                      <span key={idx} className="exp-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
