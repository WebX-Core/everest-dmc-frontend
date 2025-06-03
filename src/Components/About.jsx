import React from 'react';

const points = [
  {
    number: "1",
    title: "Tailor-Made & Personalized Services",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    number: "2",
    title: "Trusted Local Expertise & Global Clientele",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    number: "3",
    title: "24/7 Customer Support & Ethical Tourism",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-[#F3F8FF] py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Side - Numbered Cards */}
        <div className="flex flex-col space-y-10 w-full lg:w-1/2">
        {points.map((item) => (
  <div
    key={item.number}
    className={`flex items-start space-x-4${item.number === "2" ? " ml-20" : ""}`}
  >
    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-700 border border-gray-200 rounded-full shadow-sm bg-white">
      {item.number}
    </div>
    <div className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-100 w-full">
      <h3 className="font-semibold text-gray-800">{item.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{item.text}</p>
    </div>
  </div>
))}
        </div>

        {/* Right Side - About Everest DMC */}
        <div className="w-full lg:w-1/2 lg:mt-20">
          <p className="uppercase text-xs tracking-wide text-gray-500 mb-2">Get to know us</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">About Everest DMC</h2>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Everest DMC is a trusted B2B destination management company in Nepal, offering personalized travel,
            trekking, and MICE services across the Himalayas.
          </p>
          <p className="text-sm md:text-base text-gray-700">
            Since 2018, we've provided unmatched local expertise, tailor-made experiences, and 24/7 support for clients
            worldwide, all while promoting responsible tourism and strong community values.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
