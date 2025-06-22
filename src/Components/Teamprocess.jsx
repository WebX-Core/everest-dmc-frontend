import React, { lazy } from "react";
// import { Globe } from "./ui/globe";
import process from "../data/OurProcessData";
import { Loader } from "lucide-react";
// import { GlobeDemo } from "./globe-container";

const GlobeDemo = lazy(() => import("./globe-container"));

const OurProcess = () => {
  return (
    <>
      {/* Process Section */}
      <section id="process" className="relative bg-white">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="flex-1 py-8">
            <div className="w-11/12 mx-auto px-2 md:px-6 lg:px-6 xl:px-24">
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
                <span className="block">Our</span>
                <span className="font-bold text-[#1C4D9B] uppercase">
                  Process
                </span>
              </h2>
              <div className="w-24 h-0.5 bg-[#1C4D9B] mb-8 mt-0"></div>
              <p className="text-xl text-gray-600 mb-16 leading-relaxed text-justify">
                Crafting unforgettable journeys with precision and passion. Our
                meticulous approach ensures every detail exceeds expectations.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { number: "20+", label: "Years of Expertise" },
                  { number: "15+", label: "Everest Destinations" },
                  { number: "28k+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-blue-50 py-4 px-6 rounded-md"
                  >
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
              <div className="space-y-6 mt-10">
                {process?.length > 0 ? (
                  process.map((step, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-white p-6 sm:p-8 border-2 border-blue-200 hover:shadow-md transition-shadow duration-300 rounded-md"
                    >
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#1C4D9B] shrink-0">
                        0{index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-justify">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic">
                    No process steps available.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Sticky Rotating Image */}
          <div className="relative w-full lg:w-auto lg:flex flex-1">
            <div className="sticky top-0 h-screen flex items-center justify-center w-full">
              <div className="relative w-fit h-[90vh] md:h-[40rem] lg:h-[70vh] rounded-2xl overflow-hidden shadow-lg border-3 border-blue-800">
                <video
                  src="/services/dmc-v.mp4" // Replace with actual path
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProcess;
