import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  id: number;
  company: string;
  representative: string;
  position: string;
  country: string;
  logo: string;
  rating: number;
  text: string;
  partnership: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    company: "Adventure Seekers Travel Agency",
    representative: "Sarah Johnson",
    position: "Operations Director",
    country: "United States",
    logo: "https://ui-avatars.com/api/?name=Adventure+Seekers&background=1C4D9B&color=fff&size=200",
    rating: 5,
    text: "Partnering with Everest DMC has been a game-changer for our business. Their B2B services are exceptional - from seamless booking processes to reliable ground operations. Our clients consistently give 5-star feedback. The white-label solutions allow us to offer premium Himalayan experiences under our brand.",
    partnership: "B2B Partner since 2022",
    date: "150+ Clients Served",
  },
  {
    id: 2,
    company: "Global Trekking Solutions",
    representative: "Michael Chen",
    position: "CEO",
    country: "Singapore",
    logo: "https://ui-avatars.com/api/?name=Global+Trekking&background=1C4D9B&color=fff&size=200",
    rating: 5,
    text: "Everest DMC is our go-to partner for all Nepal operations. Their professionalism, competitive pricing, and 24/7 support make them stand out. The custom itinerary options and flexible payment terms have helped us grow our Nepal portfolio by 200%. Highly recommended for B2B partnerships!",
    partnership: "B2B Partner since 2021",
    date: "300+ Clients Served",
  },
  {
    id: 3,
    company: "European Adventure Tours",
    representative: "Emma Williams",
    position: "Product Manager",
    country: "United Kingdom",
    logo: "https://ui-avatars.com/api/?name=European+Adventure&background=1C4D9B&color=fff&size=200",
    rating: 5,
    text: "Working with Everest DMC has elevated our Nepal offerings significantly. Their attention to detail, transparent pricing, and excellent ground support give us complete confidence. The dedicated account manager ensures smooth operations for all our groups. A truly reliable B2B partner.",
    partnership: "B2B Partner since 2023",
    date: "80+ Groups Handled",
  },
  {
    id: 4,
    company: "Wanderlust Travel Network",
    representative: "David Martinez",
    position: "Managing Director",
    country: "Spain",
    logo: "https://ui-avatars.com/api/?name=Wanderlust+Travel&background=1C4D9B&color=fff&size=200",
    rating: 5,
    text: "Everest DMC's B2B platform is incredibly efficient. Real-time availability, instant confirmations, and competitive net rates make our job easier. Their team handles everything from permits to emergency support. We've expanded our Nepal business significantly thanks to this partnership.",
    partnership: "B2B Partner since 2022",
    date: "200+ Bookings Processed",
  },
  {
    id: 5,
    company: "Pacific Rim Adventures",
    representative: "Lisa Anderson",
    position: "Operations Manager",
    country: "Australia",
    logo: "https://ui-avatars.com/api/?name=Pacific+Rim&background=1C4D9B&color=fff&size=200",
    rating: 5,
    text: "Outstanding B2B partner! Everest DMC's reliability and quality service have made them our exclusive Nepal operator. Their experienced guides, well-maintained equipment, and comprehensive insurance coverage give us peace of mind. The commission structure is fair and payments are always on time.",
    partnership: "B2B Partner since 2020",
    date: "500+ Clients Served",
  },
  {
    id: 6,
    company: "North American Expeditions",
    representative: "James Wilson",
    position: "VP of Operations",
    country: "Canada",
    logo: "https://ui-avatars.com/api/?name=North+American&background=1C4D9B&color=fff&size=200",
    rating: 5,
    text: "Everest DMC understands the B2B travel business perfectly. Their flexible booking policies, group discounts, and marketing support materials help us sell more. The quality of service on the ground matches what we promise our clients. A partnership built on trust and mutual success.",
    partnership: "B2B Partner since 2021",
    date: "250+ Groups Organized",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

        {/* Main Testimonial Card */}
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
              "{testimonials[currentIndex].text}"
            </p>

            {/* Company Info */}
            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].logo}
                alt={testimonials[currentIndex].company}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#1C4D9B]"
              />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonials[currentIndex].company}
                </h4>
                <p className="text-gray-700 font-medium">
                  {testimonials[currentIndex].representative} - {testimonials[currentIndex].position}
                </p>
                <p className="text-gray-600">{testimonials[currentIndex].country}</p>
                <p className="text-sm text-[#1C4D9B] font-medium">
                  {testimonials[currentIndex].partnership} • {testimonials[currentIndex].date}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
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
