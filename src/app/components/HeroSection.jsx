"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";
import Link from "next/link";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      name="home"
      className="h-screen flex flex-col-reverse lg:flex-row lg:mb-0 mb-32 lg:pb-56 justify-center lg:pl-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <h1
          className="text-white max-w-2xl mb-4 lg:text-5xl text-4xl font-extrabold"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#09C6F9] to-[#045DE9]">
            Hello, I&lsquo;m {""}
          </span>

          <TypeAnimation
            sequence={[
              "Farrel A N ",
              1000,
              "a Mobile Developer ",
              1000,
              "a Web Developer",
              1000,
              "a Video Editor",
              1000,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
          />
        </h1>
        <p
          className="text -[#ADB7BE] mb-6 mx-6 text-lg lg:text-2xl p-5"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Wanna get to know me better? Check out my portfolio and contact me for
          your professional needs!
        </p>

        <div
          className="flex flex-col lg:flex-row gap-5 w-[100%] mx-auto items-center lg:ml-5"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Link
            href="/#contact"
            className="bg-gradient-to-br from-[#09C6F9] to-[#045DE9] text-white px-6 py-3 rounded-full "
          >
            Hire Me
          </Link>
          <Link
            href="http://tiny.cc/FarrelANResume"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#09C6F9] to-[#045DE9] hover:bg-slate-800 text-white px-6 py-3 rounded-full"
          >
            Check My Resume!
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 place-self-center mt-4 lg:mt-0"
      >
        <div
          className="bg-[#181818] lg:w-[350px] lg:h-[350px] w-[220px] h-[220px] rounded-full relative mx-auto overflow-hidden lg:mb-0 mb-8"
          data-aos="fade-left"
          data-aos-delay="700"
        >
          <Image
            src="/images/heroprofile.png"
            alt="hero"
            className="w-full h-full absolute transform -translate-x-1/6 -translate-y-1/2 top-1/2"
            width={350}
            height={350}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
