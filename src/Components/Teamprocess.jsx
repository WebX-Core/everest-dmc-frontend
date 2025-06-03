import React from "react";

function TeamProcess() {
  return (
    <section id= "process" className="bg-[#F3F8FF] py-12 px-4 md:px-16 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-sm uppercase text-gray-400 mb-2 mt-6">Global Partnerships</h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-4">We have best team <br /> and best process</h2>
        <p className="text-gray-600 mb-6">Behind Every Great Adventure Is a Great Team and a Thoughtful Plan</p>
        <button className="bg-blue-200 text-gray-800 py-2 px-6 rounded-full mb-12 hover:bg-blue-300 transition-colors">
          Get Started
        </button>

        <div className="relative">
          {/* Curved Arrow SVG - hidden on mobile */}
          <svg
            className="absolute inset-0 w-full h-64 md:h-48 hidden md:block"
            viewBox="0 0 800 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,180 C200,80 600,320 800,80"
              stroke="#E5E4EB"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-between items-start relative z-10">
            <div className="text-left md:text-center md:w-1/3 flex flex-col items-start md:items-center mb-12 md:mb-0 ml-10 md:ml-0">
              <div className="w-10 h-10 rounded-full bg-white border-4 border-gray-400 flex items-center justify-center font-bold text-lg mb-4 z-20 lg:mt-40">
                1
              </div>
              <h3 className="font-bold text-lg">Consultation & Customization</h3>
              <p className="text-gray-600 mt-2 max-w-xs">We understand your business goals and tailor services to your client’s needs.</p>
            </div>

            <div className="text-left md:text-center md:w-1/3 flex flex-col items-start md:items-center mb-12 md:mb-0 ml-10 md:ml-0">
              <div className="w-10 h-10 rounded-full bg-white border-4 border-gray-400 flex items-center justify-center font-bold text-lg mb-4 z-20">
                2
              </div>
              <h3 className="font-bold text-lg">Efficient Coordination</h3>
              <p className="text-gray-600 mt-2 max-w-xs">From logistics to on-ground support, we ensure smooth communication at every stage.</p>
            </div>

            <div className="text-left md:text-center md:w-1/3 flex flex-col items-start md:items-center ml-10 md:ml-0">
              <div className="w-10 h-10 rounded-full bg-white border-4 border-gray-400 flex items-center justify-center font-bold text-lg mb-4 z-20 lg:-mt-20">
                3
              </div>
              <h3 className="font-bold text-lg">On-Site Execution</h3>
              <p className="text-gray-600 mt-2 max-w-xs">Our trained field staff delivers professional service across all locations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamProcess;