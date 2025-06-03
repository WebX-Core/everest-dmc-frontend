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

const Footer = () => {
  return (
    <footer className="bg-[#F3F8FF] text-center relative mt-5">
      {/* Top Info */}
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:ml-160">
       <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center text-gray-600 mt-4 gap-4 text-sm">
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
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6 text-blue-600 text-xl">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram className="text-pink-500" /></a>
          <a href="#"><FaWhatsapp className="text-green-500" /></a>
          <a href="#"><FaLinkedinIn className="text-blue-700" /></a>
          <a href="#"><FaTelegramPlane className="text-sky-500" /></a>
        </div>
      {/* </div> */}

      {/* Footer bottom */}
       {/* Footer bottom */}
      <div className="relative mt-10 ">
        <img
          src={img}
          alt="Mountains"
          className="w-full h-auto object-cover"
        />
             <div className="absolute bottom-2 left-4 right-4 text-sm text-black-600 font-bold flex flex-col items-start md:items-center lg:flex-row lg:justify-between w-auto md:w-full">
          <span>© 2021 All Rights Reserved</span>
          <span className="md:mt-1 lg:mt-0">© Design and developed by: WebX</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
