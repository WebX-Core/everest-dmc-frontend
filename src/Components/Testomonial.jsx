import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";
import { motion } from 'framer-motion';

// Mock images for demo
const pic = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face";
const pic2 = "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg";
const pic3 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face";
const pic4 = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face";
const pic5 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face";

const testimonials = [
  {
    name: "Tommy Murphy",
    role: "CEO of Nepal",
    image: pic,
    rating: 5,
    text: "Donec adipiscing tristique risus nec feugiat in. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Pharetra sit amet aliquam id diam maecenas ultricies mi eget."
  },
  {
    name: "Sara Wilson",
    role: "CEO of Nepal",
    image: pic2,
    rating: 5,
    text: "Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod."
  },
  {
    name: "James Foster",
    role: "CEO of Nepal",
    image: pic3,
    rating: 4,
    text: "Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Adipiscing elit ut aliquam purus sit amet luctus."
  },
  {
    name: "Lisa Brown",
    role: "CEO of Nepal",
    image: pic4,
    rating: 5,
    text: "In fermentum posuere urna nec tincidunt. Sit amet aliquam id diam maecenas ultricies mi eget."
  },
  {
    name: "Mark Lee",
    role: "CEO of Nepal",
    image: pic5,
    rating: 5,
    text: "Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse."
  }
];

function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    exit: { 
      opacity: 0, 
      x: -100,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="clients" className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-4 md:px-16 text-blue-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h5
            variants={itemVariants}
            className="uppercase text-sm text-blue-400 mb-3 font-semibold tracking-wider"
          >
            Get to know us
          </motion.h5>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt
            donec commodo scelerisque quis leo, egestas amet.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="relative"
        >
          {/* Main Testimonial Card */}
          <motion.div
            key={activeIndex}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-blue-100/50"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-md opacity-20"></div>
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-xl"
                />
              </motion.div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[activeIndex].rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                
                <motion.p
                  className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 italic font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  "{testimonials[activeIndex].text}"
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <h4 className="text-xl md:text-2xl font-bold text-blue-900 mb-1">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-blue-500 font-medium">
                    {testimonials[activeIndex].role}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <motion.button
              onClick={handlePrev}
              className="bg-white/90 backdrop-blur-sm border border-blue-200 text-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-blue-500 w-8"
                      : "bg-blue-200 hover:bg-blue-300"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Thumbnail Row */}
          <motion.div
            variants={containerVariants}
            className="flex justify-center gap-4 mt-12"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  index === activeIndex ? "scale-110" : "opacity-60 hover:opacity-100"
                }`}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  {index === activeIndex && (
                    <motion.div
                      layoutId="activeRing"
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-sm"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`relative w-16 h-16 object-cover rounded-full border-2 ${
                      index === activeIndex
                        ? "border-white shadow-xl"
                        : "border-blue-100 shadow-md"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialSlider;