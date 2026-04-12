import Image from "next/image";
import Link from "next/link";
import { GuestShell } from "./components/guest/GuestShell";
import { roomOffers } from "./lib/guest-content";

const galleryFrames = [
  "/Assets/View/FrontView.jpg",
  "/Assets/Facilities/TopPoolView.jpg",
  "/Assets/View/Banner.jpg",
  "/Assets/View/Second floor view.jpg",
  "/Assets/View/IMG3.jpg",
];

const testimonials = [
  {
    name: "Aira M.",
    role: "Weekend Guest",
    quote:
      "Super easy booking process and the place looked exactly like the photos. The pool vibe at sunset is 10/10.",
  },
  {
    name: "Jules P.",
    role: "Birthday Celebrant",
    quote:
      "We reserved for a small celebration and everything felt smooth from payment upload to confirmation update.",
  },
  {
    name: "Mark & Elle",
    role: "Couple Room Stay",
    quote:
      "The room was cozy and clean, staff was responsive, and tracking our booking status gave us peace of mind.",
  },
];

const processSteps = [
  {
    icon: "/Assets/Icon/Sand Castle.png",
    num: "1",
    title: "Pick a Stay",
    text: "Select a room or day tour package.",
  },
  {
    icon: "/Assets/Icon/Sadals.png",
    num: "2",
    title: "Details",
    text: "Enter your booking dates and information.",
  },
  {
    icon: "/Assets/Icon/Beach ball.png",
    num: "3",
    title: "Pay",
    text: "Transfer 50% deposit and upload proof.",
  },
  {
    icon: "/Assets/Icon/Floters.png",
    num: "4",
    title: "Relax",
    text: "We verify and you get ready to chill.",
  },
];

const roomBadgeBySlug: Record<string, string> = {
  "ground-floor": "Most Popular",
  "group-room": "For Groups",
  "couple-room": "For Couples",
  tent: "For Groups",
};

const roomIconBySlug: Record<string, string> = {
  "ground-floor": "/Assets/Icon/Sadals.png",
  "group-room": "/Assets/Icon/Coconut tree.png",
  "couple-room": "/Assets/Icon/Floters.png",
  tent: "/Assets/Icon/Shell.png",
};

