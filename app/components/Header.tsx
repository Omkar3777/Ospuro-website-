"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "PRODUCTS", href: "/products" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <div className="relative w-[140px] h-[40px]">

            {/* MAIN IMAGE */}
            {!imgError && (
              <Image
                src="/logo1.png"   // 🔥 EXACT NAME FROM GITHUB
                alt="Ospuro Logo"
                fill
                className="object-contain cursor-pointer"
                onError={() => setImgError(true)}
                priority
              />
            )}

            {/* FALLBACK (if image fails) */}
            {imgError && (
              <span className="text-xl font-bold text-red-600">
                OSPURO
              </span>
            )}

          </div>
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
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl text-gray-800 p-2 rounded-md 
          hover:bg-red-600 hover:text-white 
          transition"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mx-4 mt-2 rounded-xl 
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