"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <h3 className="text-xl font-semibold ">Frontend Web Development</h3>
          <p className="text-white ">React.js</p>
          <p className="text-white ">Next.js</p>
          <p className="text-white ">React Native</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold mt-4">
            Backend Web Development
          </h3>
          <p className="text-white ">Node.js</p>
          <p className="text-white ">Express.js</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold mt-4">Mobile App Development</h3>
          <p className="text-white ">React Native</p>
          <p className="text-white ">Java</p>
          <p className="text-white ">Kotlin</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold mt-4">Database Management</h3>
          <p className="text-white ">PostgreSQL</p>
          <p className="text-white ">Firebase</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold mt-4">UI/UX Design</h3>
          <p className="text-white ">Figma</p>
          <p className="text-white ">Adobe Photoshop</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
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

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white items-center justify-center">
      <div className="items-center justify-center place-items-center py-8 px-4 xl:gap-16 sm:py-16 ">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          About Me
        </h2>
        <div className="mt-0 md:mt-2 items-center justify-center flex xl:flex-row flex-col">
          <p className="lg:text-xl text-justify max-w-xl">
            Enthusiastic computer engineering undergraduate specializing in
            software engineering, adept at developing full-stack mobile and web
            applications using Java, Kotlin, Node.js, React.js, Next.js, and
            React Native. Proven track record of public speaking engagements at
            various events. Passionate about technology, business, science, and
            cinematography. Highly motivated and results-oriented, seeking
            opportunities to contribute to dynamic teams and pursue a career as
            a software developer.
          </p>
          <div className="flex flex-col mt-8 ml-12">
            <div className="flex flex-row">
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
            <div className="flex flex-col mt-8 xl:h-[500px] h-[50px] overflow-auto">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
