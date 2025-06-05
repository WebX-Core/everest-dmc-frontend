import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative pt-12 pb-8 px-6 md:px-16 lg:px-32 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(28, 77, 155, 0.9), rgba(28, 77, 155, 0.95)), url('https://images.unsplash.com/photo-1580807465154-9c1c78e91b3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#1C4D9B] opacity-90 mix-blend-multiply"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo + Intro */}
        <div className="md:col-span-2 space-y-4 flex flex-col items-center md:items-start">
          <img src={logo} alt="Everest DMC Logo" className="h-8 w-auto" />
          <p className="leading-relaxed text-blue-100">
            Scaling new heights in travel experiences. We craft unforgettable
            journeys to the world's most breathtaking destinations, with Mount
            Everest as our inspiration.
          </p>
          <div className="flex space-x-4 mt-2">
            <FaFacebookF className="text-blue-200 hover:text-white cursor-pointer transition-colors" />
            <FaInstagram className="text-blue-200 hover:text-white cursor-pointer transition-colors" />
            <FaLinkedinIn className="text-blue-200 hover:text-white cursor-pointer transition-colors" />
            <FaTelegramPlane className="text-blue-200 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="font-bold text-white mb-3 text-lg">Destinations</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-blue-100 hover:text-white hover:underline transition-colors"
              >
                Himalayan Treks
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-100 hover:text-white hover:underline transition-colors"
              >
                European Tours
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-100 hover:text-white hover:underline transition-colors"
              >
                Asian Adventures
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-100 hover:text-white hover:underline transition-colors"
              >
                Polar Expeditions
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="font-bold text-white mb-3 text-lg">Services</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-blue-100 hover:text-white hover:underline transition-colors"
              >
                Peak Climbing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-100 hover:text-white hover:underline transition-colors"
              >
                Trekking Guides
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-100 hover:text-white hover:underline transition-colors"
              >
                Luxury Base Camps
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-100 hover:text-white hover:underline transition-colors"
              >
                Expedition Planning
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="font-bold text-white mb-3 text-lg">Contact Us</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-blue-100 hover:text-white hover:underline transition-colors"
              >
                +1 800-EVEREST
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-100 hover:text-white hover:underline transition-colors"
              >
                climb@everestdmc.com
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-100 hover:text-white hover:underline transition-colors"
              >
                Emergency Contacts
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-100 hover:text-white hover:underline transition-colors"
              >
                Kathmandu Office
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 mt-12 border-t border-blue-300 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-100 max-w-screen-xl mx-auto px-4">
        <p className="w-full md:w-auto">
          © 2025 Everest Destination Management. All rights reserved.
        </p>
        <div className="flex gap-4 flex-wrap justify-center w-full md:w-auto">
          <a
            href="#"
            className="hover:text-white hover:underline transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white hover:underline transition-colors"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="hover:text-white hover:underline transition-colors"
          >
            Safety Guidelines
          </a>
          <a
            href="#"
            className="hover:text-white hover:underline transition-colors"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
