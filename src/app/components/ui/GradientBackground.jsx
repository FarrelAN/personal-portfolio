// components/GradientBackground.js
import React from "react";

const GradientBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-black">
      <div className="gradient-bg">
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
        </div>
      </div>
    </div>
  );
};

export default GradientBackground;
