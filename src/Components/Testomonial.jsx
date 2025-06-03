import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
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
    <section id="clients" className="bg-[#EEF2FF] py-16 px-4 md:px-16 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h5 className="uppercase text-sm text-gray-400 mb-2">Get to know us</h5>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Client Says</h2>
        <p className="text-gray-600 mb-10 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt
          donec commodo scelerisque quis leo, egestas amet.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Small Images */}
          <div className="flex gap-4 md:gap-8">
            {testimonials.slice(0, 2).map((testimonial, index) => {
              const actualIndex = (activeIndex + index) % testimonials.length;
              return (
                <div key={actualIndex} onClick={() => setActiveIndex(actualIndex)} className="cursor-pointer">
                  <img
                    src={testimonials[actualIndex].image}
                    alt={testimonials[actualIndex].name}
                    className={`w-20 h-20 md:w-32 md:h-32 object-cover rounded-lg mb-2 transition-all duration-300 ${
                      actualIndex === activeIndex ? "scale-125 shadow-lg" : "opacity-70 hover:opacity-100"
                    }`}
                  />
                  <p className="text-sm font-semibold text-center">{testimonials[actualIndex].name}</p>
                  <p className="text-xs text-center text-gray-500">{testimonials[actualIndex].role}</p>
                </div>
              );
            })}
          </div>

          {/* Main Display */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-8 w-full md:w-2/3">
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg mb-4 md:mb-0"
            />
            <div>
              <h3 className="font-semibold text-lg">{testimonials[activeIndex].name}</h3>
              <p className="text-sm text-gray-500 mb-3">{testimonials[activeIndex].role}</p>
              <p className="text-gray-700 max-w-md">{testimonials[activeIndex].text}</p>
            </div>
          </div>

          {/* Arrow Button */}
          <button
            onClick={handleNext}
            className="mt-4 md:mt-0 bg-blue-200 hover:bg-blue-300 p-3 rounded-full text-lg"
          >
           <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;
