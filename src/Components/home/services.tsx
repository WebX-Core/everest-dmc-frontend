import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { serviceApi } from "../../services/service";

const TravelPackages = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  
  // Fetch services data
  const { data: servicesData, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: serviceApi.getAllServices,
  });

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

  // Helper function to strip HTML tags and get excerpt
  const getExcerpt = (html: string, length: number = 150) => {
    const text = html.replace(/<[^>]*>/g, "");
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#1C4D9B] relative py-20 z-[9999] overflow-hidden"
    >
      <motion.div
        className="w-11/12 mx-auto text-white pb-4 md:pb-32 px-2 md:px-4"
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

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#fff] overflow-visible relative group p-3 sm:p-4 flex flex-col gap-2 animate-pulse">
                <div className="flex-1 flex flex-col">
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                </div>
                <div className="relative pt-[75%] sm:pt-0 sm:h-[50vh]">
                  <div className="absolute inset-0 w-full h-full bg-gray-300"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Services Data */}
        {servicesData && servicesData.data && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {servicesData.data.slice(0, 4).map((service) => (
              <div
                key={service._id}
                className="bg-[#fff] overflow-visible relative group p-3 sm:p-4 flex flex-col gap-2 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => navigate(`/services/${service.slug}`)}
              >
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl text-[#1C4D9B] font-semibold tracking-wider sm:tracking-widest uppercase mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 mb-3 leading-relaxed flex-1">
                    {getExcerpt(service.description)}
                  </p>
                </div>
                <div className="relative pt-[75%] sm:pt-0 sm:h-[50vh]">
                  <img
                    src={service.coverImage.url}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover sm:rounded-none"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default TravelPackages;


