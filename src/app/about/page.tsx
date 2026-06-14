export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f2f2f2] text-[#1a1a1d]">
      <section className="bg-[#0d0d0f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#e63946]">
            About Kaize Parts
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-tight md:text-6xl">
            Used Original & Aftermarket Auto Parts Supplier
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Kaize Parts supplies used original and aftermarket auto parts for
            overseas customers. We help customers check the correct parts by
            vehicle model, year, part name, part number or photos.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#e63946]">
              What We Supply
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase">
              Auto Parts We Can Help Find
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              We can help source headlights, tail lights, bumpers, front
              grilles, mirrors, body parts, engines, transmissions, electronic
              modules, ABS pumps, turbochargers, radiators and other auto
              parts.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#e63946]">
              Where We Ship From
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase">
              Packing & Delivery Support
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              We arrange packing and delivery from China. According to the
              destination country and part type, we can help arrange express,
              air cargo, sea freight or delivery through a freight forwarder.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#e63946]">
              How We Work
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase">
              Send Model, Year & Part Name
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              Customers can send vehicle brand, model, year and required part
              name. If available, customers can also send photos, VIN or part
              number to help us confirm the correct item faster.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#e63946]">
              Why Customers Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase">
              Real Photos, Careful Check
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              We focus on real product photos, part matching, quality checking,
              careful packing and fast WhatsApp communication before shipment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-2xl bg-[#0d0d0f] p-10 text-white">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#e63946]">
            Contact Us
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase">
            Need Auto Parts?
          </h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            Send your vehicle model, year and part name. We will check
            availability and quote on WhatsApp.
          </p>

          <a
            href="/#quote"
            className="mt-8 inline-block rounded-md bg-[#e63946] px-6 py-4 font-bold text-white transition hover:bg-red-700"
          >
            Send Request
          </a>
        </div>
      </section>
    </main>
  );
}