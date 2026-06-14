"use client";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "8613726846591";
const heroImages = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
  "/images/hero/hero-4.jpg",
];

const featuredCategories = [
  {
    name: "Headlights",
    image: "/images/categories/headlights.jpg",
  },
  {
    name: "Tail Lights",
    image: "/images/categories/tail-lights.jpg",
  },
  {
    name: "Bumpers",
    image: "/images/categories/bumpers.jpg",
  },
  {
    name: "Front Grille",
    image: "/images/categories/grilles.jpg",
  },
];

const popularCategoryPages = [
  {
    title: "Exterior Parts",
    items: [
      { name: "Headlights", image: "/images/popular-categories/headlights.jpg" },
      { name: "Tail Lights", image: "/images/popular-categories/tail-lights.jpg" },
      { name: "Bumpers", image: "/images/popular-categories/bumpers.jpg" },
      { name: "Front Grille", image: "/images/popular-categories/grille.jpg" },
      { name: "Car Door", image: "/images/popular-categories/car-door.jpg" },
      { name: "Side Mirror", image: "/images/popular-categories/side-mirror.jpg" },
      { name: "Hood", image: "/images/popular-categories/hood.jpg" },
      { name: "Electronic Modules", image: "/images/popular-categories/electronic-modules.jpg" },
    ],
  },
  {
    title: "Mechanical Parts",
    items: [
      { name: "Engine", image: "/images/popular-categories/engine.jpg" },
      { name: "Transmission", image: "/images/popular-categories/transmission.jpg" },
      { name: "Differential", image: "/images/popular-categories/differential.jpg" },
      { name: "Steering Gear", image: "/images/popular-categories/steering-gear.jpg" },
      { name: "ABS Pump", image: "/images/popular-categories/abs-pump.jpg" },
      { name: "Turbocharger", image: "/images/popular-categories/turbocharger.jpg" },
      { name: "Radiator", image: "/images/popular-categories/radiator.jpg" },
      { name: "Control Arm", image: "/images/popular-categories/control-arm.jpg" },
    ],
  },
];

export default function Home() {
  const [currentHero, setCurrentHero] = useState(0);
  const [currentCategoryPage, setCurrentCategoryPage] = useState(0);
  const [language, setLanguage] = useState("en");

  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [partNeeded, setPartNeeded] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
  const timer = setInterval(() => {
    setCurrentCategoryPage((prev) => (prev + 1) % popularCategoryPages.length);
  }, 5000);

  return () => clearInterval(timer);
}, []);

const sendToWhatsApp = () => {
  if (!vehicleModel.trim() || !vehicleYear.trim() || !partNeeded.trim()) {
    alert("Please fill in vehicle model, year and part needed.");
    return;
  }

  const message = `Hello Kaize Parts, I need auto parts.

Vehicle brand/model: ${vehicleModel}
Vehicle year: ${vehicleYear}
Part needed: ${partNeeded}

Please check availability and price for me.`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

  return (
    <main className="min-h-screen bg-[#f2f2f2] text-[#1a1a1d]">
<header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0d0f]/95 text-white backdrop-blur">
  <div className="border-b border-white/5 bg-black/30">
  <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs text-gray-400">
    <p>Used Original & Aftermarket Auto Parts Supplier</p>

    <div className="flex items-center gap-4">
      <p className="hidden md:block">
        Fast quote by vehicle model, year and part name
      </p>

      <div className="flex items-center gap-2">
        <span className="text-gray-500">Language</span>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="rounded-md border border-white/10 bg-[#151518] px-2 py-1 text-xs font-semibold text-white outline-none transition hover:border-[#e63946]"
        >
          <option value="en">English</option>
          <option value="zh">中文</option>
          <option value="ja">日本語</option>
          <option value="ru">Русский</option>
          <option value="ms">Malay</option>
        </select>
      </div>
    </div>
  </div>
</div>
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
    <a href="#" className="flex items-center">
      <img
        src="/images/logo/logo.png"
        alt="Kaize Parts"
        className="h-14 w-auto"
      />
    </a>

    <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wide md:flex">
      <a
        href="#products"
        className="relative transition hover:text-[#e63946] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#e63946] after:transition-all hover:after:w-full"
      >
        Products
      </a>
      <a
      href="#shipping"
        className="relative transition hover:text-[#e63946] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#e63946] after:transition-all hover:after:w-full"
      >
        Packing & Delivery
      </a>
      <a
  href="/about"
  className="relative transition hover:text-[#e63946] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#e63946] after:transition-all hover:after:w-full"
>
  About Us
</a>
      <a
        href="#quote"
        className="relative transition hover:text-[#e63946] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#e63946] after:transition-all hover:after:w-full"
      >
        Request Part
      </a>
    </nav>

    <a
      href="#quote"
      className="rounded-md bg-[#e63946] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/30 transition hover:-translate-y-0.5 hover:bg-red-700"
    >
      WhatsApp Us
    </a>
  </div>
</header>

      <section className="relative overflow-hidden bg-[#0d0d0f] text-white">
  {heroImages.map((image, index) => (
    <div
      key={image}
      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
        index === currentHero ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: `url('${image}')` }}
    />
  ))}

  <div className="absolute inset-0 bg-black/38" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#e63946]">
            
            </p>
            <h1 className="max-w-xl text-4xl font-black uppercase leading-tight md:text-6xl">
  Auto Parts Supplier
