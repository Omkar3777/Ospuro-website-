
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";

export default async function ServicesPage() {

  const services = await client.fetch(`*[_type == "service"]{
    title,
    "slug": slug.current,
    description,
    icon
  }`);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Our Services
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Advanced environmental and water treatment solutions engineered for performance, compliance, and sustainability.
          </p>
        <div className="w-20 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      {/* ================= GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* EMPTY STATE */}
        {(!services || services.length === 0) && (
          <p className="text-center text-gray-500">
            No services found. Please add & publish services in Sanity.
          </p>
        )}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {services?.map((item: any) => {
            if (!item?.slug) return null;

            return (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >

                {/* HOVER GRADIENT EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-50 to-transparent"></div>

                {/* ICON */}
                {item.icon && (
                  <div className="relative w-16 h-16 mb-6 z-10">
                    <Image
                      src={urlFor(item.icon).url()}
                      alt={item.title}
                      fill
                      className="object-contain group-hover:scale-110 transition duration-300"
                    />
                  </div>
                )}

                {/* TITLE */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-red-600 transition z-10 relative">
                  {item.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 z-10 relative">
                  {item.description || "Advanced industrial-grade environmental solution designed for efficiency and compliance."}
                </p>

                {/* CTA */}
                <div className="mt-6 flex items-center justify-between z-10 relative">

                  <span className="text-red-600 font-medium text-sm group-hover:translate-x-1 transition">
                    View Details →
                  </span>

                  <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-600 transition">
                    <span className="text-red-600 group-hover:text-white text-sm">→</span>
                  </span>

                </div>

              </Link>
            );
          })}

        </div>

      </div>

      {/* ================= CTA SECTION ================= */}
      <div className="bg-red-600 py-16 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl font-bold mb-4">
            Looking for Custom Solutions?
          </h2>

          <p className="mb-6 text-gray-100">
            We design tailored environmental systems for your business needs.
          </p>

          <Link
            href="/contact"
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Our Team
          </Link>

        </div>
      </div>

      {/* ================= FLOATING BUTTON ================= */}
      <Link
        href="/contact"
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full shadow-xl transition z-50"
      >
        Contact Us
      </Link>

    </div>
  );
}