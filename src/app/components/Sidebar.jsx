import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-50">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#004182]">
          <a
            className="flex items-center justify-between w-full text-gray-300 ml-6 pr-3"
            href="https://www.linkedin.com/in/farrelan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            className="flex items-center justify-between w-full text-gray-300 ml-6 pr-3"
            href="https://github.com/FarrelAN"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c71610]">
          <a
            className="flex items-center justify-between w-full text-gray-300 ml-6 pr-3"
            href="mailto:farrelathaillah97@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00b190]">
          <a
            className="flex items-center justify-between w-full text-gray-300 ml-6 pr-3"
            href="https://drive.google.com/file/d/1fIf8YDOVz7oD3Zy-3V3I2fU5Nig1CzGQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
