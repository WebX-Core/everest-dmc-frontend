import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { testimonialApi, Testimonial } from "../../services/testimonial";



const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  // Helper function to clean HTML content
  const cleanHtmlContent = (html: string) => {
    if (!html) return '';
    
    // Create a temporary div to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    // Get text content and clean up extra quotes
    let text = tempDiv.textContent || tempDiv.innerText || '';
    
    // Remove extra quotes at the beginning and end
    text = text.replace(/^["'"'"]+|["'"'"]+$/g, '');
    
    return text.trim();
  };

  // Static fallback data
  const staticTestimonials: Testimonial[] = [
    {
      _id: "1",
      fullName: "Adventure Seekers Travel Agency",
      image: "https://ui-avatars.com/api/?name=Adventure+Seekers&background=1C4D9B&color=fff&size=200",
      rating: 5,
      comment: "Partnering with Everest DMC has been a game-changer for our business. Their B2B services are exceptional - from seamless booking processes to reliable ground operations. Our clients consistently give 5-star feedback. The white-label solutions allow us to offer premium Himalayan experiences under our brand.",
      isActive: true,
      sortOrder: 1,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
      company: "Adventure Seekers Travel Agency",
      representative: "Sarah Johnson",
      position: "Operations Director",
      country: "United States",
      logo: "https://ui-avatars.com/api/?name=Adventure+Seekers&background=1C4D9B&color=fff&size=200",
      text: "Partnering with Everest DMC has been a game-changer for our business. Their B2B services are exceptional - from seamless booking processes to reliable ground operations. Our clients consistently give 5-star feedback. The white-label solutions allow us to offer premium Himalayan experiences under our brand.",
      partnership: "B2B Partner since 2022",
      date: "150+ Clients Served",
    },
    {
      _id: "2",
      fullName: "Global Trekking Solutions",
      image: "https://ui-avatars.com/api/?name=Global+Trekking&background=1C4D9B&color=fff&size=200",
      rating: 5,
      comment: "Everest DMC is our go-to partner for all Nepal operations. Their professionalism, competitive pricing, and 24/7 support make them stand out. The custom itinerary options and flexible payment terms have helped us grow our Nepal portfolio by 200%. Highly recommended for B2B partnerships!",
      isActive: true,
      sortOrder: 2,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
      company: "Global Trekking Solutions",
      representative: "Michael Chen",
      position: "CEO",
      country: "Singapore",
      logo: "https://ui-avatars.com/api/?name=Global+Trekking&background=1C4D9B&color=fff&size=200",
      text: "Everest DMC is our go-to partner for all Nepal operations. Their professionalism, competitive pricing, and 24/7 support make them stand out. The custom itinerary options and flexible payment terms have helped us grow our Nepal portfolio by 200%. Highly recommended for B2B partnerships!",
      partnership: "B2B Partner since 2021",
      date: "300+ Clients Served",
    },
    {
      _id: "3",
      fullName: "European Adventure Tours",
      image: "https://ui-avatars.com/api/?name=European+Adventure&background=1C4D9B&color=fff&size=200",
      rating: 5,
      comment: "Working with Everest DMC has elevated our Nepal offerings significantly. Their attention to detail, transparent pricing, and excellent ground support give us complete confidence. The dedicated account manager ensures smooth operations for all our groups. A truly reliable B2B partner.",
      isActive: true,
      sortOrder: 3,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
      company: "European Adventure Tours",
      representative: "Emma Williams",
      position: "Product Manager",
      country: "United Kingdom",
      logo: "https://ui-avatars.com/api/?name=European+Adventure&background=1C4D9B&color=fff&size=200",
      text: "Working with Everest DMC has elevated our Nepal offerings significantly. Their attention to detail, transparent pricing, and excellent ground support give us complete confidence. The dedicated account manager ensures smooth operations for all our groups. A truly reliable B2B partner.",
      partnership: "B2B Partner since 2023",
      date: "80+ Groups Handled",
    },
    {
      _id: "4",
      fullName: "Wanderlust Travel Network",
      image: "https://ui-avatars.com/api/?name=Wanderlust+Travel&background=1C4D9B&color=fff&size=200",
      rating: 5,
      comment: "Everest DMC's B2B platform is incredibly efficient. Real-time availability, instant confirmations, and competitive net rates make our job easier. Their team handles everything from permits to emergency support. We've expanded our Nepal business significantly thanks to this partnership.",
      isActive: true,
      sortOrder: 4,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
      company: "Wanderlust Travel Network",
      representative: "David Martinez",
      position: "Managing Director",
      country: "Spain",
      logo: "https://ui-avatars.com/api/?name=Wanderlust+Travel&background=1C4D9B&color=fff&size=200",
      text: "Everest DMC's B2B platform is incredibly efficient. Real-time availability, instant confirmations, and competitive net rates make our job easier. Their team handles everything from permits to emergency support. We've expanded our Nepal business significantly thanks to this partnership.",
      partnership: "B2B Partner since 2022",
      date: "200+ Bookings Processed",
    },
    {
      _id: "5",
      fullName: "Pacific Rim Adventures",
      image: "https://ui-avatars.com/api/?name=Pacific+Rim&background=1C4D9B&color=fff&size=200",
      rating: 5,
      comment: "Outstanding B2B partner! Everest DMC's reliability and quality service have made them our exclusive Nepal operator. Their experienced guides, well-maintained equipment, and comprehensive insurance coverage give us peace of mind. The commission structure is fair and payments are always on time.",
      isActive: true,
      sortOrder: 5,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
      company: "Pacific Rim Adventures",
      representative: "Lisa Anderson",
      position: "Operations Manager",
      country: "Australia",
      logo: "https://ui-avatars.com/api/?name=Pacific+Rim&background=1C4D9B&color=fff&size=200",
      text: "Outstanding B2B partner! Everest DMC's reliability and quality service have made them our exclusive Nepal operator. Their experienced guides, well-maintained equipment, and comprehensive insurance coverage give us peace of mind. The commission structure is fair and payments are always on time.",
      partnership: "B2B Partner since 2020",
      date: "500+ Clients Served",
    },
    {
      _id: "6",
      fullName: "North American Expeditions",
      image: "https://ui-avatars.com/api/?name=North+American&background=1C4D9B&color=fff&size=200",
      rating: 5,
      comment: "Everest DMC understands the B2B travel business perfectly. Their flexible booking policies, group discounts, and marketing support materials help us sell more. The quality of service on the ground matches what we promise our clients. A partnership built on trust and mutual success.",
      isActive: true,
      sortOrder: 6,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
      company: "North American Expeditions",
      representative: "James Wilson",
      position: "VP of Operations",
      country: "Canada",
      logo: "https://ui-avatars.com/api/?name=North+American&background=1C4D9B&color=fff&size=200",
      text: "Everest DMC understands the B2B travel business perfectly. Their flexible booking policies, group discounts, and marketing support materials help us sell more. The quality of service on the ground matches what we promise our clients. A partnership built on trust and mutual success.",
      partnership: "B2B Partner since 2021",
      date: "250+ Groups Organized",
    },
  ];

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const response = await testimonialApi.getAllTestimonials();
        
        if (response.data && response.data.length > 0) {
          setTestimonials(response.data);
        } else {
          // Use static data if API returns empty
          setTestimonials(staticTestimonials);
        }
      } catch (error) {
        // Use static data as fallback
        setTestimonials(staticTestimonials);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-gray-900">
            <span className="block">Trusted by</span>
            <span className="font-bold text-[#1C4D9B]">
              Leading Travel Companies
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            See what our B2B partners say about working with Everest DMC
          </p>
        </motion.div>

        {loading ? (
          /* Loading State */
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 animate-pulse">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-5 h-5 bg-gray-200 rounded"></div>
              ))}
            </div>
            <div className="space-y-3 mb-8">
              <div className="h-6 bg-gray-200 rounded w-full"></div>
              <div className="h-6 bg-gray-200 rounded w-5/6"></div>
              <div className="h-6 bg-gray-200 rounded w-4/6"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
              <div className="space-y-2">
                <div className="h-5 bg-gray-200 rounded w-48"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          </div>
        ) : (
          /* Main Testimonial Card */
          <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white rounded-none shadow-sm p-8 md:p-12 mb-8"
        >
          {/* Quote Icon */}
          <div className="absolute top-6 right-6 text-[#1C4D9B] opacity-10">
            <Quote size={80} />
          </div>

          <div className="relative z-10">
            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
              "{cleanHtmlContent(testimonials[currentIndex].text || testimonials[currentIndex].comment || '')}"
            </p>

            {/* Company Info */}
            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].logo || testimonials[currentIndex].image || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentIndex].company || testimonials[currentIndex].fullName)}&background=1C4D9B&color=fff&size=200`}
                alt={testimonials[currentIndex].company || testimonials[currentIndex].fullName}
                className="w-16 h-16 rounded-lg object-cover border-2 border-[#1C4D9B]"
              />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonials[currentIndex].fullName}
                </h4>
                {testimonials[currentIndex].company && (
                  <p className="text-gray-700 font-medium">
                    {testimonials[currentIndex].company}
                  </p>
                )}
                {testimonials[currentIndex].representative && testimonials[currentIndex].position && (
                  <p className="text-gray-700 font-medium">
                    {testimonials[currentIndex].representative} - {testimonials[currentIndex].position}
                  </p>
                )}
                {testimonials[currentIndex].country && (
                  <p className="text-gray-600">{testimonials[currentIndex].country}</p>
                )}
                {testimonials[currentIndex].partnership && testimonials[currentIndex].date && (
                  <p className="text-sm text-[#1C4D9B] font-medium">
                    {testimonials[currentIndex].partnership} • {testimonials[currentIndex].date}
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
        )}

        {/* Navigation Controls */}
        {!loading && testimonials.length > 0 && (
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-[#1C4D9B] cursor-pointer text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#1C4D9B] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-[#1C4D9B] cursor-pointer text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1C4D9B] mb-2">100+</div>
            <div className="text-gray-600">B2B Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1C4D9B] mb-2">50+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1C4D9B] mb-2">5000+</div>
            <div className="text-gray-600">Clients Handled</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1C4D9B] mb-2">10+</div>
            <div className="text-gray-600">Years in B2B</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;