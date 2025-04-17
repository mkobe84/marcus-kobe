import React, { useState } from "react";

const ProjectCard = ({
  title,
  hoverTitle,
  description,
  techStack,
  website,
  activeMobileCard,
  setActiveMobileCard,
  index,
}) => {
  const isMobile = window.innerWidth <= 768;
  const isActive = activeMobileCard === index;

  const handleClick = () => {
    if (isMobile) {
      setActiveMobileCard(isActive ? null : index);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="relative group w-full h-64 rounded-lg overflow-hidden flex items-center justify-center animate-rotate-border hover:scale-[1.03] hover:bg-conic/[from_var(--border-angle)] from-black via-[#0b7763] from-80% via-90% to-100% p-px perspective"
    >
      <div
        className={`${
          theme === "dark" ? "bg-neutral-900" : "bg-[#e5e5e5]"
        } w-full h-full inset-0 flex items-center justify-center rounded-lg p-10 border-black`}
      >
        <span className="text-lg">{title}</span>
      </div>

      <div
        className={`${
          theme === "dark" ? "bg-neutral-900" : "bg-[#e5e5e5]"
        } absolute inset-0 bg-opacity-90 flex flex-col items-center m-1 justify-center transition-opacity duration-300 p-4
        ${
          isMobile
            ? isActive
              ? "opacity-100"
              : "opacity-0"
            : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <h3 className="font-bold text-lg font-dotoital text-[#0b7763]">
          {hoverTitle}
        </h3>
        <p className="text-gray-600 text-sm text-center mt-2">{description}</p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium rounded-md bg-[#333] text-white"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          target="_blank"
          href={website}
          className="inline-flex justify-center gap-2 px-2 py-1 text-xs font-medium rounded-md bg-[#0b7763] text-white mt-4"
        >
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 10V18C3 19.1046 3.89543 20 5 20H9M3 10V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V10M3 10H21M21 10V13"
              stroke="white"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 16L13 18L15 20"
              stroke="white"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 16L21 18L19 20"
              stroke="white"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle cx="6" cy="7" r="1" fill="#000000" />
            <circle cx="9" cy="7" r="1" fill="#000000" />
          </svg>
          website!
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
