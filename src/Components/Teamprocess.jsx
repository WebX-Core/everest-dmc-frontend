import React from "react";

const OurProcess = () => {
  return (
    <section id="process" className="relative bg-white py-24 px-4 overflow-hidden">
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Stats */}
        <div className="order-2 lg:order-1">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            <span className="block">Our</span>
            <span className="font-bold text-[#1C4D9B]">Process</span>
          </h2>

          <div className="w-24 h-0.5 bg-[#1C4D9B] mb-8"></div>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting unforgettable journeys with precision and passion. Our
            meticulous approach ensures every detail exceeds expectations.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 text-center">
            {[
              { number: "14+", label: "Years of Expertise" },
              { number: "8+", label: "World-Class Destinations" },
              { number: "$10M+", label: "Tailored Portfolio" },
            ].map((stat, index) => (
              <div key={index} className="relative px-4">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-12 w-1 bg-[#1C4D9B] rounded-full hidden sm:block"></div>
                <div className="pl-4">
                  <span className="block text-5xl font-extrabold text-[#1C4D9B] mb-2">
                    {stat.number}
                  </span>
                  <span className="text-gray-700 text-sm uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Process Steps */}
          <div className="max-w-3xl mx-auto space-y-10">
            {[
              {
                title: "Discovery",
                description:
                  "Understanding your travel aspirations to craft a tailored experience.",
              },
              {
                title: "Design",
                description:
                  "Meticulously planning every detail of your journey.",
              },
              {
                title: "Execution",
                description: "Seamlessly bringing your travel plans to life.",
              },
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="text-4xl font-extrabold text-[#1C4D9B] shrink-0">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="order-1 lg:order-2 relative h-full min-h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C4D9B]/10 to-transparent -z-10"></div>
          <div className="w-[600px] h-[600px] animate-spin-slow">
            <img
              src="https://img.freepik.com/free-psd/earth-ball-school-education_23-2151848239.jpg?semt=ais_hybrid&w=740"
              alt="Rotating Earth"
              className="w-full h-full object-cover"
            />
          </div>
          {/* <img
            src="https://img.freepik.com/free-psd/earth-ball-school-education_23-2151848239.jpg?semt=ais_hybrid&w=740"
            alt="Luxury travel process"
            className="w-full h-full object-cover rounded-lg "
          /> */}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