</h1>
            <p className="mt-6 max-w-lg text-lg text-gray-300">
              Send your vehicle model, year and part name. We help you check
              availability and quote fast on WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="rounded bg-[#e63946] px-6 py-4 font-bold text-white hover:bg-red-700"
              >
                Get Quote on WhatsApp
              </a>
              <a
                href="#products"
                className="rounded border border-white/40 px-6 py-4 font-bold text-white hover:border-white"
              >
                View Products
              </a>
            </div>
          </div>

          <div className="hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1a1d] to-black p-8 shadow-2xl md:block">
            <div className="grid grid-cols-2 gap-4">
{featuredCategories.map((item) => (
  <a
    key={item.name}
    href="#quote"
    className="group rounded-xl bg-white/5 p-4 transition hover:bg-white/10"
  >
    <div className="mb-5 h-28 overflow-hidden rounded-lg bg-white">
      <img
        src={item.image}
        alt={item.name}
        className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-105"
      />
    </div>
    <p className="mt-1 text-center font-bold">{item.name}</p>
  </a>
))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-bold uppercase text-[#e63946]">
            Shop by Category
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#0d0d0f] md:text-5xl">
  Browse Popular Auto Parts
</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {popularCategoryPages[currentCategoryPage].items.map((item) => (
  <a
    key={item.name}
    href="#quote"
    className="group rounded-xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
  >
    <div className="mb-5 flex h-40 items-center justify-center overflow-hidden rounded-lg bg-white">
      <img
        src={item.image}
        alt={item.name}
        className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
      />
    </div>
    <p className="text-center font-bold">{item.name}</p>
  </a>
))}
        </div>
        <div className="mt-12 flex items-center justify-center gap-4">
  {popularCategoryPages.map((page, index) => (
    <button
      key={page.title}
      type="button"
      onClick={() => setCurrentCategoryPage(index)}
      className={`h-3 rounded-full transition-all ${
        currentCategoryPage === index
          ? "w-10 bg-[#e63946]"
          : "w-3 bg-gray-300 hover:bg-gray-400"
      }`}
      aria-label={`Show ${page.title}`}
    />
  ))}
</div>

<div className="mt-5 flex justify-center">
  <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-2 shadow-sm">
    <span className="h-2 w-2 rounded-full bg-[#e63946]" />
    <span className="text-xs font-black uppercase tracking-[0.22em] text-[#1a1a1d]">
      {popularCategoryPages[currentCategoryPage].title}
    </span>
  </div>
</div>
      </section>

<section id="shipping" className="bg-[#0d0d0f] px-6 py-20 text-white">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#e63946]">
        Packing & Delivery
      </p>

      <h2 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-5xl">
  Safe Packing, Fast Delivery
</h2>

      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#e63946]" />

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300">
        We carefully check, pack and arrange delivery for auto parts. Send us your vehicle model and part name, and we will help confirm availability, packing method and shipping cost.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-4">
{[
  {
    title: "Professional Quote Matching",
    text: "Send us your vehicle model, year and part name. We help match the correct part and quote fast.",
    image: "/images/services/quote-matching.jpg",
  },
  {
    title: "Parts Quality Check",
    text: "We check part condition, label, plug, mounting points and matching details before packing.",
    image: "/images/services/quality-check.jpg",
  },
  {
    title: "Packing & Shipping",
    text: "Fragile parts such as headlights, tail lights and electronic modules are packed with protection.",
    image: "/images/services/packing-shipping.jpg",
  },
  {
    title: "24H After-Sales Support",
    text: "We provide fast response after delivery and help follow up shipping, fitting and part details.",
    image: "/images/services/after-sales.jpg",
  },
].map((item) => (
  <div
    key={item.title}
    className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition hover:-translate-y-1 hover:bg-white/10"
  >
    <div className="h-40 overflow-hidden bg-black">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition duration-300 hover:scale-105"
      />
    </div>

    <div className="p-6">
      <h3 className="text-lg font-black uppercase">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-300">{item.text}</p>
    </div>
  </div>
))}
    </div>
  </div>
</section>


      <section id="quote" className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-bold uppercase text-[#e63946]">
              Need a Part?
            </p>
            <h2 className="mt-2 text-4xl font-black uppercase">
              Send Us Your Request
            </h2>
            <p className="mt-4 text-gray-600">
              Fill in your vehicle model, year and part name. We will check
              availability and price for you.
            </p>
          </div>

          <form className="grid gap-4">
            <input
  required          
  value={vehicleModel}
  onChange={(e) => setVehicleModel(e.target.value)}
  className="rounded border border-gray-300 px-4 py-3"
  placeholder="Vehicle Brand / Model"
/>
            <input
  required          
  value={vehicleYear}
  onChange={(e) => setVehicleYear(e.target.value)}
  className="rounded border border-gray-300 px-4 py-3"
  placeholder="Vehicle Year"
/>
           <input
  required         
  value={partNeeded}
  onChange={(e) => setPartNeeded(e.target.value)}
  className="rounded border border-gray-300 px-4 py-3"
  placeholder="Part Needed"
/>
            <button
  type="button"
  onClick={sendToWhatsApp}
  className="rounded bg-[#e63946] px-6 py-4 font-bold text-white hover:bg-red-700"
>
  Send Request on WhatsApp
</button>
          </form>
        </div>
      </section>

      <footer className="bg-[#0d0d0f] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">
          <div>
            <div className="text-2xl font-black">
              Kaize <span className="text-[#e63946]">Parts</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-gray-400">
              Used original and aftermarket auto parts supplier.
            </p>
          </div>
          <p className="text-sm text-gray-500">
            © 2026 Kaize Parts. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}