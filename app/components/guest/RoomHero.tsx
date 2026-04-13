"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { RoomOffer } from "../../lib/guest-content";

type RoomHeroProps = {
  room: RoomOffer;
  availability: { date: string; status: string }[];
};

export function RoomHero({ room, availability }: RoomHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const galleryVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-6"
    >
      {/* Top Header Section */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <Link href="/rooms" className="text-sm font-bold text-[#3b82f6] hover:text-[#2563eb] transition-colors flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          Back to all rooms
        </Link>
        <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-[#3b82f6]">
          Featured Stay
        </span>
      </motion.div>

      {/* Title & Description */}
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="font-display text-[2.5rem] leading-tight md:text-[3.5rem] lg:text-[4rem] text-slate-900 font-extrabold tracking-tight mb-4">
          {room.name}
        </h1>
        <div className="flex flex-wrap items-center gap-6">
          <p className="text-2xl font-bold text-[#3b82f6] bg-[#eef6ff] px-4 py-1.5 rounded-full">{room.priceLabel}</p>
          <div className="flex items-center gap-2 text-slate-600 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-400">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
            <p>{room.capacity}</p>
          </div>
          {room.note && (
             <div className="flex items-center gap-2 text-slate-600 font-medium border-l border-slate-200 pl-6">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-400">
                 <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
               </svg>
               <p>{room.note}</p>
             </div>
          )}
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
        
        {/* Left Side Gallery */}
        <motion.div variants={galleryVariants} className="grid grid-cols-2 grid-rows-2 gap-3 h-[400px] md:h-[500px]">
          {room.images[0] && (
            <div className="col-span-2 row-span-2 relative rounded-[2rem] overflow-hidden group cursor-pointer border border-slate-100 shadow-sm">
              <Image src={room.images[0]} alt={`${room.name} view 1`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
            </div>
          )}
        </motion.div>

        {/* Right Side Quick Booking Card */}
        <motion.aside variants={itemVariants} className="space-y-6 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,39,44,0.06)] relative overflow-hidden">
          {/* Subtle decorative blob */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#eef6ff] rounded-full blur-3xl opacity-60"></div>
          
          <div className="relative z-10">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#3b82f6]">Quick booking</p>
            <h2 className="mt-1.5 font-display text-3xl font-bold text-slate-900">Check availability</h2>
            
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Check-in
                <input type="date" className="mt-2 text-sm w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none text-slate-800 focus:border-[#3b82f6] focus:bg-white focus:ring-4 focus:ring-[#3b82f6]/10 transition-all font-medium" />
              </label>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Check-out
                <input type="date" className="mt-2 text-sm w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none text-slate-800 focus:border-[#3b82f6] focus:bg-white focus:ring-4 focus:ring-[#3b82f6]/10 transition-all font-medium" />
              </label>
            </div>

            <div className="mt-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-400 mb-3">Upcoming spots</p>
              <div className="grid grid-cols-2 gap-3">
                {availability.map((item) => (
                  <div key={item.date} className={`rounded-[1rem] border p-3 flex flex-col justify-center items-center text-center transition-colors ${item.status === 'Booked' ? 'bg-slate-50 border-slate-100 opacity-60' : 'border-[#3b82f6]/20 bg-[#f8fbff]'}`}>
                    <p className={`text-sm font-bold ${item.status === 'Booked' ? 'text-slate-500' : 'text-slate-900'}`}>{item.date}</p>
                    <p className={`text-[11px] font-semibold mt-0.5 px-2 py-0.5 rounded-full ${item.status === 'Booked' ? 'text-slate-400 bg-slate-200/50' : item.status === 'Open' ? 'text-emerald-600 bg-emerald-50' : 'text-[#d97706] bg-[#fef3c7]'}`}>{item.status}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 pt-6 border-t border-slate-100">
              <Link
                href={`/book/room?rooms=${room.slug}`}
                className="w-full rounded-full bg-[#3b82f6] px-6 py-4 text-center text-sm font-bold text-white shadow-[0_8px_20px_rgba(59,130,246,0.25)] transition-all hover:bg-[#2563eb] hover:-translate-y-0.5"
              >
                Reserve Now
              </Link>
              <Link
                href={`/rooms?selected=${room.slug}`}
                className="w-full rounded-full bg-slate-50 border border-slate-200 px-6 py-4 text-center text-sm font-bold text-slate-700 transition-all hover:border-[#3b82f6] hover:text-[#3b82f6] hover:bg-white"
              >
                Add to multis-selection
              </Link>
            </div>
            
            <div className="mt-5 text-center flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-emerald-500">
                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
              </svg>
              <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Secure booking process</p>
            </div>
          </div>
        </motion.aside>

      </div>
    </motion.section>
  );
}