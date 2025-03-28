import React from "react";

const Projects = ({ theme }) => {
  const projects = [
    {
      title: (
        <img
          src="/marcus-kobe/assets/Books.png"
          alt="gh"
          className="w-12 h-12"
        />
      ),
      hoverTitle: "Kirby's Journal",
      description:
        "A journaling website that takes advantage of your devices camera and recognizes certain hand gestures to specific actions on the website such as creating new journal entries.",
      techStack: ["React", "Tailwind", "Node.js"],
    },
    {
      title: (
        <img
          src="/marcus-kobe/assets/boost.png"
          alt="gh"
          className="w-12 h-12"
        />
      ),
      hoverTitle: "BrainBoost",
      description:
        "A student learning dashboard developed for Prenostik, designed to collect and analyze student data to support initiatives aimed at improving graduation rates.",
      techStack: ["Next.js", "TypeScript", "Local Storage"],
    },
  ];

  return (
    <div>
      <h2 className="title text-2xl sm:text-3xl font-doto text-[#0b7763] flex gap-2 p-2 p-px">
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
            className="relative group w-full h-100 rounded-lg overflow-hidden flex items-center justify-center  
          rounded-lg  hover:scale-[1.03]  p-px "
          >
            <div
              className={`${
                theme === "dark"
                  ? "bg-[#697565] text-white"
                  : "bg-[#ECDFCC] text-black"
              } flex w-full h-full flex-col p-4 rounded-xl`}
            >
              <h2 className="font-bold text-lg pb-2">{project.hoverTitle}</h2>
              <div className="bg-[#e5e5e5] w-full h-full inset-0 flex items-center justify-center rounded-lg border-black">
                <span className="text-lg font-semibold">{project.title}</span>
              </div>
              <p className="text-sm text-center mt-2">{project.description}</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 ">
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
