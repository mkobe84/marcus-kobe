import React from "react";

const Projects = ({ theme }) => {
  const projects = [
    {
      image: "/marcus-kobe/assets/kirbySC.png",
      hoverTitle: "Kirby's Journal",
      description:
        "A journaling website that takes advantage of your device's camera and recognizes hand gestures to create journal entries.",
      techStack: ["React", "Tailwind", "Node.js"],
      website: "https://your-kirby-site.com",
    },
    {
      image: "/marcus-kobe/assets/brainboostSC.png",
      hoverTitle: "BrainBoost",
      description:
        "A student learning dashboard developed for Prenostik to help improve graduation rates through data analysis.",
      techStack: ["Next.js", "TypeScript", "Local Storage"],
      website: "https://your-brainboost-site.com",
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
                  ? "bg-transparent text-white border-[#333]"
                  : "bg-transparent text-black border-[#EBE8E2]"
              } flex w-full h-full flex-col p-4 rounded-xl border border-2`}
            >
              <div className="w-full aspect-video bg-[#f9f9f9] rounded-md overflow-hidden border border-gray-300">
                <img
                  src={project.image}
                  alt={project.hoverTitle}
                  className="w-full h-full object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <h2 className=" text-xl mt-2">{project.hoverTitle}</h2>
              <p className="text-sm text-start">{project.description}</p>

              <div className="mt-3 flex flex-wrap justify-start gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-[#333] text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* website button */}
              {project.website && (
                <div className="mt-1 text-start">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.website}
                    className="px-3 py-1 text-xs font-medium rounded-md bg-[#0b7763] text-white hover:bg-[#095f50] transition"
                  >
                    website!
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
