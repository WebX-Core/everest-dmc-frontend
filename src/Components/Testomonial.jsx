import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arno Del Curto",
    title: "Hockey Legend",
    quote:
      "Young, dynamic guys. I believe in you. I feel you're incredibly strong. You've got it.",
    image: "https://cdn.pixabay.com/photo/2022/04/27/22/28/woman-7161407_1280.jpg",
    bg: "https://cdn.pixabay.com/photo/2022/04/27/22/28/woman-7161407_1280.jpg",
  },
  {
    id: 2,
    name: "Arno Del Curto",
    title: "Hockey Legend",
    quote:
      "Young, dynamic guys. I believe in you. I feel you're incredibly strong. You've got it.",
    image:
      "https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989_1280.jpg",
    bg: "https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989_1280.jpg",
  },
  // Add more testimonials here if needed
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white font-sans bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url(${testimonials[current].bg})` }}
          ></div>
          <div className="absolute inset-0 bg-black/50 bg-opacity-60 "></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-10 md:px-24 py-10">
            <div className="max-w-xl">
              <p className="text-3xl md:text-5xl font-semibold leading-snug">
                "{testimonials[current].quote}"
              </p>
              <p className="mt-6 text-lg font-medium">
                {testimonials[current].name}{" "}
                <span className="text-sm font-light opacity-70">
                  {testimonials[current].title}
                </span>
              </p>
              <div className="mt-10 flex gap-4 items-center">
                {testimonials.map((t, index) => (
                  <button
                    key={t.id}
                    onClick={() => setCurrent(index)}
                    className={`w-14 h-14 rounded-full overflow-hidden border-2 transition duration-300 ${
                      current === index
                        ? "border-white"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover bg-center"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialSlider;
