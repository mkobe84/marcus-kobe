import React from "react";

const Contact = ({ theme }) => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-doto text-[#0b7763]">Contact</h2>
      <p className="mt-4 text-gray-600">
        Feel free to reach out to me at any time!
      </p>
      <div className="flex flex-col gap-4 mt-8">
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
          href="https://www.linkedin.com/i/marcus-kobe-herrera/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0b7763] hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
