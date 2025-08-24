import { assets } from '@/assets/assets'
import Image from "next/image";
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = ({ isDarkMode }) => {
   const [result, setResult] = useState("");

   const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aa55bbac-fea7-42c8-b949-7d11569ef672");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
     <motion.div
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     transition={{duration: 1}}
       id="Contact" className={`w-full px-[12%] py-10 scroll-mt-20 
       ${isDarkMode ? "bg-none" : "bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"}`}>

      <motion.h4 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}
      className="text-center mb-2 text-lg font-Ovo">Connect With Me</motion.h4>

      <motion.h2 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.5, duration: 0.5}}
      className="text-center text-5xl font-Ovo">Get in Touch</motion.h2>

      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.7, duration: 0.5}}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I&apos;d love to hear from you! If you have any question, comment or
        feedback, please use the form below.
      </motion.p>

      <motion.form 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.9, duration: 0.5}}
      onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input 
          initial={{x: -50, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{delay: 1.1, duration: 0.6}}
          type="text" placeholder="Enter Your Name"
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md mb-2 
            ${isDarkMode ? "bg-[#2a004a]/30 border border-white/90 text-white" : "bg-white border-gray-400 text-black"}`} required name="Name"/>

          <motion.input 
          initial={{x: 50, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{delay: 1.2, duration: 0.6}}
          type="email" placeholder="Enter Your Email"
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md mb-2
            ${isDarkMode ? "bg-[#2a004a]/30 border border-white/90 text-white" : "bg-white border-gray-400 text-black"}`} required name="Email"/>
        </div>

        <motion.textarea 
        initial={{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 1.3, duration: 0.6}}
        rows={6} placeholder="Enter Your Message"
          className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6
          ${isDarkMode ? "bg-[#2a004a]/30 border border-white/90 text-white" : "bg-white border-gray-400 text-black"}`} required name="Message"/>

        <motion.button 
        whileHover={{scale: 1.05}}
        transition={{duration: 0.3}}
        type="submit"
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto 
          ${isDarkMode ? "bg-transparent border-[0.5px] hover:bg-[#2a004a]" : "border border-black/80 hover:bg-[#fcf4ff]"}`}>
          Submit Now
          <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='' className="w-4" />
        </motion.button>

        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact;
