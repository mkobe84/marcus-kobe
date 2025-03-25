import React from "react";

const TechBadge = ({ imgSrc, altText, techName }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={imgSrc} alt={altText} className="w-12 h-12" />
      <p>{techName}</p>
    </div>
  );
};

const TechStackSection = () => {
  const techStack = [
    { imgSrc: "/marcus-kobe/assets/badges/badge1.png", techName: "React" },
    { imgSrc: "/marcus-kobe/assets/badges/badge2.png", techName: "TailWind" },
    { imgSrc: "/marcus-kobe/assets/badges/badge3.png", techName: "HTML5" },
    { imgSrc: "/marcus-kobe/assets/badges/badge4.png", techName: "CSS" },
    { imgSrc: "/marcus-kobe/assets/badges/badge5.png", techName: "JavaScript" },
    { imgSrc: "/marcus-kobe/assets/badges/badge6.png", techName: "TypeScript" },
    { imgSrc: "/marcus-kobe/assets/badges/badge7.png", techName: "Python" },
    { imgSrc: "/marcus-kobe/assets/badges/badge8.png", techName: "NextJS" },
  ];

  return (
    <section className="flex flex-col gap-8 p-2">
      {/* Tech Stack Section */}
      <h2 className="title text-2xl sm:text-3xl font-doto text-[#0b7763] flex gap-2 p-2 p-px">
        tech stack
        <img
          src="/marcus-kobe/assets/revive.png"
          alt="revive"
          className="w-8 h-8 mt-1"
        />
      </h2>

      <div className="animate-rotate-border rounded-lg hover:scale-[1.03] bg-conic/[from_var(--border-angle)] from-black via-[#0b7763] from-80% via-90% to-100% p-px perspective">
        <div
          className={`${
            theme === "dark" ? "bg-neutral-900" : "bg-[#e5e5e5]"
          } grid grid-cols-4 rounded-lg gap-4 justify-items-center p-6`}
        >
          {techStack.map((tech, index) => (
            <TechBadge
              key={index}
              imgSrc={tech.imgSrc}
              altText={tech.techName}
              techName={tech.techName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
