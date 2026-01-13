import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Music } from "lucide-react";

export default function Foot() {
  return (
    <main>
    <section className="relative h-[420px] sm:h-[480px] md:h-[550px] lg:h-[650px] overflow-hidden">

      {/* Background image */}
      <Image
        src="/nine-arch.webp"
        alt="Train journey"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 text-white">

        {/* Heading */}
        <h2 className="
          font-semibold leading-tight
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-7xl
        ">
          Ready For Your Next <br className="hidden sm:block" />
          Adventure?
        </h2>

        {/* Description */}
        <p className="
          mt-4
          text-sm
          sm:text-base
          md:text-lg
          lg:text-xl
          text-gray-200
          max-w-xl
        ">
          Let’s start planning your journey today!
        </p>

        {/* Button */}
        <Link href="/tours">
        <button className="
          mt-6
          bg-white text-black
          px-6 py-3
          rounded-lg
          text-sm
          sm:text-base
          font-medium
          hover:bg-gray-100
          transition
        ">
          Get Started
        </button>
        </Link>

      </div>
    </section>

    <footer className="bg-black text-white">
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
        
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/footer-logo.webp"
              alt="Lunarway Travels"
              width={200}
              height={200}
            />
          </div>

          <p className="text-gray-300 leading-relaxed max-w-sm">
            Thoughtfully planned travel experiences, created with care and
            attention to detail to ensure smooth and memorable journeys.
          </p>
        </div>

        <div>
          <h4 className="mb-6 font-medium">Quick Links</h4>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tours">Tours</Link></li>
            <li><Link href="/destination">Destination</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-medium">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="border border-white p-2 rounded-md">
              <Instagram size={18} />
            </a>
            <a href="#" className="border border-white p-2 rounded-md">
              <Facebook size={18} />
            </a>
            <a href="#" className="border border-white p-2 rounded-md">
              <Music size={18} />
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="mb-6 font-medium">Contact Us</h4>
          <ul className="space-y-3 text-gray-300">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 my-16"></div>

      <p className="text-center text-gray-400 text-sm">
        © 2025 Lunarway. All Rights Reserved.
      </p>
    </div>
    </footer>
    </main>
  );
}