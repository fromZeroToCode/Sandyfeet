"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { GuestShell } from "../components/guest/GuestShell";
import { roomOffers } from "../lib/guest-content";

function parsePrice(priceLabel: string) {
  const parsed = Number(priceLabel.replace(/[^0-9]/g, ""));
  return Number.isNaN(parsed) ? 0 : parsed;
}

const categories = [
  { id: "all", label: "All Rooms" },
  { id: "ground-floor", label: "Ground Floor" },
  { id: "group-room", label: "Group Room" },
  { id: "couple-room", label: "Couples" },
  { id: "tent", label: "Tents" },
];

export default function RoomsPage() {
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const stored = window.location.search;
    const query = new URLSearchParams(stored);
    const selected = query.get("selected");
    if (selected) {
      setSelectedRooms([selected]);
    }
  }, []);

  const selectedRoomObjects = useMemo(
    () => roomOffers.filter((room) => selectedRooms.includes(room.slug)),
    [selectedRooms],
  );

  const estimatedTotal = useMemo(
    () => selectedRoomObjects.reduce((total, room) => total + parsePrice(room.priceLabel), 0),
    [selectedRoomObjects],
  );

  const toggleRoom = (slug: string) => {
    setSelectedRooms((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug],
    );
  };

  const displayRooms = useMemo(() => {
    let filtered = roomOffers;
    if (activeCategory !== "all") {
      filtered = filtered.filter(r => r.slug === activeCategory);
    }
    return filtered;
  }, [activeCategory]);

  return (
    <GuestShell>
      {/* Page Title & Filter navigation */}
      <div className="mt-8 mb-8 flex flex-col xl:flex-row xl:items-end justify-between gap-6 px-2">
        <div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-slate-900">Select Rooms</h1>
          <p className="mt-2 text-sm text-slate-500 font-medium">Instantly select multiple accommodations without switching pages.</p>
        </div>
        
        {/* Category Navigation */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat.id 
                  ? "bg-[var(--primary)] text-white shadow-[0_4px_14px_rgba(13,92,99,0.3)]" 
                  : "bg-white text-slate-600 border border-[var(--border-soft)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <section className="grid gap-8 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] items-start">
        {/* Rooms Grid (compact layout so multiple fit nicely on screen) */}
        <div className="grid gap-5 md:grid-cols-2 items-start">
          {displayRooms.map((room) => {
            const selected = selectedRooms.includes(room.slug);

            return (
              <article
                key={room.slug}
                className={`group flex flex-col overflow-hidden rounded-[2rem] border bg-white transition-all duration-300 hover:shadow-xl relative ${
                  selected ? "border-[var(--primary)] ring-2 ring-[var(--primary)]/20 shadow-[0_8px_30px_rgba(13,92,99,0.12)] scale-[1.01] z-10" : "border-[var(--border-soft)] shadow-sm hover:border-slate-300"
                }`}
              >
                {/* Floating Checkbox overlay for quick selection */}
                <button 
                  onClick={() => toggleRoom(room.slug)}
                  className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/95 backdrop-blur shadow-md flex items-center justify-center border border-slate-100 transition-transform hover:scale-110"
                >
                  {selected ? (
                    <div className="w-5 h-5 rounded-full bg-[var(--primary)] flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
                  )}
                </button>

                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image src={room.images[0]} alt={room.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f272c]/80 via-[#0f272c]/20 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-4 flex justify-between items-end">
                     <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#a6d8d4] drop-shadow-sm">{room.capacity}</p>
                        <h2 className="font-display text-2xl font-bold text-white drop-shadow-md leading-tight">{room.name}</h2>
                     </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-5 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xl font-bold text-[var(--primary)]">{room.priceLabel}</p>
                    <div className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded uppercase tracking-wider">Per Night</div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.inclusions.slice(0, 3).map((item) => (
                      <span key={item} className="rounded-lg bg-[var(--surface-muted)] px-3 py-1.5 text-[11px] font-semibold text-slate-600 border border-slate-100/50">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3">
                    <button
                      type="button"
                      onClick={() => toggleRoom(room.slug)}
                      className={`flex-1 rounded-xl py-3 text-sm font-bold transition-all border ${
                        selected 
                          ? "bg-rose-50 text-rose-600 border-rose-100 hover:bg-rose-100" 
                          : "bg-[var(--primary)] text-white border-transparent hover:bg-[var(--primary-strong)] shadow-sm hover:shadow-lg"
                      }`}
                    >
                      {selected ? "Drop Room" : "Select Room"}
                    </button>
                    <Link
                      href={`/rooms/${room.slug}`}
                      className="flex items-center justify-center w-12 rounded-xl bg-white text-slate-500 border border-[var(--border-soft)] hover:bg-slate-50 hover:text-[var(--primary)] transition-colors"
                      title="View Full Details"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        
        {/* Receipt UI Sticky Sidebar */}
        <aside className="sticky top-24 rounded-[2rem] border border-[var(--border-soft)] bg-white p-6 shadow-2xl shadow-slate-200/50 backdrop-blur-md">
          <div className="border-b border-slate-100 pb-5 mb-5 flex items-center justify-between">
             <div>
               <h3 className="font-display text-2xl font-bold text-slate-900 leading-none">Booking Receipt</h3>
               <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400 mt-2 hover:text-[var(--primary)] inline-flex gap-1 items-center">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] block pulse-animation"></span>
                 Live Summary
               </p>
             </div>
             <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-400"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
             </div>
          </div>

          <div className="space-y-3 min-h-[140px] max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {selectedRoomObjects.length ? (
              selectedRoomObjects.map((room) => (
                <div key={room.slug} className="flex items-center justify-between rounded-xl bg-[var(--surface-muted)] p-4 border border-slate-100 group transition-colors hover:bg-slate-100">
                  <div>
                    <p className="font-bold text-slate-800 text-sm leading-tight">{room.name}</p>
                    <p className="text-xs text-slate-500 font-bold mt-1">{room.priceLabel}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleRoom(room.slug)}
                    className="text-[10px] uppercase tracking-wider font-bold text-rose-400 hover:text-rose-600 bg-white shadow-sm border border-slate-200 px-2 py-1.5 rounded-md transition hover:border-rose-200"
                  >
                    Drop
                  </button>
                </div>
              ))
            ) : (
              <div className="flex h-[130px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 text-slate-300 mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <p className="text-xs font-semibold text-slate-400 leading-relaxed">No rooms added yet. Click "Select Room" to build your stay.</p>
              </div>
            )}
          </div>

          {/* Total & Action */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <div className="flex justify-between items-end mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nightly Total</p>
                  <p className="text-3xl font-display font-black text-[var(--primary)] leading-none mt-1">
                    <span className="text-lg pr-1 opacity-70">₱</span>{estimatedTotal.toLocaleString()}
                  </p>
               </div>
               <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest h-full flex items-end pb-1">{selectedRoomObjects.length} suite{selectedRoomObjects.length === 1 ? '' : 's'} chosen</p>
               </div>
            </div>

            <Link
              href={`/book/room${selectedRooms.length ? `?rooms=${selectedRooms.join(",")}` : ""}`}
              className={`flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-[15px] font-bold text-white transition-all duration-300 shadow-md ${
                selectedRooms.length 
                  ? "bg-[var(--primary)] hover:bg-[var(--primary-strong)] hover:shadow-[0_10px_25px_rgba(13,92,99,0.3)] hover:-translate-y-1" 
                  : "bg-slate-300 text-slate-100 cursor-not-allowed pointer-events-none"
              }`}
            >
              Checkout Reservation
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
            </Link>
            
            <p className="text-center flex justify-center items-center gap-1.5 text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-widest">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
              Secure booking guaranteed
            </p>
          </div>
        </aside>
      </section>
    </GuestShell>
  );
}
