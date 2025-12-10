import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { certificateApi } from "../services/certificate";

const AboutUs = () => {
  const { data: certificatesData, isLoading } = useQuery({
    queryKey: ["certificates"],
    queryFn: certificateApi.getAllCertificates,
  });
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-700/50 to-blue-500/30" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6 text-blue-200">
                About Us
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
                Your trusted partner for unforgettable Himalayan adventures
                since 2018.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="flex items-center justify-center bg-white px-4 sm:px-6 md:px-10 py-16 md:py-24">
        <div className="w-full max-w-4xl">
          <div className="space-y-8">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center space-y-6"
            >
              {/* <span className="inline-block px-4 py-2 sm:px-6 sm:py-3 text-zinc-500 text-sm sm:text-lg font-semibold tracking-wide uppercase rounded-full">
                Welcome to the Everest DMC
              </span> */}
              <div className="mt-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-gray-900">
                  <span className="block">The Masters</span>
                  <span className="font-bold text-[#1C4D9B]">
                    of Himalayan Experiences
                  </span>
                </h2>
              </div>
            </motion.div>

            {/* Content Paragraphs */}
            <motion.div
              className="text-justify sm:text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  Everest DMC is a trusted B2B Destination Management Company
                  based in Nepal, specializing in personalized travel, trekking,
                  and MICE solutions across the breathtaking Himalayas. Since
                  2018, we've been delivering unmatched local expertise,
                  tailor-made itineraries, and round-the-clock support to travel
                  partners and clients around the globe.
                </p>
                <p>
                  With a strong commitment to responsible tourism and community
                  empowerment, Everest DMC ensures every journey is not just
                  seamless but truly meaningful.
                </p>
              </div>
            </motion.div>

            {/* Additional Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-[#1C4D9B] mb-2">
                  2018
                </div>
                <p className="text-gray-600">Established</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#1C4D9B] mb-2">
                  1000+
                </div>
                <p className="text-gray-600">Happy Travelers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#1C4D9B] mb-2">
                  50+
                </div>
                <p className="text-gray-600">Destinations</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="w-11/12 mx-auto">
        
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center space-y-6"
            >
              {/* <span className="inline-block px-4 py-2 sm:px-6 sm:py-3 text-zinc-500 text-sm sm:text-lg font-semibold tracking-wide uppercase rounded-full">
                Welcome to the Everest DMC
              </span> */}
              <div className="mt-4">
                <h2 className="text-4xl pb-10 sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-gray-900">
                  <span className="block">Our Certificates</span>
                  <span className="font-bold text-[#1C4D9B]">
                    By Leading Tourism Authorities
                  </span>
                </h2>
              </div>
            </motion.div>

          {isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
                  <div className="aspect-[3/4] bg-gray-300"></div>
                  <div className="p-4">
                    <div className="h-5 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {certificatesData && certificatesData.data && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {certificatesData.data.map((certificate, index) => (
                <motion.div
                  key={certificate._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-none overflow-hidden transition-shadow duration-300"
                >
                  <div className="aspect-[3/4] overflow-hidden relative group">
                    <img
                      src={certificate.image}
                      alt={certificate.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <div 
                        className="text-white text-sm text-center overflow-y-auto max-h-full"
                        dangerouslySetInnerHTML={{ __html: certificate.description }}
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-center font-semibold text-gray-900 line-clamp-2">
                      {certificate.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
