import React from "react";
import {motion} from "framer-motion"

const TravelPackages = () => {
  return (
    <section className=" bg-[#1C4D9B] -mt-[110vh] relative z-[9999]">
      <motion.div
        className="w-11/12 mx-auto text-white pb-32 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <h2 className="text-4xl font-normal mb-20 text-center">
          We are focusing on the best Mount Everest Region packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelPackages.map((pkg) => (
            <div key={pkg.id} className="bg-[#fff] rounded-xl overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-[#1C4D9B] uppercase font-medium tracking-widest">{pkg.category}</p>
                <h3 className="text-xl text-black font-semibold mt-1">
                  {pkg.title}
                </h3>
                <div className="flex items-center text-sm font-medium text-zinc-600 mt-3 gap-3">
                  <span className="flex items-center gap-1">
                    <img
                      src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${pkg.author}`}
                      className="w-5 h-5 rounded-full"
                      alt={pkg.author}
                    />
                    {pkg.author}
                  </span>
                  <span className="flex items-center gap-1">⏱ {pkg.time}</span>
                </div>
              </div>
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
    category: "Everest Region",
    title: "Everest Base Camp Trek",
    author: "John Everest",
    time: "45 days",
    image: "https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg",
  },
  {
    id: 2,
    category: "Everest Region",
    title: "Everest Three Pass Trek",
    author: "Anita Gurung",
    time: "23 days",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Mount_Everest_as_seen_from_Drukair2_PLW_edit_Cropped.jpg",
  },
  {
    id: 3,
    category: "Everest Region",
    title: "Luxury Everest Base Camp Trek",
    author: "Ravi Neupane",
    time: "14 days",
    image:
      "https://cdn.britannica.com/39/76239-050-DE5FCF36/Climbers-side-Nepali-Mount-Everest.jpg",
  },
  {
    id: 4,
    category: "Everest Region",
    title: "Luxury Everest Three Pass Trek",
    author: "Meera Thapa",
    time: "7 days",
    image:
      "https://assets-cdn.kathmandupost.com/uploads/source/news/2021/third-party/thumb2-1619021995.jpg",
  },
  {
    id: 5,
    category: "Everest Region",
    title: "Everest Base Camp Trek & Gokyo Lake",
    author: "Kiran Joshi",
    time: "19 days",
    image: "https://cms.discoveryworldtrekking.com/media/4796/everesst.webp",
  },
  {
    id: 6,
    category: "Everest Region",
    title: "Everest Base Camp Heli Tour",
    author: "Tara Singh",
    time: "6 days",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/37/Close_Up_View_of_Mount_Everest_from_Kala_Patthar_%285644_m%29_in_2023-IMG-3485.jpg",
  },
];