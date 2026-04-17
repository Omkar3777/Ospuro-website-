import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-bold">
            About Ospuro
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg">
            Delivering advanced water and wastewater treatment solutions with innovation, sustainability, and engineering excellence.
          </p>

          <div className="w-20 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>

        </div>
      </section>

      {/* ================= COMPANY INTRO ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Who We Are
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              <span className="font-semibold text-black">OSPURO</span> is a leading provider
              of water and wastewater treatment technologies. We specialize in advanced
              sludge dewatering, purification systems, and sustainable solutions.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              Our mission is to deliver high-performance systems that ensure clean,
              safe, and eco-friendly water solutions for industries and communities.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative w-full h-[350px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/about.png"
              alt="About"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-white">
            Our Core Values
          </h2>

          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>

          <div className="grid md:grid-cols-5 grid-cols-2 gap-8 mt-14">

            {[
              { title: "Team Work", icon: "🤝" },
              { title: "Leadership", icon: "🏆" },
              { title: "Integrity", icon: "👁️" },
              { title: "Respect", icon: "👍" },
              { title: "Innovation", icon: "🔧" },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-gray-700 hover:bg-red-600 transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-3 transition group-hover:scale-125">
                  {item.icon}
                </div>

                <h3 className="text-sm font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {[
              {
                title: "Advanced Technology",
                desc: "We use cutting-edge systems for efficient water treatment.",
              },
              {
                title: "Expert Team",
                desc: "Highly skilled engineers delivering reliable solutions.",
              },
              {
                title: "Sustainable Approach",
                desc: "Eco-friendly and future-ready water management systems.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-red-600 hover:shadow-xl transition duration-300 text-left"
              >
                <h3 className="text-lg font-semibold text-red-600">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 text-center px-6">

        <h2 className="text-3xl font-bold">
          Ready to Work With Us?
        </h2>

        <p className="mt-3 text-red-100">
          Contact our team for customized water solutions
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
        >
          Contact Us
        </Link>

      </section>

    </main>
  );
}