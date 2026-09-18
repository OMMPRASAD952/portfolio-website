import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: null,
      message: "",
    });

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          message:
            data.message ||
            "Thank you! Your message has been sent successfully.",
        });

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          message:
            data.message ||
            "Unable to send your message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact API error:", error);

      setStatus({
        loading: false,
        success: false,
        message:
          "Unable to connect to the server. Please make sure the Django backend is running.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="contact-section py-5 position-relative overflow-hidden"
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
          <p className="section-subtitle">GET IN TOUCH</p>

          <h2 className="section-title">
            Let's Build{" "}
            <span className="text-cyan">
              Something Together
            </span>
          </h2>

          <p
            className="text-muted-custom mx-auto"
            style={{ maxWidth: "650px" }}
          >
            Whether you have an internship opportunity, project
            collaboration, software inquiry, or just want to connect,
            feel free to drop me a message!
          </p>
        </motion.div>

        <div className="row g-4">

          {/* ================= LEFT INFO CARD ================= */}

          <div className="col-lg-5">
            <motion.div
              className="contact-info-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="h4 text-white fw-bold mb-3">
                  Contact Information
                </h3>

                <p className="small text-slate-300 mb-4 line-height-relaxed">
                  I am actively seeking software engineering internships,
                  full-stack development roles, and open-source
                  collaborations.
                </p>

                <div className="d-flex flex-column gap-3 mb-4">

                  {/* EMAIL */}

                  <div className="d-flex align-items-center gap-3">
                    <div className="contact-icon-circle">
                      <FaEnvelope className="text-cyan" />
                    </div>

                    <div>
                      <span className="d-block small text-slate-400">
                        Email
                      </span>

                      <a
                        href="mailto:ommprasadsahoo952@gmail.com"
                        className="text-white text-decoration-none fw-medium hover-cyan"
                      >
                        ommprasadsahoo952@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* PHONE */}

                  <div className="d-flex align-items-center gap-3">
                    <div className="contact-icon-circle">
                      <FaPhoneAlt className="text-cyan" />
                    </div>

                    <div>
                      <span className="d-block small text-slate-400">
                        Phone / Call
                      </span>

                      <a
                        href="tel:+918926109916"
                        className="text-white text-decoration-none fw-medium hover-cyan"
                      >
                        +91 8926109916
                      </a>
                    </div>
                  </div>

                  {/* LOCATION */}

                  <div className="d-flex align-items-center gap-3">
                    <div className="contact-icon-circle">
                      <FaMapMarkerAlt className="text-cyan" />
                    </div>

                    <div>
                      <span className="d-block small text-slate-400">
                        Location
                      </span>

                      <span className="text-white fw-medium">
                        Nayagarh / Bhubaneswar, Odisha, India
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* ================= SOCIAL CHANNELS ================= */}

              <div className="pt-3 border-top border-secondary border-opacity-25">
                <span className="d-block small text-slate-400 mb-3">
                  Connect on Social Platforms:
                </span>

                <div className="d-flex flex-wrap gap-2">

                  <a
                    href="mailto:ommprasadsahoo952@gmail.com"
                    className="social-pill-btn"
                    aria-label="Email"
                    title="Email"
                  >
                    <FaEnvelope />
                  </a>

                  <a
                    href="https://wa.me/918926109916"
                    target="_blank"
                    rel="noreferrer"
                    className="social-pill-btn"
                    aria-label="WhatsApp"
                    title="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>

                  <a
                    href="https://github.com/OMMPRASAD952"
                    target="_blank"
                    rel="noreferrer"
                    className="social-pill-btn"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/omm-prasad-sahoo-934a45336"
                    target="_blank"
                    rel="noreferrer"
                    className="social-pill-btn"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="https://www.instagram.com/_royal_ritesh/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-pill-btn"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://www.google.com/maps/place/MADHUSUDAN+BIHAR/@20.1228353,85.1003977,15z"
                    target="_blank"
                    rel="noreferrer"
                    className="social-pill-btn"
                    aria-label="Map"
                    title="Location Map"
                  >
                    <FaMapMarkerAlt />
                  </a>

                </div>
              </div>

            </motion.div>
          </div>

          {/* ================= RIGHT CONTACT FORM ================= */}

          <div className="col-lg-7">
            <motion.div
              className="contact-form-card p-4 p-md-5 h-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="h4 text-white fw-bold mb-4">
                Send Me a Message
              </h3>

              {/* STATUS MESSAGE */}

              {status.message && (
                <div
                  className={`alert ${
                    status.success
                      ? "alert-success"
                      : "alert-danger"
                  } d-flex align-items-center gap-2 mb-4`}
                >
                  {status.success ? (
                    <FaCheckCircle />
                  ) : (
                    <FaExclamationTriangle />
                  )}

                  <span>
                    {status.message}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit}>

                {/* NAME + EMAIL */}

                <div className="row g-3">

                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label className="form-label text-slate-300 small">
                        Your Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="form-control custom-input"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label className="form-label text-slate-300 small">
                        Your Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        className="form-control custom-input"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                </div>

                {/* SUBJECT */}

                <div className="form-group mb-3">
                  <label className="form-label text-slate-300 small">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    className="form-control custom-input"
                    placeholder="Internship Inquiry / Project Collaboration"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* MESSAGE */}

                <div className="form-group mb-4">
                  <label className="form-label text-slate-300 small">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    className="form-control custom-input"
                    placeholder="Hello, I would like to discuss..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* SEND BUTTON */}

                <button
                  type="submit"
                  className="btn btn-primary-cyan w-100 py-3 d-inline-flex align-items-center justify-content-center gap-2"
                  disabled={status.loading}
                >
                  {status.loading ? (
                    "Sending Message..."
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;