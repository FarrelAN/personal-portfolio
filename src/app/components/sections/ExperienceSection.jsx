import React from "react";
import ExperienceCard from "../ui/ExperienceCard";

const experiences = [
  {
    title: "Cyber & Information Security Intern",
    company: "PT. Grab Teknologi Indonesia",
    duration: "Sep 2024 - Des 2024",
    details:
      "Structured and updated cyber security policies for Grab and its subsidiaries to ensure alignment with current cyber security standards and regulations issued by governing bodies and relevant authorities.\nActively participated in company audits and discussions for ISO certification and cyber security maturity assessments, ensuring the company meets industry benchmarks and regulatory compliance requirements.\nContributed to the development of AI-based solutions to map and analyze the company's policy framework, identifying gaps and areas for improvement while streamlining compliance processes with applicable regulations.",
    image:
      "https://media.licdn.com/dms/image/v2/C510BAQGDlPEJILPXbw/company-logo_200_200/company-logo_200_200/0/1630575649647/grabapp_logo?e=1746662400&v=beta&t=BYRNJGav_qONlcqsIFTtvyWSaHkNfa1cfHkMhnq4WCE",
  },
  {
    title: "Assistant Project Controller Intern",
    company: "PT. Huawei Tech Investment",
    duration: "Jul 2024 - Aug 2024",
    details:
      "Responsible for assisting the project controller in managing project financials and reports, including daily database update and BoQ reports\nAssisted in the development of a project financial risk assessment model, providing actionable insights to project managers to mitigate financial risks and improve project profitability",
    image:
      "https://media.licdn.com/dms/image/v2/C510BAQEtZ01_ey5nIA/company-logo_200_200/company-logo_200_200/0/1630625880354/huawei_logo?e=1746662400&v=beta&t=hcjFAJipTQTy1p23G6PQpZcwrUtj-P3TGDNbSYISPVA",
  },
  {
    title: "Chief Information Security Office (CISO) Intern",
    company: "PT. Bank Mandiri Persero Tbk.",
    duration: "Feb 2024 - Jun 2024",
    details:
      "Developed a centralized cybersecurity management system to streamline account suspension processes and improving the bank's response time to compromised accounts\nIntegrated an AI-automated report system for compromised employee accounts using various LLM models, providing actionable insights to strengthen employee-focused security measures\nActively monitored and analyzed incoming cyber threats targeting Bank Mandiri's 300+ systems and applications contributing to the Security Operations Center (SOC) team's threat detection and prevention efforts.",
    image:
      "https://media.licdn.com/dms/image/v2/C510BAQE3N-B3kStdZA/company-logo_200_200/company-logo_200_200/0/1630564010913/bank_mandiri_logo?e=1746662400&v=beta&t=0F84BY9iuKEnl-hWCEzUEjzqT1uNFuFHXytq-tLmsv8",
  },
  {
    title: "Lead Frontend Developer Intern",
    company: "Hellocation",
    duration: "Sep 2023 - Jan 2024",
    details:
      "Responsible for leading the frontend team in the development and implementation of a centralized management website for the company's distinct divisions and operations.\nResponsible for translating UI designs given by the design team into high-quality, functional code, while ensuring the technical feasibility of UI/UX designs.\nCollaborate and work closely with back-end developers and web designers to improve the usability of the company's website and ensure a functional seamless user experience",
    image:
      "https://media.licdn.com/dms/image/v2/C560BAQGPAEo8TEmWhQ/company-logo_200_200/company-logo_200_200/0/1645203295071/hellocation_logo?e=1746662400&v=beta&t=IuZmKGQ1pl-IG26JfxsUWFAG0ysvK2BdZGQfN4CRH9w", // Replace with actual image URL
  },
  {
    title: "Software Engineer",
    company: "EXERCISE FTUI",
    duration: "Feb 2023 - Dec 2023",
    details:
      "Built and developed an integrated cybersecurity component for whitelisting/blacklisting IP addresses as part of the EXERCISE FTUI cybersecurity GitHub library.\nDeveloped a centralized research web application for external clients, responsible for handling sample research and analysis operations within the laboratory",
    image:
      "https://media.licdn.com/dms/image/v2/C510BAQEPol65dOGBHQ/company-logo_200_200/company-logo_200_200/0/1630584879468?e=1746662400&v=beta&t=7YI2gLikb2opkKi8xb3kgO4wqs8dsnL5EFaTikOBb5Y", // Replace with actual image URL
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
