"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "PRODUCTS", href: "/products" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50">

      {/* WHITE GLASS BACKGROUND */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-gray-200"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo1.png"
            alt="Ospuro Logo"
            width={140}
            height={40}
            className="object-contain cursor-pointer"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="relative group hover:text-red-600 transition"
            >
              {item.name}

              {/* UNDERLINE ANIMATION */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl text-gray-800 p-2 rounded-md 
          hover:bg-red-600 hover:text-white 
          hover:shadow-[0_0_10px_rgba(255,0,0,0.4)]
          transition"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden relative mx-4 mt-2 rounded-xl 
        bg-white shadow-lg border border-gray-200 
        p-6 space-y-4 text-gray-700">

          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-red-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}