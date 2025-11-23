import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Arno Del Curto",
    title: "Hockey Legend",
    quote:
      "Young, dynamic guys. I believe in you. I feel you're incredibly strong. You've got it.",
    image:
      "https://cdn.pixabay.com/photo/2022/04/27/22/28/woman-7161407_1280.jpg",
    bg: "https://cdn.pixabay.com/photo/2022/04/27/22/28/woman-7161407_1280.jpg",
  },
  {
    id: 2,
    name: "Sofia Lorenzi",
    title: "Marketing Expert",
    quote: "Their strategy completely changed how we position our brand.",
    image:
      "https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989_1280.jpg",
    bg: "https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989_1280.jpg",
  },
  {
    id: 3,
    name: "Marco Rossi",
    title: "Tech Innovator",
    quote:
      "Impressed with their energy and commitment. Truly next-generation thinkers.",
    image:
      "https://images.unsplash.com/photo-1517475452665-4e6898befa13?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsZXJ8ZW58MHx8MHx8fDA%3D",
    bg: "https://images.unsplash.com/photo-1517475452665-4e6898befa13?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Julia Mendez",
    title: "Creative Director",
    quote: "Fresh ideas and flawless execution. These guys are the real deal.",
    image:
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bg: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 seconds interval

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
   <div
  id="testimonials"
  className="relative w-full min-h-screen overflow-hidden text-white font-sans bg-black"
>
  <AnimatePresence mode="wait">
    <motion.div
      key={testimonials[current].id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.9 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${testimonials[current].bg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-4 sm:px-6 md:px-24 py-10">
        <div className="max-w-2xl w-full text-center md:text-left">
          <p className="text-xl sm:text-2xl md:text-4xl font-semibold leading-snug">
            "{testimonials[current].quote}"
          </p>
          <p className="mt-4 text-base md:text-lg font-medium">
            {testimonials[current].name}{" "}
            <span className="text-sm font-light opacity-70">
              {testimonials[current].title}
            </span>
          </p>

          {/* Scrollable thumbnails */}
          <div className="mt-6 md:mt-10 w-full overflow-x-auto flex gap-4 items-center pb-2 scrollbar-hide">
            {testimonials.map((t, index) => (
              <button
                key={t.id}
                onClick={() => setCurrent(index)}
                className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 min-w-[3.5rem] rounded-full overflow-hidden border-2 transition duration-300 flex-shrink-0 ${
                  current === index
                    ? "border-white"
                    : "border-transparent opacity-50 hover:opacity-80 hover:border-white"
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

