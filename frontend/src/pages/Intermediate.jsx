import { motion } from "framer-motion";
import { useEffect } from "react"; // <-- ADDED

import {
  FaUniversity,
  FaAtom,
  FaCalculator,
  FaGraduationCap,
} from "react-icons/fa";

import college from "../assets/images/omm.jpeg";

function Intermediate() {

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
              Intermediate Education
            </motion.h1>

            <h2 className="mt-3">
              INSPIRE HIGHER SECONDARY SCHOOL, NAYAGARH
            </h2>

            <p
              className="mt-4"
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              During my Higher Secondary education, I studied the Science
              stream with a strong focus on Physics, Chemistry and Mathematics.
              This phase strengthened my analytical thinking and prepared me
              for pursuing Computer Science Engineering.
            </p>

          </div>

          <div className="col-lg-6 text-center">

            <motion.img
              src={college}
              alt="Intermediate"
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
          Intermediate Highlights
        </h2>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="education-card text-center">
              <FaUniversity className="edu-icon" />
              <h4>School</h4>
              <p>INSPIRE HIGHER SECONDARY SCHOOL</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="education-card text-center">
              <FaAtom className="edu-icon" />
              <h4>Stream</h4>
              <p>Science</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="education-card text-center">
              <FaCalculator className="edu-icon" />
              <h4>Main Subjects</h4>
              <p>PCMB</p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Intermediate;