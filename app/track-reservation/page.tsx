import { GuestShell } from "../components/guest/GuestShell";

const sampleTimeline = [
  { label: "Reservation Submitted", status: "done", note: "Pending review by admin/staff" },
  { label: "Payment Verification", status: "active", note: "Waiting for staff validation" },
  { label: "Reservation Confirmed", status: "todo", note: "Email notification will be sent" },
];

export default function TrackReservationPage() {
  return (
    <GuestShell>
      <section className="pt-8">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Guest Side</p>
        <h1 className="font-display mt-2 text-4xl text-slate-900 md:text-5xl">Track Reservation</h1>
        <p className="mt-3 max-w-2xl text-slate-700">
          Enter your email and reference number to view current reservation status and booking details.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <form className="space-y-5 rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 md:p-8">
          <label className="block text-sm text-slate-700">Email address
            <input type="email" placeholder="guest@email.com" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] focus:ring-2" />
          </label>
          <label className="block text-sm text-slate-700">Reference number
            <input type="text" placeholder="SF-2026-000123" className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] focus:ring-2" />
          </label>
          <button type="button" className="w-full rounded-xl bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-strong)]">
            Find Reservation
          </button>
          <p className="text-xs text-slate-500">This is currently a frontend shell. API lookup will be connected next.</p>
        </form>

        <section className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 md:p-8">
          <h2 className="text-xl font-semibold text-slate-900">Reservation Status Preview</h2>
          <div className="mt-4 space-y-4">
            {sampleTimeline.map((item) => (
              <article key={item.label} className="rounded-2xl border border-[var(--border-soft)] bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm text-slate-600">{item.note}</p>
                <span
                  className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    item.status === "done"
                      ? "bg-emerald-100 text-emerald-700"
                      : item.status === "active"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {item.status === "done" ? "Completed" : item.status === "active" ? "In Progress" : "Pending"}
                </span>
              </article>
            ))}
          </div>
        </section>
      </section>
    </GuestShell>
  );
}
