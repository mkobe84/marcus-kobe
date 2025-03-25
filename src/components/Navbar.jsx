import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setHeader, theme, toggleTheme }) => {
  return (
    <header className="sticky top-0 z-40 bg-background/75 py-6 backdrop-blur-md font-doto text-xs">
      <nav className="flex items-center justify-between">
        <ul className="flex gap-4 sm:gap-6">
          <li className="link">
            <Link
              to="/marcus-kobe"
              className={`transition-colors duration-200 hover:text-[#0b7763] hover:underline`}
              onClick={() => setHeader("home")}
            >
              home
            </Link>
          </li>
          <li className="link">
            <Link
              to="/marcus-kobe/projects"
              className={`transition-colors duration-200 hover:text-[#0b7763] hover:underline`}
              onClick={() => setHeader("projects")}
            >
              projects
            </Link>
          </li>
          <li className="link">
            <Link
              to="/marcus-kobe/contact"
              className={`transition-colors duration-200 hover:text-[#0b7763] hover:underline`}
              onClick={() => setHeader("contact")}
            >
              contact
            </Link>
          </li>
        </ul>
        {/* Theme Toggle Button */}
        <div className="flex gap-0 sm:gap-4">
          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center h-9 w-9 rounded-md p-1 transition-colors duration-200 hover:bg-gray-300 hover:bg-opacity-30"
          >
            <img
              src={
                theme === "light"
                  ? "/marcus-kobe/assets/electric.svg" // Light theme icon
                  : "/marcus-kobe/assets/darkicon.svg" // Dark theme icon
              }
              alt="Theme icon"
              height="30"
              width="30"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
