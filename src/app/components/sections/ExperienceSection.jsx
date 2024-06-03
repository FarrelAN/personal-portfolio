import React from "react";
import ExperienceCard from "../ui/ExperienceCard";

const experiences = [
  {
    title: "Chief Information Security Office (CISO) Intern",
    company: "PT. Bank Mandiri Persero Tbk.",
    duration: "Feb 2024 - Jun 2024",
    details:
      "Developed a centralized cybersecurity management system to streamline account suspension processes and improving the bank's response time to compromised accounts\nIntegrated an AI-automated report system for compromised employee accounts using various LLM models, providing actionable insights to strengthen employee-focused security measures\nActively monitored and analyzed incoming cyber threats targeting Bank Mandiri's 300+ systems and applications contributing to the Security Operations Center (SOC) team's threat detection and prevention efforts.",
    image:
      "https://media.licdn.com/dms/image/C510BAQE3N-B3kStdZA/company-logo_100_100/0/1630564010913/bank_mandiri_logo?e=1725494400&v=beta&t=eg1wROZSDCxyVHzK9wieN5nY8QlnNsAF5brHqzmb6kE",
  },
  {
    title: "Lead Frontend Developer Intern",
    company: "Hellocation",
    duration: "Sep 2023 - Jan 2024",
    details:
      "Responsible for leading the frontend team in the development and implementation of a centralized management website for the company's distinct divisions and operations.\nResponsible for translating UI designs given by the design team into high-quality, functional code, while ensuring the technical feasibility of UI/UX designs.\nCollaborate and work closely with back-end developers and web designers to improve the usability of the company's website and ensure a functional seamless user experience",
    image:
      "https://media.licdn.com/dms/image/C560BAQGPAEo8TEmWhQ/company-logo_100_100/0/1645203295071/hellocation_logo?e=1725494400&v=beta&t=4I7UAdouMN6NsFULZh-lI-yChZQxjOPsnFn9nspAQ-o", // Replace with actual image URL
  },
  {
    title: "Software Engineer",
    company: "EXERCISE FTUI",
    duration: "Feb 2023 - Dec 2023",
    details:
      "Built and developed an integrated cybersecurity component for whitelisting/blacklisting IP addresses as part of the EXERCISE FTUI cybersecurity GitHub library.\nDeveloped a centralized research web application for external clients, responsible for handling sample research and analysis operations within the laboratory",
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
