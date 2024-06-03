import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0, opacity: 0 },
  active: { width: "calc(100% - 0.75rem)", opacity: 1 },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#45caff]" : "text-white";

  return (
    <button onClick={selectTab} className="mb-4 lg:mb-0 focus:outline-none">
      <h2
        className={`mr-3 text-2xl font-semibold transition-colors duration-300 hover:text-blue-400 ${buttonClasses}`}
      >
        {children}
      </h2>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="border-b-4 border-[#09C6F9] mr-3"
        transition={{ duration: 0.3 }}
      ></motion.div>
    </button>
  );
};

export default TabButton;
