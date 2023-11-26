"use client";
import React, { useTransition, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skills from "./Skills";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <Skills />,
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 text-center">
        <li>
          <h3 className="text-xl font-semibold">
            Lead Frontend Developer Intern
          </h3>
          <p className="text-white">Hellocation</p>
          <p className="text-white">Sep 2023 - Present</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold mt-4">Software Engineer</h3>
          <p className="text-white">EXERCISE FTUI</p>
          <p className="text-white">2023</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold mt-4">
            Vice Chief of Video Editor
          </h3>
          <p className="text-white">Teknik Open House</p>
          <p className="text-white">2022</p>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="lg:max-h-[800px] text-white items-center justify-center">
      <div className="items-center justify-center place-items-center py-8 px-4 xl:gap-16 sm:py-16 ">
        <Slider beforeChange={handleSlideChange}>
          <div className="text-center py-4  xl:gap-16 sm:py-16 ">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              About Me
            </h2>
            <p className="lg:text-2xl text-center lg:mx-32">
              Enthusiastic computer engineering undergraduate specializing in
              software engineering, adept at developing full-stack mobile and
              web applications using Java, Kotlin, Node.js, React.js, Next.js,
              and React Native. Proven track record of public speaking
              engagements at various events. Passionate about technology,
              business, science, and cinematography. Highly motivated and
              results-oriented, seeking opportunities to contribute to dynamic
              teams and pursue a career as a software developer.
            </p>
          </div>
          <div>
            {" "}
            <div className="lg:text-3xl m font-bold text-center">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                {" "}
                Experience{" "}
              </TabButton>
            </div>
            <div className="flex flex-col mt-8 ">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default AboutSection;
