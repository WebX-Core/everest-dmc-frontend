import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { FaMountain } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Motion.nav
      className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-100 shadow-lg sticky top-0 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
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
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full mt-4 md:mt-0 md:flex md:items-center md:space-x-10 font-bold md:text-base md:w-auto`}
        >
          {/* Mobile close button - align right */}
          <div className="flex justify-end md:hidden">
            <button onClick={toggleMenu} className="text-blue-700 mb-2">
              <X size={28} />
            </button>
          </div>
          <a
            href="#about"
            className="block md:inline-block text-blue-900 hover:text-blue-700 py-1 ml-10 md:ml-0 transition-all"
          >
            About
          </a>
          <a
            href="#services"
            className="block md:inline-block text-blue-900 hover:text-blue-700 py-1 ml-10 md:ml-0 transition-all"
          >
            Our Services
          </a>
          <a
            href="#process"
            className="block md:inline-block text-blue-900 hover:text-blue-700 py-1 ml-10 md:ml-0 transition-all"
          >
            Our Process
          </a>
          <a
            href="#clients"
            className="block md:inline-block text-blue-900 hover:text-blue-700 py-1 ml-10 md:ml-0 transition-all"
          >
            Our Clients
          </a>
          <a
            href="#contact"
            className="block md:inline-block text-blue-900 hover:text-blue-700 py-1 ml-10 md:ml-0 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </Motion.nav>
  );
};

export default Navbar;
