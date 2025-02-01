import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="flex flex-col bg-black rounded-xl overflow-hidden shadow-lg glassmorphic-card2">
      <div
        className="h-52 md:h-64 lg:h-72 bg-center bg-cover relative group"
        style={{ background: `url(${imgUrl}) center/cover no-repeat` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center mx-2"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center mx-2"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="p-4 text-white items-center justify-center">
        <h5 className="text-lg font-semibold mb-2 text-center">{title}</h5>
        <p className="text-sm text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
