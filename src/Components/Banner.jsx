import React from 'react';
import heroImage from '../assets/banner.jpg';

const Banner = () => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-30" />

      {/* Text Content */}
      <div className="relative text-center text-white px-2 lg:-mt-5">
        <h2 className="text-xl md:text-2xl font-light tracking-wide">THE BEAUTY OF</h2>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          EVEREST <span className="text-white">MOUNTAIN</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;