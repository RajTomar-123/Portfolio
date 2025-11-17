import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = ({isDarkMode}) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 0.8, type: 'spring', stiffness: 100}} 
        >
            <Image src={assets.profile_image} alt='' className='rounded-full w-32' />
        </motion.div>

        <motion.h3 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.3}} 
        className='flex items-end gap-2 text-xl md:text-2xl mt-3 mb-3 font-Ovo'>Hi, I'm Raj Tomar  
        <Image src={assets.hand_icon} alt='' className='w-8' /></motion.h3>
        
        <motion.h1 
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.5}} 
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Full Stack Developer || Open Source Contributor</motion.h1>

        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}} 
        className="max-w-2xl mx-auto">I’m a passionate web developer specializing in building modern, user-friendly applications with the MERN stack. I enjoy solving problems and turning ideas into reality through clean, efficient code.</motion.p>
       
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1}}   
            href='#Contact' className={`px-10 py-3 border-white rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2`}>Contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.a>
           
            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1}}
            href='/assets/public/NewResume (R).pdf' download className={`px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 ${isDarkMode ? "bg-white text-black" : ""}`}>My resume <Image src={assets.download_icon} alt='' className='w-4' /></motion.a>
        </div>  
    </div>
  )
}

export default Header
