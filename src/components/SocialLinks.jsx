import React from "react";
import { Link } from "react-router-dom";

const SocialLinks = ({ className }) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      <a
        href="https://github.com/mkobe84"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center h-9 w-9 rounded-md transition-colors duration-200 hover:bg-gray-300 hover:bg-opacity-30"
      >
        <img
          src="/marcus-kobe/assets/github.svg"
          alt="gh"
          className="w-6 h-6 hover:bg-gray-300"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/marcus-kobe-herrera/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center h-9 w-9 rounded-md p-1 transition-colors duration-200 hover:bg-gray-300 hover:bg-opacity-30"
      >
        <img
          src="/marcus-kobe/assets/linkedin.svg"
          alt="linkedin"
          className="w-6 h-6 hover:bg-gray-300"
        />
      </a>
      <a
        href="mailto:mkobe84@gmail.com"
        className="inline-flex items-center justify-center h-9 w-9 rounded-md p-1 transition-colors duration-200 hover:bg-gray-300 hover:bg-opacity-30"
      >
        <img
          src="/marcus-kobe/assets/envelope.svg"
          alt="email"
          className="w-6 h-6 hover:bg-gray-300"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
