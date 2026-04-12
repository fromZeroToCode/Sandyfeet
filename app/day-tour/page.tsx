import Image from "next/image";
import Link from "next/link";
import { GuestShell } from "../components/guest/GuestShell";
import { dayTourHighlights } from "../lib/guest-content";

export default function DayTourPage() {
  return (
    <GuestShell>
      <section className="pt-8">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Daytour</p>
        <h1 className="font-display mt-2 text-4xl text-slate-900 md:text-5xl">Book Day Tour</h1>
        <p className="mt-3 max-w-2xl text-slate-700">
          Select your preferred date and submit your reservation details.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form className="space-y-5 rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 md:p-8">
          <h2 className="text-lg font-semibold text-slate-900">Day Tour Details</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-700">Preferred date
              <input type="date" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] focus:ring-2" />
            </label>
            <label className="text-sm text-slate-700">Number of guests
              <input type="number" min={1} defaultValue={10} className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] focus:ring-2" />
            </label>
          </div>

          <h2 className="pt-1 text-lg font-semibold text-slate-900">Guest Information</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-700 md:col-span-2">Full name
              <input type="text" placeholder="Juan Dela Cruz" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] focus:ring-2" />
            </label>
            <label className="text-sm text-slate-700">Email
              <input type="email" placeholder="guest@email.com" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] focus:ring-2" />
            </label>
            <label className="text-sm text-slate-700">Contact number
              <input type="tel" placeholder="09xx xxx xxxx" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] focus:ring-2" />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-700">Upload valid ID
              <input type="file" accept="image/*,.pdf" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 text-sm" />
            </label>
            <label className="text-sm text-slate-700">Upload proof of payment
              <input type="file" accept="image/*,.pdf" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 text-sm" />
            </label>
          </div>

          <button type="button" className="w-full rounded-xl bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-strong)]">
            Submit Day Tour Reservation (UI Only)
          </button>
        </form>

        <aside className="space-y-4">
          <div className="relative h-64 overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-white">
            <Image src="/Assets/Facilities/TopPoolView.jpg" alt="Day tour pool view" fill className="object-cover" />
          </div>
          <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-muted)] p-6">
            <h3 className="text-lg font-semibold text-slate-900">Capacity and Fees</h3>
            <p className="mt-3 text-sm text-slate-700">Selected date capacity: 80 guests</p>
            <p className="mt-1 text-sm text-slate-700">Remaining slots: 53</p>
            <p className="mt-3 text-sm text-slate-700">Estimated total: PHP 5,000</p>
            <p className="mt-1 text-sm font-semibold text-[var(--primary)]">Required down payment (50%): PHP 2,500</p>
          </div>
        </aside>
      </section>

      <section className="mt-10 rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 md:p-8">
        <h2 className="font-display text-3xl text-slate-900">Included In Day Tour</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          {dayTourHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link href="/track-reservation" className="mt-5 inline-block text-sm font-semibold text-[var(--primary)]">
          Already reserved? Track your booking
        </Link>
      </section>
    </GuestShell>
  );
}
