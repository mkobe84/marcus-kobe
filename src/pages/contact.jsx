import React from "react";

const Contact = ({ theme }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start p-6 sm:p-8 text-center sm:text-left">
      {/* Left Section (Text + Header) */}
      <section className="w-full sm:w-1/2">
        {/* Header */}
        <div className="flex justify-center sm:justify-start items-center gap-2 mb-4 sm:mb-8">
          <h2 className="title text-2xl sm:text-3xl font-doto text-[#0b7763]">
            contact me!
          </h2>
          <img
            src="/marcus-kobe/assets/urban-13.png"
            alt="projects"
            className="w-6 h-6 sm:w-8 sm:h-8 mt-1 sm:mt-2"
          />
        </div>

        {/* 👇 Mobile Image (only visible on mobile) */}
        <img
          alt="profile"
          className="rounded-xl w-32 h-32 mt-4 mb-4 sm:hidden mx-auto border-4 border-[#0b7763]"
          src="/marcus-kobe/assets/pfp2.png"
        />

        {/* Description + Links */}
        <p className={`${theme === "dark" ? "text-white" : "text-black"} `}>
          Feel free to reach out to me at any time!
        </p>

        <div className="flex flex-col gap-4 mt-6 sm:mt-8 items-center sm:items-start">
          <a
            href="mailto:mkobe84@gmail.com"
            className="text-[#0b7763] hover:underline"
          >
            Email me
          </a>
          <a
            href="https://github.com/mkobe84"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0b7763] hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/marcus-kobe-herrera/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0b7763] hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* 👇 Desktop Image (only visible on sm+) */}
      <img
        alt="profile"
        className="hidden sm:block rounded-xl w-50 h-50 mt-4"
        src="/marcus-kobe/assets/pfp2.png"
      />
    </div>
  );
};

export default Contact;
