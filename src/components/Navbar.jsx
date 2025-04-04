import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Resume", link: "#resume" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a1f44] text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        <h1 className="text-2xl font-bold tracking-wider text-cyan-400">Portfolio</h1>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="hover:text-cyan-400 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-[#0a1f44] px-6 pb-4 space-y-4 text-base">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="block border-b border-gray-600 pb-2 hover:text-cyan-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
