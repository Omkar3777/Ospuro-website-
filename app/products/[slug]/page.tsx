import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";

export default async function ProductPage({ params }: any) {

  const { slug } = await params;

  if (!slug) {
    return <div className="p-10 text-center">Invalid slug</div>;
  }

  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      title,
      description,
      images,
      benefits,
      technologies
    }`,
    { slug }
  );

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          {product?.images?.[0] && (
            <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={urlFor(product.images[0]).url()}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {product.title}
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              {product.description}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">

              <a
                href={`https://wa.me/919999999999?text=I'm interested in ${product.title}`}
                target="_blank"
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition"
              >
                WhatsApp
              </a>

              <a
                href={`mailto:contact@ospuro.com?subject=Inquiry for ${product.title}`}
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition"
              >
                Contact Us
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* ================= GALLERY ================= */}
      {product?.images?.length > 1 && (
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">

          {product.images.map((img: any, i: number) => (
            <div
              key={i}
              className="relative h-44 rounded-xl overflow-hidden shadow-md group"
            >
              <Image
                src={urlFor(img).url()}
                alt="gallery"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>
      )}

      {/* ================= BENEFITS ================= */}
      {product?.benefits && (
        <div className="max-w-7xl mx-auto px-6 py-14">

          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Key Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {product.benefits.map((item: string, i: number) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition border border-gray-100"
              >
                <p className="text-gray-700 font-medium">
                  ✔ {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      )}

      {/* ================= TECHNOLOGIES ================= */}
      {product?.technologies && (
        <div className="bg-white py-14 border-t border-gray-100">

          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Technologies We Provide
            </h2>

            <div className="flex flex-wrap gap-4">

              {product.technologies.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="px-5 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-red-600 hover:text-white transition"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

        </div>
      )}

      {/* ================= CTA ================= */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-16 mt-12">

        <div className="max-w-5xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h2>

          <p className="mb-6 text-red-100">
            Talk to our experts for tailored industrial solutions.
          </p>

          <a
            href="mailto:contact@ospuro.com"
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Quote
          </a>

        </div>

      </div>

     

    </div>
  );
}