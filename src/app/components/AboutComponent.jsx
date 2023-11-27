"use client";
import AboutSection from "./AboutSection";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const AboutComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      name="about"
      className="relative bg-no-repeat bg-cover bg-top rounded-xl border lg:h-[820px] border-[#121212] lg:mt-0 mt-16 first-letter:py-8 px-4 justify-center items-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "darken",
        backgroundImage: `url('/images/aboutprofile.jpg')`,
        fallbackBackground: "#333",
      }}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <AboutSection />
    </div>
  );
};

export default AboutComponent;
