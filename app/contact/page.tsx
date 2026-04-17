"use client";

import { useState } from "react";
import Link from "next/link";
import React from "react";

export default function ContactPage() {
const [status, setStatus] = useState<"success" | "error" | null>(null); 
const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 👉 Replace with your real API call
      await new Promise((res) => setTimeout(res, 1500));

      setStatus("success");
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Get In Touch
        </h1>

        <p className="mt-4 text-gray-300 max-w-xl mx-auto text-lg">
          Have a project in mind? Let’s build something impactful together.
        </p>

        <div className="w-20 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="max-w-4xl mx-auto px-6 pb-20">

        <div className="bg-white/90 backdrop-blur-lg p-10 md:p-12 rounded-3xl shadow-xl border border-gray-100">

          {/* HEADER */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Send Us a Message
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Fill out the form and our team will get back to you shortly.
            </p>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                required
                className="p-4 rounded-xl border text-black border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                className="p-4 rounded-xl border text-black border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition"
              />
            </div>

            {/* SUBJECT */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm text-gray-600 font-medium">
                Subject
              </label>
              <input
                type="text"
                placeholder="How can we help you?"
                required
                className="p-4 rounded-xl border text-black border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm text-gray-600 font-medium">
                Message
              </label>
              <textarea
                placeholder="Write your message here..."
                rows={5}
                required
                className="p-4 rounded-xl border text-black border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition resize-none"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold 
              transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg 
              disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>

            {/* SUCCESS MESSAGE */}
            {status === "success" && (
              <div className="md:col-span-2 bg-green-100 text-green-700 px-4 py-3 rounded-xl text-center animate-fadeIn">
                ✅ Message sent successfully!
              </div>
            )}

            {/* ERROR MESSAGE */}
            {status === "error" && (
              <div className="md:col-span-2 bg-red-100 text-red-700 px-4 py-3 rounded-xl text-center animate-fadeIn">
                ❌ Failed to send message. Please try again.
              </div>
            )}

          </form>

        </div>

      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Email",
            value: "contact@ospuro.com",
            icon: "📧",
            link: "mailto:contact@ospuro.com",
            hint: "Send us an email",
          },
          {
            title: "Phone",
            value: "+91 901111-0843",
            icon: "📞",
            link: "https://wa.me/919011110843?text=Hi%20I%20want%20to%20know%20more%20about%20your%20services",
            hint: "Chat on WhatsApp",
          },
          {
            title: "Location",
            value: "Pune, India",
            icon: "📍",
            link: "https://maps.app.goo.gl/VF98SWCVoauS7MC3A",
            hint: "Open in Google Maps",
          },
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black text-white shadow-lg hover:shadow-red-600/20 hover:-translate-y-3 transition-all duration-300 text-center border border-gray-800 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-red-600 blur-2xl transition-all duration-500"></div>

            <div className="relative text-4xl mb-4 group-hover:scale-125 group-hover:rotate-6 transition">
              {item.icon}
            </div>

            <h3 className="relative text-lg font-semibold">
              {item.title}
            </h3>

            <p className="relative text-gray-400 text-sm mt-1 break-words">
              {item.value}
            </p>

            <p className="relative text-xs mt-3 text-gray-500 group-hover:text-gray-300 transition">
              {item.hint}
            </p>

            <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-300"></div>
          </a>
        ))}
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-red-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Work Together
        </h2>

        <p className="mb-6 text-gray-100">
          Reach out today and let’s build something impactful.
        </p>

        <Link
          href="/services"
          className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Explore Services
        </Link>
      </section>

      {/* ================= FLOATING BUTTON ================= */}
      <a
        href="https://wa.me/919011110843"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl transition z-50"
      >
        WhatsApp
      </a>

    </div>
  );
}