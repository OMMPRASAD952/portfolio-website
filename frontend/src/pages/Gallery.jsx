import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaImages } from "react-icons/fa";

import photoOmm1 from "../assets/images/omm.jpeg";
import photoOmm2 from "../assets/images/omm.jpg";
import photoCampus from "../assets/images/campus.jpg";

import ncc1 from "../assets/images/ncc1.jpeg";
import ncc2 from "../assets/images/ncc2.jpeg";
import ncc3 from "../assets/images/ncc3.jpeg";
import ncc4 from "../assets/images/ncc4.jpeg";
import ncc5 from "../assets/images/ncc5.jpeg";
import ncc6 from "../assets/images/ncc6.jpeg";
import ncc7 from "../assets/images/ncc7.jpeg";
import ncc8 from "../assets/images/ncc8.jpeg";

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState("all");

  const images = [
    {
      image: photoOmm1,
      title: "Professional Portrait",
      subtitle: "Full-Stack Developer & CSE Student",
      category: "personal",
    },
    {
      image: photoCampus,
      title: "ITER SOA University",
      subtitle: "Campus Life & Engineering Studies",
      category: "campus",
    },
    {
      image: ncc1,
      title: "NCC Combined Annual Training Camp",
      subtitle: "Parade & Drill Discipline",
      category: "ncc",
    },
    {
      image: ncc2,
      title: "NCC Field Craft & Training",
      subtitle: "Leadership & Physical Fitness",
      category: "ncc",
    },
    {
      image: ncc3,
      title: "Cadet Squad Formation",
      subtitle: "Teamwork & National Service",
      category: "ncc",
    },
    {
      image: ncc4,
      title: "NCC Camp Activity",
      subtitle: "Discipline & Unity",
      category: "ncc",
    },
    {
      image: photoOmm2,
      title: "Academic & Tech Journey",
      subtitle: "Learning Every Day",
      category: "personal",
    },
    {
      image: ncc5,
      title: "NCC Parade Grounds",
      subtitle: "Cadet Corporal Leadership",
      category: "ncc",
    },
    {
      image: ncc6,
      title: "NCC Group Photo",
      subtitle: "Camaraderie & Patriotism",
      category: "ncc",
    },
    {
      image: ncc7,
      title: "Cultural & Ceremonial Event",
      subtitle: "National Cadet Corps",
      category: "ncc",
    },
    {
      image: ncc8,
      title: "Camp Certificate Moments",
      subtitle: "Achievement & Recognition",
      category: "ncc",
    },
  ];

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter((img) => img.category === activeCategory);

  const [current, setCurrent] = useState(null);

  const openImage = (index) => {
    setCurrent(index);
  };

  const closeImage = () => {
    setCurrent(null);
  };

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (current === null) return;
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, filteredImages.length]);

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        paddingTop: "140px",
        paddingBottom: "80px",
      }}
    >
      <div className="container">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">VISUAL ARCHIVE</span>
          <h1 className="gallery-heading text-center mb-3">
            Photo <span className="text-cyan">Gallery</span>
          </h1>
          <p className="text-slate-400 mx-auto" style={{ maxWidth: "650px", fontSize: "1.05rem" }}>
            A curated archive capturing my academic life at ITER SOA University, National Cadet Corps (NCC) parades & camps, and personal milestones.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          <button
            className={`btn-gallery-filter ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => { setActiveCategory("all"); setCurrent(null); }}
          >
            All Photos ({images.length})
          </button>
          <button
            className={`btn-gallery-filter ${activeCategory === "ncc" ? "active" : ""}`}
            onClick={() => { setActiveCategory("ncc"); setCurrent(null); }}
          >
            NCC Journey ({images.filter(i => i.category === "ncc").length})
          </button>
          <button
            className={`btn-gallery-filter ${activeCategory === "campus" ? "active" : ""}`}
            onClick={() => { setActiveCategory("campus"); setCurrent(null); }}
          >
            Campus Life ({images.filter(i => i.category === "campus").length})
          </button>
          <button
            className={`btn-gallery-filter ${activeCategory === "personal" ? "active" : ""}`}
            onClick={() => { setActiveCategory("personal"); setCurrent(null); }}
          >
            Personal & Tech ({images.filter(i => i.category === "personal").length})
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="row g-4">
          {filteredImages.map((item, index) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
              <motion.div
                className="premium-gallery-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => openImage(index)}
              >
                <div className="gallery-img-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="premium-gallery-image"
                  />
                  <div className="gallery-hover-icon">
                    <FaExpand />
                  </div>
                </div>

                <div className="gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {current !== null && filteredImages[current] && (
        <div className="premium-lightbox">
          <button className="close-btn" onClick={closeImage} aria-label="Close">
            <FaTimes />
          </button>

          <button className="left-btn" onClick={prevImage} aria-label="Previous">
            <FaChevronLeft />
          </button>

          <div className="lightbox-image-container text-center">
            <motion.img
              key={current}
              src={filteredImages[current].image}
              alt={filteredImages[current].title}
              className="lightbox-img"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="lightbox-caption mt-3">
              <h3>{filteredImages[current].title}</h3>
              <p>{filteredImages[current].subtitle}</p>
              <span className="badge-counter font-monospace">
                {current + 1} / {filteredImages.length}
              </span>
            </div>
          </div>

          <button className="right-btn" onClick={nextImage} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;