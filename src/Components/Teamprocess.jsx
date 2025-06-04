import React from "react";
import { motion as Motion } from "framer-motion";
import { FaUsers, FaCogs, FaMapMarkedAlt, FaArrowRight, FaStar } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

function TeamProcess() {
  const steps = [
    {
      icon: <FaUsers className="text-blue-500 text-xl" />,
      title: "Tailored Consultation",
      description: "We analyze your needs and craft a personalized adventure plan.",
      features: [
        "1-on-1 expert consultation",
        "Custom itinerary design",
        "Risk assessment & safety planning",
      ],
      color: "from-blue-400 to-blue-600",
      delay: 0.1,
    },
    {
      icon: <FaCogs className="text-emerald-500 text-xl" />,
      title: "Seamless Coordination",
      description: "Our team handles permits, logistics, and real-time updates.",
      features: [
        "Dedicated trip coordinator",
        "24/7 emergency support",
        "Gear & equipment planning",
      ],
      color: "from-emerald-400 to-emerald-600",
      delay: 0.2,
    },
    {
      icon: <FaMapMarkedAlt className="text-purple-500 text-xl" />,
      title: "Flawless Execution",
      description: "Certified guides ensure a smooth, unforgettable journey.",
      features: [
        "Expert local guides",
        "Daily progress tracking",
        "Post-trip feedback & reviews",
      ],
      color: "from-purple-400 to-purple-600",
      delay: 0.3,
    },
  ];

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-28 px-4 md:px-16 text-blue-900"
    >
      {/* === Floating Animated Background Elements === */}
      <div className="absolute inset-0 overflow-hidden -z-0">
        {/* Gradient Orbs */}
        <Motion.div
          className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <Motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-200/20 to-teal-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating Animated Dots */}
        {[...Array(20)].map((_, i) => (
          <Motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* === Header Section === */}
        <div className="text-center mb-20">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Motion.span
              className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase rounded-full border border-blue-200 shadow-sm mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Our Proven Process
            </Motion.span>

            <Motion.h2
              className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-gray-900"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="inline-block">
                <Motion.span
                  className="inline-block"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Adventure
                </Motion.span>{" "}
                <span className="text-blue-600">Perfected</span>
              </span>
            </Motion.h2>

            <Motion.p
              className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              From dream to reality—our seamless process ensures your journey is flawless.
            </Motion.p>
          </Motion.div>
        </div>

        {/* === Animated Process Steps === */}
        <div className="relative">
          {/* Animated SVG Connection Line (Desktop Only) */}
          <svg
            className="hidden lg:block absolute top-24 left-0 w-full h-32 z-0"
            viewBox="0 0 1200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Motion.path
              d="M50,60 C400,60 450,120 800,60 C1000,20 1150,100 1150,60"
              stroke="url(#paint0_linear)"
              strokeWidth="4"
              strokeDasharray="0 1"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="60" x2="1200" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6" stopOpacity="0.5" />
                <stop offset="0.5" stopColor="#10B981" stopOpacity="0.5" />
                <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Process Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <Motion.div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: step.delay }}
                whileHover={{ y: -10 }}
              >
                {/* Gradient Overlay (Hover Effect) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Floating Orb (Hover Effect) */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-700`}
                ></div>

                <div className="p-8 flex flex-col h-full">
                  {/* Icon with Animated Border */}
                  <Motion.div
                    className="w-16 h-16 rounded-2xl bg-white border-2 border-gray-200 flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-transparent transition-colors duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                    <div className="relative z-10">{step.icon}</div>
                  </Motion.div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-5">{step.description}</p>

                  {/* Features List */}
                  <ul className="mt-auto space-y-3">
                    {step.features.map((feature, i) => (
                      <Motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i + step.delay }}
                      >
                        <FiCheckCircle
                          className={`flex-shrink-0 mt-1 mr-2 ${
                            index === 0
                              ? "text-blue-500"
                              : index === 1
                              ? "text-emerald-500"
                              : "text-purple-500"
                          }`}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </Motion.li>
                    ))}
                  </ul>

                  {/* Animated Button */}
                  <Motion.div
                    className="mt-6"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-r ${step.color} shadow-md hover:shadow-lg transition-all`}
                    >
                      Learn more
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Motion.div>
                </div>

                {/* Shine Effect (Hover) */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute -inset-y-full -left-20 w-40 h-64 rotate-45 bg-white/30 opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-700"></div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>

        {/* === Final CTA === */}
        <Motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Motion.button
            className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 px-10 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative flex items-center gap-3">
              Start Your Adventure
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Motion.button>

          {/* Trust Badge */}
          <Motion.div
            className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <span>Trusted by 10,000+ adventurers</span>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
}

export default TeamProcess;