export default function Home() {
  return (
    <div className="guest-bg min-h-screen">
      <header className="section-shell py-6">
        <nav className="glass-card flex items-center justify-between rounded-full px-5 py-3 md:px-7">
          <div>
            <p className="font-display text-2xl leading-none text-[var(--primary)]">Sandyfeet</p>
            <p className="text-xs tracking-[0.2em] text-slate-500">CAMP AND EVENT SITE</p>
          </div>
          <div className="hidden items-center gap-7 text-sm text-slate-700 md:flex">
            <a href="#rooms" className="transition hover:text-[var(--primary)]">Rooms</a>
            <a href="#day-tour" className="transition hover:text-[var(--primary)]">Day Tour</a>
            <a href="#how-it-works" className="transition hover:text-[var(--primary)]">How It Works</a>
            <a href="#track" className="transition hover:text-[var(--primary)]">Track Booking</a>
          </div>
          <button className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--primary-strong)]">
            Book Now
          </button>
        </nav>
      </header>

      <main className="section-shell pb-16 md:pb-24">
        <section className="grid gap-8 py-8 md:grid-cols-[1.15fr_0.85fr] md:py-14">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[var(--border-soft)] bg-white/80 px-3 py-1 text-xs tracking-wide text-slate-600">
              Online Room Reservation and Day Tour Booking
            </p>
            <h1 className="font-display text-4xl leading-tight text-slate-900 md:text-6xl">
              Escape to the shore.
              <br />
              Book your perfect Sandyfeet stay.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
              Reserve rooms and day tours in minutes. Check real-time availability,
              upload payment proof, and track your reservation status in one smooth flow.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-strong)]">
                Start Room Booking
              </button>
              <button className="rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[var(--primary)] hover:text-[var(--primary)]">
                Book Day Tour
              </button>
            </div>
          </div>

          <aside className="glass-card rounded-3xl p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Quick Availability</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">Check your dates</h2>
            <form className="mt-5 space-y-4">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <label className="text-sm text-slate-700">
                  Check-in
                  <input
                    type="date"
                    className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] transition focus:ring-2"
                  />
                </label>
                <label className="text-sm text-slate-700">
                  Check-out
                  <input
                    type="date"
                    className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] transition focus:ring-2"
                  />
                </label>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <label className="text-sm text-slate-700">
                  Guests
                  <input
                    type="number"
                    min={1}
                    placeholder="2"
                    className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] transition focus:ring-2"
                  />
                </label>
                <label className="text-sm text-slate-700">
                  Stay Type
                  <select className="mt-1.5 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 outline-none ring-[var(--primary)] transition focus:ring-2">
                    <option>Room Reservation</option>
                    <option>Day Tour</option>
                  </select>
                </label>
              </div>
              <button
                type="button"
                className="w-full rounded-xl bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-strong)]"
              >
                Check Availability
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500">
              Final booking includes 50% down payment and valid ID upload.
            </p>
          </aside>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "Real-time room and day tour availability",
            "Secure proof-of-payment and ID upload",
            "Easy reservation tracking with reference code",
          ].map((point) => (
            <article key={point} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-5">
              <p className="text-sm font-medium text-slate-800">{point}</p>
            </article>
          ))}
        </section>

        <section id="rooms" className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-3xl text-slate-900 md:text-4xl">Popular Room Types</h2>
            <a href="#" className="text-sm font-semibold text-[var(--primary)]">View all rooms</a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { name: "Beachfront Deluxe", price: "From PHP 5,500 / night" },
              { name: "Family Villa", price: "From PHP 7,200 / night" },
              { name: "Garden Suite", price: "From PHP 4,900 / night" },
            ].map((room) => (
              <article
                key={room.name}
                className="overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)]"
              >
                <div className="h-44 bg-gradient-to-br from-[#9bc9ca] via-[#f2d5bd] to-[#d4eceb]" />
                <div className="p-5">
                  <p className="text-lg font-semibold text-slate-900">{room.name}</p>
                  <p className="mt-1 text-sm text-slate-600">{room.price}</p>
                  <button className="mt-4 rounded-full border border-[var(--border-soft)] px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[var(--primary)] hover:text-[var(--primary)]">
                    Reserve this room
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="day-tour" className="mt-16 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-7">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Day Tour Experience</p>
            <h2 className="mt-2 font-display text-3xl text-slate-900">Relax, swim, and celebrate</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Plan your day trip with clear inclusions, pricing, and guest limits.
              Select your date, upload payment proof, and get quick booking confirmation updates.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>Up to 80 guests per day depending on selected package</li>
              <li>Live remaining slots and unavailable date display</li>
              <li>Simple payment instruction flow for GCash and bank transfer</li>
            </ul>
            <button className="mt-6 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-strong)]">
              Book Day Tour Date
            </button>
          </article>
          <div className="rounded-3xl bg-gradient-to-br from-[#0d5c63] via-[#2f8187] to-[#86b8b8] p-6 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-white/75">Booking Promise</p>
            <h3 className="mt-2 text-2xl font-semibold">Clear rules, no surprises</h3>
            <p className="mt-3 text-sm leading-6 text-white/90">
              Before checkout, guests can review booking rules, down payment details, and cancellation policy.
            </p>
          </div>
        </section>

        <section id="how-it-works" className="mt-16 rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 md:p-8">
          <h2 className="font-display text-3xl text-slate-900">How Booking Works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              ["1", "Select", "Choose room or day tour date and check availability."],
              ["2", "Enter Details", "Add guest info, stay details, and preferred schedule."],
              ["3", "Upload", "Submit valid ID and proof of 50% down payment."],
              ["4", "Track", "Use your reference number to follow reservation status."],
            ].map(([step, title, text]) => (
              <article key={step} className="rounded-2xl bg-[var(--surface-muted)] p-4">
                <p className="text-xs font-semibold tracking-[0.25em] text-[var(--primary)]">STEP {step}</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="track" className="mt-16 grid gap-6 rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <h2 className="font-display text-3xl text-slate-900">Track your reservation anytime</h2>
            <p className="mt-2 text-slate-700">
              Guests can check booking status using email and reference number.
            </p>
          </div>
          <button className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-900 transition hover:brightness-95">
            Go to Reservation Tracker
          </button>
        </section>
      </main>
    </div>
  );
}
