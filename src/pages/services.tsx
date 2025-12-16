import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { serviceApi } from "../services/service";

const ServicesPage = () => {
  const navigate = useNavigate();
  const { data: servicesData, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: serviceApi.getAllServices,
  });

  // Helper function to strip HTML tags and get excerpt
  const getExcerpt = (html: string, length: number = 150) => {
    const text = html.replace(/<[^>]*>/g, "");
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Our Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-700/50 to-blue-500/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6 text-blue-200">
                Our Services
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
                Comprehensive travel services for your Himalayan adventure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white relative overflow-hidden py-16">
        <div className="w-11/12 mx-auto pb-4 md:pb-32 px-2">
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <div className="mt-4">
              <h2 className="text-4xl pb-10 sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-gray-900">
                <span className="block">Professional Travel</span>
                <span className="font-bold text-[#1C4D9B]">
                  Our Services
                </span>
              </h2>
            </div>
          </motion.div> */}

          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-50 rounded-lg shadow-sm overflow-hidden animate-pulse">
                  <div className="aspect-[4/3] bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {servicesData && servicesData.data && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {servicesData.data.map((service, index) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full cursor-pointer group"
                  onClick={() => navigate(`/services/${service.slug}`)}
                >
                  <div className="relative overflow-hidden h-[40vh] md:h-[50vh] lg:h-[60vh] w-full rounded-none">
                    <img
                      src={service.coverImage.url}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    {/* Title in center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white uppercase font-bold text-xl md:text-2xl lg:text-3xl text-center px-4">
                        {service.title}
                      </h3>
                    </div>
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

export default ServicesPage;