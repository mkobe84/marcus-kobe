import React from "react";
import SocialLinks from "../components/SocialLinks";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="flex justify-center gap-6">
        <p className="mt-2 text-sm text-[#0b7763]">
          © 2025 Marcus Kobe Herrera | One day or day one
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
