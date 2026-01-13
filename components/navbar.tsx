"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `relative pb-1 text-base transition-all ${
      pathname === path || pathname.startsWith(path + "/")
        ? "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black sm:after:bg-black"
        : ""
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/lun-logo.webp"
          alt="logo"
          width={150}
          height={150}
        />

        {/* Mobile toggle */}
        <button
          className="sm:hidden text-black z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop menu */}
        <ul className="hidden sm:flex space-x-8 text-black">
          <li>
            <Link href="/" className={linkClass("/")}>Home</Link>
          </li>
          <li>
            <Link href="/tours" className={linkClass("/tours")}>Tours</Link>
          </li>
          <li>
            <Link href="/contact" className={linkClass("/contact")}>Contact us</Link>
          </li>
          <li>
            <Link href="/about" className={linkClass("/about")}>About us</Link>
          </li>
        </ul>
      </div>

      {/* Mobile FULLSCREEN overlay */}
      <div
        className={`sm:hidden fixed inset-0 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* transparent background */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />

        <ul className="relative z-10 h-full flex flex-col items-center justify-center gap-8 text-white">
          <li onClick={() => setIsOpen(false)}>
            <Link href="/" className={linkClass("/")}>Home</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/tours" className={linkClass("/tours")}>Tours</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/contact" className={linkClass("/contact")}>Contact us</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/about" className={linkClass("/about")}>About us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
