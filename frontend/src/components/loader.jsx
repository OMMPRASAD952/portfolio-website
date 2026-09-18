import React, { useState, useEffect } from "react";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING SYSTEMS...");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds total loading animation
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setStatusText("WELCOME");
          
          // Trigger fade out after reaching 100%
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              if (onFinish) onFinish();
            }, 600); // match CSS fade-out duration
          }, 300);

          return 100;
        }

        // Update status text based on progress stage
        if (next > 75) {
          setStatusText("PREPARING EXPERIENCE...");
        } else if (next > 45) {
          setStatusText("LOADING ASSETS & PROJECTS...");
        } else if (next > 20) {
          setStatusText("CONNECTING MODULES...");
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className={`loader-overlay ${isFading ? "loader-fade-out" : ""}`}>
      <div className="loader-bg-grid"></div>
      <div className="loader-glow-orb"></div>

      <div className="loader-content">
        {/* Ring Container */}
        <div className="loader-ring-wrapper">
          <div className="loader-ring outer-ring"></div>
          <div className="loader-ring inner-ring"></div>
          <div className="loader-pulse-core"></div>
          <div className="loader-percentage">
            {Math.floor(progress)}
            <span className="percent-symbol">%</span>
          </div>
        </div>

        {/* Brand / Title */}
        <h2 className="loader-title">PORTFOLIO</h2>

        {/* Progress Bar */}
        <div className="loader-bar-container">
          <div
            className="loader-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Status Text */}
        <div className="loader-status">
          <span className="status-dot"></span>
          <span className="status-text">{statusText}</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;