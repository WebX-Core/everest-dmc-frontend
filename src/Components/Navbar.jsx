import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion as Motion } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past first screen (100vh)
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      setScrolledPastHero(scrollPosition > heroHeight - 100);

      // Active section detection
      const sections = [
        "home",
        "about",
        "services",
        "process",
        "clients",
        "contact",
      ];
      const sectionScrollPosition = scrollPosition + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            sectionScrollPosition >= offsetTop &&
            sectionScrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Our Services" },
    { id: "process", label: "Our Process" },
    { id: "clients", label: "Our Clients" },
  ];

  return (
    <Motion.nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolledPastHero
          ? "bg-white border-2 border-zinc-200"
          : "bg-gradient-to-b from-white/60 to-transparent"
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="w-11/12 mx-auto flex items-center justify-between px-5 py-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-12 w-auto drop-shadow-lg" />
        </div>

        {/* Hamburger icon for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:mt-0 md:flex md:items-center md:space-x-10 font-bold md:text-base md:w-auto`}
        >
          {/* Mobile close button - align right */}
          <div className="flex justify-end md:hidden">
            <button onClick={toggleMenu} className="text-blue-700 mb-2">
              <X size={28} />
            </button>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`block md:inline-block py-1 ml-10 md:ml-0 transition-all ${
                activeSection === link.id
                  ? "text-[#1C4D9B] font-bold"
                  : scrolledPastHero
                  ? "text-zinc-500 hover:text-[#1C4D9B] font-medium"
                  : "text-white hover:text-[#1C4D9B] font-medium"
              }`}
              onClick={() => {
                setActiveSection(link.id);
                setIsOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="button">
          <a
            className={`group relative inline-block text-sm font-medium focus:ring-3 focus:outline-hidden ${
              scrolledPastHero ? "text-white" : "text-white"
            }`}
            href="#contact"
          >
            <span
              className={`absolute inset-0 border ${
                scrolledPastHero ? "border-[#1C4D9B]" : "border-[#1C4D9B]"
              }`}
            ></span>
            <span
              className={`block px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 ${
                scrolledPastHero
                  ? "border-[#1C4D9B] bg-[#1C4D9B]"
                  : "border-[#1C4D9B] bg-[#1C4D9B]"
              }`}
            >
              Contact Now
            </span>
          </a>
        </div>
      </div>
    </Motion.nav>
  );
};

export default Navbar;
