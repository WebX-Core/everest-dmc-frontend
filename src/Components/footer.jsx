import React from "react";
import logo from "../assets/Logo-white.png";
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
      className="relative h-[90vh] pt-12 pb-8 px-6 flex flex-col justify-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(28, 77, 155, 0.65), rgba(28, 77, 155, 0.75)), url('https://cdn.britannica.com/39/76239-050-DE5FCF36/Climbers-side-Nepali-Mount-Everest.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // Optional: creates a parallax-like effect
      }}
    >
      <div>
        <div className="relative z-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo + Intro */}
          <div className="md:col-span-2 space-y-4 flex flex-col items-center md:items-start">
            <img src={logo} alt="Everest DMC Logo" className="h-20 w-auto" />
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

          {/* Columns */}
          {[
            {
              title: "Destinations",
              links: [
                "Himalayan Treks",
                "European Tours",
                "Asian Adventures",
                "Polar Expeditions",
              ],
            },
            {
              title: "Services",
              links: [
                "Peak Climbing",
                "Trekking Guides",
                "Luxury Base Camps",
                "Expedition Planning",
              ],
            },
            {
              title: "Contact Us",
              links: [
                "+1 800-EVEREST",
                "climb@everestdmc.com",
                "Emergency Contacts",
                "Kathmandu Office",
              ],
            },
          ].map((col, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <h4 className="font-bold text-white mb-3 text-lg">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((text, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-blue-100 hover:text-white hover:underline transition-colors"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Divider */}
        <div className="w-11/12 mx-auto absolute bottom-10 right-0 left-0 z-10 border-t border-blue-300 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-100">
          <p className="w-full md:w-auto">
            © 2025 Everest DMC. All rights reserved.
          </p>
          <div className="flex gap-4 flex-wrap justify-center w-full md:w-auto">
            <div
              className="hover:text-white "
            >
              <span>Designed & Developed By </span>
              <a target="_blank" href="https://webxnep.com" className="font-bold hover:underline transition-colors">WEBX</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
