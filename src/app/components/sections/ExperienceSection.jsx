import React from "react";
import ExperienceCard from "../ui/ExperienceCard";

const experiences = [
  {
    title: "Chief Information Security Office (CISO) Intern",
    company: "PT. Bank Mandiri Persero Tbk.",
    duration: "Feb 2024 - Jun 2024",
    details:
      "Tech stacks: Microsoft Power Apps, Microsoft Productivity Apps, HTML, CSS, JavaScript, TypeScript, Next.js, Express.js, MongoDB, Microsoft 365 OneDrive DLP, IBM SOAR, SIEM, Remedy IT Service Management Developed a centralized cybersecurity management system to streamline account suspension processes and improving the bank's response time to compromised accounts Integrated an AI-automated report system for compromised employee accounts using various LLM models, providing actionable insights to strengthen employee-focused security measures Actively monitored and analyzed incoming cyber threats targeting Bank Mandiri's 300+ systems and applications contributing to the Security Operations Center (SOC) team's threat detection and prevention efforts.",
    image:
      "https://media.licdn.com/dms/image/C510BAQE3N-B3kStdZA/company-logo_100_100/0/1630564010913/bank_mandiri_logo?e=1725494400&v=beta&t=eg1wROZSDCxyVHzK9wieN5nY8QlnNsAF5brHqzmb6kE",
  },
  {
    title: "Lead Frontend Developer Intern",
    company: "Hellocation",
    duration: "Sep 2023 - Jan 2024",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://media.licdn.com/dms/image/C560BAQGPAEo8TEmWhQ/company-logo_100_100/0/1645203295071/hellocation_logo?e=1725494400&v=beta&t=4I7UAdouMN6NsFULZh-lI-yChZQxjOPsnFn9nspAQ-o", // Replace with actual image URL
  },
  {
    title: "Software Engineer",
    company: "EXERCISE FTUI",
    duration: "Feb 2023 - Dec 2023",
    details: "Pellentesque habitant morbi tristique senectus et netus.",
    image:
      "https://media.licdn.com/dms/image/C510BAQEPol65dOGBHQ/company-logo_100_100/0/1630584879468?e=1725494400&v=beta&t=tGMQnfQAgEtiy0Hecp0SvDiqz_vh7bl0XMWRRsRbtNg", // Replace with actual image URL
  },
];

const ExperienceSection = () => {
  return (
    <div className="w-full px-4 py-2">
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          title={exp.title}
          company={exp.company}
          duration={exp.duration}
          details={exp.details}
          image={exp.image}
        />
      ))}
    </div>
  );
};

export default ExperienceSection;
