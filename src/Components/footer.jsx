import React from "react";
import img from '../assets/footer.png';
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { motion as Motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center relative mt-5 pt-10 rounded-t-3xl shadow-2xl border-t-2 border-blue-100">
      {/* Top Info */}
      <Motion.div
        className="max-w-screen-xl mx-auto py-8 px-4 lg:ml-160"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img src={logo} alt="Logo" className="h-12 w-auto mx-auto drop-shadow-lg" />
      </Motion.div>
      <Motion.div
        className="flex flex-col md:flex-row items-center justify-center text-blue-700 mt-4 gap-4 text-base font-medium"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="flex items-center gap-2">
          <MdLocationOn />
          Dillibazar 30, Kathmandu, Nepal
        </div>
        <div className="flex items-center gap-2">
          <MdEmail />
          inquiry@everestdmc.com
        </div>
        <div className="flex items-center gap-2">
          <MdPhone />
          +977-014530577
        </div>
      </Motion.div>
      {/* Social Icons */}
      <Motion.div
        className="flex justify-center gap-6 mt-8 text-blue-600 text-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <a href="#"><FaFacebookF className="hover:text-blue-800 transition" /></a>
        <a href="#"><FaInstagram className="text-pink-500 hover:text-pink-700 transition" /></a>
        <a href="#"><FaWhatsapp className="text-green-500 hover:text-green-700 transition" /></a>
        <a href="#"><FaLinkedinIn className="text-blue-700 hover:text-blue-900 transition" /></a>
        <a href="#"><FaTelegramPlane className="text-sky-500 hover:text-sky-700 transition" /></a>
      </Motion.div>
      {/* Footer bottom */}
      <div className="relative mt-10 ">
        <img
          src={img}
          alt="Mountains"
          className="w-full h-auto object-cover rounded-b-3xl"
        />
        <Motion.div
          className="absolute bottom-2  text-sm text-blue-700 font-bold flex flex-col items-start md:items-center lg:flex-row lg:px-10 lg:justify-between w-full md:w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <span>© 2021 All Rights Reserved</span>
          <span className="md:mt-1 lg:mt-0">© Design and developed by: WebX</span>
        </Motion.div>
      </div>
    </footer>
  );
};

export default Footer;
