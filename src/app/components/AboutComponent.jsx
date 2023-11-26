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
      className="relative bg-cover bg-top rounded-xl border lg:h-[820px] border-[#121212] mt-4 first-letter:py-8 px-4 justify-center items-center lg:bg-[url('/images/aboutbg-2.png')] bg-[url('/images/IMG_3032.JPG')]"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "darken",
      }}
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <AboutSection />
    </div>
  );
};

export default AboutComponent;
