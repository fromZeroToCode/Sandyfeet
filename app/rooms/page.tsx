"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { GuestShell } from "../components/guest/GuestShell";
import { checkInOut, roomOffers } from "../lib/guest-content";

const availabilityPreviewBySlug: Record<string, string[]> = {
  "ground-floor": ["Apr 14", "Apr 16", "Apr 18"],
  "group-room": ["Apr 15", "Apr 17", "Apr 20"],
  "couple-room": ["Apr 14", "Apr 19", "Apr 21"],
  tent: ["Apr 15", "Apr 18", "Apr 22"],
};

const timePreviewBySlug: Record<string, string[]> = {
  "ground-floor": ["2:00 PM check-in", "Overnight stay", "12:00 NN check-out"],
  "group-room": ["2:00 PM check-in", "Evening bonfire", "12:00 NN check-out"],
  "couple-room": ["2:00 PM check-in", "Pool access", "12:00 NN check-out"],
  tent: ["2:00 PM check-in", "Campfire zone", "12:00 NN check-out"],
};

function parsePrice(priceLabel: string) {
  const parsed = Number(priceLabel.replace(/[^0-9]/g, ""));
  return Number.isNaN(parsed) ? 0 : parsed;
}

export default function RoomsPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [guestCount, setGuestCount] = useState("2");
  const [sortBy, setSortBy] = useState("recommended");

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

  const sortedRooms = useMemo(() => {
    const rooms = [...roomOffers];
    if (sortBy === "price-low") {
      return rooms.sort((a, b) => parsePrice(a.priceLabel) - parsePrice(b.priceLabel));
    }
    if (sortBy === "price-high") {
      return rooms.sort((a, b) => parsePrice(b.priceLabel) - parsePrice(a.priceLabel));
    }
    return rooms;
  }, [sortBy]);

  return (
    <GuestShell>
      <section className="mt-6 grid gap-6 rounded-[2rem] border border-[var(--border-soft)] bg-white/85 p-5 shadow-sm backdrop-blur-sm md:grid-cols-[1.2fr_0.8fr] md:p-8">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">Rooms</p>
          <h1 className="mt-2 font-display text-4xl text-slate-900 md:text-5xl">Find your room</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700 md:text-base">
            Browse like Booking.com, keep the calm of Airbnb, and choose one room or multiple rooms in a single reservation flow.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-[var(--surface-muted)] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Check-in</p>
              <p className="mt-1 text-lg font-bold text-slate-900">{checkIn || checkInOut.checkIn}</p>
            </div>
            <div className="rounded-2xl bg-[var(--surface-muted)] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Check-out</p>
              <p className="mt-1 text-lg font-bold text-slate-900">{checkOut || checkInOut.checkOut}</p>
            </div>
            <div className="rounded-2xl bg-[var(--surface-muted)] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Selected</p>
              <p className="mt-1 text-lg font-bold text-slate-900">{selectedRooms.length} room{selectedRooms.length === 1 ? "" : "s"}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--surface-muted)] p-4 md:p-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              Check-in date
              <input
                type="date"
                value={checkIn}
                onChange={(event) => setCheckIn(event.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] transition focus:ring-2"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Check-out date
              <input
                type="date"
                value={checkOut}
                onChange={(event) => setCheckOut(event.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] transition focus:ring-2"
              />
            </label>
          </div>
          <div className="grid gap-3 sm:grid-cols-[1fr_140px]">
            <label className="text-sm font-medium text-slate-700">
              Guests
              <input
                type="number"
                min={1}
                value={guestCount}
                onChange={(event) => setGuestCount(event.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] transition focus:ring-2"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Sort by
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] transition focus:ring-2"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
              </select>
            </label>
          </div>
          <div className="rounded-2xl bg-white p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Select multiple rooms</p>
            <p className="mt-1">Choose as many rooms as you want, then continue to the booking summary.</p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              ["Flexible stay", "Choose dates before booking."],
              ["Multiple rooms", "Mix room types in one reservation."],
              ["Fast payment", "See the down payment process clearly."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-[var(--border-soft)] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">{title}</p>
                <p className="mt-1 text-sm text-slate-600">{text}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-6">
            {sortedRooms.map((room) => {
              const selected = selectedRooms.includes(room.slug);

              return (
                <article
                  key={room.slug}
                  className={`overflow-hidden rounded-[2rem] border bg-white shadow-sm transition ${
                    selected ? "border-[var(--primary)] ring-2 ring-[var(--primary)]/15" : "border-[var(--border-soft)]"
                  }`}
                >
                  <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
                    <div className="relative min-h-[280px] md:min-h-[340px]">
                      <Image src={room.images[0]} alt={room.name} fill className="object-cover" />
                      <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider text-slate-800 shadow-sm">
                        {room.slug === "ground-floor"
                          ? "Most Popular"
                          : room.slug === "group-room"
                            ? "Best for groups"
                            : room.slug === "couple-room"
                              ? "Best for couples"
                              : "Outdoor stay"}
                      </div>
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        {(availabilityPreviewBySlug[room.slug] ?? []).map((date) => (
                          <span key={date} className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm">
                            {date}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col p-5 md:p-7">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{room.capacity}</p>
                          <h2 className="mt-1 font-display text-3xl text-slate-900">{room.name}</h2>
                        </div>
                        <label className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-muted)] px-4 py-2 text-sm font-semibold text-slate-700">
                          <input
                            type="checkbox"
                            checked={selected}
                            onChange={() => toggleRoom(room.slug)}
                            className="h-4 w-4 rounded border-[var(--border-soft)] text-[var(--primary)]"
                          />
                          {selected ? "Selected" : "Add room"}
                        </label>
                      </div>

                      <p className="mt-4 text-2xl font-bold text-[var(--primary)]">{room.priceLabel}</p>
                      <p className="mt-1 text-sm text-slate-600">Average nightly rate shown for quick comparison</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {room.inclusions.slice(0, 4).map((item) => (
                          <span key={item} className="rounded-full bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-semibold text-slate-700">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-muted)] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Availability preview</p>
                        <div className="mt-3 grid gap-2 sm:grid-cols-3">
                          {(timePreviewBySlug[room.slug] ?? []).map((slot) => (
                            <div key={slot} className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-700">
                              {slot}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
                        <Link
                          href={`/rooms/${room.slug}`}
                          className="rounded-full border border-[var(--border-soft)] px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                        >
                          View details
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleRoom(room.slug)}
                          className="rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--primary-strong)]"
                        >
                          {selected ? "Remove" : "Select room"}
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="sticky top-28 h-fit space-y-4 rounded-[2rem] border border-[var(--border-soft)] bg-white p-5 shadow-sm md:p-6">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500">Booking Summary</p>
            <h3 className="mt-2 font-display text-3xl text-slate-900">Selected rooms</h3>
          </div>

          <div className="space-y-3">
            {selectedRoomObjects.length ? (
              selectedRoomObjects.map((room) => (
                <div key={room.slug} className="flex items-center justify-between rounded-2xl bg-[var(--surface-muted)] p-4 text-sm">
                  <div>
                    <p className="font-semibold text-slate-900">{room.name}</p>
                    <p className="text-slate-600">{room.priceLabel}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleRoom(room.slug)}
                    className="text-xs font-semibold text-[var(--primary)]"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-[var(--border-soft)] bg-[var(--surface-muted)] p-4 text-sm text-slate-600">
                No rooms selected yet.
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-muted)] p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Stay window</p>
            <p className="mt-1">Check-in: {checkIn || checkInOut.checkIn}</p>
            <p>Check-out: {checkOut || checkInOut.checkOut}</p>
            <p className="mt-3 text-xs text-slate-500">Availability is shown on each room card above.</p>
          </div>

          <div className="rounded-2xl bg-[var(--primary)] p-5 text-white">
            <p className="text-xs uppercase tracking-[0.18em] text-white/75">Estimated total</p>
            <p className="mt-2 text-3xl font-bold">PHP {estimatedTotal.toLocaleString()}</p>
            <p className="mt-1 text-sm text-white/85">Calculated from selected rooms only.</p>
          </div>

          <div className="rounded-2xl border border-[var(--border-soft)] bg-white p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Payment flow</p>
            <ol className="mt-3 space-y-2 pl-5 text-sm list-decimal">
              <li>Choose room(s) and date range.</li>
              <li>Review the selected rooms summary.</li>
              <li>Pay the 50% down payment.</li>
              <li>Upload valid ID and payment proof.</li>
              <li>Receive your reservation reference.</li>
            </ol>
          </div>

          <Link
            href={`/book/room${selectedRooms.length ? `?rooms=${selectedRooms.join(",")}` : ""}`}
            className="block rounded-full bg-[var(--primary)] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[var(--primary-strong)]"
          >
            Continue to room booking
          </Link>
        </aside>
      </section>
    </GuestShell>
  );
}
