import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";

async function getData() {
  const products = await client.fetch(`*[_type == "product"][0...3]{
    title,
    "slug": slug.current,
    images
  }`);

  const services = await client.fetch(`*[_type == "service"][0...6]{
    title,
    "slug": slug.current,
    icon
  }`);

  const clients = await client.fetch(`*[_type == "client"]{
    name,
    logo
  }`);

  return { products, services, clients };
}
export default async function Home() {
  const { products, services, clients } = await getData();

  return (
    <main className="bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="hero"
          fill
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold max-w-4xl">
            Smart Water Treatment Solutions
          </h1>

          <p className="mt-5 text-gray-300 max-w-xl text-lg">
            Sustainable, efficient, and high-performance systems for industries.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <Link href="/contact" className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold">
              Get Consultation
            </Link>

            <Link href="/products" className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

{/* ABOUT */}
      <section className="bg-red-600 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          <h2 className="text-3xl font-bold tracking-wide">OSPURO</h2>

          <div className="w-16 h-1 bg-white mt-3 mb-6"></div>

          <p className="text-sm md:text-base leading-7 text-gray-100">
            We are a premier provider of Water and Wastewater Treatment Technologies,
            dedicated to manufacturing high-quality equipment for efficient and sustainable solutions.
            Our expertise ensures innovative and eco-friendly systems for industrial applications.
          </p>

          <button className="mt-8 px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition shadow">
            Know More
          </button>

        </div>
      </section>

      {/* ================= FEATURES / BENEFITS ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          {[
            "Advanced Technology",
            "Expert Engineers",
            "Sustainable Solutions",
            "24/7 Support",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-r from-gray-900 to-black rounded-2xl shadow hover:shadow-xl transition"
            >
              <p className="font-semibold text-white">{item}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
<section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto text-center">

    {/* HEADER */}
    <h2 className="text-4xl font-bold text-gray-900">
      Our Products
    </h2>
    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
      High-performance water treatment systems designed for modern industries.
    </p>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-10 mt-16">

      {products?.map((item: any, i: number) => {
        if (!item?.slug) return null;

        return (
          <Link
            key={i}
            href={`/products/${item.slug}`}
            className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500"
          >

            {/* IMAGE */}
            <div className="relative h-60 overflow-hidden">
              {item.images?.[0] ? (
                <Image
                  src={urlFor(item.images[0]).url()}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              ) : (
                <div className="h-full flex items-center justify-center bg-gray-200 text-gray-400">
                  No Image
                </div>
              )}

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
            </div>

            {/* CONTENT */}
            <div className="p-6 text-left">

              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                Advanced industrial solution built for efficiency and durability.
              </p>

              {/* CTA */}
              <div className="mt-4 flex items-center justify-between">

                <span className="text-red-600 font-medium text-sm group-hover:translate-x-1 transition">
                  View Details →
                </span>

                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-600 transition">
                  <span className="text-red-600 group-hover:text-white text-sm">→</span>
                </span>

              </div>

            </div>

          </Link>
        );
      })}

    </div>

  </div>
</section>
      {/* ================= SERVICES ================= */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {services.map((item: any, i: number) => (
              <Link
                key={i}
                href={`/services/${item.slug}`}
                className="group bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-gray-700 hover:bg-red-600 transition"
              >

                {item.icon && (
                  <div className="relative w-12 h-12 mx-auto mb-4">
                    <Image
                      src={urlFor(item.icon).url()}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                <h3 className="text-sm font-semibold">
                  {item.title}
                </h3>

              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CLIENTS ================= */}
<section className="py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto text-center px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Trusted By Industry Leaders
    </h2>

    <p className="text-gray-500 mt-3">
      Companies that trust our solutions
    </p>

  </div>

  {/* FADE EDGES */}
  <div className="relative mt-16">

    <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
    <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

    {/* SCROLL */}
    <div className="flex gap-20 animate-scroll items-center">

      {[...clients, ...clients].map((item: any, i: number) => (
        <div
          key={i}
          className="flex items-center justify-center min-w-[160px] h-20 bg-white rounded-xl shadow-sm hover:shadow-md transition p-4"
        >
          {item.logo && (
            <img
              src={urlFor(item.logo).url()}
              alt={item.name}
              className="max-h-40 object-contain transition duration-300 hover:scale-110"
            />
          )}
        </div>
      ))}

    </div>

  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 text-center">

        <h2 className="text-3xl font-bold">
          Ready to Transform Your Water System?
        </h2>

        <Link
          href="/contact"
          className="inline-block mt-6 px-6 py-3 bg-white text-red-600 rounded-lg font-semibold"
        >
          Contact Us
        </Link>

      </section>

    </main>
  );
}