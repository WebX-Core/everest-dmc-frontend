import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TravelPackages = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const width = window.innerWidth;

    if (sectionRef.current) {
      if (width < 768) {
        sectionRef.current.style.marginTop = "5vh";
      } else if (width < 1024) {
        sectionRef.current.style.marginTop = "-60vh";
      } else {
        sectionRef.current.style.marginTop = "-80vh";
      }
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#1C4D9B] relative z-[9999] overflow-hidden"
    >
      <motion.div
        className="w-11/12 mx-auto text-white pb-4 md:pb-32 px-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <h3 className="w-fit mx-auto mb-16 text-white text-4xl uppercase font-bold text-center px-6 border-b-2 py-3">
          More Services
        </h3>
        <h2
          className="w-full sm:w-11/11 md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto text-white text-base sm:text-lg md:text-xl font-normal mb-20 text-center"
          style={{ textJustify: "inter-word" }}
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
                className="w-full h-[50vh] object-cover rounded-xl"
              />
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
      "We Provide Professional guide and porter services for safe, enriching Himalayan treks—experience local expertise, personalized support, and unforgettable mountain adventures with us.",
    title: "Guide & Porter Services",
    image:
      "https://www.himalayanabode.com/wp-content/uploads/2024/02/Hire-Guide-and-Porter-in-Nepal.jpg",
  },
  {
    id: 2,
    category:
      "Everest DMC arranges your lodging in Kathmandu and trekking destinations, customized to fit your budget and preferences for a comfortable and hassle-free stay.",
    title: "Accommodation Bookings",
    image:
      "https://business.booking.com/storage/assets/media/29/5-factors-that-really-matter-w_f3cb6d159be0a77f2ca96f19c36b5bec4a.webp",
  },
  {
    id: 3,
    category:
      "We provide rental cars for convenient and efficient travel, saving you time and eliminating the hassle of relying on public transportation during your trip",
    title: "Vehicle Rental",
    image: "/services/vehicle.png",
  },

  {
    id: 5,
    category:
      "Everest is our highlight, but there's much more like Annapurna, Manaslu & more. Contact us for custom itineraries and personalized travel experiences tailored perfectly to your interests and needs.",
    title: "Custom Trips",
    image: "https://cms.discoveryworldtrekking.com/media/4796/everesst.webp",
  },
];
