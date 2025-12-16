import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { serviceApi } from "../services/service";
import { Mail, Phone } from "lucide-react";

// Custom hook for fetching service data
const useService = (slug: string) => {
  return useQuery({
    queryKey: ["service", slug],
    queryFn: async () => {
      const response = await serviceApi.getAllServices();
      const service = response.data.find((s) => s.slug === slug);
      if (!service) {
        throw new Error("Service not found");
      }
      return service;
    },
    enabled: !!slug,
  });
};

const ServiceDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: serviceData, isLoading, error } = useService(slug || "");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Process service data from API
  const service = useMemo(() => {
    if (!serviceData) return null;
    return {
      id: serviceData._id,
      slug: serviceData.slug,
      title: serviceData.title,
      description: serviceData.description,
      coverImage: serviceData.coverImage.url,
      images: serviceData.images || [],
      createdAt: serviceData.createdAt,
      updatedAt: serviceData.updatedAt,
    };
  }, [serviceData]);

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen bg-zinc-50">
        <div className="relative h-96 w-full bg-gray-200 animate-pulse" />
        <div className="px-4 sm:px-6 lg:px-20 py-8">
          <div className="space-y-4 animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-xl mb-4">Service not found</p>
          <Link to="/services" className="text-[#1C4D9B] hover:underline">← Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="relative h-96 w-full bg-cover bg-center" style={{ backgroundImage: `url('${service.coverImage}')` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <span className="bg-[#1C4D9B] px-3 py-1 rounded-full text-sm mb-4 inline-block">Service</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{service.title}</h1>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-zinc-200">
        <div className="px-4 sm:px-6 lg:px-20 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-zinc-500 hover:text-[#1C4D9B]">Home</Link>
            <span className="text-zinc-400">/</span>
            <Link to="/services" className="text-zinc-500 hover:text-[#1C4D9B]">Services</Link>
            <span className="text-zinc-400">/</span>
            <span className="text-zinc-900 font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-20 py-10 pb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content Area */}
          <div className="lg:w-[75%] space-y-6">
            {/* Service Description */}
            <section className="rounded-lg p-6 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 text-[#1C4D9B]">Service Overview</h2>
              <div 
                className="max-w-none text-gray-600 text-md [&_*]:!bg-transparent" 
                dangerouslySetInnerHTML={{ __html: service.description }} 
              />
            </section>

            {/* Additional Images Section */}
            {service.images.length > 0 && (
              <section className="bg-white rounded-lg p-6 scroll-mt-20">
                <h2 className="text-2xl font-bold mb-4 text-[#1C4D9B]">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {service.images.map((img: any, index: number) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg aspect-square">
                      <img
                        src={img.url || img}
                        alt={`${service.title} ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar - Contact & Booking */}
          <div className="lg:w-[25%]">
            <div className="lg:sticky lg:top-10 space-y-4">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-2">Need Help?</h3>
                <p className="text-gray-500 text-sm mb-6">Get in touch with our travel experts</p>
                
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/9779851026840" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">WhatsApp</p>
                      <span className="font-medium text-gray-700 group-hover:text-green-600">+977 9851026840</span>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:info@example.com" 
                    className="flex items-center gap-4 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Email Us</p>
                      <span className="font-medium text-gray-700 group-hover:text-blue-600">info@example.com</span>
                    </div>
                  </a>
                </div>
                
                <div className="mt-6">
                  <Link
                    to={`/contact-us?service=${encodeURIComponent(service.title)}`}
                    className="block w-full bg-[#1C4D9B] hover:bg-[#153d7a] text-white text-center font-semibold py-3.5 px-6 rounded-none transition-colors shadow-md hover:shadow-lg"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;