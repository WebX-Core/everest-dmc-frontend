import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center bg-white px-4 sm:px-6 md:px-10 py-12"
    >
      <div className="w-full max-w-4xl">
        <div className="lg:sticky lg:top-10 space-y-8">
          {/* Header Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 80, y: 50 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 sm:px-6 sm:py-3 text-zinc-500 text-sm sm:text-lg font-semibold tracking-wide uppercase rounded-full">
                Welcome to the Everest DMC
              </span>
              <div className="mt-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-gray-900">
                  <span className="block">The Masters</span>
                  <span className="font-bold text-[#1C4D9B]">
                    of Himalayan Experiences
                  </span>
                </h2>
              </div>
            </motion.div>
          </motion.div>

          {/* Justified Paragraph */}
          <motion.div
            className="text-justify sm:text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <div className="text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Everest DMC is a trusted B2B Destination Management Company
                based in Nepal, specializing in personalized travel, trekking,
                and MICE solutions across the breathtaking Himalayas. Since
                2018, we've been delivering unmatched local expertise,
                tailor-made itineraries, and round-the-clock support to travel
                partners and clients around the globe.
              </p>
              <p className="mt-4">
                With a strong commitment to responsible tourism and community
                empowerment, Everest DMC ensures every journey is not just
                seamless—but truly meaningful.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
