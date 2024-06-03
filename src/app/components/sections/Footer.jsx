import React from "react";
import Logo1 from "@/public/images/logo1.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border-t border-gray-700 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src={Logo1}
            alt="Logo"
            width={40}
            height={40}
            className="mr-3"
          />
          <span className="text-lg font-semibold">Farrel A N</span>
        </div>
        <p className="text-gray-400 text-sm">
          © 2024 Farrel A N. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/FarrelAN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.23c-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.088-.745.084-.729.084-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.774.419-1.305.762-1.605-2.666-.304-5.466-1.333-5.466-5.933 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.233.957-.266 1.982-.399 3.003-.404 1.02.005 2.046.138 3.004.404 2.29-1.555 3.297-1.233 3.297-1.233.654 1.653.242 2.873.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.802 5.625-5.472 5.921.432.373.82 1.104.82 2.226v3.293c0 .321.219.694.824.576C20.565 21.8 24 17.303 24 12 24 5.372 18.628 0 12 0z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/farrelan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9.57h3.56v10.88zM5.34 8.14c-1.15 0-1.88-.78-1.88-1.75 0-.99.75-1.75 1.91-1.75 1.16 0 1.88.76 1.88 1.75-.02.97-.72 1.75-1.91 1.75zm14.89 12.31h-3.56V14.8c0-1.4-.49-2.36-1.71-2.36-.94 0-1.5.63-1.75 1.24-.09.22-.12.53-.12.84v5.92H9.52V9.57h3.56v1.47c.47-.74 1.31-1.8 3.2-1.8 2.33 0 4.09 1.52 4.09 4.79v6.42z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
