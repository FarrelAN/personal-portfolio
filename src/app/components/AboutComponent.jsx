import AboutSection from "./AboutSection";
import React from "react";

const AboutComponent = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/images/aboutbg-2.png)",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "darken",
      }}
      className="relative bg-cover bg-top bg-blend-darken rounded-xl border border-white py-8 px-4 sm:mt-12 mt-12"
    >
      <AboutSection />
    </div>
  );
};

export default AboutComponent;
