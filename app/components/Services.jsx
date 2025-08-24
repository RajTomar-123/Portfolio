import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"

const Services = ({ isDarkMode }) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}} 
    id="Services" className={`w-full px-[12%] py-10 scroll-mt-28 ${ isDarkMode ? "bg-[#11001F] text-white" : "bg-white text-black"}`}>
      <motion.h4 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}
      className="text-center mb-2 text-lg font-Ovo">What I Offer</motion.h4>

      <motion.h2 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.5, duration: 0.5}}
      className="text-center text-5xl font-Ovo">My Services</motion.h2>

      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.7, duration: 0.5}} 
      className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Outfit ${ isDarkMode ? "text-white/80" : "text-gray-700"}`}>
        Building responsive, user-friendly websites with modern design and flawless performance. 
        Let’s bring your vision to life!
      </motion.p>

      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.9, duration: 0.6}}
      className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
          whileHover={{scale: 1.05}}
            key={index}
            className={`border rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 hover:shadow-[4px_4px_0_#000] transition-all duration-500
              ${isDarkMode 
                ? "hover:bg-[#2a004a] hover:shadow-white"
                : "border-gray-400 bg-white hover:bg-[#fcf4ff] "
              }`}>
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4">{title}</h3>
            <p className="text-sm leading-5">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read More <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} alt="" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
