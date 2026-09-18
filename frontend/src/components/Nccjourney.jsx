import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFlag, FaAward, FaMedal, FaShieldAlt, FaArrowRight } from "react-icons/fa";

function Nccjourney() {
  return (
    <section id="Nccjourney" className="ncc-signature-section py-5">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">DISCIPLINE • LEADERSHIP • PATRIOTISM</p>
          <h2 className="section-title">
            NCC <span className="text-cyan">Cadet Journey</span>
          </h2>
          <p className="text-muted-custom mx-auto" style={{ maxWidth: "650px" }}>
            A cornerstone of my personal development as a <strong>Cadet Corporal</strong> in the National Cadet Corps.
          </p>
        </motion.div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <motion.div
              className="about-spotlight-card p-4 p-md-5 text-center position-relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Top Flag Emblem */}
              <div className="reaction-icon-box mx-auto mb-4" style={{ width: "80px", height: "80px" }}>
                <FaFlag className="text-cyan fs-2" />
              </div>

              <span className="badge-ncc-rank mb-3 d-inline-block">RANK: CADET CORPORAL</span>

              <h3 className="h3 text-white fw-bold mb-3">National Cadet Corps (NCC)</h3>

              <p className="text-slate-300 line-height-relaxed mb-4" style={{ fontSize: "1.05rem" }}>
                My journey in the National Cadet Corps has developed my leadership, high discipline, teamwork, confidence, and patriotism. Through Combined Annual Training Camps (CATC), parade drills, weapon handling, map reading, and community service activities, I have grown both personally and as an engineering student.
              </p>

              {/* Stats Highlights */}
              <div className="row g-3 my-4 pt-3 border-top border-secondary border-opacity-25">
                <div className="col-4">
                  <div className="fw-bold text-cyan h5 mb-0">2+</div>
                  <div className="small text-slate-400">CATC Camps</div>
                </div>
                <div className="col-4">
                  <div className="fw-bold text-cyan h5 mb-0">'B'</div>
                  <div className="small text-slate-400">Certificate Exam</div>
                </div>
                <div className="col-4">
                  <div className="fw-bold text-cyan h5 mb-0">Corporal</div>
                  <div className="small text-slate-400">Cadet Leadership</div>
                </div>
              </div>

              <Link to="/ncc" className="btn btn-primary-cyan px-4 py-3 d-inline-flex align-items-center gap-2 mt-2">
                <span>View Full NCC Journey & Photo Gallery</span>
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nccjourney;