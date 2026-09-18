import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaCode,
  FaDatabase,
  FaTools
} from "react-icons/fa";

import { SiDjango, SiMysql, SiPostman, SiVite } from "react-icons/si";

const skillCategories = [
  {
    category: "Programming",
    icon: FaCode,
    skills: [
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "Java", icon: <FaJava />, color: "#F89820" },
      { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
      { name: "Data Structures", icon: <FaCode />, color: "#38bdf8" },
    ],
  },
  {
    category: "Frontend",
    icon: FaReact,
    skills: [
      { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "Bootstrap 5", icon: <FaBootstrap />, color: "#7952B3" },
      { name: "Vite", icon: <SiVite />, color: "#646CFF" },
    ],
  },
  {
    category: "Backend",
    icon: SiDjango,
    skills: [
      { name: "Django", icon: <SiDjango />, color: "#092E20" },
      { name: "Python Web APIs", icon: <FaPython />, color: "#3776AB" },
      { name: "REST Framework", icon: <FaCode />, color: "#38bdf8" },
    ],
  },
  {
    category: "Database",
    icon: FaDatabase,
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "Relational Design", icon: <FaDatabase />, color: "#38bdf8" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: FaTools,
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
      { name: "VS Code", icon: <FaCode />, color: "#007ACC" },
      { name: "Eclipse IDE", icon: <FaCode />, color: "#2C2255" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">TECHNICAL EXPERTISE</p>
          <h2 className="section-title">
            Skills & <span className="text-cyan">Technologies</span>
          </h2>
          <p className="text-muted-custom mx-auto" style={{ maxWidth: "600px" }}>
            Curated set of tools and technologies I utilize to engineer full-stack web platforms and backend services.
          </p>
        </motion.div>

        <div className="row g-4">
          {skillCategories.map((cat, idx) => {
            const CategoryIcon = cat.icon;
            return (
              <div key={idx} className="col-lg-4 col-md-6">
                <motion.div
                  className="skill-category-card p-4 h-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="category-header d-flex align-items-center gap-2 mb-4 pb-2 border-bottom border-secondary border-opacity-25">
                    <CategoryIcon className="text-cyan fs-4" />
                    <h3 className="h5 text-white fw-bold mb-0">{cat.category}</h3>
                  </div>

                  <div className="d-flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="skill-sweep-chip">
                        <span className="chip-icon" style={{ color: skill.color }}>
                          {skill.icon}
                        </span>
                        <span className="chip-name">{skill.name}</span>
                        <span className="chip-border-sweep"></span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;