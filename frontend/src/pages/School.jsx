import { motion } from "framer-motion";
import { useEffect } from "react"; // <-- ADDED
import {
  FaSchool,
  FaBook,
  FaUserGraduate,
  FaMedal,
} from "react-icons/fa";

import school from "../assets/images/omm.jpg";

function School() {
  // <-- ADDED: Scroll to top whenever this page opens
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      {/* Hero */}

      <section className="container py-5">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <motion.h1
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                color: "#38bdf8",
                fontWeight: "bold",
              }}
            >
              School Education
            </motion.h1>

            <h2 className="mt-3">
              SARASWATI SHISHU VIDYA MANDIR, NAYAGARH
            </h2>

            <p
              className="mt-4"
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              My school life laid the foundation of my academic journey.
              It helped me develop discipline, confidence, leadership,
              communication skills and interest in science and technology.
            </p>

          </div>

          <div className="col-lg-6 text-center">

            <motion.img
              src={school}
              alt="School"
              className="img-fluid rounded-4 shadow"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />

          </div>

        </div>

      </section>

      {/* Highlights */}

      <section className="container py-5">

        <h2 className="text-center text-info mb-5">
          School Highlights
        </h2>

        <div className="row">

          <div className="col-md-3 mb-4">
            <div className="education-card text-center">
              <FaSchool className="edu-icon" />
              <h4>School</h4>
              <p>SARASWATI SHISHU VIDYA MANDIR</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="education-card text-center">
              <FaBook className="edu-icon" />
              <h4>Education</h4>
              <p>Strong Academic Foundation</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="education-card text-center">
              <FaUserGraduate className="edu-icon" />
              <h4>Skills</h4>
              <p>Communication & Discipline</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="education-card text-center">
              <FaMedal className="edu-icon" />
              <h4>Activities</h4>
              <p>Sports & Cultural Events</p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default School;