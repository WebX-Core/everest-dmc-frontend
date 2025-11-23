import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";

interface PackageDetail {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  included: string[];
  notIncluded: string[];
}

const packageDetails: PackageDetail[] = [
  {
    id: 1,
    slug: "everest-base-camp-trek",
    title: "Everest Base Camp Trek",
    category: "Trekking Adventure",
    description:
      "The Everest Base Camp trek is one of the most iconic adventures in the world. Standing at 5,364 meters (17,598 feet), reaching base camp is a dream for many trekkers. Experience breathtaking mountain landscapes, traditional Sherpa villages, and ancient monasteries on this unforgettable journey.",
    image: "/services/everest-min.jpg",
    features: [
      "12-14 days trekking experience",
      "Stunning views of Mount Everest and surrounding peaks",
      "Visit traditional Sherpa villages and monasteries",
      "Acclimatization days for safety",
      "Experienced local guides",
    ],
    included: [
      "Airport pickup and drop-off",
      "Domestic flights (Kathmandu-Lukla-Kathmandu)",
      "Accommodation in teahouses during trek",
      "All meals during trekking (breakfast, lunch, dinner)",
      "Experienced trekking guide and porter",
      "Sagarmatha National Park permit",
      "TIMS card",
    ],
    notIncluded: [
      "International flights",
      "Nepal visa fees",
      "Travel insurance",
      "Personal trekking equipment",
      "Extra meals in Kathmandu",
      "Tips for guide and porter",
    ],
  },
  {
    id: 2,
    slug: "everest-view-breakfast-helicopter-tour",
    title: "Everest View Breakfast & Helicopter Tour",
    category: "Luxury Experience",
    description:
      "Experience the majesty of Mount Everest in ultimate luxury with our helicopter tour. Enjoy breakfast at the world's highest altitude hotel with panoramic views of the Himalayas. Perfect for those with limited time who want to witness Everest's grandeur.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Mount_Everest_as_seen_from_Drukair2_PLW_edit_Cropped.jpg",
    features: [
      "4-5 hours total duration",
      "Helicopter flight to Everest region",
      "Breakfast at Hotel Everest View",
      "Panoramic mountain views",
      "Professional pilot and guide",
    ],
    included: [
      "Helicopter flight (Kathmandu-Everest-Kathmandu)",
      "Breakfast at Hotel Everest View",
      "Airport transfers",
      "All necessary permits",
      "Professional guide",
    ],
    notIncluded: [
      "Hotel accommodation in Kathmandu",
      "Travel insurance",
      "Personal expenses",
      "Tips for pilot and guide",
    ],
  },
  {
    id: 3,
    slug: "everest-three-pass-trek",
    title: "Everest Three Pass Trek",
    category: "Challenging Adventure",
    description:
      "The ultimate Everest region challenge! Cross three high mountain passes - Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m). This trek combines the best of the Everest region with stunning views and remote valleys.",
    image:
      "https://cdn.britannica.com/39/76239-050-DE5FCF36/Climbers-side-Nepali-Mount-Everest.jpg",
    features: [
      "18-20 days challenging trek",
      "Cross three high mountain passes",
      "Visit Everest Base Camp and Gokyo Lakes",
      "Stunning panoramic mountain views",
      "Remote and less crowded trails",
    ],
    included: [
      "Airport transfers",
      "Domestic flights",
      "Teahouse accommodation",
      "All meals during trek",
      "Experienced guide and porter",
      "All permits and fees",
      "First aid kit",
    ],
    notIncluded: [
      "International flights",
      "Nepal visa",
      "Travel insurance (mandatory)",
      "Personal gear",
      "Extra expenses in Kathmandu",
      "Tips",
    ],
  },
  {
    id: 4,
    slug: "annapurna-base-camp-trek",
    title: "Annapurna Base Camp Trek",
    category: "Classic Trek",
    description:
      "Trek to the heart of the Annapurna Sanctuary at 4,130 meters. Experience diverse landscapes from subtropical forests to alpine meadows, with spectacular views of Annapurna I, Machapuchare, and surrounding peaks.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Close_Up_View_of_Mount_Everest_from_Kala_Patthar_%285644_m%29_in_2023-IMG-3485.jpg/1000px-Close_Up_View_of_Mount_Everest_from_Kala_Patthar_%285644_m%29_in_2023-IMG-3485.jpg",
    features: [
      "7-12 days trek duration",
      "Diverse landscapes and ecosystems",
      "360-degree mountain views",
      "Natural hot springs at Jhinu Danda",
      "Cultural experience in Gurung villages",
    ],
    included: [
      "Airport pickup and drop",
      "Private vehicle to/from trek start",
      "Teahouse accommodation",
      "Three meals a day during trek",
      "Professional guide and porter",
      "ACAP permit and TIMS card",
    ],
    notIncluded: [
      "International airfare",
      "Nepal visa fees",
      "Travel insurance",
      "Meals in Pokhara/Kathmandu",
      "Personal expenses",
      "Tips for staff",
    ],
  },
  {
    id: 5,
    slug: "manaslu-base-camp-trek",
    title: "Manaslu Base Camp Trek",
    category: "Off the Beaten Path",
    description:
      "Trek around the world's eighth highest mountain, Manaslu (8,163m). This restricted area trek offers pristine nature, authentic Tibetan culture, and spectacular mountain views with fewer crowds than Everest or Annapurna.",
    image: "https://cms.discoveryworldtrekking.com/media/4796/everesst.webp",
    features: [
      "14-18 days remote trek",
      "Restricted area with special permits",
      "Authentic Tibetan Buddhist culture",
      "Cross Larkya La Pass (5,160m)",
      "Less crowded trails",
    ],
    included: [
      "All ground transportation",
      "Teahouse/camping accommodation",
      "All meals during trek",
      "Experienced guide and porter",
      "Special restricted area permit",
      "MCAP and ACAP permits",
      "TIMS card",
    ],
    notIncluded: [
      "International flights",
      "Nepal visa",
      "Travel insurance (mandatory)",
      "Personal trekking gear",
      "Extra meals in cities",
      "Tips and gratuities",
    ],
  },
  {
    id: 6,
    slug: "guide-porter-services",
    title: "Guide & Porter Services",
    category: "Professional Support",
    description:
      "We provide professional guide and porter services for safe, enriching Himalayan treks. Experience local expertise, personalized support, and unforgettable mountain adventures with our certified team.",
    image:
      "https://www.himalayanabode.com/wp-content/uploads/2024/02/Hire-Guide-and-Porter-in-Nepal.jpg",
    features: [
      "Certified local guides with extensive mountain experience",
      "Experienced porters for luggage handling",
      "Multilingual support (English, Hindi, Nepali)",
      "24/7 assistance during your trek",
      "Custom group sizes from solo to large groups",
    ],
    included: [
      "Professional guide services",
      "Porter services (1 porter for 2 trekkers)",
      "Guide and porter insurance",
      "Accommodation and meals for staff",
      "Emergency evacuation support",
    ],
    notIncluded: [
      "Personal trekking equipment",
      "Travel insurance",
      "Personal expenses",
      "Tips for guide and porter",
    ],
  },
  {
    id: 7,
    slug: "accommodation-bookings",
    title: "Accommodation Bookings",
    category: "Luxury Stays",
    description:
      "Everest DMC arranges your lodging in Kathmandu and trekking destinations, customized to fit your budget and preferences for a comfortable and hassle-free stay.",
    image:
      "https://business.booking.com/storage/assets/media/29/5-factors-that-really-matter-w_f3cb6d159be0a77f2ca96f19c36b5bec4a.webp",
    features: [
      "3-5 star hotels in Kathmandu",
      "Tea houses and lodges on trekking routes",
      "City center locations for easy access",
      "Airport transfers included",
      "Breakfast included at all properties",
    ],
    included: [
      "Hotel booking confirmation",
      "Airport pickup and drop-off",
      "Daily breakfast",
      "Room with attached bathroom (where available)",
      "24/7 hotel support",
    ],
    notIncluded: [
      "Lunch and dinner",
      "Room upgrades",
      "Minibar and laundry",
      "Extra night accommodation",
    ],
  },
  {
    id: 8,
    slug: "vehicle-rental",
    title: "Vehicle Rental",
    category: "Transportation",
    description:
      "We provide rental cars for convenient and efficient travel, saving you time and eliminating the hassle of relying on public transportation during your trip.",
    image: "/services/vehicle.png",
    features: [
      "4WD vehicles for mountain terrain",
      "Professional experienced drivers",
      "Airport and hotel transfers",
      "Full insurance coverage",
      "Flexible rental periods",
    ],
    included: [
      "Vehicle with fuel",
      "Professional driver",
      "Driver accommodation and meals",
      "Vehicle insurance",
      "Parking fees",
    ],
    notIncluded: [
      "Personal travel insurance",
      "Entrance fees to tourist sites",
      "Driver tips",
      "Extra hours beyond agreed schedule",
    ],
  },
  {
    id: 9,
    slug: "custom-trips",
    title: "Custom Trips",
    category: "Tailored Experiences",
    description:
      "Everest is our highlight, but there's much more like Annapurna, Manaslu & more. Contact us for custom itineraries and personalized travel experiences tailored perfectly to your interests and needs.",
    image: "https://cms.discoveryworldtrekking.com/media/4796/everesst.webp",
    features: [
      "Personalized itineraries based on your interests",
      "Private groups for exclusive experiences",
      "Expert local knowledge and insights",
      "Exclusive experiences not available to regular tourists",
      "Flexible scheduling to match your timeline",
    ],
    included: [
      "Custom itinerary planning",
      "Private guide and support team",
      "All permits and documentation",
      "Accommodation as per itinerary",
      "Ground transportation",
    ],
    notIncluded: [
      "International flights",
      "Nepal visa fees",
      "Travel insurance",
      "Personal expenses and tips",
    ],
  },
];

const PackageDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const packageDetail = packageDetails.find((pkg) => pkg.slug === slug);

  if (!packageDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
          <Link
            to="/packages"
            className="text-[#1C4D9B] hover:underline flex items-center gap-2 justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={packageDetail.image}
          alt={packageDetail.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-white mb-4 hover:text-blue-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Packages
            </Link>
            {/* <span className="inline-block bg-[#1C4D9B] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              {packageDetail.category}
            </span> */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {packageDetail.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Description */}
              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About This Service
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {packageDetail.description}
                </p>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {packageDetail.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Included */}
              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What's Included
                </h2>
                <ul className="space-y-3">
                  {packageDetail.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Not Included */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What's Not Included
                </h2>
                <ul className="space-y-3">
                  {packageDetail.notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 text-red-500 mt-1 flex-shrink-0">
                        ✕
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Book This Service
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us to get a customized quote for this service.
              </p>
              <Link
                to="/contact-us"
                className="block w-full bg-[#1C4D9B] hover:bg-blue-700 text-white text-center font-medium py-3 px-6 rounded-none transition duration-200"
              >
                Contact Us
              </Link>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Need Help?
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  Our team is available 24/7 to assist you.
                </p>
                <p className="text-sm text-[#1C4D9B] font-medium">
                  +977 123 456 789
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
