"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-[#0f172a] to-[#1e293b] text-white pt-16 pb-8">

      {/* ================= MAIN CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TOP GRID ================= */}
        <div className="grid md:grid-cols-4 gap-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">

          {/* ================= BRAND ================= */}
          <div>
            <div className="mb-4">

              {/* ✅ FIXED LOGO */}
              <div className="bg-white/10 px-3 py-2 rounded-lg inline-flex">
                <Image
                  src="/logo2.png"   // ✅ confirmed working file
                  alt="Ospuro Logo"
                  width={180}
                  height={60}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>

            </div>

            <p className="text-gray-400 text-sm leading-6">
              Providing clean and safe water solutions for industries with
              innovation, quality, and trust.
            </p>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-red-500 transition">Home</Link></li>
              <li><Link href="/products" className="hover:text-red-500 transition">Products</Link></li>
              <li><Link href="/services" className="hover:text-red-500 transition">Services</Link></li>
              <li><Link href="/about" className="hover:text-red-500 transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-red-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* ================= PUNE OFFICE ================= */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pune Office</h3>

            <p className="text-gray-400 text-sm leading-6">
              Ekdant, Renuka Nagar Lane no. 2,<br />
              Pune - Mumbai Highway, Warje,<br />
              Pune - 411058
            </p>

            <p className="mt-3 text-sm text-gray-400">
              📞 (+91) 62629 49421
            </p>

            <p className="text-sm text-gray-400">
              ✉ contact@ospuro.com
            </p>
          </div>

          {/* ================= COIMBATORE ================= */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Coimbatore Office</h3>

            <p className="text-gray-400 text-sm leading-6">
              03, Korkai Village, opp to Amrita school<br />
              Coimbatore - 641062 Tamil Nadu
            </p>

            <p className="mt-3 text-sm text-gray-400">
              📞 (+91) 99449 42886
            </p>

            <p className="text-sm text-gray-400">
              ✉ coimbatoreoffice@ospuro.com
            </p>
          </div>

        </div>

        {/* ================= SOCIAL ================= */}
        <div className="flex justify-center gap-6 mt-10">

          {["F", "I", "L", "Y", "W"].map((item, i) => (
            <div
              key={i}
              className="w-10 h-10 flex items-center justify-center rounded-full 
              border border-gray-600 text-gray-400 
              hover:bg-red-600 hover:text-white hover:border-red-600 
              transition cursor-pointer"
            >
              {item}
            </div>
          ))}

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} Ospuro Technologies. All rights reserved.
        </div>

      </div>

    </footer>
  );
}