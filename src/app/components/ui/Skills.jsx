import { useEffect, useRef } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";

const Skills = () => {
  const hintRef = useRef(null);

  useEffect(() => {
    AOS.init();

    const currentHintRef = hintRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentHintRef.classList.add("show-hint");
          } else {
            currentHintRef.classList.remove("show-hint");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentHintRef) {
      observer.observe(currentHintRef);
    }

    return () => {
      if (currentHintRef) {
        observer.unobserve(currentHintRef);
      }
    };
  }, []);

  const skillsData = [
    {
      id: 1,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "HTML icon",
      label: "HTML",
      level: "Advanced",
    },
    {
      id: 2,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      alt: "CSS icon",
      label: "CSS",
      level: "Advanced",
    },
    {
      id: 3,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript icon",
      label: "JavaScript",
      level: "Advanced",
    },
    {
      id: 4,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "Typescript icon",
      label: "Typescript",
      level: "Intermediate",
    },
    {
      id: 5,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React icon",
      label: "React.js",
      level: "Advanced",
    },
    {
      id: 6,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      alt: "Next icon",
      label: "Next.js",
      level: "Advanced",
    },
    {
      id: 7,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node icon",
      label: "Node.js",
      level: "Advanced",
    },
    {
      id: 8,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      alt: "Express icon",
      label: "Express",
      level: "Advanced",
    },
    {
      id: 9,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind icon",
      label: "Tailwind CSS",
      level: "Advanced",
    },
    {
      id: 10,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      alt: "Java Icon",
      label: "Java",
      level: "Intermediate",
    },
    {
      id: 11,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      alt: "Kotlin icon",
      label: "Kotlin",
      level: "Novice",
    },
    {
      id: 12,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      alt: "Google Firebase icon",
      label: "Google Firebase",
      level: "Intermediate",
    },
    {
      id: 13,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
      alt: "PostgreSQL icon",
      label: "PostgreSQL",
      level: "Advanced",
    },
    {
      id: 14,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      alt: "GitHub icon",
      label: "GitHub",
      level: "Advanced",
    },
    {
      id: 15,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      alt: "Figma icon",
      label: "Figma",
      level: "Novice",
    },
    {
      id: 16,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      alt: "Canva icon",
      label: "Canva",
      level: "Intermediate",
    },
  ];

  return (
    <div className="px-4">
      <div ref={hintRef} className="hint text-white text-center mt-4">
        Hover over the icons to see my proficiency level!
      </div>
      <div className="grid w-full lg:grid-cols-4 grid-cols-2 gap-4 lg:pt-2 text-center font-semibold">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105"
            data-aos="fade-right"
          >
            <Image
              className="w-16 h-16 mx-auto pt-3"
              src={skill.image}
              alt={skill.alt}
              width={64}
              height={64}
            />
            <p className="mt-4 text-lg text-white">{skill.label}</p>
            <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-white text-xl">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-white text-xl mt-4 text-center">And many more...</p>
    </div>
  );
};

export default Skills;
