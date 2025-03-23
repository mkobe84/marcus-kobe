import React, { useState } from "react";
import ghIcon from "./assets/github.svg";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("work"); // Track active tab
  const [activeHeader, setHeader] = useState("home"); // Track active tab

  const [theme, setTheme] = useState("light"); // Track theme (light/dark)

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const ProjectCard = ({ title, description, techStack }) => {
    return (
      <div className="relative group w-full h-48 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
        {/* Default view: Blank image with title */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
          <span className="text-lg font-semibold">{title}</span>
        </div>

        {/* Hover effect: Dark overlay with project details */}
        <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <p className="text-gray-300 text-sm text-center mt-2">
            {description}
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium text-white bg-gray-700 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const projects = [
    {
      title: "Kirby's Journal",
      description:
        "A journaling website that takes advantage of your devices camera and recognizes certain hand gestures to specific actions on the website such as creating new journal entries.",
      techStack: ["React", "Tailwind", "Node.js"],
    },
    {
      title: "BrainBoost",
      description:
        "A student learning dashboard developed for Prenostik, designed to collect and analyze student data to support initiatives aimed at improving graduation rates.",
      techStack: ["Next.js", "TypeScript", "Local Storage"],
    },
  ];
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
            src={ghIcon}
            alt="github"
            className="w-6 h-6 hover:bg-gray-300"
          />
        </a>
        <a
          href="https://www.linkedin.com/i/marcus-kobe-herrera/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-9 w-9 rounded-md p-1 transition-colors duration-200 hover:bg-gray-300 hover:bg-opacity-30"
        >
          <img
            src="./marcus-kobe/linkedin.svg"
            alt="linkedin"
            className="w-6 h-6 hover:bg-gray-300"
          />
        </a>
        <a
          href="mailto:mkobe84@gmail.com"
          className="inline-flex items-center justify-center h-9 w-9 rounded-md p-1 transition-colors duration-200 hover:bg-gray-300 hover:bg-opacity-30"
        >
          <img
            src="./marcus-kobe/envelope.svg"
            alt="email"
            className="w-6 h-6 hover:bg-gray-300"
          />
        </a>
      </div>
    );
  };
  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-[#292929] text-white"
          : 'theme === "light" text-black'
      } min-h-screen transition-all duration-300`}
    >
      <div className="mx-auto flex max-w-2xl flex-col px-8 font-doto">
        <main className="grow">
          {/* Navbar */}
          <header className="sticky top-0 bg-background/75 py-6 backdrop-blur-md font-doto text-xs">
            <nav className="flex items-center justify-between">
              {/* Navigation Links */}
              <ul className="flex gap-4 sm:gap-6">
                <li className="link">
                  <a
                    href="/"
                    className={`transition-colors duration-200 hover:text-[#0b7763] hover:underline ${
                      activeHeader === "home"
                        ? "text-[#0b7763]"
                        : "text-gray-500 hover:text-[#0b7763]"
                    }`}
                    onClick={() => setHeader("home")}
                  >
                    home
                  </a>
                </li>
                <li className="link">
                  <a
                    href="/projects"
                    className={`transition-colors duration-200 hover:text-[#0b7763] hover:underline ${
                      activeHeader === "projects"
                        ? "text-[#0b7763]"
                        : "text-gray-500 hover:text-[#0b7763]"
                    }`}
                    onClick={() => setHeader("projects")}
                  >
                    projects
                  </a>
                </li>
                <li className="link">
                  <a
                    href="/contact"
                    className={`transition-colors duration-200 hover:text-[#0b7763] hover:underline ${
                      activeHeader === "contact"
                        ? "text-[#0b7763]"
                        : "text-gray-500 hover:text-[#0b7763]"
                    }`}
                    onClick={() => setHeader("contact")}
                  >
                    contact
                  </a>
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
                        ? "./marcus-kobe/electric.svg"
                        : "./marcus-kobe/darkicon.svg"
                    }
                    alt="Theme icon"
                    height="30"
                    width="30"
                  />
                </button>
              </div>
            </nav>
          </header>

          <article className="flex flex-col gap-16 pb-16">
            {/* Welcome Section */}
            <section className="flex flex-col p-2 items-start gap-8 md:flex-row md:items-center md:justify-between">
              <img
                alt="profile"
                width="200"
                height="200"
                className="rounded-xl"
                src="./marcus-kobe/pfp2.png"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-dotoital flex gap-2 text-[#0b7763]">
                  hi kobe here
                  <img
                    src="./marcus-kobe/player.png"
                    alt="player"
                    className="w-10 h-10"
                  />
                </h1>

                <p>
                  22 year old <s className="text-red-800">pokemon trainer</s>{" "}
                  software developer who likes to code, but could not pick up
                  basketball
                </p>
                <section className="mt-8 flex items-center gap-16">
                  <a href="./MKH_Resume.pdf" download="MKH_Resume.pdf">
                    <button className="border hover:bg-[#0b7763] hover:text-white font-bold py-2 px-4 rounded inline-flex items-center mt-1">
                      <svg
                        class="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                      </svg>
                      <span>Trainer History</span>
                    </button>
                  </a>
                  <SocialLinks />
                </section>
              </div>
            </section>
            {/* Tabs Navigation */}
            <div className="grid">
              <h2 class="title text-2xl sm:text-3xl font-doto text-[#0b7763] flex gap-2">
                <p>experience</p>
                <img
                  src="./marcus-kobe/expshare.png"
                  alt="expshare"
                  className="w-8 h-8 mt-1"
                />
              </h2>
              <section className="flex justify-between border-b">
                <button
                  className={`px-6 py-2 text-lg font-semibold transition-all duration-300 text-[#0b7763] ${
                    activeTab === "work"
                      ? "border-b-4 border-[#0b7763]"
                      : "text-gray-500 hover:text-[#0b7763] hover:border-b-4 hover:border-[#0b7763]"
                  }`}
                  onClick={() => setActiveTab("work")}
                >
                  Work
                </button>
                <button
                  className={`px-6 py-2 text-lg font-semibold transition-all duration-300 text-[#0b7763] ${
                    activeTab === "education"
                      ? "border-b-4 border-[#0b7763]"
                      : "text-gray-500 hover:text-[#0b7763] hover:border-b-4 hover:border-[#0b7763]"
                  }`}
                  onClick={() => setActiveTab("education")}
                >
                  Education
                </button>
              </section>

              {/* Tab Content */}
              <section>
                {activeTab === "work" ? (
                  // Work Experience
                  <div className="mt-6 flex flex-col gap-6">
                    {/* Work Item 1 */}
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <img
                        src="./marcus-kobe/playpath.jpeg"
                        alt="PlayPath"
                        className="w-12 h-12 rounded-lg"
                      />
                      <div>
                        <h3 className="font-bold text-lg">PlayPath</h3>
                        <p className="text-sm">
                          Front End Developer Intern | May 2024 - Jul 2024
                        </p>
                        <ul className="mt-2 text-sm list-none pl-5">
                          <li>
                            Coded client-side programming and support for new
                            and existing web interfaces, primarily using Node.
                          </li>
                          <li>
                            Managed and resolved 33 tickets, addressing
                            front-end bugs, integrating plugins, and developing
                            new features.
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Work Item 2 */}
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <img
                        src="./marcus-kobe/prenostik.jpeg"
                        alt="Prenostik"
                        className="w-12 h-12 rounded-lg"
                      />
                      <div>
                        <h3 className="font-bold text-lg">Prenostik</h3>
                        <p className="text-sm">
                          Full Stack Developer Intern | Jan 2024 - May 2024
                        </p>
                        <ul className="mt-2 text-sm list-none pl-5">
                          <li>
                            Led development in designing and implementing a
                            student learning dashboard using React.js and
                            Node.js.
                          </li>
                          <li>
                            Collected 100 interviews for UI/UX research to make
                            wireframes for the dashboard.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Education Section
                  <div className="mt-6 flex flex-col gap-6">
                    {/* Education Item 1 */}
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="text-end">
                        <h3 className="font-bold text-lg">
                          University of California
                        </h3>
                        <p className="text-sm ">
                          B.S. in Software Engineering | Graduated Jun 2024
                        </p>
                        <ul className="mt-2 text-sm list-none pl-5">
                          <li>
                            Relevant Courses: Software Design | Human-Computer
                            Interaction | Web Development | Design and Analysis
                            of Algorithms
                          </li>
                        </ul>
                      </div>
                      <img
                        src="./marcus-kobe/uci.png"
                        alt="UCI"
                        className="w-12 h-12 rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </section>
            </div>

            {/* Project Section */}
            <section className="flex flex-col gap-8 p-2">
              <div class="flex justify-between">
                <h2 class="title text-2xl sm:text-3xl font-doto font-stretch-ultra-condensed text-[#0b7763] flex gap-2">
                  featured projects
                  <img
                    src="./marcus-kobe/projects.png"
                    alt="projects"
                    className="w-8 h-8 mt-2"
                  />
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
              <div className="flex justify-end">
                <a
                  class="link flex items-center gap-2 font-light"
                  href="/projects"
                >
                  <span className="text-[#0b7763]">view more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0b7763"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-right size-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </section>
            {/* Project Section */}
            <section className="flex flex-col gap-8">
              <div class="flex justify-between">
                <h2 class="title text-2xl sm:text-3xl font-doto font-stretch-ultra-condensed text-[#0b7763] flex gap-2">
                  tech stack
                  <img
                    src="./marcus-kobe/revive.png"
                    alt="revive"
                    className="w-8 h-8 mt-1"
                  />
                </h2>
              </div>
            </section>
          </article>
          <footer className="py-6">
            <div className="flex justify-center gap-6">
              <p className="mt-2 text-sm text-[#0b7763]">
                © 2025 Marcus Kobe Herrera | One day or day one
              </p>
              <SocialLinks />
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
