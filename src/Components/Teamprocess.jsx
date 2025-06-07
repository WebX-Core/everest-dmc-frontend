import React from "react";
// import { Globe } from "./ui/globe";

const OurProcess = () => {
  return (
    <>
      {/* Process Section with Sticky Layout */}
      <section id="process" className="relative bg-white">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Scrollable Content */}
          <div className="flex-1 py-8 px-8 lg:px-12">
            <div className="w-11/12 mx-auto">
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
                <span className="block">Our</span>
                <span className="font-bold text-[#1C4D9B] uppercase">
                  Process
                </span>
              </h2>
              <div className="w-24 h-0.5 bg-[#1C4D9B] mb-8"></div>
              <p className="text-xl text-gray-600 mb-16 leading-relaxed">
                Crafting unforgettable journeys with precision and passion. Our
                meticulous approach ensures every detail exceeds expectations.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { number: "7+", label: "Years of Expertise" },
                  { number: "22+", label: "Everest Destinations" },
                  { number: "200+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <div key={index} className="text-center bg-blue-50 py-2 px-4">
                    <span className="block text-5xl font-extrabold text-[#1C4D9B] mb-2">
                      {stat.number}
                    </span>
                    <span className="text-gray-700 text-sm uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Process Steps */}
              <div className="space-y-6 mt-6">
                {[
                  {
                    title: "Initial Consultation",
                    description:
                      "We begin by understanding your clients' preferences, interests, and travel goals to tailor the perfect itinerary.",
                  },
                  {
                    title: "Custom Itinerary Design",
                    description:
                      "Our experts craft personalized programs—whether for leisure, adventure, cultural exploration, or MICE—based on your requirements.",
                  },
                  {
                    title: "Logistics Planning & Coordination",
                    description:
                      "We handle all ground logistics including transportation, accommodation, permits, and local guides with precision and care.",
                  },
                  {
                    title: "On-Ground Operations",
                    description:
                      "Our experienced local team ensures seamless execution, offering real-time support and flexibility throughout the journey.",
                  },
                  {
                    title: "24/7 Client Support",
                    description:
                      "We stay connected around the clock to manage any changes, emergencies, or special requests with efficiency and empathy.",
                  },
                  {
                    title: "Post-Trip Feedback & Follow-Up",
                    description:
                      "We value every experience. After the trip, we collect feedback to improve future services and maintain long-term partnerships.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 bg-white p-8 border-2 border-blue-200 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-4xl font-extrabold text-[#1C4D9B] shrink-0">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sticky Image */}
          {/* <Globe /> */}
          <div className="flex-1 relative ">
            <div className="sticky top-0 h-screen flex items-center justify-center p-4 lg:p-8">
              <div className="relative  ">
                <div className="w-[500px] aspect-square animate-spin-slow relative z-10">
                  <img
                    src="https://img.freepik.com/free-psd/earth-ball-school-education_23-2151848239.jpg?semt=ais_hybrid&w=740"
                    alt="Rotating Earth"
                    className="w-full h-full object-cover rounded-full "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
};

export default OurProcess;
