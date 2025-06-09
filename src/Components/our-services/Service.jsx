import React, { use, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TravelPackages = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;

    if (sectionRef.current) {
      if (width < 768) {
        sectionRef.current.style.marginTop = "-60vh";
      } else if (width < 1024) {
        sectionRef.current.style.marginTop = "-70vh";
      } else {
        sectionRef.current.style.marginTop = "-80vh";
      }
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#1C4D9B] relative z-[9999] overflow-hidden">
      <motion.div
        className="w-11/12 mx-auto text-white pb-32 px-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <h3
          className="w-fit mx-auto mb-16 text-white text-4xl uppercase font-bold text-center px-6 border-b-2 py-3"
        >
          More Adventures
        </h3>
        <h2
          className="w-full sm:w-11/11 md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto text-white text-base sm:text-lg md:text-xl font-normal mb-20 text-center"
          style={{ textJustify: 'inter-word' }}
        >
          We specialize in delivering the finest travel experiences in the
          iconic Mount Everest region, offering expertly curated packages
          designed for adventure, comfort, and authenticity.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {travelPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#fff] overflow-hidden relative group p-4 flex flex-col gap-2 justify-between"
            >
              <div className=" bottom-0 left-0">
                <h3 className="text-xl text-[#1C4D9B] font-semibold tracking-widest uppercase">
                  {pkg.title}
                </h3>
                <p className="text-sm text-zinc-500  pb-2 ">{pkg.category}</p>
              </div>
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-[50vh] object-cover"
              />
              {/* <div className="absolute inset-0 left-0 top-0 right-0 bg-black/40 group-hover:opacity-0 transition-all duration-100" /> */}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TravelPackages;

const travelPackages = [
  {
    id: 1,
    category:
      "Upon your arrival at the airport, we will be there to greet you and assist you in reaching your hotel, ensuring a smooth transition into a new country.",
    title: "Airport Pickup & Transfers",
    image:
      "https://nepalrecreation.com/wp-content/uploads/2024/04/Highlights-of-Kathmandu-Airport-to-Thamel-Pickup-in-a-Private-Vehicle.jpg",
  },
  {
    id: 2,
    category:
      "Everest DMC will manage your lodging in Kathmandu and at your destination, tailored to suit your budget and requirements.",
    title: "Accommodation Bookings",
    image:
      "https://business.booking.com/storage/assets/media/29/5-factors-that-really-matter-w_f3cb6d159be0a77f2ca96f19c36b5bec4a.webp",
  },
  {
    id: 3,
    category:
      "We offer rental cars to ensure your travels are convenient and efficient, without any time wasted on public transportation.",
    title: "Vehicle Rental",
    image: "https://www.pacecarrental.co.za/media/2022/11/Info-Section-3.jpg",
  },

  {
    id: 5,
    category:
      "Everest DMC can make arrangements for additional activities such as rafting, bungee jumping, and more to ensure you have a memorable experience.",
    title: "Custom Trips",
    image: "https://cms.discoveryworldtrekking.com/media/4796/everesst.webp",
  },
];
