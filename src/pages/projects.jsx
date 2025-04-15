import React from "react";

const Projects = ({ theme }) => {
  const projects = [
    {
      image: "/marcus-kobe/assets/kirbySC.png",
      hoverTitle: "Kirby's Journal",
      description:
        "A journaling website that takes advantage of your device's camera and recognizes hand gestures to create journal entries.",
      techStack: ["React", "Tailwind", "Node.js"],
    },
    {
      image: "/marcus-kobe/assets/brainboostSC.png",
      hoverTitle: "BrainBoost",
      description:
        "A student learning dashboard developed for Prenostik to help improve graduation rates through data analysis.",
      techStack: ["Next.js", "TypeScript", "Local Storage"],
    },
  ];

  return (
    <div>
      <h2 className="title text-2xl sm:text-3xl font-doto text-[#0b7763] flex gap-2 p-2 mb-8">
        featured projects
        <img
          src="/marcus-kobe/assets/projects.png"
          alt="projects"
          className="w-8 h-8 mt-2"
        />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group w-full rounded-lg transition-transform duration-300"
          >
            <div
              className={`${
                theme === "dark"
                  ? "bg-[#697565] text-white"
                  : "bg-[#ECDFCC] text-black"
              } flex w-full h-full flex-col p-4 rounded-xl`}
            >
              <h2 className="font-bold text-lg pb-2">{project.hoverTitle}</h2>

              {/* Consistent image container */}
              <div className="w-full aspect-video bg-[#f9f9f9] rounded-md overflow-hidden border border-gray-300">
                <img
                  src={project.image}
                  alt={project.hoverTitle}
                  className="w-full h-full object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              <p className="text-sm text-center mt-3">{project.description}</p>

              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-[#333] text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
