import Link from "next/link";
import { GuestShell } from "../../components/guest/GuestShell";
import { getRoomBySlug, roomOffers } from "../../lib/guest-content";

const steps = [
  "Select one or more rooms",
  "Enter stay dates and guest details",
  "Review the total and 50% down payment",
  "Upload valid ID and proof of payment",
  "Submit and receive your reference number",
];

function parseRoomSlugs(rawValue?: string | string[]) {
  if (!rawValue) {
    return [];
  }

  const value = Array.isArray(rawValue) ? rawValue[0] : rawValue;
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parsePrice(priceLabel: string) {
  const parsed = Number(priceLabel.replace(/[^0-9]/g, ""));
  return Number.isNaN(parsed) ? 0 : parsed;
}

type BookRoomPageProps = {
  searchParams: Promise<{ rooms?: string | string[] }>;
};

export default async function BookRoomPage({ searchParams }: BookRoomPageProps) {
  const { rooms: roomsQuery } = await searchParams;
  const selectedSlugs = parseRoomSlugs(roomsQuery);
  const selectedRooms = selectedSlugs
    .map((slug) => getRoomBySlug(slug))
    .filter((room): room is NonNullable<ReturnType<typeof getRoomBySlug>> => Boolean(room));

  const fallbackRooms = selectedRooms.length ? selectedRooms : roomOffers.slice(0, 1);
  const estimatedTotal = fallbackRooms.reduce((total, room) => total + parsePrice(room.priceLabel), 0);
  const downPayment = Math.ceil(estimatedTotal * 0.5);

  return (
    <GuestShell>
      <section className="mt-6 grid gap-6 rounded-[2rem] border border-[var(--border-soft)] bg-white/85 p-5 shadow-sm backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr] md:p-8">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">Booking wizard</p>
          <h1 className="mt-2 font-display text-4xl text-slate-900 md:text-5xl">Room reservation form</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700 md:text-base">
            Continue with the room selection you made from the Rooms page. You can book one room or combine multiple room types in one reservation.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--surface-muted)] p-5 md:p-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">Selected rooms</p>
          <div className="mt-4 space-y-3">
            {fallbackRooms.map((room) => (
              <div key={room.slug} className="flex items-center justify-between rounded-2xl bg-white p-4 text-sm">
                <div>
                  <p className="font-semibold text-slate-900">{room.name}</p>
                  <p className="text-slate-600">{room.priceLabel}</p>
                </div>
                <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold text-slate-700">Included</span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-white p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Estimated total: PHP {estimatedTotal.toLocaleString()}</p>
            <p className="mt-1 text-[var(--primary)]">Required down payment (50%): PHP {downPayment.toLocaleString()}</p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form className="space-y-5 rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface)] p-6 md:p-8">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Step 1: Stay details</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="text-sm text-slate-700">
                Check-in date
                <input type="date" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] focus:ring-2" />
              </label>
              <label className="text-sm text-slate-700">
                Check-out date
                <input type="date" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] focus:ring-2" />
              </label>
              <label className="text-sm text-slate-700">
                Number of guests
                <input type="number" min={1} defaultValue={2} className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] focus:ring-2" />
              </label>
              <label className="text-sm text-slate-700">
                Room selection
                <select defaultValue={selectedRooms[0]?.slug ?? fallbackRooms[0]?.slug} className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] focus:ring-2">
                  {roomOffers.map((room) => (
                    <option key={room.slug} value={room.slug}>{room.name}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div>
            <h2 className="pt-1 text-lg font-semibold text-slate-900">Step 2: Guest information</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="text-sm text-slate-700 md:col-span-2">
                Full name
                <input type="text" placeholder="Juan Dela Cruz" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] focus:ring-2" />
              </label>
              <label className="text-sm text-slate-700">
                Email
                <input type="email" placeholder="guest@email.com" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] focus:ring-2" />
              </label>
              <label className="text-sm text-slate-700">
                Contact number
                <input type="tel" placeholder="09xx xxx xxxx" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] focus:ring-2" />
              </label>
            </div>
          </div>

          <div>
            <h2 className="pt-1 text-lg font-semibold text-slate-900">Step 3: Proof of booking</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="text-sm text-slate-700">
                Upload valid ID
                <input type="file" accept="image/*,.pdf" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 text-sm" />
              </label>
              <label className="text-sm text-slate-700">
                Upload proof of payment
                <input type="file" accept="image/*,.pdf" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 text-sm" />
              </label>
            </div>
          </div>

          <button type="button" className="w-full rounded-xl bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-strong)]">
            Submit Room Reservation (UI Only)
          </button>
        </form>

        <aside className="space-y-4">
          <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
            <h3 className="text-lg font-semibold text-slate-900">Availability preview</h3>
            <p className="mt-2 text-sm text-slate-700">
              Select your dates first, then compare the room availability cards from the Rooms page.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {fallbackRooms.map((room) => (
                <div key={room.slug} className="rounded-2xl bg-[var(--surface-muted)] p-4">
                  <p className="text-sm font-semibold text-slate-900">{room.name}</p>
                  <p className="mt-1 text-xs text-slate-600">Open dates shown before booking</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-muted)] p-6">
            <h3 className="text-lg font-semibold text-slate-900">Payment flow</h3>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div className="mt-4 rounded-2xl bg-white p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Selected rooms summary</p>
              <p className="mt-1">{fallbackRooms.length} room{fallbackRooms.length === 1 ? "" : "s"} included in this booking.</p>
              <p className="mt-1 text-[var(--primary)]">50% down payment: PHP {downPayment.toLocaleString()}</p>
            </div>
          </div>
          <Link href="/track-reservation" className="block rounded-[1.5rem] border border-[var(--border-soft)] bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-[var(--primary)] hover:text-[var(--primary)]">
            Have a reference number? Track booking
          </Link>
        </aside>
      </section>
    </GuestShell>
  );
}
