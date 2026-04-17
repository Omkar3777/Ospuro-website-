import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";

async function getProducts() {
  return await client.fetch(`*[_type == "product"]{
    title,
    "slug": slug.current,
    image
  }`);
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Our Products
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our advanced water treatment systems engineered for industrial performance, durability, and efficiency.
          </p>

          <div className="w-20 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>

        </div>
      </div>

      {/* ================= GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* EMPTY STATE */}
        {(!products || products.length === 0) && (
          <div className="text-center text-gray-500">
            No products available
          </div>
        )}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {products?.map((product: any, i: number) => {
            if (!product?.slug) return null;

            return (
              <Link
                key={i}
                href={`/products/${product.slug}`}
                className="group relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              >

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 z-0"></div>

                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">
                  {product.image ? (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.title || "product"}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center bg-gray-200 text-gray-400 text-sm">
                      No Image
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-6 relative z-10">

                  <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-red-600 transition">
                    {product.title}
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    High-performance industrial water treatment solution designed for reliability and efficiency.
                  </p>

                  {/* CTA */}
                  <div className="mt-6 flex items-center justify-between">

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

      {/* ================= CTA SECTION ================= */}
      <div className="bg-red-600 py-16 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl font-bold mb-4">
            Need Custom Product Solution?
          </h2>

          <p className="mb-6 text-gray-100">
            We design and manufacture customized water treatment systems based on your requirements.
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