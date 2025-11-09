import React from "react";

export default function LaBlancheSite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      <header className="bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center rounded-md font-semibold">LB</div>
            <div>
              <h1 className="text-lg font-semibold">La Blanche Salon</h1>
              <p className="text-xs text-gray-500">Hair & Beauty — Mission Street • New branch near Collector's Office</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-4 text-sm">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#gallery" className="hover:text-gray-900">Gallery</a>
            <a href="#locations" className="hover:text-gray-900">Locations</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <a href="tel:+914134900666" className="ml-3 inline-block bg-amber-500 text-white px-4 py-2 rounded-md text-sm">Call / WhatsApp</a>
          </nav>

          <div className="md:hidden">
            <a href="tel:+914134900666" className="inline-block bg-amber-500 text-white px-3 py-2 rounded-md text-sm">Call</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold leading-tight">La Blanche Salon</h2>
            <p className="mt-4 text-lg text-gray-600">Luxury hair and beauty in the heart of Pondicherry. Now welcoming guests at our Mission Street salon — and opening a new branch next to the Collector's Office this month.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#locations" className="inline-block bg-gray-100 border border-gray-200 px-4 py-2 rounded-md">View locations</a>
              <a href="#services" className="inline-block bg-amber-500 text-white px-4 py-2 rounded-md">See services & pricing</a>
              <a href="https://wa.me/914134900666" target="_blank" rel="noreferrer" className="inline-block border border-amber-500 text-amber-500 px-4 py-2 rounded-md">Book on WhatsApp</a>
            </div>

            <div className="mt-6 text-sm text-gray-500">Phone: <a href="tel:+914134900666" className="text-amber-600">0413 490 0666</a></div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            {/* placeholder hero image */}
            <div className="w-full h-72 bg-gradient-to-br from-rose-100 to-amber-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-semibold">La Blanche — Mission Street</div>
                <div className="text-sm text-gray-600 mt-2">Salon • Hair • Beauty • Bridal • Spa</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mt-12">
          <h3 className="text-2xl font-semibold">Popular services</h3>
          <p className="text-gray-600 mt-2">From cuts and colour to bridal packages and specialty facials — we tailor each appointment.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard title="Women's Haircut" price="INR 800+" desc="Precision cuts, styling and consultation." />
            <ServiceCard title="Colour & Highlights" price="INR 2000+" desc="Balayage, ombré and full-colour services." />
            <ServiceCard title="Keratin / Smoothening" price="INR 2500+" desc="Long-lasting smooth finish and treatment." />
            <ServiceCard title="Bridal Package" price="Custom" desc="Full bridal hair, makeup and trial sessions." />
            <ServiceCard title="Facials & Skin" price="INR 1000+" desc="Hydrating, brightening and acne-care treatments." />
            <ServiceCard title="Gents Grooming" price="INR 400+" desc="Haircut, beard trim and styling." />
          </div>

          <div className="mt-8 text-sm text-gray-500">
            Note: Prices are indicative. Final quote will be provided at consultation.
          </div>
        </section>

        <section id="gallery" className="mt-12">
          <h3 className="text-2xl font-semibold">Gallery</h3>
          <p className="text-gray-600 mt-2">A snapshot of our work — haircuts, colour, bridal looks and salon interiors.</p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-40 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">Image {i + 1}</div>
            ))}
          </div>
        </section>

        <section id="locations" className="mt-12">
          <h3 className="text-2xl font-semibold">Our locations</h3>
          <p className="text-gray-600 mt-2">Two convenient salons in Pondicherry — established Mission Street branch and a new branch opening next to the Collector's Office.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <LocationCard
              title="La Blanche — Mission Street"
              addressLine1="Bayshore Plaza, 2nd floor, Mission St, Heritage Town"
              city="Puducherry, 605001"
              phone="0413 490 0666"
              hours="Open — Closes 9pm"
            />

            <LocationCard
              title="La Blanche — Collector's Office (Opening soon)"
              addressLine1="Near Collector Office, Mission St area"
              city="Puducherry"
              phone="0413 490 0666"
              hours="Opening this month — timings to be confirmed"
            />
          </div>

          <div className="mt-6 rounded-md overflow-hidden">
            {/* Map embed placeholder (replace src with Google Maps embed) */}
            <iframe
              title="La Blanche locations map"
              src="https://www.google.com/maps/embed?pb=!1m18"
              className="w-full h-72 border-0"
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <section id="contact" className="mt-12 bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-semibold">Contact & Bookings</h3>
          <p className="text-gray-600 mt-2">Quick ways to reach us — call, WhatsApp, or drop a message below.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-700">Phone</div>
              <a href="tel:+914134900666" className="block mt-1 text-amber-600 font-medium">0413 490 0666 (Call / WhatsApp)</a>

              <div className="mt-4 text-sm text-gray-700">Email</div>
              <a href="mailto:hello@lablanchesalon.com" className="block mt-1 text-amber-600">hello@lablanchesalon.com</a>

              <div className="mt-4 text-sm text-gray-700">Walk-ins</div>
              <div className="mt-1 text-gray-600">Accepted subject to availability — appointments recommended.</div>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks — we will get back to you!'); }}>
              <div>
                <label className="text-sm text-gray-600">Your name</label>
                <input required className="mt-1 block w-full border border-gray-200 rounded-md p-2" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Phone / WhatsApp</label>
                <input required className="mt-1 block w-full border border-gray-200 rounded-md p-2" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Message / Service requested</label>
                <textarea className="mt-1 block w-full border border-gray-200 rounded-md p-2" rows={3}></textarea>
              </div>

              <div className="flex items-center gap-3">
                <button type="submit" className="inline-block bg-amber-500 text-white px-4 py-2 rounded-md">Send message</button>
                <a href="https://wa.me/914134900666" target="_blank" rel="noreferrer" className="inline-block border border-amber-500 text-amber-500 px-4 py-2 rounded-md">Message on WhatsApp</a>
              </div>
            </form>
          </div>
        </section>

        <footer className="mt-12 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} La Blanche Salon — Mission Street & Collector's Office branch coming soon. All rights reserved.
        </footer>
      </main>
    </div>
  );
}


function ServiceCard({ title, price, desc }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <div className="flex items-baseline justify-between">
        <h4 className="font-semibold">{title}</h4>
        <div className="text-sm text-gray-500">{price}</div>
      </div>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
      <div className="mt-4">
        <a href="https://wa.me/914134900666" target="_blank" rel="noreferrer" className="inline-block text-amber-600 text-sm">Book on WhatsApp</a>
      </div>
    </div>
  );
}

function LocationCard({ title, addressLine1, city, phone, hours }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <h4 className="font-semibold">{title}</h4>
      <div className="mt-2 text-sm text-gray-600">{addressLine1}<br />{city}</div>
      <div className="mt-3 text-sm">
        <div>Phone: <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-amber-600">{phone}</a></div>
        <div className="mt-1 text-gray-500">{hours}</div>
      </div>
    </div>
  );
}
