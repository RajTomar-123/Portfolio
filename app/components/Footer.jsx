import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = ({ isDarkMode }) => {
  return (
    <div className={`mt-20 ${isDarkMode ? "bg-[#11001F] text-white" : "bg-white text-black"}`}>
      <div className="text-center">
        <Image src={isDarkMode ? assets.R_logo_dark : assets.R_logo} alt="logo" className="w-15 mx-auto mb-2"/>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="mail icon" className="w-6"/>
          <span>rajt70172@gmail.com</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={`text-center sm:flex items-center justify-between mx-[10%] mt-12 py-6 border-t ${
        isDarkMode ? "border-white/50" : "border-gray-400"}`}>
        <p>© 2025 Made By ❤️. All rights reserved.</p>
        <p>Feel free to Contact me :)</p>

        {/* Social Links */}
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li><a href="https://www.instagram.com/raj_tomar_360/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://github.com/RajTomar-123/" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href="https://www.linkedin.com/in/raj-tomar-a51124316/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
