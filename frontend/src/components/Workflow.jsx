import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaDraftingCompass, FaCode, FaVial, FaRocket } from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Deconstruct requirements, study user needs, and map out core technical goals.",
    icon: FaSearch,
  },
  {
    number: "02",
    title: "Design",
    description: "Architect system structure, database schemas, REST APIs, and UI layout components.",
    icon: FaDraftingCompass,
  },
  {
    number: "03",
    title: "Build",
    description: "Develop clean, scalable code using React, Django, Python, and modern development standards.",
    icon: FaCode,
  },
  {
    number: "04",
    title: "Test",
    description: "Rigorous verification of endpoints, cross-browser compatibility, and responsiveness.",
    icon: FaVial,
  },
  {
    number: "05",
    title: "Deploy",
    description: "Optimize assets, configure environment settings, and launch production builds.",
    icon: FaRocket,
  },
];

function Workflow() {
  return (
    <section id="workflow" className="workflow-section py-5">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">DEVELOPMENT PROCESS</p>
          <h2 className="section-title">
            How I <span style={{ color: "#38bdf8" }}>Build Projects</span>
          </h2>
          <p className="text-muted-custom mx-auto" style={{ maxWidth: "650px" }}>
            A structured, engineering-driven approach to transforming ideas into reliable, high-performance software applications.
          </p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="col-lg-4 col-md-6">
                <motion.div
                  className="workflow-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="workflow-card-header">
                    <span className="workflow-number">{step.number}</span>
                    <div className="workflow-icon-wrapper">
                      <Icon className="workflow-icon" />
                    </div>
                  </div>
                  <h4 className="workflow-title">{step.title}</h4>
                  <p className="workflow-desc">{step.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Workflow;
