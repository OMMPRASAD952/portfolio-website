import { useEffect } from "react"; // <-- ADDED
import { motion } from "framer-motion";

import {
  FaUniversity,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaProjectDiagram,
} from "react-icons/fa";

import campus from "../assets/images/campus.jpg";

function BTech() {
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
              Bachelor of Technology
            </motion.h1>

            <h2 className="mt-3">
              Computer Science & Engineering
            </h2>

            <p
              className="mt-4"
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              I am currently pursuing my B.Tech in Computer
              Science & Engineering at ITER, Siksha 'O'
              Anusandhan University. During my journey I have
              been developing strong skills in programming,
              full stack development and software engineering.
            </p>

          </div>

          <div className="col-lg-6 text-center">

            <motion.img
              src={campus}
              alt="ITER Campus"
              className="img-fluid rounded-4 shadow"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />

          </div>

        </div>

      </section>

      {/* University */}

      <section className="container py-5">

        <h2 className="text-center mb-5 text-info">
          University
        </h2>

        <div className="row">

          <div className="col-md-4">

            <div className="education-card">

              <FaUniversity className="edu-icon" />

              <h3>ITER</h3>

              <p>
                Institute of Technical Education and Research
              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="education-card">

              <FaLaptopCode className="edu-icon" />

              <h3>Department</h3>

              <p>
                Computer Science & Engineering
              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="education-card">

              <FaDatabase className="edu-icon" />

              <h3>Focus</h3>

              <p>
                Full Stack Development
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Subjects */}

      <section className="container py-5">

        <h2 className="text-center text-info mb-5">
          Subjects Learned
        </h2>

        <div className="row g-4">

          {[
            "C Programming",
            "Java",
            "Python",
            "Data Structures",
            "DBMS",
            "Operating System",
            "Computer Networks",
            "Web Development",
            "Software Engineering",
            "Artificial Intelligence",
            "Machine Learning",
            "React",
            "Django",
            "REST API",
          ].map((item) => (

            <div className="col-md-3" key={item}>

              <div className="skill-card">

                <FaCode
                  size={35}
                  color="#38bdf8"
                />

                <h5 className="mt-3">
                  {item}
                </h5>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Projects */}

      <section className="container py-5">

        <h2 className="text-center text-info mb-5">
          Academic Projects
        </h2>

        <div className="row">

          <div className="col-lg-4">

            <div className="project-card p-4">

              <FaProjectDiagram
                size={45}
                color="#38bdf8"
              />

              <h3 className="mt-3">
                Portfolio Website
              </h3>

              <p>
                React + Django Portfolio Website
              </p>

            </div>

          </div>

          <div className="col-lg-4">

            <div className="project-card p-4">

              <FaProjectDiagram
                size={45}
                color="#38bdf8"
              />

              <h3 className="mt-3">
                ATS Project
              </h3>

              <p>
                Applicant Tracking System using Django.
              </p>

            </div>

          </div>

          <div className="col-lg-4">

            <div className="project-card p-4">

              <FaProjectDiagram
                size={45}
                color="#38bdf8"
              />

              <h3 className="mt-3">
                E-Commerce Website
              </h3>

              <p>
                React + Django + FakeStore API.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default BTech;