import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion as Motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import pic from '../assets/pic.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'


const testimonials = [
  {
    name: "Tommy Murphy",
    role: "CEO of Nepal",
    image:pic,
    text:
      "Donec adipiscing tristique risus nec feugiat in. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Aenean euismod elementum nisi quis eleifend. Sit amet facilisis magna etiam tempor orci. Vitae et leo duis ut. Arcu cursus vitae congue mauris."
  },
  {
    name: "Sara Wilson",
    role: "CEO of Nepal",
    image: pic2,
    text:
      "Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod."
  },
  {
    name: "James Foster",
    role: "CEO of Nepal",
    image: pic3,
    text:
      "Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Adipiscing elit ut aliquam purus sit amet luctus."
  },
  {
    name: "Lisa Brown",
    role: "CEO of Nepal",
    image: pic4,
    text:
      "In fermentum posuere urna nec tincidunt. Sit amet aliquam id diam maecenas ultricies mi eget."
  },
  {
    name: "Mark Lee",
    role: "CEO of Nepal",
    image: pic5,
    text:
      "Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse."
  }
];

function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="clients" className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-4 md:px-16 text-blue-900">
      <div className="max-w-7xl mx-auto">
        <Motion.h5
          className="uppercase text-sm text-blue-400 mb-2 font-semibold tracking-wider"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >Get to know us</Motion.h5>
        <Motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >What Our Client Says</Motion.h2>
        <Motion.p
          className="text-gray-600 mb-10 max-w-xl text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt
          donec commodo scelerisque quis leo, egestas amet.
        </Motion.p>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Small Images */}
          <div className="flex gap-4 md:gap-8">
            {testimonials.slice(0, 2).map((testimonial, index) => {
              const actualIndex = (activeIndex + index) % testimonials.length;
              return (
                <Motion.div
                  key={actualIndex}
                  onClick={() => setActiveIndex(actualIndex)}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.08 }}
                >
                  <img
                    src={testimonials[actualIndex].image}
                    alt={testimonials[actualIndex].name}
                    className={`w-20 h-20 md:w-32 md:h-32 object-cover rounded-xl mb-2 shadow-lg border-4 border-blue-100 ${
                      actualIndex === activeIndex ? "scale-125 ring-4 ring-blue-400" : "opacity-70 hover:opacity-100"
                    }`}
                  />
                  <p className="text-sm font-semibold text-center">{testimonials[actualIndex].name}</p>
                  <p className="text-xs text-center text-gray-500">{testimonials[actualIndex].role}</p>
                </Motion.div>
              );
            })}
          </div>
          {/* Main Display */}
          <Motion.div
            className="flex flex-col md:flex-row items-center md:items-start md:gap-8 w-full md:w-2/3 bg-white/90 rounded-2xl shadow-2xl p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            key={activeIndex}
          >
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-xl mb-4 md:mb-0 border-4 border-blue-100 shadow-lg"
            />
            <div>
              <div className="flex items-center gap-2 mb-2 text-blue-400">
                <FaQuoteLeft />
                <span className="font-semibold text-lg">{testimonials[activeIndex].name}</span>
                <FaQuoteRight />
              </div>
              <p className="text-sm text-gray-500 mb-3">{testimonials[activeIndex].role}</p>
              <p className="text-gray-700 max-w-md italic">{testimonials[activeIndex].text}</p>
            </div>
          </Motion.div>
          {/* Arrow Button */}
          <Motion.button
            onClick={handleNext}
            className="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-full text-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowRight className="w-5 h-5" />
          </Motion.button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;
