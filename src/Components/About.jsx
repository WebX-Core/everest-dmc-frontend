import React from 'react';
import { motion as Motion } from 'framer-motion';

const points = [
  {
    number: "1",
    title: "Tailor-Made & Personalized Services",
    text: "Experience Nepal your way with custom itineraries crafted to match your unique travel dreams and preferences. Our expert team designs every detail to create unforgettable journeys.",
    icon: "🎯",
    // color: "from-violet-500 to-purple-600"
       color: "from-[#1c4d9c] to-blue-500"
  },
  {
    number: "2", 
    title: "Trusted Local Expertise & Global Clientele",
    text: "Backed by years of local knowledge and trusted by travelers worldwide for authentic Himalayan adventures. Our deep understanding of Nepal's culture ensures genuine experiences.",
    icon: "🌍",
    color: "from-[#1c4d9c] to-blue-500"
  },
  {
    number: "3",
    title: "24/7 Customer Support & Ethical Tourism",
    text: "Round-the-clock assistance with a commitment to sustainable travel that benefits local communities. We're here whenever you need us, day or night.",
    icon: "💚",
    // color: "from-emerald-500 to-teal-600"
       color: "from-[#1c4d9c] to-blue-500"
  },
  {
    number: "4",
    title: "Expert Mountain & Trekking Guides",
    text: "Our certified mountain guides bring decades of experience in the Himalayas. Safety, knowledge, and passion for the mountains define every expedition we lead.",
    icon: "🏔️",
    // color: "from-orange-500 to-red-600"
       color: "from-[#1c4d9c] to-blue-500"
  },
  {
    number: "5",
    title: "Luxury Accommodations & Comfort",
    text: "From boutique lodges to luxury resorts, we partner with the finest accommodations. Enjoy comfort and elegance even in the most remote mountain locations.",
    icon: "🏨",
    // color: "from-pink-500 to-rose-600"
       color: "from-[#1c4d9c] to-blue-500"
  },
  {
    number: "6",
    title: "Adventure & Cultural Immersion",
    text: "Beyond trekking, dive deep into Nepal's rich culture. Meet local families, participate in traditional ceremonies, and discover hidden gems off the beaten path.",
    icon: "🎭",
    // color: "from-indigo-500 to-blue-600"
       color: "from-[#1c4d9c] to-blue-500"
  },
  {
    number: "7",
    title: "Safety First & Emergency Preparedness",
    text: "Advanced safety protocols, emergency evacuation plans, and comprehensive insurance coverage. Your safety is our top priority in every adventure we organize.",
    icon: "🛡️",
    // color: "from-green-500 to-emerald-600" 
       color: "from-[#1c4d9c] to-blue-500"
  },
  {
    number: "8",
    title: "Sustainable & Responsible Travel",
    text: "Contributing to local communities while preserving the environment. Every trip supports conservation efforts and provides direct benefits to local villages.",
    icon: "🌱",
    // color: "from-teal-500 to-green-600"
       color: "from-blue-[#1c4d9c] to-cyan-300"
  }
];

const About = () => {
  return (
    <section id="about" className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 py-20 px-4 md:px-10 lg:px-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side - Scrolling Feature Cards */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-12">
              {points.map((item, index) => (
                <Motion.div
                  key={item.number}
                  className={`relative group ${index % 2 === 1 ? "lg:ml-12" : ""}`}
                  initial={{ opacity: 0, x: -80, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: -80, y: 50 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ 
                    duration: 0.2, 
                    delay: 0.1 * index,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 2,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Card background with glassmorphism */}
                  <div className="relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:bg-white/80">
                    {/* Gradient border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                    
                    {/* Number badge */}
                    <div className={`absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {item.number}
                    </div>

                    {/* Icon */}
                    {/* <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div> */}

                    {/* Content */}
                    <h3 className="font-bold text-gray-800 text-2xl mb-4 group-hover:text-gray-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                      {item.text}
                    </p>

                    {/* Hover effect lines */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color} rounded-b-2xl w-0 group-hover:w-full transition-all duration-500`}></div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Sticky About Content */}
          <div className="w-full lg:w-1/2">
            <div className="lg:sticky lg:top-20 space-y-8">
              <Motion.div
                initial={{ opacity: 0, x: 80, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 80, y: 50 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                {/* Header section */}
                <div className="space-y-4">
                  <Motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                   <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase rounded-full ">
  Get to know us
</span>

                  </Motion.div>
                  
                  <Motion.h2
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent leading-tight"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    About Everest DMC
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
                  <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl p-8 transition-all duration-300 hover:bg-white/70">
                    <p className="text-gray-700 text-xl leading-relaxed">
                      <span className="font-semibold text-blue-600">Everest DMC</span> is a trusted B2B destination management company in Nepal, offering personalized travel, trekking, and MICE services across the majestic Himalayas.
                    </p>
                    <p className="text-gray-700 text-xl leading-relaxed">
                      Since <span className="font-semibold text-emerald-600">2018</span>, we've provided unmatched local expertise, tailor-made experiences, and 24/7 support for clients worldwide, all while promoting responsible tourism and strong community values.
                    </p>
                  </div>
                  
      
                </Motion.div>
              

                {/* Stats section */}
                <Motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 60 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="grid grid-cols-2 gap-6 py-8"
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">1000+</div>
                    <div className="text-gray-600 text-lg">Happy Travelers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">50+</div>
                    <div className="text-gray-600 text-lg">Expert Guides</div>
                  </div>
                </Motion.div>

             
              </Motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;