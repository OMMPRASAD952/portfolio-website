import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

import skillindia from "../assets/images/skillindia.jpg";
import tata from "../assets/images/tata.jpg";
import unstop from "../assets/images/unstop.jpg";
import deloitte from "../assets/images/deloitte.jpg";
import ibmAgents from "../assets/images/ibm-ai-agents.png";
import googleKaggle from "../assets/images/google-kaggle.png";
import ibmAI from "../assets/images/ibm-ai.jpg";
import ibmBadge from "../assets/images/ibm-badge.png";

import pinnacleOfferLetter from "../assets/images/pinnacle offer letter.jpeg";

import dreamwave from "../assets/images/DreamWave.png";
import pinnacleCertificate from "../assets/images/pinnaclecertificate.png";


const certificates = [
  {
    title: "SOAR AI for Educators",
    company: "Microsoft Skill India",
    image: skillindia,
    about:
      "Completed AI Fundamentals, Microsoft AI Tools and practical AI learning through Skill India.",
  },

  {
    title: "GenAI Powered Data Analytics",
    company: "TATA Forage",
    image: tata,
    about:
      "Completed a virtual job simulation covering data analytics, AI and business insights.",
  },

  {
    title: "Technology Job Simulation",
    company: "Deloitte Forage",
    image: deloitte,
    about:
      "Worked on real-world technology consulting and software engineering tasks.",
  },

  {
    title: "Web Hackathon",
    company: "IIT Bhubaneswar",
    image: unstop,
    about:
      "Participated in a national-level web development hackathon and built innovative solutions.",
  },

  {
    title: "Unleashing the Power of AI Agents",
    company: "IBM SkillsBuild",
    image: ibmAgents,
    about:
      "Learned AI Agents, Prompt Engineering and AI Automation workflows.",
  },

  {
    title: "Getting Started with Artificial Intelligence",
    company: "IBM SkillsBuild",
    image: ibmAI,
    about:
      "Completed AI basics covering Machine Learning, NLP and Computer Vision.",
  },

  {
    title: "5-Day AI Agents Intensive Course",
    company: "Google × Kaggle",
    image: googleKaggle,
    about:
      "Hands-on AI Agents intensive program with practical Kaggle exercises.",
  },

  {
    title: "IBM AI Badge",
    company: "IBM SkillsBuild",
    image: ibmBadge,
    about:
      "Successfully earned IBM AI Badge after completing the AI learning pathway.",
  },

  // ================= PINNACLE OFFER LETTER =================

  {
    title: "Web Development Internship — Offer Letter",
    company: "Pinnacle Labs Pvt. Ltd.",
    image: pinnacleOfferLetter,
    about:
      "Selected for a 4-week virtual Web Development Internship at Pinnacle Labs, focused on practical web development and software development experience.",
  },

  // ================= PINNACLE COMPLETION CERTIFICATE =================

  {
    title: "Web Development Internship — Completion",
    company: "Pinnacle Labs Pvt. Ltd.",
    image: pinnacleCertificate,
    about:
      "Successfully completed a 4-week virtual Web Development Internship at Pinnacle Labs from 22 July 2026 to 21 August 2026, contributing to web development tasks and projects.",
  },
  {
  title: "Full Stack Training — Completion with Distinction",
  company: "Dreamwave Innovation",
  image: dreamwave,
  about:
    "Successfully completed the Full Stack training program at Dreamwave Innovation from 2 July to 17 August 2026 and received the Certificate of Completion with Distinction for outstanding performance, commitment, and dedication.",
},
];


function Certificates() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        paddingTop: "140px",
        paddingBottom: "70px",
      }}
    >
      <div className="container">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: -40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-5"
        >
          <p
            style={{
              color: "#38bdf8",
              fontWeight: "700",
              letterSpacing: "3px",
              fontSize: "13px",
              marginBottom: "10px",
            }}
          >
            CERTIFICATIONS & CREDENTIALS
          </p>

          <h1
            style={{
              color: "#ffffff",
              fontWeight: "800",
              fontSize: "3rem",
              marginBottom: "15px",
            }}
          >
            My{" "}
            <span
              style={{
                color: "#38bdf8",
              }}
            >
              Certificates
            </span>
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "17px",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "28px",
            }}
          >
            Professional certifications, internships, virtual job
            simulations, hackathons and AI learning achievements.
          </p>
        </motion.div>

        {/* ================= CERTIFICATE GRID ================= */}

        <div className="row g-4">

          {certificates.map((item, index) => (

            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
              key={index}
            >
              <motion.div
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
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.4,
                }}
                viewport={{
                  once: true,
                }}
                style={{
                  background: "#1e293b",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid rgba(56,189,248,.35)",
                  height: "100%",
                  boxShadow: "0 10px 35px rgba(0,0,0,.25)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >

                {/* ================= IMAGE ================= */}

                <div
                  style={{
                    height: "210px",
                    overflow: "hidden",
                    background: "#ffffff",
                    position: "relative",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform .4s ease",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(
                        item.image,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  />
                </div>

                {/* ================= CARD BODY ================= */}

                <div
                  style={{
                    padding: "22px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >

                  {/* AWARD ICON */}

                  <div
                    style={{
                      width: "58px",
                      height: "58px",
                      margin: "-50px auto 18px",
                      background: "#38bdf8",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0f172a",
                      fontSize: "23px",
                      border: "4px solid #1e293b",
                      position: "relative",
                      zIndex: "2",
                      boxShadow:
                        "0 5px 18px rgba(56,189,248,.25)",
                    }}
                  >
                    <FaAward />
                  </div>

                  {/* TITLE */}

                  <h5
                    style={{
                      color: "#ffffff",
                      fontWeight: "700",
                      fontSize: "18px",
                      lineHeight: "26px",
                      minHeight: "52px",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h5>

                  {/* COMPANY */}

                  <h6
                    style={{
                      color: "#38bdf8",
                      marginBottom: "15px",
                      minHeight: "38px",
                      fontWeight: "600",
                    }}
                  >
                    {item.company}
                  </h6>

                  {/* DESCRIPTION */}

                  <p
                    style={{
                      color: "#cbd5e1",
                      fontSize: "14px",
                      lineHeight: "23px",
                      flexGrow: 1,
                      marginBottom: "20px",
                    }}
                  >
                    {item.about}
                  </p>

                  {/* VIEW BUTTON */}

                  <button
                    type="button"
                    onClick={() =>
                      window.open(
                        item.image,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    style={{
                      width: "100%",
                      border: "none",
                      borderRadius: "30px",
                      padding: "12px 18px",
                      background: "#38bdf8",
                      color: "#0f172a",
                      fontWeight: "700",
                      cursor: "pointer",
                      transition: "all .3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 7px 20px rgba(56,189,248,.30)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "none";
                    }}
                  >
                    View Certificate

                    <FaExternalLinkAlt
                      style={{
                        marginLeft: "8px",
                        fontSize: "13px",
                      }}
                    />
                  </button>

                </div>
              </motion.div>
            </div>

          ))}

        </div>
      </div>
    </section>
  );
}

export default Certificates;