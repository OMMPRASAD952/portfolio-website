import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUniversity, FaGraduationCap, FaChalkboardTeacher, FaSchool, FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const educationItems = [
  {
    id: "school",
    title: "SCHOOL EDUCATION (10TH)",
    institution: "Academic Foundation",
    year: "2022",
    summary: "Built strong fundamentals in Mathematics, Science, and logical reasoning alongside co-curricular active growth.",
    icon: FaSchool,
    route: "/school",
  },
  {
    id: "intermediate",
    title: "INTERMEDIATE (+2 SCIENCE)",
    institution: "Inspire Higher Secondary School",
    year: "2022 - 2024",
    summary: "Completed higher secondary education with a focus on Mathematics, Physics, Chemistry, and analytical problem-solving.",
    icon: FaChalkboardTeacher,
    route: "/intermediate",
  },
  
  {
    id: "btech",
    title: "GRADUATION (B.TECH CSE)",
    institution: "ITER, SOA University",
    year: "2024 - Present (3rd Year)",
    summary: "Computer Science & Engineering Core. Specializing in Software Engineering, Web Systems, Data Structures & DBMS.",
    icon: FaUniversity,
    route: "/btech",
  }
];

function Education() {
  return (
    <section id="education" className="education-section py-5">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">ACADEMIC JOURNEY</p>
          <h2 className="section-title">
            Education & <span className="text-cyan">Qualifications</span>
          </h2>
          <p className="text-muted-custom mx-auto" style={{ maxWidth: "600px" }}>
            My educational progression from school foundation to B.Tech Computer Science Core at ITER SOA University.
          </p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          {educationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <motion.div
                  className="edu-border-trace-card p-4 h-100 d-flex flex-column justify-content-between"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="edu-card-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="edu-icon-circle">
                        <Icon className="edu-icon" />
                      </div>
                      <span className="edu-year-badge small">
                        <FaCalendarAlt className="me-1" /> {item.year}
                      </span>
                    </div>

                    <h3 className="h5 text-white fw-bold mt-2">{item.title}</h3>
                    <h4 className="h6 text-cyan mb-3">{item.institution}</h4>
                    <p className="small text-slate-300 line-height-relaxed">{item.summary}</p>
                  </div>

                  <div className="mt-4 pt-3 border-top border-secondary border-opacity-25">
                    <Link to={item.route} className="btn-trace-link w-100 d-flex align-items-center justify-content-between text-decoration-none">
                      <span>View Academic Details</span>
                      <FaArrowRight className="link-arrow" />
                    </Link>
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

export default Education;
