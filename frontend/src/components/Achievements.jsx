import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaAward,
  FaImages,
  FaArrowRight,
  FaUsers,
} from "react-icons/fa";

function Achievements() {
  return (
    <section
      id="achievements"
      className="achievements-section py-5"
    >
      <div className="container">

        {/* ================= HEADING ================= */}

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">
            HONORS • LEADERSHIP • MEMORIES
          </p>

          <h2 className="section-title">
            Beyond{" "}
            <span className="text-cyan">
              Academics
            </span>
          </h2>

          <p
            className="text-muted-custom mx-auto"
            style={{ maxWidth: "700px" }}
          >
            A collection of certifications, leadership experiences,
            community involvement, events, and memorable moments from
            my academic journey.
          </p>
        </motion.div>


        {/* ================= CARDS ================= */}

        <div className="row g-4 justify-content-center">

          {/* =================================================
              CERTIFICATES CARD
          ================================================= */}

          <div className="col-lg-4 col-md-6">

            <motion.div
              className="
                achievement-reaction-card
                p-4
                p-md-5
                h-100
                text-center
                d-flex
                flex-column
                justify-content-between
              "
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
            >
              <div>

                <div className="reaction-icon-box mx-auto mb-4">
                  <FaAward className="reaction-icon" />
                </div>

                <h3 className="h4 text-white fw-bold mb-3">
                  Verified Certifications
                </h3>

                <p className="text-slate-300 line-height-relaxed mb-4">
                  Professional certifications, virtual job
                  simulations, AI learning programs, and hackathon
                  participation from recognized organizations and
                  learning platforms.
                </p>

              </div>

              <div>
                <Link
                  to="/certificates"
                  className="
                    btn
                    btn-outline-cyan
                    px-4
                    d-inline-flex
                    align-items-center
                    gap-2
                  "
                >
                  <span>
                    View Certificates
                  </span>

                  <FaArrowRight />
                </Link>
              </div>

            </motion.div>

          </div>


          {/* =================================================
              SOA JAGGO CARD
          ================================================= */}

          <div className="col-lg-4 col-md-6">

            <motion.div
              className="
                achievement-reaction-card
                p-4
                p-md-5
                h-100
                text-center
                d-flex
                flex-column
                justify-content-between
              "
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              viewport={{
                once: true,
              }}
            >
              <div>

                <div className="reaction-icon-box mx-auto mb-4">
                  <FaUsers className="reaction-icon" />
                </div>

                <h3 className="h4 text-white fw-bold mb-2">
                  Core Member
                </h3>

                <h5
                  className="mb-3"
                  style={{
                    color: "#38bdf8",
                    fontWeight: "600",
                  }}
                >
                  SOA JAGGO
                </h5>

                <p className="text-slate-300 line-height-relaxed mb-4">
                  Contributing as a Core Member of SOA JAGGO through
                  student engagement, teamwork, event coordination,
                  community activities, and collaborative university
                  initiatives.
                </p>

              </div>

              <div
                className="jaggo-role-badge"
                style={{
                  display: "inline-block",
                  padding: "10px 18px",
                  borderRadius: "30px",
                  border:
                    "1px solid rgba(56, 189, 248, 0.35)",
                  color: "#38bdf8",
                  fontWeight: "600",
                }}
              >
                Leadership & Community
              </div>

            </motion.div>

          </div>


          {/* =================================================
              PHOTO GALLERY CARD
          ================================================= */}

          <div className="col-lg-4 col-md-6">

            <motion.div
              className="
                achievement-reaction-card
                p-4
                p-md-5
                h-100
                text-center
                d-flex
                flex-column
                justify-content-between
              "
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              viewport={{
                once: true,
              }}
            >
              <div>

                <div className="reaction-icon-box mx-auto mb-4">
                  <FaImages className="reaction-icon" />
                </div>

                <h3 className="h4 text-white fw-bold mb-3">
                  Photo Gallery & Events
                </h3>

                <p className="text-slate-300 line-height-relaxed mb-4">
                  A visual archive of NCC activities, university
                  events, technical workshops, hackathons,
                  presentations, camps, and memorable moments.
                </p>

              </div>

              <div>
                <Link
                  to="/gallery"
                  className="
                    btn
                    btn-outline-cyan
                    px-4
                    d-inline-flex
                    align-items-center
                    gap-2
                  "
                >
                  <span>
                    View Photo Gallery
                  </span>

                  <FaArrowRight />
                </Link>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Achievements;