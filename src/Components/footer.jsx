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
// ...existing code...
<footer className="bg-gradient-to-br from-blue-50 via-white to-blue-100 text-sm text-gray-700 pt-10 pb-6 px-6 md:px-16 lg:px-32 mt-20">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
    {/* Logo + Intro */}
    <div className="md:col-span-2 space-y-4 flex flex-col items-center md:items-center md:justify-center">
      <img src={logo} alt="Logo" className="h-6 w-auto mx-auto" />
      <p className="leading-relaxed md:text-center">
        Taking the pain out of accounting so you and your business can concentrate on slaying the world (or whatever your plans happen to be).
      </p>
    </div>

    {/* Navigation Columns */}
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <h4 className="font-bold text-gray-800 mb-2">Services</h4>
      <ul className="space-y-1">
        <li><a href="#" className="hover:underline">Businesses & contractors</a></li>
        <li><a href="#" className="hover:underline">Xero services</a></li>
        <li><a href="#" className="hover:underline">Bookkeeping</a></li>
        <li><a href="#" className="hover:underline">Starter pack</a></li>
      </ul>
    </div>

    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <h4 className="font-bold text-gray-800 mb-2">Company</h4>
      <ul className="space-y-1">
        <li><a href="#" className="hover:underline">About us</a></li>
        <li><a href="#" className="hover:underline">Pricing</a></li>
        <li><a href="#" className="hover:underline">Log In</a></li>
        <li><a href="#" className="hover:underline">Partners</a></li>
      </ul>
    </div>

    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <h4 className="font-bold text-gray-800 mb-2">Client support</h4>
      <ul className="space-y-1">
        <li><a href="#" className="hover:underline">0800 755 333</a></li>
        <li><a href="#" className="hover:underline">support@beany.nz</a></li>
        <li><a href="#" className="hover:underline">Support centre</a></li>
        <li><a href="#" className="hover:underline">Contact us</a></li>
      </ul>
    </div>
  </div>

  {/* Divider */}
  <div className="mt-10 border-t pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 max-w-screen-xl mx-auto px-4 md:text-center">
    <p className="w-full md:w-auto md:text-center">© 2025 everest dmc New Zealand Ltd. All rights reserved.</p>
    <div className="flex gap-4 flex-wrap justify-center w-full md:w-auto">
      <a href="#" className="hover:underline">Privacy Policy</a>
      <a href="#" className="hover:underline">Terms & Conditions</a>
      <a href="#" className="hover:underline">UK</a>
      <a href="#" className="hover:underline">AU</a>
    </div>
    <div className="flex space-x-3 text-gray-500 mt-2 md:mt-0 justify-center w-full md:w-auto">
      <FaFacebookF className="hover:text-gray-800 cursor-pointer" />
      <FaInstagram className="hover:text-pink-600 cursor-pointer" />
      <FaLinkedinIn className="hover:text-blue-800 cursor-pointer" />
    </div>
  </div>
</footer>
// ...existing code...
  );
};

export default Footer;
