import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export default async function ServicePage({ params }: any) {

  // ✅ FIX for latest Next.js
  const { slug } = await params;

  if (!slug) {
    return <div className="p-10 text-center">Invalid slug</div>;
  }

  const service = await client.fetch(
    `*[_type == "service" && slug.current == $slug][0]{
      title,
      description,
      icon,
      subServices[]{
        name,
        description,
        icon
      }
    }`,
    { slug }
  );

  if (!service) {
    return <div className="p-10 text-center">Service not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {service.title}
            </h1>

            {/* CTA */}
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          {/* ICON / IMAGE */}
          {service.icon && (
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image
                src={urlFor(service.icon).url()}
                alt={service.title}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Service Overview
        </h2>

        <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* ================= SUB SERVICES ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Our Offerings
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {service.subServices?.map((item: any, i: number) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition group"
            >

              {/* ICON */}
              {item.icon && (
                <div className="relative w-14 h-14 mb-4">
                  <Image
                    src={urlFor(item.icon).url()}
                    alt={item.name}
                    fill
                    className="object-contain group-hover:scale-110 transition"
                  />
                </div>
              )}

              {/* TITLE */}
              <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-red-600">
                {item.name}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* ================= CTA STRIP ================= */}
      <div className="bg-red-600 py-14 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl font-bold mb-4">
            Need Expert Consultation?
          </h2>

          <p className="mb-6 text-gray-100">
            Our team is ready to help you with customized solutions.
          </p>

          <Link
            href="/contact"
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Our Experts
          </Link>

        </div>
      </div>

      {/* ================= STICKY CONTACT BUTTON ================= */}
      <Link
        href="/contact"
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full shadow-lg transition z-50"
      >
        Contact Us
      </Link>

    </div>
  );
}