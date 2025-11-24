import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { packageApi, Package } from "../services/package";

const PackageDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [packageDetail, setPackageDetail] = useState<Package | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPackage = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const data = await packageApi.getPackageBySlug(slug);
        setPackageDetail(data);
      } catch (err) {
        console.error("Error fetching package:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#1C4D9B]"></div>
      </div>
    );
  }

  if (error || !packageDetail) {
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
          src={packageDetail.coverImage}
          alt={packageDetail.name}
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
              {packageDetail.categoryId.name}
            </span> */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {packageDetail.name}
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
              <div className="bg-white rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Overview
                </h2>
                <div 
                  className="text-gray-700 leading-relaxed text-lg prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: packageDetail.overview }}
                />
              </div>

              {/* Package Info */}
              <div className="bg-white rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Package Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Duration:</span> {packageDetail.duration}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Difficulty:</span> {packageDetail.difficulty}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Group Size:</span> {packageDetail.groupSize}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Elevation:</span> {packageDetail.elevation}m
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Distance:</span> {packageDetail.distance}km
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Location:</span> {packageDetail.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Trip Highlights */}
              {packageDetail.tripHighlight && packageDetail.tripHighlight.length > 0 && (
                <div className="bg-white rounded-none  mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Trip Highlights
                  </h2>
                  <ul className="space-y-3">
                    {packageDetail.tripHighlight.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What's Included */}
              {packageDetail.inclusion && packageDetail.inclusion.length > 0 && (
                <div className="bg-white rounded-none p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    What's Included
                  </h2>
                  <ul className="space-y-3">
                    {packageDetail.inclusion.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What's Not Included */}
              {packageDetail.exclusion && packageDetail.exclusion.length > 0 && (
                <div className="bg-white rounded-none mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    What's Not Included
                  </h2>
                  <ul className="space-y-3">
                    {packageDetail.exclusion.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-5 h-5 text-red-500 mt-1 flex-shrink-0">
                          ✕
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Note */}
              {packageDetail.note && (
                <div className="bg-white rounded-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Important Note
                  </h2>
                  <div 
                    className="text-gray-700 leading-relaxed prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: packageDetail.note }}
                  />
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-none p-6 sticky top-24">
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
