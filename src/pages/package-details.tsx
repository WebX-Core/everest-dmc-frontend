import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { packageApi } from "../services/package";

import {
  Clock,
  MapPin,
  X,
  CheckCircle,
  Star,
  Shield,
  Backpack,
  ChevronDown,
  Users,
  Mountain,
  Route,
  Utensils,
  Home,
  Info,
  Mail,
  Phone,
} from "lucide-react";

// Custom hook for fetching package data
const usePackage = (slug: string) => {
  return useQuery({
    queryKey: ["package", slug],
    queryFn: () => packageApi.getPackageBySlug(slug),
    enabled: !!slug,
  });
};

const PackageDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: packageData, isLoading, error } = usePackage(slug || "");
  const [mounted, setMounted] = useState(false);
  const [, setActiveSection] = useState("overview");
  const [expandedDays, setExpandedDays] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Process package data from API
  const tour = useMemo(() => {
    if (!packageData) return null;
    const pkg = packageData as any;
    return {
      id: pkg._id,
      slug: pkg.slug,
      name: pkg.name,
      duration: pkg.duration || "N/A",
      location: pkg.location || "Nepal",
      elevation: pkg.elevation ? `${pkg.elevation}m` : "N/A",
      distance: pkg.distance ? `${pkg.distance}km` : "N/A",
      difficulty: pkg.difficulty || "N/A",
      groupSize: pkg.groupSize || "N/A",
      accommodation: pkg.accommodation || "N/A",
      meal: pkg.meal || "N/A",
      activity: pkg.activity || "N/A",
      vehicle: pkg.vehicle || "N/A",
      coverImage: pkg.coverImage || "",
      overview: pkg.overview || "",
      note: pkg.note || "",
      routeMap: pkg.routeMap || "",
      // Category info
      category: pkg.categoryId?.name || "",
      subCategory: pkg.subCategoryId?.name || "",
      // Arrays from API
      tripHighlight: pkg.tripHighlight || [],
      visitPlaces: pkg.visitPlaces || [],
      attraction: pkg.attraction || [],
      itinerary: pkg.itinerary || [],
      seasonalTrek: pkg.seasonalTrek || [],
      gearInfo: pkg.gearInfo || [],
      importantNotice: pkg.importantNotice || [],
      insurance: pkg.insurance || [],
      addons: pkg.addons || [],
      videos: pkg.videos || [],
      faq: pkg.faq || [],
      exclusion: pkg.exclusion || [],
      inclusion: pkg.inclusion || [],
      requirements: pkg.requirements || [],
      pax: pkg.pax || [],
      gallery: pkg.gallery || [],
      fixedDates: pkg.fixedDates || [],
      testimonial: pkg.testimonial || [],
      whyLoveThisTrek: pkg.whyLoveThisTrek || [],
      packageInfo: pkg.packageInfo || [],
    };
  }, [packageData]);

  // Scroll tracking for active section
  useEffect(() => {
    if (!mounted) return;
    const sections = [
      "overview",
      "attraction",
      "itinerary",
      "date",
      "includes",
      "excludes",
      "gallery",
      "gear",
      "info",
      "faqs",
      "reviews",
    ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

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

  if (error || !tour) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-xl mb-4">Package not found</p>
          <Link to="/packages" className="text-[#1C4D9B] hover:underline">
            ← Back to Packages
          </Link>
        </div>
      </div>
    );
  }

  const tripDetails = [
    { icon: Users, label: "Group Size", value: tour.groupSize },
    { icon: Clock, label: "Duration", value: tour.duration },
    { icon: MapPin, label: "Location", value: tour.location },
    { icon: Mountain, label: "Max Elevation", value: tour.elevation },
    { icon: Route, label: "Distance", value: tour.distance },
    { icon: Star, label: "Difficulty", value: tour.difficulty },
    { icon: Home, label: "Accommodation", value: tour.accommodation },
    { icon: Utensils, label: "Meals", value: tour.meal },
  ];

  const toggleDayExpansion = (index: number) => {
    setExpandedDays((prev) =>
      prev.includes(index) ? prev.filter((d) => d !== index) : [...prev, index],
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-zinc-300"}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div
        className="relative h-64 sm:h-80 md:h-96 w-full bg-cover bg-center"
        style={{ backgroundImage: `url('${tour.coverImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6">
            <span className="bg-[#1C4D9B] px-3 py-1 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 inline-block">
              {tour.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 drop-shadow-lg leading-tight">
              {tour.name}
            </h1>
            <div className="flex items-center justify-center gap-2 sm:gap-4 text-sm sm:text-lg flex-wrap">
              <div className="flex items-center gap-1 sm:gap-2 bg-black/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-base">{tour.location}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-black/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-base">{tour.duration}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-black/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm">
                <Mountain className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-base">{tour.elevation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-zinc-200">
        <div className="px-4 sm:px-6 lg:px-20 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-zinc-500 hover:text-[#1C4D9B]">
              Home
            </Link>
            <span className="text-zinc-400">/</span>
            <Link to="/packages" className="text-zinc-500 hover:text-[#1C4D9B]">
              Packages
            </Link>
            <span className="text-zinc-400">/</span>
            <span className="text-zinc-900 font-medium">{tour.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-2 sm:px-6 lg:px-20 py-6 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content Area */}
          <div className="w-full lg:w-[75%] space-y-4 lg:space-y-6">
            {/* Trip Details Grid */}
            <div className="rounded-lg p-3 sm:p-6">
              <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B]">
                Trip at a Glance
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
                {tripDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 lg:gap-3 p-2 lg:p-3 bg-gray-50 rounded-lg"
                  >
                    <detail.icon className="w-6 h-6 lg:w-8 lg:h-8 text-[#1C4D9B] flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 truncate">
                        {detail.label}
                      </p>
                      <p className="font-semibold text-xs lg:text-sm truncate">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overview Section */}
            <section
              id="overview"
              className="rounded-lg p-3 sm:p-6 scroll-mt-20"
            >
              <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B]">
                Overview
              </h2>
              <div
                className="prose max-w-none text-gray-600 text-sm lg:text-base"
                dangerouslySetInnerHTML={{ __html: tour.overview }}
              />
            </section>

            {/* Trip Highlights Section */}
            {tour.tripHighlight.length > 0 && (
              <section className="rounded-lg p-3 sm:p-6 scroll-mt-20">
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B]">
                  Trip Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tour.tripHighlight.map(
                    (highlight: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#1C4D9B] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm lg:text-base">
                          {highlight}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </section>
            )}

            {/* Visit Places Section */}
            {tour.visitPlaces.length > 0 && (
              <section className="rounded-lg p-3 sm:p-6 scroll-mt-20">
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B]">
                  Places You'll Visit
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tour.visitPlaces.map((place: string, index: number) => (
                    <span
                      key={index}
                      className="bg-[#1C4D9B]/10 text-[#1C4D9B] px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Attractions Section */}
            {tour.attraction.length > 0 && (
              <section id="attraction" className="p-3 sm:p-6 scroll-mt-20">
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B]">
                  Trip Attractions
                </h2>
                <div className="space-y-4">
                  {tour.attraction.map((item: any) => (
                    <div
                      key={item._id}
                      className="border-l-4 border-[#1C4D9B] pl-3 lg:pl-4"
                    >
                      <div
                        className="text-gray-600 text-sm lg:text-base"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Itinerary Section */}
            {tour.itinerary.length > 0 && (
              <section
                id="itinerary"
                className="rounded-lg p-3 sm:p-6 scroll-mt-20"
              >
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B]">
                  Itinerary
                </h2>
                <div className="space-y-2">
                  {tour.itinerary.map((item: any, i: number) => (
                    <div
                      key={item._id}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleDayExpansion(i)}
                        className="w-full flex items-center justify-between p-3 lg:p-4"
                      >
                        <div className="flex items-center gap-2 lg:gap-3 min-w-0">
                          <span className="bg-[#1C4D9B] text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm flex-shrink-0">
                            {item.days || `Day ${i + 1}`}
                          </span>
                          <span className="font-medium text-sm lg:text-base truncate">
                            {item.title}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 flex-shrink-0 transition-transform ${expandedDays.includes(i) ? "rotate-180" : ""}`}
                        />
                      </button>
                      {expandedDays.includes(i) && (
                        <div className="p-3 lg:p-4 border-t">
                          <div
                            className="text-gray-600 text-sm lg:text-base"
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* {(tour.fixedDates.length > 0 || tour.pax.length > 0) && (
              <section id="date" className="bg-white rounded-lg shadow-sm p-6 scroll-mt-20">
                <h2 className="text-2xl font-bold mb-4 text-[#1C4D9B]">Date & Pricing</h2>
                {tour.fixedDates.length > 0 && (
                  <div className="space-y-4">
                    {tour.fixedDates.map((dateInfo: any) => (
                      <div key={dateInfo._id} className="border border-gray-200 rounded-xl p-5 hover:border-[#1C4D9B] transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="w-5 h-5 text-[#1C4D9B]" />
                              <span className="font-semibold">
                                {new Date(dateInfo.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                              </span>
                              {dateInfo.endDate && dateInfo.startDate !== dateInfo.endDate && (
                                <span className="text-gray-500">
                                  - {new Date(dateInfo.endDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" /> {dateInfo.availableSeats || dateInfo.numberOfPerson} seats
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                dateInfo.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                              }`}>
                                {dateInfo.status || 'Available'}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-[#1C4D9B]">${dateInfo.pricePerPerson}</div>
                            <div className="text-sm text-gray-500">per person</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
            
                {tour.pax.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-semibold mb-3">Group Discounts</h3>
                    <div className="grid gap-3">
                      {tour.pax.map((p: any) => (
                        <div key={p._id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span>{p.min} - {p.max} persons</span>
                          <span className="text-green-600 font-semibold">Save ${p.discount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )} */}

            {/* Cost Includes */}
            {tour.inclusion.length > 0 && (
              <section id="includes" className="p-3 sm:p-6 scroll-mt-20">
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B] flex items-center gap-2 lg:gap-3">
                  <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" />
                  What's Included
                </h2>
                <div className="space-y-3">
                  {tour.inclusion.map((item: any) => (
                    <div key={item._id}>
                      {item.description && (
                        <div
                          className="text-sm lg:text-base text-gray-600"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Cost Excludes */}
            {tour.exclusion.length > 0 && (
              <section
                id="excludes"
                className="rounded-lg p-3 sm:p-6 scroll-mt-20"
              >
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B] flex items-center gap-2 lg:gap-3">
                  <X className="w-5 h-5 lg:w-6 lg:h-6 text-red-500" />
                  What's Not Included
                </h2>
                <div className="space-y-3">
                  {tour.exclusion.map((item: any) => (
                    <div key={item._id}>
                      {item.description && (
                        <div
                          className="text-sm lg:text-base text-gray-600"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Gallery Section */}
            {tour.gallery.length > 0 && (
              <section
                id="gallery"
                className="rounded-lg p-3 sm:p-6 scroll-mt-20"
              >
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B]">
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4">
                  {tour.gallery.map((img: any) => (
                    <div
                      key={img._id}
                      className="relative group overflow-hidden rounded-lg aspect-square"
                    >
                      <img
                        src={img.imageUrl}
                        alt="Gallery"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Gear Info Section */}
            {tour.gearInfo.length > 0 && (
              <section id="gear" className="rounded-lg p-3 sm:p-6 scroll-mt-20">
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B]">
                  Gear Information
                </h2>
                <div className="space-y-4">
                  {tour.gearInfo.map((item: any) => (
                    <div key={item._id} className="p-3 lg:p-4 rounded-lg">
                      <h3 className="font-semibold mb-2 flex items-center gap-2 text-base lg:text-lg">
                        <Backpack className="w-5 h-5 text-[#1C4D9B]" />{" "}
                        {item.title}
                      </h3>
                      <div
                        className="text-gray-600 text-sm lg:text-base"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Important Info Section */}
            {(tour.importantNotice.length > 0 ||
              tour.insurance.length > 0 ||
              tour.whyLoveThisTrek.length > 0) && (
              <section id="info" className="rounded-lg p-3 sm:p-6 scroll-mt-20">
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B]">
                  Important Information
                </h2>

                {/* Important Notices */}
                {tour.importantNotice.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2 text-base lg:text-lg">
                      <Shield className="w-5 h-5 text-[#1C4D9B]" /> Important
                      Notices
                    </h3>
                    <div className="space-y-3">
                      {tour.importantNotice.map((item: any) => (
                        <div
                          key={item._id}
                          className="p-3 lg:p-4 border-l-4 border-yellow-400 rounded-r-lg"
                        >
                          <p className="font-medium text-base">{item.title}</p>
                          <div
                            className="text-sm lg:text-base text-gray-600"
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Why Love This Trek */}
                {tour.whyLoveThisTrek.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2 text-base lg:text-lg">
                      <Star className="w-5 h-5 text-[#1C4D9B]" /> Why You'll
                      Love This Trek
                    </h3>
                    <div className="space-y-3">
                      {tour.whyLoveThisTrek.map((item: any) => (
                        <div key={item._id} className="p-3 lg:p-4 rounded-lg">
                          <p className="font-medium text-base">{item.title}</p>
                          <div
                            className="text-sm lg:text-base text-gray-600"
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* FAQs Section */}
            {tour.faq.length > 0 && (
              <section id="faqs" className="rounded-lg p-3 sm:p-6 scroll-mt-20">
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B]">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {tour.faq.map((item: any, i: number) => (
                    <div
                      key={item._id}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleDayExpansion(100 + i)}
                        className="w-full flex items-center justify-between p-3 lg:p-4 text-left"
                      >
                        <span className="font-medium text-sm lg:text-base pr-2">
                          {item.title}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 flex-shrink-0 transition-transform ${expandedDays.includes(100 + i) ? "rotate-180" : ""}`}
                        />
                      </button>
                      {expandedDays.includes(100 + i) && (
                        <div className="p-3 lg:p-4 border-t">
                          <div
                            className="text-gray-600 text-sm lg:text-base"
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Reviews/Testimonials Section */}
            {tour.testimonial.length > 0 && (
              <section
                id="reviews"
                className="rounded-lg p-3 sm:p-6 scroll-mt-20"
              >
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B]">
                  Customer Reviews
                </h2>
                <div className="space-y-4">
                  {tour.testimonial.map((review: any) => (
                    <div
                      key={review._id}
                      className="p-3 lg:p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-[#1C4D9B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-[#1C4D9B] font-semibold">
                            {review.name?.charAt(0) || "U"}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-base">
                            {review.name || "Anonymous"}
                          </p>
                          <div className="flex">
                            {renderStars(review.rating || 5)}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm lg:text-base">
                        {review.message || review.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Seasonal Trek Section */}
            {tour.seasonalTrek.length > 0 && (
              <section className="rounded-lg p-3 sm:p-6 scroll-mt-20">
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B]">
                  Best Seasons
                </h2>
                <div className="space-y-4">
                  {tour.seasonalTrek.map((season: any) => (
                    <div
                      key={season._id}
                      className="p-3 lg:p-4 bg-gray-50 rounded-lg"
                    >
                      <h3 className="font-semibold mb-2 text-base">
                        {season.title}
                      </h3>
                      <div
                        className="text-gray-600 text-sm lg:text-base"
                        dangerouslySetInnerHTML={{ __html: season.description }}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Requirements Section */}
            {tour.requirements.length > 0 &&
              tour.requirements.some(
                (req: any) => typeof req === "object" && req.title,
              ) && (
                <section className="rounded-lg p-3 sm:p-6 scroll-mt-20">
                  <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B]">
                    Requirements
                  </h2>
                  <div className="space-y-3">
                    {tour.requirements
                      .filter(
                        (req: any) => typeof req === "object" && req.title,
                      )
                      .map((req: any, index: number) => (
                        <div
                          key={req._id || index}
                          className="flex items-start gap-3"
                        >
                          <Info className="w-5 h-5 text-[#1C4D9B] flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-base">{req.title}</p>
                            {req.description && (
                              <div
                                className="text-sm lg:text-base text-gray-600"
                                dangerouslySetInnerHTML={{
                                  __html: req.description,
                                }}
                              />
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </section>
              )}

            {/* Videos Section */}
            {tour.videos.length > 0 && (
              <section className="rounded-lg p-3 sm:p-6 scroll-mt-20">
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B]">
                  Videos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.videos.map((video: any) => (
                    <div
                      key={video._id}
                      className="aspect-video rounded-lg overflow-hidden"
                    >
                      <iframe
                        src={video.url}
                        title={video.title || "Video"}
                        className="w-full h-full"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Route Map Section */}
            {tour.routeMap && (
              <section className="rounded-lg p-3 sm:p-6 scroll-mt-20">
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B]">
                  Route Map
                </h2>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={tour.routeMap}
                    alt="Route Map"
                    className="w-full h-auto"
                  />
                </div>
              </section>
            )}

            {/* Note Section */}
            {tour.note && (
              <section className="rounded-lg p-3 sm:p-6 scroll-mt-20">
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1C4D9B]">
                  Important Note
                </h2>
                <div className="p-3 lg:p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                  <div
                    className="text-gray-700 text-sm lg:text-base"
                    dangerouslySetInnerHTML={{ __html: tour.note }}
                  />
                </div>
              </section>
            )}
          </div>

          {/* Mobile Contact Card - Shows at bottom on mobile */}
          <div className="lg:hidden">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 sm:p-6">
              <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2">
                Need Help?
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Get in touch with our travel experts
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/9779851026840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors group flex-1"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">WhatsApp</p>
                    <span className="font-medium text-gray-700 group-hover:text-green-600 text-sm">
                      +977 9851026840
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:info@example.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors group flex-1"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email Us</p>
                    <span className="font-medium text-gray-700 group-hover:text-blue-600 text-sm">
                      info@example.com
                    </span>
                  </div>
                </a>
              </div>

              <div className="mt-4">
                <Link
                  to={`/contact-us?package=${encodeURIComponent(tour.name)}`}
                  className="block w-full bg-[#1C4D9B] hover:bg-[#153d7a] text-white text-center font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Contact & Booking (Desktop only) */}
          <div className="hidden lg:block lg:w-[25%]">
            <div className="lg:sticky lg:top-10 space-y-4">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-2">
                  Need Help?
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Get in touch with our travel experts
                </p>

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
                      <span className="font-medium text-gray-700 group-hover:text-green-600">
                        +977 9801193375
                      </span>
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
                      <span className="font-medium text-gray-700 group-hover:text-blue-600">
                        inquiry@everestdmc.com
                      </span>
                    </div>
                  </a>
                </div>

                <div className="mt-6">
                  <Link
                    to={`/contact-us?package=${encodeURIComponent(tour.name)}`}
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

export default PackageDetails;
