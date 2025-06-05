import React, { useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { gsap } from "gsap";
import { FaMountain } from "react-icons/fa";

const Banner = () => {
  useEffect(() => {
    gsap.fromTo(
      ".banner-title",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.2 }
    );
  }, []);

  return (
    <Motion.div
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      id="home"
    >
      {/* Scroll Down Indicator */}
      <div className="absolute left-6 top-0  flex flex-col items-center gap-2 z-10">
        <div className="w-[2px] h-[70vh] bg-white" />
        <p className="text-sm text-white rotate-[-90deg] tracking-widest uppercase mt-14">
          Scroll Down
        </p>
      </div>

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover "
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-transparent z-0 rounded-b-3xl" /> */}

      {/* Text Content */}
      <div className="relative text-center text-white px-2 lg:-mt-5 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight banner-title uppercase">
          Your trusted B2B tour{" "} <br />
          <span className="text-blue-900">partner for Nepal</span>
        </h1>
        <Motion.p
          className="mt-4 text-lg md:text-xl banner-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Discover breathtaking adventures with us
        </Motion.p>
      </div>
    </Motion.div>
  );
};

export default Banner;
