import React, { useState } from "react"; // <-- Add useState here
import SocialLinks from "../components/SocialLinks";

const Home = ({ theme }) => {
  const [activeTab, setActiveTab] = useState("work"); // Track active tab

  const ProjectCard = ({ title, hoverTitle, description, techStack }) => {
    return (
      <div
        className="relative group w-full h-48 rounded-lg overflow-hidden flex items-center justify-center animate-rotate-border 
      rounded-lg  hover:scale-[1.03] hover:bg-conic/[from_var(--border-angle)] from-black via-[#0b7763] from-80% via-90% to-100% p-px perspective "
      >
        {/* Default view: Blank image with title */}
        <div
          className={`${
            theme === "dark" ? "bg-neutral-900 " : "bg-[#e5e5e5]"
          } w-full h-full inset-0 flex items-center justify-center rounded-lg p-10 border-black`}
        >
          <span className="text-lg font-semibold">{title}</span>
        </div>
        {/* Hover effect: Dark overlay with project details */}
        <div
          className={`${
            theme === "dark" ? "bg-neutral-900 " : "bg-[#e5e5e5]"
          } absolute inset-0 bg-opacity-90 flex flex-col items-center m-1 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 `}
        >
          <h3 className="font-bold text-lg">{hoverTitle}</h3>
          <p className="text-gray-600 text-sm text-center mt-2">
            {description}
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2 ">
            {techStack.map((tech, index) => (
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
    );
  };

  const proj = [
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
    <article className="flex flex-col gap-16 pb-16">
      <section className="flex flex-col p-2 items-start gap-8 md:flex-row md:items-center md:justify-between">
        {" "}
        <img
          alt="profile"
          width="200"
          height="200"
          className="rounded-xl"
          src="/marcus-kobe/assets/pfp2.png"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-dotoital flex gap-2 text-[#0b7763]">
            hi kobe here
            <img
              src="/marcus-kobe/assets/player.png"
              alt="player"
              className="w-10 h-10"
            />
          </h1>

          <p>
            22 year old <s className="text-red-800">pokemon trainer</s> software
            developer who likes to code, but could not pick up basketball
          </p>
          <section className="mt-8 flex items-center gap-16">
            <a href="./MKH_Resume.pdf" download="MKH_Resume.pdf">
              <button className="hover:bg-[#0b7763] border hover:text-white font-bold py-2 px-4 rounded inline-flex items-center mt-1">
                <svg
                  className="fill-current w-4 h-4 mr-2"
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

      {/* EXPERIENCE SECTION*/}
      <div className="grid ">
        <h2 class="title text-2xl sm:text-3xl font-doto text-[#0b7763] flex gap-2">
          <p>experience</p>
          <img
            src="/marcus-kobe/assets/expshare.png"
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
            <div className="mt-6 flex flex-col gap-6 ">
              {/* Work Item 1 */}
              <div className="flex items-start gap-4 p-4 ">
                <img
                  src="/marcus-kobe/assets/playpath.jpeg"
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
                      Coded client-side programming and support for new and
                      existing web interfaces, primarily using Node.
                    </li>
                    <li>
                      Managed and resolved 33 tickets, addressing front-end
                      bugs, integrating plugins, and developing new features.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Work Item 2 */}
              <div className="flex items-start gap-4 p-4">
                <img
                  src="/marcus-kobe/assets/prenostik.jpeg"
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
                      Led development in designing and implementing a student
                      learning dashboard using React.js and Node.js.
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
              <div className="flex items-start gap-4 p-4">
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
                      Interaction | Web Development | Design and Analysis of
                      Algorithms
                    </li>
                  </ul>
                </div>
                <img
                  src="/marcus-kobe/assets/uci.png"
                  alt="UCI"
                  className="w-12 h-12 rounded-lg"
                />
              </div>
            </div>
          )}
        </section>

        {/* Project Section */}
        <section className="flex flex-col gap-8 p-2">
          <div class="flex justify-between">
            <h2 class="title text-2xl sm:text-3xl font-doto font-stretch-ultra-condensed text-[#0b7763] flex gap-2">
              featured projects
              <img
                src="/marcus-kobe/assets/projects.png"
                alt="projects"
                className="w-8 h-8 mt-2"
              />
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {" "}
            {proj.map((p, index) => (
              <ProjectCard key={index} {...p} />
            ))}
          </div>
        </section>
      </div>
      <div className="flex justify-end">
        <a
          class="link flex items-center gap-2 font-light"
          href="/marcus-kobe/projects"
        >
          <span className="hover:text-[#0b7763]">view more</span>
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
      <section className="flex flex-col gap-8 p-2">
        {/* Project Section */}
        <h2 className="title text-2xl sm:text-3xl font-doto text-[#0b7763] flex gap-2 p-2 p-px">
          tech stack
          <img
            src="/marcus-kobe/assets/revive.png"
            alt="revive"
            className="w-8 h-8 mt-1"
          />
        </h2>
        <div className="animate-rotate-border rounded-lg  hover:scale-[1.03] bg-conic/[from_var(--border-angle)] from-black via-[#0b7763] from-80% via-90% to-100% p-px perspective">
          <div
            className={`${
              theme === "dark" ? "bg-neutral-900 " : "bg-[#e5e5e5]"
            } grid grid-cols-4 rounded-lg gap-4 justify-items-center p-6 `}
          >
            <div className="flex flex-col items-center">
              <img
                src="/marcus-kobe/assets/badges/badge1.png"
                alt="revive"
                className="w-12 h-12"
              />
              <p>React</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/marcus-kobe/assets/badges/badge2.png"
                alt="revive"
                className="w-12 h-12"
              />
              <p>TailWind</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/marcus-kobe/assets/badges/badge3.png"
                alt="revive"
                className="w-12 h-12"
              />
              <p>HTML5</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/marcus-kobe/assets/badges/badge4.png"
                alt="revive"
                className="w-12 h-12"
              />
              <p>CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/marcus-kobe/assets/badges/badge5.png"
                alt="revive"
                className="w-12 h-12"
              />
              <p>JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/marcus-kobe/assets/badges/badge6.png"
                alt="revive"
                className="w-12 h-12"
              />
              <p>TypeScript</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/marcus-kobe/assets/badges/badge7.png"
                alt="revive"
                className="w-12 h-12"
              />
              <p>Python</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/marcus-kobe/assets/badges/badge8.png"
                alt="revive"
                className="w-12 h-12"
              />
              <p>NextJS</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Home;
