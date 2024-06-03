import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceCard = ({ title, company, duration, details, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg p-4 mb-4 transition-all duration-300">
      <div className="flex flex-row items-start space-x-4">
        <div className="flex-shrink-0 w-16 h-16 lg:w-24 lg:h-24">
          {image && (
            <img
              src={image}
              alt={`${company} logo`}
              className="w-full h-full object-contain rounded-xl"
            />
          )}
        </div>
        <div className="flex-grow text-white text-md">
          <h3 className="lg:text-xl text-md font-semibold">{title}</h3>
          <p>{company}</p>
          <p>{duration}</p>
          {details && (
            <button
              onClick={toggleExpand}
              className="mt-2 text-sm text-blue-400 hover:underline focus:outline-none flex items-center"
            >
              <span>{isExpanded ? "Show Less" : "Show More"}</span>
              <motion.div
                className="ml-2"
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </motion.div>
            </button>
          )}
        </div>
      </div>
      <AnimatePresence>
        {isExpanded && details && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-white"
          >
            <p>{details}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExperienceCard;
