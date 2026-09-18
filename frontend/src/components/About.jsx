import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaAward,
  FaCheckCircle,
  FaTerminal
} from "react-icons/fa";

function About() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const infoCards = [
    {
      icon: FaUserGraduate,
      title: "3rd Year CSE Core",
      subtitle: "ITER SOA University",
      desc: "Deepening knowledge in Data Structures, Algorithms, DBMS, and Web Systems.",
    },
    {
      icon: FaLaptopCode,
      title: "Full-Stack Development",
      subtitle: "React & Django",
      desc: "Building clean responsive interfaces backed by scalable REST API services.",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Odisha, India",
      subtitle: "Nayagarh / Bhubaneswar",
      desc: "Open for remote, hybrid, and relocation software developer internship roles.",
    },
    {
      icon: FaAward,
      title: "NCC Cadet Corporal",
      subtitle: "National Cadet Corps",
      desc: "Trained in leadership, high discipline, tactical awareness, and teamwork.",
    },
  ];

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">GET TO KNOW ME</p>
          <h2 className="section-title">
            About <span className="text-cyan">Me</span>
          </h2>
        </motion.div>

        <div className="row g-4 mb-5">
          {/* Main Bio Card */}
          <div className="col-lg-7">
            <motion.div
              className="about-spotlight-card h-100 p-4 p-md-5"
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaTerminal className="text-cyan fs-4" />
                <h3 className="h4 text-white fw-bold mb-0">Engineering Mindset & Passion</h3>
              </div>

              <p className="about-text">
                Hello! I'm <strong>Omm Prasad Sahoo</strong>, a 3rd-year Computer Science & Engineering student driven by crafting efficient, maintainable software. My core focus lies in full-stack web development, bridging seamless client interfaces built in <strong>React</strong> with robust server logic powered by <strong>Django & Python</strong>.
              </p>

              <p className="about-text">
                Beyond writing code, my background in the <strong>National Cadet Corps (NCC)</strong> as a Corporal has instilled a strong sense of leadership, time management, and resilience. Whether tackling algorithm challenges or engineering complete web platforms, I strive for quality and continuous learning.
              </p>

              <div className="about-highlights d-flex flex-wrap gap-3 mt-4 pt-2">
                <div className="d-flex align-items-center gap-2 text-slate-300">
                  <FaCheckCircle className="text-cyan" /> Frontend Architecture
                </div>
                <div className="d-flex align-items-center gap-2 text-slate-300">
                  <FaCheckCircle className="text-cyan" /> REST API Design
                </div>
                <div className="d-flex align-items-center gap-2 text-slate-300">
                  <FaCheckCircle className="text-cyan" /> Database Management
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Highlight Cards */}
          <div className="col-lg-5">
            <div className="row g-3">
              {infoCards.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div className="col-12" key={idx}>
                    <motion.div
                      className="about-spotlight-card p-3 p-md-4"
                      onMouseMove={handleMouseMove}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div className="about-icon-box">
                          <Icon className="text-cyan fs-4" />
                        </div>
                        <div>
                          <h4 className="h6 text-white fw-bold mb-1">{item.title}</h4>
                          <p className="small text-cyan mb-1 fw-medium">{item.subtitle}</p>
                          <p className="small text-slate-400 mb-0">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="row g-4 text-center mt-2">
          <div className="col-md-3 col-6">
            <motion.div
              className="about-stat-box p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="stat-number">3rd Year</h3>
              <p className="stat-label">B.Tech CSE Core</p>
            </motion.div>
          </div>

          <div className="col-md-3 col-6">
            <motion.div
              className="about-stat-box p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="stat-number">4+</h3>
              <p className="stat-label">Core Tech Stack</p>
            </motion.div>
          </div>

          <div className="col-md-3 col-6">
            <motion.div
              className="about-stat-box p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="stat-number">2+</h3>
              <p className="stat-label">Virtual Internships</p>
            </motion.div>
          </div>

          <div className="col-md-3 col-6">
            <motion.div
              className="about-stat-box p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="stat-number">Rank B</h3>
              <p className="stat-label">NCC Corporal</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;