import React from "react";

const OurProcess = () => {
  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Stats */}
        <div className="order-2 lg:order-1">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            <span className="block">Our</span>
            <span className="font-bold text-[#1C4D9B]">Process</span>
          </h2>

          <div className="w-24 h-0.5 bg-[#1C4D9B] mb-8"></div>

          <p className="text-xl text-gray-600 mb-12 max-w-lg">
            Crafting unforgettable journeys with precision and passion. Our
            meticulous approach ensures every detail exceeds expectations.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {[
              { number: "14+", label: "Years" },
              { number: "8+", label: "Destinations" },
              { number: "$10M+", label: "Portfolio" },
            ].map((stat, index) => (
              <div key={index} className="border-l-2 border-[#1C4D9B] pl-4">
                <span className="block text-4xl font-bold text-[#1C4D9B]">
                  {stat.number}
                </span>
                <span className="text-gray-600 uppercase tracking-widest text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
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
              <div key={index} className="flex gap-4">
                <div className="text-3xl font-bold text-gray-300">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="order-1 lg:order-2 relative h-full min-h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C4D9B]/10 to-transparent -z-10"></div>
          <img
            src="https://img.freepik.com/free-psd/earth-ball-school-education_23-2151848239.jpg?semt=ais_hybrid&w=740"
            alt="Luxury travel process"
            className="w-full h-full object-cover rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
