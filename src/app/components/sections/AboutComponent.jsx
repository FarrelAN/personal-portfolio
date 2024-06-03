"use client";
import React, { useState } from "react";
import Skills from "../ui/Skills";
import TabButton from "../ui/TabButton";
import { motion } from "framer-motion";
import Image from "next/image";
import Carousel from "../ui/Carousel";
import ExperienceSection from "./ExperienceSection";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <Skills />,
  },
  {
    title: "Experience",
    id: "experience",
    content: <ExperienceSection />,
  },
];

const AboutComponent = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="lg:py-48 py-32 px-4 sm:mt-12 mt-12 " name="about">
      <div className="flex flex-col lg:flex-row gap-5 mb-20">
        <div className="w-full ">
          <Carousel />
        </div>
        <div className="text-center mb-16 lg:mb-0 w-full h-full items-center justify-center lg:mt-24 ">
          <h2 className="mt-auto text-3xl font-bold text-white mb-8">
            Who Am I?
          </h2>
          <p className="lg:text-xl text-center mx-10 items-center justify-between">
            Hey there! 👋 I'm a passionate computer engineering student with a
            knack for software development. I love crafting full-stack mobile
            and web applications using Java, Kotlin, Node.js, React.js, Next.js,
            and React Native. I also enjoy engineering IoT devices 🚀, exploring
            the latest in technology 💻, diving into business and science 📈🔬,
            and indulging in cinematography 🎥. I'm all about innovation and
            teamwork, and I'm excited to bring my skills and enthusiasm to a
            dynamic team as a software developer. Let's build something amazing
            together! 🌟
          </p>
          ac
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <Skills />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h2 className="text-3xl font-bold mb-8 mt-8 lg:mt-0">Experience</h2>
          <ExperienceSection />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutComponent;
