import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef(null);

  // Open/close mobile menu
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.right = "-16rem";
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScroll(true);
      else setIsScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header background */}
      {!isDarkMode && (
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
          <Image src={assets.header_bg_color} priority alt="" className="w-full" />
        </div>
      )}

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-colors duration-300 ${
          isScroll
            ? isDarkMode
              ? "bg-[#11001F]/50 backdrop-blur-lg"
              : "bg-white/50 backdrop-blur-lg shadow-sm"
            : isDarkMode
            ? "bg-[#11001F] shadow-white/20"
            : ""}`}>
              
        {/* Logo */}
        <a href="#top"><Image src={isDarkMode ? assets.R_logo_dark : assets.R_logo} alt="Logo" className="w-15 cursor-pointer mr-20"/></a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-Ovo ${
            isScroll
              ? ""
              : isDarkMode
              ? "border border-white/50 bg-transparent"
              : "bg-white/50 shadow-sm bg-opacity/50"
          }`}>
          <li><a href="#top">Home</a></li>
          <li><a href="#About">About Me</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Work">My Work</a></li>
          <li><a href="#Contact">Contact Me</a></li>
        </ul>

        {/* Right buttons */}
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6"/>
          </button>

          <a href="#Contact" className={`hidden lg:flex items-center gap-3 px-10 py-2.5 rounded-full ml-4 font-Ovo border ${ isDarkMode ? "border-white/50" : "border-gray-500"}`}>
            Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" />
          </a>

          {/* Mobile menu button */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen font-Ovo transition-all duration-500 
            ${isDarkMode ? "bg-[#2a004a] text-white" : "bg-rose-50 text-black"}`} >
          <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className="w-5"/>
          </div>

          <li><a href="#top" onClick={closeMenu}>Home</a></li>
          <li><a href="#About" onClick={closeMenu}>About Me</a></li>
          <li><a href="#Services" onClick={closeMenu}>Services</a></li>
          <li><a href="#Work" onClick={closeMenu}>My Work</a></li>
          <li><a href="#Contact" onClick={closeMenu}>Contact Me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
