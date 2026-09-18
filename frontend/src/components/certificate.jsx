import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

function Certificate() {
  return (
    <section className="container py-5">
      <motion.div
        className="card text-center shadow-lg border-0"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        style={{
          background: "#1e293b",
          borderRadius: "20px",
        }}
      >
        <div className="card-body p-5">
          <FaCertificate
            size={60}
            color="#38bdf8"
            className="mb-3"
          />

          <h2 className="text-white">
            Certificates
          </h2>

          <p className="text-light">
            View all my professional certifications,
            hackathons and achievements.
          </p>

          <Link
            to="/certificates"
            className="btn btn-info px-4 mt-3"
          >
            View Certificates
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Certificate;