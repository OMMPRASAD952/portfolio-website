import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import ncc1 from "../assets/images/ncc1.jpeg";
import ncc2 from "../assets/images/ncc2.jpeg";
import ncc3 from "../assets/images/ncc3.jpeg";
import ncc4 from "../assets/images/ncc4.jpeg";
import ncc5 from "../assets/images/ncc5.jpeg";
import ncc6 from "../assets/images/ncc6.jpeg";
import ncc7 from "../assets/images/ncc7.jpeg";
import ncc8 from "../assets/images/ncc8.jpeg";

import {
  FaShieldAlt,
  FaMedal,
  FaFlag,
  FaUsers,
  FaAward,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function NCC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    ncc1,
    ncc2,
    ncc3,
    ncc4,
    ncc5,
    ncc6,
    ncc7,
    ncc8,
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage]);

  const timeline = [
    {
      year: "2024",
      title: "Joined NCC",
      description:
        "Started my National Cadet Corps (NCC) journey with enthusiasm, discipline, patriotism, and a commitment to serving the nation.",
      icon: <FaShieldAlt />,
    },
    {
      year: "2025",
      title: "Combined Annual Training Camp (CATC)",
      description:
        "Participated in the Combined Annual Training Camp (CATC), where I received training in drill, weapon handling, field craft, leadership, teamwork, cultural activities, and physical fitness.",
      icon: <FaFlag />,
    },
    {
      year: "2025",
      title: "Leadership & Social Service",
      description:
        "Participated in parade practice, awareness programmes, cleanliness drives, tree plantation, blood donation awareness, and community service activities.",
      icon: <FaUsers />,
    },
    {
      year: "2026",
      title: "NCC 'B' Certificate Examination",
      description:
        "Appeared for the NCC 'B' Certificate Examination, demonstrating knowledge of drill, map reading, weapon training, leadership, social service, and national integration.",
      icon: <FaAward />,
    },
    {
      year: "2026",
      title: "Promoted to Cadet Corporal",
      description:
        "Promoted to the rank of Cadet Corporal in recognition of discipline, leadership qualities, responsibility, and active participation in NCC activities.",
      icon: <FaMedal />,
    },
    {
      year: "2026",
      title: "Second CATC Camp",
      description:
        "Successfully participated in another Combined Annual Training Camp (CATC), improving leadership skills, confidence, discipline, adventure training, and teamwork.",
      icon: <FaFlag />,
    },
    {
      year: "Present",
      title: "Continuing My NCC Journey",
      description:
        "Continuing to develop leadership, confidence, discipline, physical fitness, and the spirit of national service while preparing for future NCC opportunities.",
      icon: <FaAward />,
    },
  ];

  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      {/* NCC Timeline */}

      <section className="container py-5">

        <motion.h1
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            color: "#38bdf8",
            fontWeight: "bold",
          }}
        >
          My NCC Journey
        </motion.h1>

        <div className="timeline">

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              className="timeline-item"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <div className="timeline-icon">
                {item.icon}
              </div>

              <div className="timeline-content">

                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>
            {/* NCC Achievements */}

      <section className="container py-5">

        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{
            color: "#38bdf8",
            fontWeight: "bold",
          }}
        >
          NCC Achievements
        </motion.h2>

        <div className="row g-4">

          <div className="col-lg-3 col-6">
            <div className="stats-card text-center">
              <h2>2+</h2>
              <p>CATC Camps</p>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <div className="stats-card text-center">
              <h2>B</h2>
              <p>Certificate Exam</p>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <div className="stats-card text-center">
              <h2>1</h2>
              <p>Cadet Corporal</p>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <div className="stats-card text-center">
              <h2>100%</h2>
              <p>Discipline</p>
            </div>
          </div>

        </div>

      </section>

      {/* NCC Gallery */}

      <section className="container py-5">

        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{
            color: "#38bdf8",
            fontWeight: "bold",
          }}
        >
          NCC Gallery
        </motion.h2>

        <div className="row g-4">

          {images.map((image, index) => (

            <div className="col-lg-4 col-md-6" key={index}>

              <motion.div
                className="gallery-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => openImage(index)}
              >

                <img
                  src={image}
                  alt={`NCC ${index + 1}`}
                  className="gallery-image"
                />

              </motion.div>

            </div>

          ))}

        </div>

      </section>

      {/* Lightbox */}

      {selectedImage !== null && (

        <div className="lightbox">

          <button
            className="lightbox-close"
            onClick={closeImage}
          >
            <FaTimes />
          </button>

          <button
            className="lightbox-prev"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>

          <img
            src={images[selectedImage]}
            alt="NCC"
            className="lightbox-image"
          />

          <button
            className="lightbox-next"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>

        </div>

      )}
            {/* Lightbox */}

      {selectedImage !== null && (
        <div className="lightbox">

          <button
            className="lightbox-close"
            onClick={closeImage}
          >
            <FaTimes />
          </button>

          <button
            className="lightbox-prev"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>

          <img
            src={images[selectedImage]}
            alt="NCC"
            className="lightbox-image"
          />

          <button
            className="lightbox-next"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>

        </div>
      )}

      {/* Closing Message */}

      <section className="container py-5">

        <motion.div
          className="about-card text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2
            style={{
              color: "#38bdf8",
              fontWeight: "bold",
            }}
          >
            "Unity and Discipline"
          </h2>

          <p
            style={{
              fontSize: "20px",
              marginTop: "20px",
              color: "#cbd5e1",
              lineHeight: "1.8",
            }}
          >
            NCC has taught me leadership, discipline, confidence,
            teamwork, and patriotism. Every camp, parade, and
            community service activity has helped me become a more
            responsible citizen and strengthened my commitment to
            serving the nation with pride.
          </p>

        </motion.div>

      </section>

    </div>
  );
}

export default NCC;