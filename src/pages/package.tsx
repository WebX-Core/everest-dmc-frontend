import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import images from "../data/WeOfferImages";

const ImageGrid = () => {
  const navigate = useNavigate();

  return (
    <>
      <div id="services" className="w-full px-2 md:px-15 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image) => {
            return (
              <div
                key={image.id}
                className="w-full cursor-pointer group"
                onClick={() => navigate(`/packages/${image.slug}`)}
              >
                <div className="relative overflow-hidden h-[30vh] md:h-[40vh] lg:h-[50vh] w-full rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-[#1C4D9B] uppercase font-bold text-sm md:text-xl text-left mt-3 px-2 group-hover:text-blue-700 transition-colors">
                  {image.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const travelPackages = [
  {
    id: 1,
    slug: "guide-porter-services",
    category:
      "We Provide Professional guide and porter services for safe, enriching Himalayan treks—experience local expertise, personalized support, and unforgettable mountain adventures with us.",
    title: "Guide & Porter Services",
    image:
      "https://www.himalayanabode.com/wp-content/uploads/2024/02/Hire-Guide-and-Porter-in-Nepal.jpg",
  },
  {
    id: 2,
    slug: "accommodation-bookings",
    category:
      "Everest DMC arranges your lodging in Kathmandu and trekking destinations, customized to fit your budget and preferences for a comfortable and hassle-free stay.",
    title: "Accommodation Bookings",
    image:
      "https://business.booking.com/storage/assets/media/29/5-factors-that-really-matter-w_f3cb6d159be0a77f2ca96f19c36b5bec4a.webp",
  },
  {
    id: 3,
    slug: "vehicle-rental",
    category:
      "We provide rental cars for convenient and efficient travel, saving you time and eliminating the hassle of relying on public transportation during your trip",
    title: "Vehicle Rental",
    image: "/services/vehicle.png",
  },
  {
    id: 4,
    slug: "custom-trips",
    category:
      "Everest is our highlight, but there's much more like Annapurna, Manaslu & more. Contact us for custom itineraries and personalized travel experiences tailored perfectly to your interests and needs.",
    title: "Custom Trips",
    image: "https://cms.discoveryworldtrekking.com/media/4796/everesst.webp",
  },
];

const TravelPackages = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#1C4D9B] relative overflow-hidden py-16">

      <div className="w-11/12 mx-auto text-white pb-4 md:pb-32 px-2">
        <h3 className="w-fit mx-auto mb-16 text-white text-4xl uppercase font-medium text-center px-6 border-b-2 py-3">
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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {travelPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#fff] overflow-hidden relative group p-4 flex flex-col gap-2 justify-between cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => navigate(`/packages/${pkg.slug}`)}
            >
              <div className="bottom-0 left-0">
                <h3 className="text-xl text-[#1C4D9B] font-semibold tracking-widest uppercase group-hover:text-blue-700 transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-sm text-zinc-500 pb-2">{pkg.category}</p>
              </div>
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-[50vh] object-cover rounded-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PackagesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Travel Packages"
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
                Our Travel Packages
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
                Discover the majestic Himalayas with our expertly crafted
                trekking and adventure packages.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <ImageGrid />

      {/* Travel Packages Section */}
      <TravelPackages />
    </div>
  );
};

export default PackagesPage;
