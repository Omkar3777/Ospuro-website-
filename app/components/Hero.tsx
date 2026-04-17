export default function Hero() {
  return (
    <section className="relative h-[80vh]">
      
      {/* Background Image */}
      <img
        src="/Hero.jpg"
        alt="Water Treatment"
        className="absolute w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute w-full h-full bg-black/60"></div>

      {/* Text */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div>
          <h1 className="text-white text-3xl md:text-5xl font-bold max-w-4xl">
            INNOVATIVE ONE STOP CENTER FOR WATER AND WASTEWATER TREATMENT SOLUTIONS
          </h1>

          <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}