export default function Home() {
  return (
    <GuestShell>
      {/* HERO SECTION */}
      <section className="relative mt-4 flex min-h-[50vh] flex-col items-center justify-center overflow-hidden rounded-[2.5rem] pt-20 pb-16 text-center md:mt-6 md:min-h-[60vh] md:pt-24 md:pb-16 lg:mt-8 shadow-2xl border border-white/20">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Assets/View/FrontView.jpg" 
            alt="Sandyfeet Resort View" 
            fill 
            className="object-cover object-[center_38%] md:object-[center_30%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/88 via-[#1d2e35]/40 to-[#1d2e35]/18 mix-blend-multiply"></div>
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-[var(--background)]/20 to-[var(--background)]"></div>
        </div>

        {/* Fun icons (minimal in hero) */}
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          <Image
            src="/Assets/Icon/Beach ball.png"
            alt=""
            width={170}
            height={170}
            className="animate-float absolute -left-8 top-[18%] opacity-85 drop-shadow-xl md:left-6 md:top-[22%] md:w-[180px]"
          />
          <Image
            src="/Assets/Icon/Coconut tree.png"
            alt=""
            width={230}
            height={230}
            className="animate-float-reverse absolute -right-10 bottom-[12%] opacity-80 drop-shadow-xl md:right-6 md:bottom-[10%] md:w-[240px]"
          />
        </div>

        <div className="relative z-20 max-w-3xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="mb-4 inline-flex rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-[10px] md:text-xs font-bold tracking-widest text-white uppercase border border-white/30 shadow-lg">
            Welcome to Sandyfeet Camp
          </p>
          <h1 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-xl">
            Escape to the <span className="text-[var(--accent)] relative inline-block">
                shore.
            </span>
            <br />
            Book your stay.
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-white/90 md:text-base max-w-xl mx-auto font-medium drop-shadow">
            Reserve rooms and day tours in minutes. Enjoy a quick and smooth booking flow from search to confirmation.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
             <Link href="/rooms" className="px-6 py-3 rounded-full bg-[var(--primary)] text-white text-sm font-bold hover:bg-[var(--primary-strong)] hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgba(13,92,99,0.4)]">
               Explore Rooms
             </Link>
             <Link href="/day-tour" className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm font-bold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
               Book a Day Tour
             </Link>
          </div>
        </div>

        {/* Bottom fade transition to next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-b from-transparent via-[var(--background)]/50 to-[var(--background)] md:h-44" />
      </section>

      {/* ANIMATED GALLERY */}
      <section className="relative z-10 mt-8 mb-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/Assets/Icon/Shell.png"
            alt=""
            width={120}
            height={120}
            className="animate-float-reverse absolute right-8 top-8 hidden opacity-30 md:block"
          />
          <Image
            src="/Assets/Icon/Floters.png"
            alt=""
            width={150}
            height={150}
            className="animate-float absolute -left-8 bottom-10 hidden opacity-35 lg:block"
          />
        </div>
          <div className="text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-slate-500">Live Moments</p>
          <h2 className="mt-2 font-display text-4xl font-bold text-slate-900 md:text-5xl">Gallery in Motion</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            A quick look at the vibe around Sandyfeet, from bright mornings by the pool to laid-back sunsets.
          </p>
        </div>

        <div className="marquee-track mt-8">
          <div className="marquee-content">
            {[...galleryFrames, ...galleryFrames].map((src, index) => (
              <div key={`${src}-${index}`} className="relative h-40 w-[18rem] shrink-0 overflow-hidden rounded-[1.75rem] border border-white/70 shadow-xl md:h-48 md:w-[22rem]">
                <Image
                  src={src}
                  alt={`Sandyfeet gallery frame ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CARDS */}
      <section className="relative z-10 mt-20 mb-24 w-full px-4 text-center md:px-8 xl:px-12">
         <div className="pointer-events-none absolute inset-0 z-0">
           <Image
             src="/Assets/Icon/Sadals.png"
             alt=""
             width={130}
             height={130}
             className="animate-float absolute -left-4 top-10 hidden rotate-[-15deg] opacity-35 lg:block"
           />
           <Image
             src="/Assets/Icon/Beach ball.png"
             alt=""
             width={110}
             height={110}
             className="animate-float-reverse absolute right-4 bottom-6 hidden opacity-35 lg:block"
           />
         </div>
          <h2 className="font-display text-4xl font-bold text-slate-900 md:text-[2.75rem] mb-4">Featured packages</h2>
         <p className="text-slate-500 mb-14 max-w-xl mx-auto font-medium leading-relaxed">Explore our top-picked stays designed for your perfect getaway.</p>

         <div className="grid gap-8 md:grid-cols-3">
            {roomOffers.slice(0, 3).map((room) => (
              <article
                key={room.name}
                className="relative bg-white rounded-[2.5rem] p-5 md:p-6 border border-[var(--border-soft)] shadow-sm hover:shadow-2xl hover:shadow-[var(--primary)]/5 transition-all duration-500 group flex flex-col items-start"
              >
                <div className="relative w-full h-48 sm:h-[14rem] rounded-[2rem] overflow-hidden mb-6">
                  <Image src={room.images[0]} alt={room.name} fill className="object-cover transform group-hover:scale-[1.03] transition-transform duration-700" />
                  
                  {/* Badge */}
                  <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[11px] uppercase tracking-wider font-extrabold text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                    {roomBadgeBySlug[room.slug] ?? "Featured"}
                  </div>
                  
                  {/* Floating Action Button-like decoration */}
                  <div className="absolute -bottom-6 right-6 w-14 h-14 bg-white rounded-full p-2.5 shadow-xl border border-slate-50 flex items-center justify-center z-10 transition-transform group-hover:-translate-y-2 duration-300">
                     <Image src={roomIconBySlug[room.slug] ?? "/Assets/Icon/Shell.png"} alt="icon" width={28} height={28} className="object-contain" />
                  </div>
                </div>

                <div className="w-full text-left flex-1 flex flex-col justify-between">
                   <div>
                     <div className="flex items-center gap-2 mb-3">
                       <span className="flex-shrink-0 w-6 flex justify-center"><Image src="/Assets/Icon/Shell.png" width={16} height={16} alt="capacity" className="opacity-40"/></span>
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-0.5 line-clamp-1">{room.capacity}</span>
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-2">{room.name}</h3>
                   </div>
                   
                   <div className="w-full flex items-center justify-between mt-8 pt-5 border-t border-slate-100/80">
                      <p className="text-xl font-bold text-[var(--primary)]">{room.priceLabel}</p>
                      <Link href={`/rooms/${room.slug}`} className="bg-slate-50 hover:bg-[var(--primary)] hover:text-white px-6 py-3 rounded-full text-sm font-bold text-slate-700 transition-colors shadow-sm border border-slate-100 hover:border-transparent">
                        View Details
                      </Link>
                   </div>
                </div>
              </article>
            ))}
         </div>
         <div className="mt-14">
            <Link href="/rooms" className="inline-block px-10 py-4 rounded-full border border-[var(--border-soft)] bg-white text-slate-700 font-bold text-sm tracking-wide sm:text-base hover:border-[var(--primary)] hover:text-[var(--primary)] shadow-sm hover:shadow-md transition-all duration-300">
              Explore All Rooms
            </Link>
         </div>
      </section>

      {/* FUN HIGHLIGHTS */}
      <section className="relative z-10 mb-24 w-full">
        <div className="grid gap-6 rounded-[2rem] border border-[var(--border-soft)] bg-white/75 p-6 backdrop-blur-sm md:grid-cols-[1.25fr_0.75fr] md:p-8">
          <article className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white p-6 md:p-8">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-slate-500">Why Guests Love It</p>
            <h3 className="mt-2 font-display text-3xl text-slate-900 md:text-4xl">Simple booking, real getaway energy</h3>
            <div className="mt-6 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
              <div className="rounded-2xl bg-[var(--surface-muted)] p-4">Fast reservation confirmation</div>
              <div className="rounded-2xl bg-[var(--surface-muted)] p-4">Clear payment instructions</div>
              <div className="rounded-2xl bg-[var(--surface-muted)] p-4">Helpful staff communication</div>
              <div className="rounded-2xl bg-[var(--surface-muted)] p-4">Track booking in one tap</div>
            </div>
          </article>

          <aside className="grid gap-4">
            <div className="rounded-[1.5rem] bg-[var(--primary)] p-6 text-white drift-card">
              <p className="text-xs uppercase tracking-[0.2em] text-white/75">Happy Guests</p>
              <p className="mt-2 text-4xl font-bold">1,200+</p>
              <p className="mt-1 text-sm text-white/90">Bookings handled with a smooth flow</p>
            </div>
            <div className="rounded-[1.5rem] bg-[var(--accent)]/85 p-6 text-slate-900 drift-card-reverse">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-700">Avg. Booking Time</p>
              <p className="mt-2 text-4xl font-bold">3 min</p>
              <p className="mt-1 text-sm text-slate-700">From details submission to reference code</p>
            </div>
          </aside>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative z-10 mb-24 w-full">
        <Image
          src="/Assets/Icon/Coconut tree.png"
          alt=""
          width={120}
          height={120}
          className="pointer-events-none animate-float absolute -left-2 top-16 hidden opacity-30 lg:block"
        />
        <div className="mb-8 text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-slate-500">Guest Stories</p>
          <h2 className="mt-2 font-display text-4xl font-bold text-slate-900 md:text-5xl">Testimonials</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="group rounded-[1.75rem] border border-[var(--border-soft)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface-muted)] text-sm font-bold text-[var(--primary)]">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{item.role}</p>
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-700">"{item.quote}"</p>
              <div className="mt-4 flex gap-1.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx} className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]/90" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SIMPLE HOW IT WORKS */}
      <section className="relative z-10 mb-24 w-full text-center">
         <p className="text-[11px] uppercase tracking-[0.25em] font-extrabold text-slate-400 mb-3">Process</p>
         <h2 className="font-display text-4xl font-bold text-slate-900 md:text-[2.75rem]">How it works</h2>
         
         <div className="mt-12 grid gap-8 md:grid-cols-4 md:gap-4 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-slate-100 -z-10"></div>
            
            {processSteps.map((step) => (
              <div key={step.num} className="flex flex-col items-center bg-transparent">
                 <div className="w-[88px] h-[88px] rounded-full bg-white flex items-center justify-center mb-5 shadow-[0_8px_20px_rgba(0,0,0,0.04)] border border-slate-100 relative group">
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[var(--primary)] text-white text-xs font-bold flex items-center justify-center border-2 border-white">{step.num}</span>
                  <Image src={step.icon} alt="" width={42} height={42} className="object-contain transform group-hover:scale-110 transition-transform duration-300" />
                 </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[200px] font-medium">{step.text}</p>
              </div>
            ))}
         </div>
      </section>

      {/* FIND US */}
      <section className="relative z-10 mb-24 w-full">
        <div className="grid gap-6 rounded-[2rem] border border-[var(--border-soft)] bg-white/80 p-4 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:p-6">
          <article className="rounded-[1.5rem] bg-[var(--surface-muted)] p-6 md:p-8">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-slate-500">Find Us</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 md:text-4xl">Where is Sandyfeet Liwliwa?</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-700 md:text-base">
              Sandyfeet Camp and Event Site is located in Liwliwa, San Felipe, Zambales. Open the map below for direct navigation.
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-700">Sandyfeet#Liwliwa Camp and Event Site</p>
            <p className="text-sm text-slate-600">San Felipe, Zambales, Philippines</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://www.google.com/maps/place/Sandyfeet%23Liwliwa+Camp%26Event+Site/@15.0460584,120.0594415,809m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3395d37ebabeb345:0xd3420683685e0942!8m2!3d15.0460584!4d120.0594415!16s%2Fg%2F11j8_fjyc5?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--primary-strong)]"
              >
                Open in Google Maps
              </Link>
            </div>
          </article>

          <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border-soft)] bg-white">
            <iframe
              title="Sandyfeet Liwliwa location map"
              src="https://www.google.com/maps?q=15.0460584,120.0594415&z=16&output=embed"
              className="h-[320px] w-full md:h-full min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </GuestShell>
  );
}
