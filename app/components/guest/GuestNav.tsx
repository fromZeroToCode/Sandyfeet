"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/day-tour", label: "Daytour" },
  { href: "/track-reservation", label: "Track Reservation" },
];

export function GuestNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isRoomsSection = pathname.startsWith("/rooms") || pathname.startsWith("/book/room");

  return (
    <header className="sticky top-4 z-50 w-full px-4 md:px-6 lg:px-8">
      <nav className="mx-auto w-full max-w-[1400px] rounded-2xl border border-white/30 bg-white/25 px-4 py-3 shadow-[0_12px_28px_rgba(15,39,44,0.08)] backdrop-blur-3xl md:rounded-full md:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Sandyfeet_Logo.png"
              alt="Sandyfeet logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover shadow-sm border border-slate-100"
            />
            <div className="hidden sm:block">
              <p className="font-display text-xl md:text-2xl font-bold leading-none text-[#0d5c63]">Sandyfeet</p>
              <p className="text-[9px] font-bold tracking-[0.2em] text-slate-400 mt-0.5">LIWLIWA CAMP</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-8 text-[13px] font-bold uppercase tracking-wider text-slate-500">
            {navLinks.map((item) => {
              const isActive = item.href === "/rooms" ? isRoomsSection : pathname === item.href;
              return (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className={`transition-colors relative py-2 ${isActive ? 'text-[var(--primary)]' : 'hover:text-[var(--primary)]'}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/rooms"
              className="hidden sm:inline-flex rounded-full bg-[var(--primary)] px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-[var(--primary-strong)] shadow-md"
            >
              Book Now
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden p-2 rounded-full hover:bg-slate-100 text-slate-700 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden grid overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
            <div className="min-h-0 border-t border-white/25 pt-4">
            <div className="flex flex-col gap-4 px-1 pb-4">
            {navLinks.map((item) => {
              const isActive = item.href === "/rooms" ? isRoomsSection : pathname === item.href;
              return (
                <Link
                  key={`mobile-${item.href}`}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-bold tracking-wide transition-colors ${
                    isActive ? "text-[var(--primary)]" : "text-slate-600 hover:text-[var(--primary)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/rooms"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex justify-center w-full rounded-xl bg-[var(--primary)] px-4 py-3 text-sm font-bold text-white transition hover:bg-[var(--primary-strong)] shadow-sm"
            >
              Book Now
            </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
