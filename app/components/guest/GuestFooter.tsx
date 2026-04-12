import Image from "next/image";
import Link from "next/link";

export function GuestFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--border-soft)]/50 bg-white pt-16 pb-8 shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-20">
      <div className="section-shell grid gap-10 lg:gap-16 lg:grid-cols-[1.5fr_1fr_1fr] border-b border-slate-100 pb-12">
        
        {/* Brand & Intro */}
        <div>
          <Link href="/" className="inline-flex items-center gap-3 decoration-transparent">
            <Image
              src="/Sandyfeet_Logo.png"
              alt="Sandyfeet logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover shadow-sm border border-slate-100"
            />
            <div>
              <p className="font-display text-[1.75rem] font-bold leading-none text-[#0d5c63]">Sandyfeet</p>
              <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 mt-1">LIWLIWA CAMP & EVENT SITE</p>
            </div>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-500 font-medium">
            Escape the ordinary. Secure your spot directly online in just a few clicks. Room reservations, day tour booking, and event packages at Sandyfeet Camp.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Link href="https://facebook.com" target="_blank" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[var(--primary)] hover:bg-slate-100 transition-colors border border-slate-100">
               <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-900 mb-6">Explore</p>
          <ul className="space-y-4 text-sm font-semibold text-slate-500">
            <li><Link href="/" className="hover:text-[var(--primary)] transition-colors">Home Page</Link></li>
            <li><Link href="/rooms" className="hover:text-[var(--primary)] transition-colors">Room Offers</Link></li>
            <li><Link href="/day-tour" className="hover:text-[var(--primary)] transition-colors">Book a Day Tour</Link></li>
            <li><Link href="/track-reservation" className="hover:text-[var(--primary)] transition-colors">Track Reservation</Link></li>
          </ul>
        </div>

        {/* Policies & Info */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-900 mb-6">Need to Know</p>
          <div className="space-y-5 text-sm">
            <div className="flex gap-3 items-start">
               <div className="p-1.5 bg-orange-50 rounded-lg text-[var(--accent)]"><svg xmlns="http://www.w3.org/-2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></div>
               <div>
                  <p className="font-bold text-slate-800">Check-in / Out</p>
                  <p className="text-slate-500 font-medium mt-0.5">In: 2:00 PM • Out: 12:00 NN</p>
               </div>
            </div>
            <div className="flex gap-3 items-start">
               <div className="p-1.5 bg-blue-50 rounded-lg text-blue-500"><svg xmlns="http://www.w3.org/-2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.09-7.074-7.07l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg></div>
               <div>
                  <p className="font-bold text-slate-800">Contact Us</p>
                  <p className="text-slate-500 font-medium mt-0.5">0908 812 7169</p>
               </div>
            </div>
          </div>
        </div>

      </div>
      
      <div className="section-shell flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 font-medium pt-8">
         <p>© {new Date().getFullYear()} Sandyfeet Camp & Event Site. All rights reserved.</p>
         <div className="flex gap-6 mt-4 md:mt-0">
             <Link href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
         </div>
      </div>
    </footer>
  );
}
