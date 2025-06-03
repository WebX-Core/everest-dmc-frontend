import React from 'react';
import basecamp from '../assets/basecamp.jpeg';
import panorama from '../assets/panoroma.jpeg';
import viewshort from '../assets/hike.jpeg';

const offers = [
  {
    image: basecamp,
    title: "Everest Base Camp Trek",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacinia fermentum ac lectus lectus viverra nibh amet pellentesque",
  },
  {
    image: panorama,
    title: "Everest Panorama Trek",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacinia fermentum ac lectus lectus viverra nibh amet pellentesque",
  },
  {
    image: viewshort,
    title: "Everest View Short Hike",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacinia fermentum ac lectus lectus viverra nibh amet pellentesque",
  },
];

const WeOffer = () => {
  return (
    <section id="services" className="bg-[#F3F8FF] py-12 px-4 md:px-10 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="uppercase text-xs text-gray-500 tracking-wider">Get to Know Us</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">What We Offer</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt donec commodo scelerisque quis leo, egestas amet.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-semibold text-gray-800 text-lg mb-2 border-b border-gray-200 pb-2">
                {offer.title}
              </h3>
              <p className="text-sm text-gray-600">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeOffer;
