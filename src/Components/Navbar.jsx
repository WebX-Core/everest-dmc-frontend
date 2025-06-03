import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-[#EEF2FF] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
        {/* Left: Logo */}
        <div className="flex items-center space-x-1">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger icon for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <X size={2} /> : <Menu size={24} />}
          </button>
        </div>

                <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full mt-4 md:mt-0 md:flex md:items-center md:space-x-10 text-bold md:text-base md:w-auto`}
        >
          {/* Mobile close button - align right */}
          <div className="flex justify-end md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 mb-2">
              <X size={24} />
            </button>
          </div>
          <a href="#about" className="block md:inline-block text-gray-700 hover:text-blue-600 py-1 ml-10 md:ml-0">
            About
          </a>
          <a href="#services" className="block md:inline-block text-gray-700 hover:text-blue-600 py-1 ml-10 md:ml-0">
            Our Services
          </a>
          <a href="#process" className="block md:inline-block text-gray-700 hover:text-blue-600 py-1 ml-10 md:ml-0">
            Our Process
          </a>
          <a href="#clients" className="block md:inline-block text-gray-700 hover:text-blue-600 py-1 ml-10 md:ml-0">
            Our Clients
          </a>
          <a href="#contact" className="block md:inline-block text-gray-700 hover:text-blue-600 py-1 ml-10 md:ml-0">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
