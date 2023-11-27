import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skillsData = [
    {
      id: 1,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "HTML icon",
      label: "HTML",
    },
    {
      id: 2,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      alt: "CSS icon",
      label: "CSS",
    },
    {
      id: 3,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript icon",
      label: "JavaScript",
    },
    {
      id: 4,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "Typescript icon",
      label: "Typescript",
    },
    {
      id: 5,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React icon",
      label: "React.js",
    },
    {
      id: 6,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      alt: "Next icon",
      label: "Next.jss",
    },
    {
      id: 7,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node icon",
      label: "Node.js",
    },
    {
      id: 8,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      alt: "Express icon",
      label: "Express",
    },
    {
      id: 9,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      alt: "Tailwind icon",
      label: "Tailwind CSS",
    },
    {
      id: 10,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      alt: "Java Icon",
      label: "Java",
    },
    {
      id: 11,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      alt: "Kotlin icon",
      label: "Kotlin",
    },
    {
      id: 12,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      alt: "Google Firebase icon",
      label: "Google Firebase",
    },
    {
      id: 13,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
      alt: "PostgreSQL icon",
      label: "PostgreSQL",
    },

    {
      id: 14,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      alt: "GitHub icon",
      label: "GitHub",
    },
    {
      id: 15,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      alt: "Figma icon",
      label: "Figma",
    },
    {
      id: 16,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      alt: "Canva icon",
      label: "Canva",
    },
  ];

  return (
    <div>
      <div className="grid w-full lg:grid-cols-4 grid-cols-2 lg:gap-4 gap-1 lg:pt-8 text-center">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="shadow-md shadow-[#040c16] opacity-20"
            data-aos="fade-right"
          >
            <img
              className="lg:w-20 w-10 mx-auto pt-3"
              src={skill.image}
              alt={skill.alt}
            />
            <p className="my-4">{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
