import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuestShell } from "../../components/guest/GuestShell";
import { getRoomBySlug, roomOffers } from "../../lib/guest-content";

type RoomDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const availabilityBySlug: Record<string, { date: string; status: string }[]> = {
  "ground-floor": [
    { date: "Apr 14", status: "Open" },
    { date: "Apr 15", status: "Few left" },
    { date: "Apr 17", status: "Open" },
    { date: "Apr 19", status: "Booked" },
  ],
  "group-room": [
    { date: "Apr 15", status: "Open" },
    { date: "Apr 16", status: "Open" },
    { date: "Apr 18", status: "Few left" },
    { date: "Apr 20", status: "Booked" },
  ],
  "couple-room": [
    { date: "Apr 14", status: "Open" },
    { date: "Apr 16", status: "Few left" },
    { date: "Apr 18", status: "Open" },
    { date: "Apr 19", status: "Booked" },
  ],
  tent: [
    { date: "Apr 15", status: "Open" },
    { date: "Apr 17", status: "Few left" },
    { date: "Apr 19", status: "Open" },
    { date: "Apr 21", status: "Booked" },
  ],
};

const paymentSteps = [
  "Choose your preferred room and stay dates",
  "Review the booking summary and total amount",
  "Pay the 50% down payment through the provided details",
  "Upload valid ID and proof of payment",
  "Wait for confirmation and your reference number",
];

export function generateStaticParams() {
  return roomOffers.map((room) => ({ slug: room.slug }));
}

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  return (
    <GuestShell>
      <section className="mt-6 grid gap-6 rounded-[2rem] border border-[var(--border-soft)] bg-white/85 p-5 shadow-sm backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr] md:p-8">
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <Link href="/rooms" className="text-sm font-semibold text-[var(--primary)]">
              Back to rooms
            </Link>
            <span className="rounded-full bg-[var(--surface-muted)] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
              Rooms section active
            </span>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">Room Details</p>
            <h1 className="mt-2 font-display text-4xl text-slate-900 md:text-5xl">{room.name}</h1>
            <p className="mt-2 text-xl font-bold text-[var(--primary)]">{room.priceLabel}</p>
            <p className="mt-1 text-sm text-slate-600">{room.capacity}</p>
            {room.note ? <p className="mt-2 text-sm font-medium text-slate-700">{room.note}</p> : null}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {room.images.slice(0, 3).map((image, index) => (
              <div key={image} className={`relative overflow-hidden rounded-[1.5rem] border border-[var(--border-soft)] ${index === 0 ? "sm:col-span-3 h-72" : "h-40"}`}>
                <Image src={image} alt={`${room.name} view ${index + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4 rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface-muted)] p-5 md:p-6">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500">Quick booking</p>
            <h2 className="mt-2 font-display text-3xl text-slate-900">Pick dates and see availability</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              Check-in
              <input type="date" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] focus:ring-2" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Check-out
              <input type="date" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] focus:ring-2" />
            </label>
          </div>
          <div className="rounded-2xl bg-white p-4">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">Available dates</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {(availabilityBySlug[room.slug] ?? []).map((item) => (
                <div key={item.date} className="rounded-xl border border-[var(--border-soft)] p-3">
                  <p className="text-sm font-semibold text-slate-900">{item.date}</p>
                  <p className="text-xs text-slate-600">{item.status}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-4">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">Time guide</p>
            <div className="mt-3 space-y-2 text-sm text-slate-700">
              <p>Check-in: 2:00 PM</p>
              <p>Check-out: 12:00 NN</p>
              <p>Best for overnight stays and planned resort visits.</p>
            </div>
          </div>
          <Link
            href={`/rooms?selected=${room.slug}`}
            className="block rounded-full bg-[var(--primary)] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[var(--primary-strong)]"
          >
            Add to room selection
          </Link>
          <Link
            href={`/book/room?rooms=${room.slug}`}
            className="block rounded-full border border-[var(--border-soft)] bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            Continue to booking
          </Link>
        </aside>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <article className="rounded-[2rem] border border-[var(--border-soft)] bg-white p-6 md:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">What is included</p>
          <h2 className="mt-2 font-display text-3xl text-slate-900">Inclusions and features</h2>
          <ul className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            {room.inclusions.map((item) => (
              <li key={item} className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3">{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-muted)] p-6 md:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">Payment process</p>
          <h2 className="mt-2 font-display text-3xl text-slate-900">How the payment works</h2>
          <ol className="mt-5 space-y-3 text-sm text-slate-700">
            {paymentSteps.map((step, index) => (
              <li key={step} className="flex gap-3 rounded-2xl bg-white p-4">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-white">{index + 1}</span>
                <span className="leading-6">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5 rounded-2xl bg-white p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Down payment reminder</p>
            <p className="mt-1">Guests submit a 50% down payment and upload a valid ID before final confirmation.</p>
          </div>
        </article>
      </section>

      <section className="mt-8 rounded-[2rem] border border-[var(--border-soft)] bg-white p-6 md:p-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">Different parts of this room</p>
        <h2 className="mt-2 font-display text-3xl text-slate-900">{room.name} gallery</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {room.parts.map((part) => (
            <article key={part.title} className="overflow-hidden rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface-muted)]">
              <div className="relative h-48">
                <Image src={part.image} alt={part.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{part.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{part.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </GuestShell>
  );
}
