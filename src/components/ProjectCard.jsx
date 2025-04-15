import React from "react";

const ProjectCard = ({
  title,
  hoverTitle,
  description,
  techStack,
  website,
}) => {
  return (
    <div
      className="relative group w-full h-64 rounded-lg overflow-hidden flex items-center justify-center animate-rotate-border 
    rounded-lg  hover:scale-[1.03] hover:bg-conic/[from_var(--border-angle)] from-black via-[#0b7763] from-80% via-90% to-100% p-px perspective "
    >
      {/* Default view: Blank image with title */}
      <div
        className={`${
          theme === "dark" ? "bg-neutral-900 " : "bg-[#e5e5e5]"
        } w-full h-full inset-0 flex items-center justify-center rounded-lg p-10 border-black`}
      >
        <span className="text-lg">{title}</span>
      </div>
      {/* Hover effect: Dark overlay with project details */}
      <div
        className={`${
          theme === "dark" ? "bg-neutral-900 " : "bg-[#e5e5e5]"
        } absolute inset-0 bg-opacity-90 flex flex-col items-center m-1 justify-center opacity-0   group-hover:opacity-100 transition-opacity duration-300 p-4 `}
      >
        <h3 className="font-bold text-lg font-dotoital text-[#0b7763]">
          {hoverTitle}
        </h3>
        <p className="text-gray-600 text-sm text-center mt-2">{description}</p>
        <div className="mt-3 flex flex-wrap justify-center gap-2 ">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-md bg-[#333] text-white"
            >
              {tech}
            </span>
          ))}
          <a
            target="_blank"
            href={website}
            className="px-2 py-1 text-xs font-medium rounded-md bg-[#0b7763] text-white"
          >
            website!
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
