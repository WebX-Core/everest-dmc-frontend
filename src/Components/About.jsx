import React from "react";
import { motion as Motion } from "framer-motion";

// const points = [
//   {
//     number: "1",
//     title: "Tailor-Made & Personalized Services",
//     text: "Experience Nepal your way with custom itineraries crafted to match your unique travel dreams and preferences. Our expert team designs every detail to create unforgettable journeys.",
//     icon: "🎯",
//     // color: "from-violet-500 to-purple-600"
//     color: "from-[#1c4d9c] to-blue-500",
//   },
//   {
//     number: "2",
//     title: "Trusted Local Expertise & Global Clientele",
//     text: "Backed by years of local knowledge and trusted by travelers worldwide for authentic Himalayan adventures. Our deep understanding of Nepal's culture ensures genuine experiences.",
//     icon: "🌍",
//     color: "from-[#1c4d9c] to-blue-500",
//   },
//   {
//     number: "3",
//     title: "24/7 Customer Support & Ethical Tourism",
//     text: "Round-the-clock assistance with a commitment to sustainable travel that benefits local communities. We're here whenever you need us, day or night.",
//     icon: "💚",
//     // color: "from-emerald-500 to-teal-600"
//     color: "from-[#1c4d9c] to-blue-500",
//   },
//   {
//     number: "4",
//     title: "Expert Mountain & Trekking Guides",
//     text: "Our certified mountain guides bring decades of experience in the Himalayas. Safety, knowledge, and passion for the mountains define every expedition we lead.",
//     icon: "🏔️",
//     // color: "from-orange-500 to-red-600"
//     color: "from-[#1c4d9c] to-blue-500",
//   },
//   {
//     number: "5",
//     title: "Luxury Accommodations & Comfort",
//     text: "From boutique lodges to luxury resorts, we partner with the finest accommodations. Enjoy comfort and elegance even in the most remote mountain locations.",
//     icon: "🏨",
//     // color: "from-pink-500 to-rose-600"
//     color: "from-[#1c4d9c] to-blue-500",
//   },
//   {
//     number: "6",
//     title: "Adventure & Cultural Immersion",
//     text: "Beyond trekking, dive deep into Nepal's rich culture. Meet local families, participate in traditional ceremonies, and discover hidden gems off the beaten path.",
//     icon: "🎭",
//     // color: "from-indigo-500 to-blue-600"
//     color: "from-[#1c4d9c] to-blue-500",
//   },
// ];

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center h-screen my-auto relative bg-white py-20 px-4 md:px-10 lg:px-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-8/12 mx-auto">
        {/* Right Side - Sticky About Content */}
        <div className="w-full ">
          <div className="lg:sticky lg:top-20 space-y-8">
            <Motion.div
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 80, y: 50 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Header section */}
              <div className="space-y-4 text-center">
                <Motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <span className="inline-block px-6 py-3 text-zinc-500 text-lg font-semibold tracking-wider uppercase rounded-full ">
                    Welcome to the Evetest DMC{" "}
                  </span>
                </Motion.div>

                <Motion.h2
                  className="text-5xl md:text-7xl leading-16 font-serif bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  The Masters of Waterfront Developments
                </Motion.h2>
              </div>

              {/* Content cards */}
              <Motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <div className="bg-transparent text-center backdrop-blur-sm border border-white/30 rounded-xl transition-all duration-300">
                  <p className="text-gray-700 text-md leading-relaxed">
                    Everest DMC is a trusted B2B destination management company
                    in Nepal, offering personalized travel, trekking, and MICE
                    services across the majestic Himalayas. Since 2018, we've
                    provided unmatched local expertise, tailor-made experiences,
                    and 24/7 support for clients worldwide, all while promoting
                    responsible tourism and strong community values.
                  </p>
                </div>
              </Motion.div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
