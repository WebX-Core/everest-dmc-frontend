import React, { useEffect } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      id="home"
    >
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

      {/* Text Content */}
      <div className="relative text-center text-white px-2 lg:-mt-5 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight banner-title uppercase">
          Crafting Journeys, <br />
          <span className="text-blue-900">Creating Memories.</span>
        </h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl banner-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Let the peaks tell your story.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Banner;
