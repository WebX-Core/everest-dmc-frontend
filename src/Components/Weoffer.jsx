import React, { useState, useEffect, useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import basecamp from '../assets/basecamp.jpeg';
import panorama from '../assets/panoroma.jpeg';
import viewshort from '../assets/hike.jpeg';

const offers = [
  {
    image: basecamp,
    title: "Everest Base Camp Trek",
    description: "An iconic Himalayan adventure offering breathtaking views, Sherpa culture, and a lifetime of memories on the roof of the world.",
    duration: "12-14 days",
    difficulty: "Challenging",
    highlight: "Stand at the foot of the world's highest peak"
  },
  {
    image: panorama,
    title: "Everest Panorama Trek",
    description: "A scenic, moderate trek through charming villages with spectacular views of Everest without reaching extreme altitudes.",
    duration: "7-9 days",
    difficulty: "Moderate",
    highlight: "Perfect blend of culture and mountain vistas"
  },
  {
    image: viewshort,
    title: "Everest View Short Hike",
    description: "Perfect for beginners and time-limited travelers, this short hike grants panoramic views of Everest in just a few days.",
    duration: "3-5 days",
    difficulty: "Easy",
    highlight: "Quick immersion in Himalayan beauty"
  },
  {
    image: basecamp,
    title: "Annapurna Circuit Trek",
    description: "Experience diverse landscapes from subtropical jungles to high mountain passes in this classic Nepal trek.",
    duration: "15-20 days",
    difficulty: "Challenging",
    highlight: "Thorong La Pass at 5,416m"
  },
  {
    image: panorama,
    title: "Langtang Valley Trek",
    description: "A beautiful trek close to Kathmandu with stunning valley views and rich Tamang culture.",
    duration: "7-10 days",
    difficulty: "Moderate",
    highlight: "Less crowded Himalayan experience"
  }
];

const WeOffer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Determine how many cards to show based on screen width
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % (offers.length - visibleCards + 1));
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, visibleCards]);

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, offers.length - visibleCards));
    resetAutoPlay();
  };

  const goToPrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
    resetAutoPlay();
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    setIsAutoPlaying(false);
    clearInterval(intervalRef.current);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Calculate the transform value based on currentIndex
  const getTransformValue = () => {
    if (typeof window === 'undefined') return 'translateX(0)';
    const cardWidth = carouselRef.current?.children[0]?.offsetWidth || 0;
    const gap = 32; // 8rem in pixels (tailwind gap-8)
    return `translateX(calc(-${currentIndex * (cardWidth + gap)}px))`;
  };

  return (
    <section
      id="services"
      className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 py-16 px-4 md:px-10 lg:px-20 h-200"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-400/10 to-cyan-600/10 rounded-full blur-3xl animate-float-medium" />
      </div>

      {/* Header */}
      <Motion.div
        className="text-center w-full mx-auto mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
     
        <h2 className="text-4xl md:text-5xl font-extrabold  mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-gray-900">
          What We Offer
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Discover our <span className="font-medium text-blue-600">handcrafted</span> trekking experiences designed for every type of adventurer.
        </p>
      </Motion.div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Arrows */}
        <button 
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={goToNext}
          disabled={currentIndex >= offers.length - visibleCards}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Track */}
        <div className="overflow-hidden">
          <Motion.div
            ref={carouselRef}
            className="flex gap-8 transition-transform duration-500 ease-out"
            style={{ transform: getTransformValue() }}
            drag="x"
            dragConstraints={{ right: 0, left: 0 }}
            onDragEnd={(e, { offset, velocity }) => {
              const threshold = 100;
              if (offset.x > threshold) {
                goToPrev();
              } else if (offset.x < -threshold) {
                goToNext();
              }
            }}
          >
            {offers.map((offer, index) => (
              <Motion.div
                key={index}
                className="group flex-shrink-0 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.333px)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="relative bg-white/80 backdrop-blur-lg border border-white/30 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-white/50 h-full">
                  {/* Floating gradient orb on hover */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Image */}
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute top-4 left-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    {offer.difficulty}
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-blue-900 text-xl md:text-2xl group-hover:text-blue-800 transition-colors">
                        {offer.title}
                      </h3>
                      <span className="text-xs font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {offer.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm md:text-base group-hover:text-gray-800 transition-colors leading-relaxed">
                      {offer.description}
                    </p>
                    
                    <div className="mt-2 pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors">
                      <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>{offer.highlight}</span>
                      </div>
                    </div>
                    
                    <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:from-blue-700 group-hover:to-indigo-700">
                      Explore Itinerary
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -inset-y-full -left-20 w-40 h-64 rotate-45 bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-700" />
                  </div>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: offers.length - visibleCards + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeOffer;