"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      rotate: custom,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2 
      },
    }),
  };

  return (
    <section className="relative w-full pt-2 pb-10 lg:pt-4 lg:pb-12 overflow-hidden mx-auto max-w-7xl px-4 md:px-8">
      {/* Soft background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#eef6ff] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f0fdf4] rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4 -z-10"></div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 w-full max-w-2xl relative z-10 text-left pt-4 lg:pt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={textVariants} className="text-[#3b82f6] font-extrabold tracking-widest text-[9px] md:text-[10px] uppercase mb-4">
            Sandyfeet Resort &amp; Camp
          </motion.p>
          <motion.h1 variants={textVariants} className="font-display text-[2.75rem] leading-[1.05] text-[#111827] md:text-5xl lg:text-[4rem] tracking-tight mb-6" style={{ fontWeight: 800 }}>
            Escape to the<br />shore. Book<br />your stay.
          </motion.h1>
          <motion.p variants={textVariants} className="text-[#64748b] text-sm md:text-base mb-8 max-w-[24rem] leading-relaxed font-medium">
            Reserve rooms and day tours in minutes. Enjoy a quick and smooth booking flow from search to confirmation.
          </motion.p>

          <motion.div variants={textVariants} className="flex flex-wrap gap-3">
            <Link href="/rooms" className="px-6 py-2.5 rounded-full bg-[#3b82f6] text-white text-sm font-semibold shadow-[0_8px_20px_rgba(59,130,246,0.25)] hover:bg-[#2563eb] hover:-translate-y-1 transition-all inline-block">
              Explore Rooms
            </Link>
            <Link href="/day-tour" className="px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold shadow-sm hover:border-[#3b82f6]/50 hover:text-[#3b82f6] hover:-translate-y-1 transition-all inline-block">
              Book a Day Tour
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image Composition area */}
        <motion.div 
          className="flex-1 w-full relative h-[380px] lg:h-[500px] z-10 flex items-center justify-center mt-6 lg:mt-0"
          initial="hidden"
          animate="visible"
        >
           {/* Main centered picture frame */}
           <motion.div 
             custom={4}
             variants={imageVariants}
             whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
             className="absolute right-[5%] z-20 w-[75%] h-[80%] rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-[8px] border-white bg-white overflow-hidden cursor-pointer"
             >
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden group">
                <Image src="/Assets/View/FrontView.jpg" alt="Sandyfeet Resort View" fill className="object-cover transition-transform duration-700 group-hover:scale-110" priority />
              </div>
           </motion.div>
           
           {/* Floating auxiliary elements */}
           <motion.div 
             custom={-8}
             variants={imageVariants}
             whileHover={{ scale: 1.1, rotate: 0, zIndex: 40 }}
             className="absolute top-[5%] left-[5%] z-10 w-[30%] h-[35%] rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.12)] border-[5px] border-white bg-white overflow-hidden animate-float cursor-pointer"
             >
              <div className="relative w-full h-full rounded-[1rem] overflow-hidden group">
                 <Image src="/Assets/Facilities/TopPoolView.jpg" alt="pool view" fill className="object-cover transition-transform duration-700 group-hover:scale-110"/>
              </div>
           </motion.div>
           
           <motion.div 
             custom={-4}
             variants={imageVariants}
             whileHover={{ scale: 1.1, rotate: 0, zIndex: 40 }}
             className="absolute bottom-[10%] left-[2%] z-30 w-[35%] h-[30%] rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.15)] border-[5px] border-white bg-white overflow-hidden animate-float-reverse cursor-pointer"
             >
              <div className="relative w-full h-full rounded-[1rem] overflow-hidden group">
                 <Image src="/Assets/View/Second floor view.jpg" alt="room view" fill className="object-cover transition-transform duration-700 group-hover:scale-110"/>
              </div>
           </motion.div>

           <motion.div 
             custom={12}
             variants={imageVariants}
             whileHover={{ scale: 1.1, rotate: 0, zIndex: 40 }}
             className="absolute top-[-2%] right-[15%] z-0 w-[25%] h-[20%] rounded-[1.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-[5px] border-white bg-white overflow-hidden cursor-pointer" 
             style={{ animationDelay: '1s' }}
             >
              <div className="relative w-full h-full rounded-[1rem] overflow-hidden group">
                 <Image src="/Assets/View/IMG3.jpg" alt="room interior" fill className="object-cover transition-transform duration-700 group-hover:scale-110"/>
              </div>
           </motion.div>

           <motion.div 
             custom={-6}
             variants={imageVariants}
             whileHover={{ scale: 1.1, rotate: 0, zIndex: 40 }}
             className="absolute -bottom-[2%] right-[10%] z-30 w-[25%] h-[25%] rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.12)] border-[5px] border-white bg-white overflow-hidden animate-float cursor-pointer" 
             style={{ animationDelay: '0.5s' }}
             >
              <div className="relative w-full h-full rounded-[1rem] overflow-hidden group">
                 <Image src="/Assets/View/Banner.jpg" alt="banner view" fill className="object-cover transition-transform duration-700 group-hover:scale-110"/>
              </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
}