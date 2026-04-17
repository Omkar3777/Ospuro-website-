import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
    { icon: <FaWhatsapp />, link: "#" },
  ];

  return (
    <div className="pt-20 bg-gradient-to-br from-black via-gray-900 to-black">
    <footer className="relative mt-1 text-gray-300">
      
      {/* GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95"></div>

      {/* GLOW EFFECT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.15),transparent_70%)]"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl">

        {/* BRAND */}
       <div className="flex items-center gap-3">

  <Image
    src="/logo2.png"
    alt="Ospuro Logo"
    width={160}
    height={50}
    className="h-10 w-auto object-contain"
    priority
  />

  {/* Optional brand text */}
  <span className="text-lg font-semibold text-white">
    OSPURO
  </span>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Providing clean and safe water solutions for industries with
            innovation, quality, and trust.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "Products", href: "/products" },
              { name: "Services", href: "/services" },
              { name: "Blog", href: "/blog" },
              { name: "Contact", href: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="relative group text-gray-400 hover:text-white transition"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PUNE OFFICE */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide">
            Pune Office
          </h3>
          <p className="text-sm text-gray-400 leading-6">
            Ekdant, Renuka Nagar Lane no. 2,<br />
            Pune - Mumbai Highway, Warje,<br />
            Pune - 411058
          </p>
          <p className="mt-3 text-sm">
            <span className="text-gray-500">Call:</span>{" "}
            <a href="tel:+916262949421" className="hover:text-white transition">
              (+91) 62629 49421
            </a>
          </p>
          <p className="text-sm">
            <span className="text-gray-500">Email:</span>{" "}
            <a
              href="mailto:contact@ospuro.com"
              className="hover:text-white transition"
            >
              contact@ospuro.com
            </a>
          </p>
        </div>

        {/* COIMBATORE OFFICE */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide">
            Coimbatore Office
          </h3>
          <p className="text-sm text-gray-400 leading-6">
            03, Korkai Village, opp to Amrita school<br />
            Coimbatore - 641062 Tamil Nadu
          </p>
          <p className="mt-3 text-sm">
            <span className="text-gray-500">Call:</span>{" "}
            <a href="tel:+919944942886" className="hover:text-white transition">
              (+91) 99449 42886
            </a>
          </p>
          <p className="text-sm">
            <span className="text-gray-500">Email:</span>{" "}
            <a
              href="mailto:coimbatoreoffice@ospuro.com"
              className="hover:text-white transition"
            >
              coimbatoreoffice@ospuro.com
            </a>
          </p>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="relative flex justify-center gap-5 mt-10">
        {socialLinks.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="social"
            className="group w-11 h-11 flex items-center justify-center rounded-full 
            bg-white/5 border border-white/10 backdrop-blur-md
            hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]
            transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          >
            <span className="text-gray-300 group-hover:text-white text-lg">
              {item.icon}
            </span>
          </a>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="relative w-5/6 mx-auto mt-10 h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

      {/* COPYRIGHT */}
      <div className="relative text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Ospuro Technologies. All rights reserved.
      </div>
    </footer>
    </div>
  );
}