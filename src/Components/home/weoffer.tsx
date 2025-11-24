import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { packageApi, Package } from "../../services/package";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ImageGrid = () => {
  const zoomRef = useRef(null);
  const triggerRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const response = await packageApi.getAllPackages();
        // Get first 6 packages (2 rows of 3)
        setPackages(response.data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  useEffect(() => {
    // Wait for data to load before initializing animations
    if (loading) return;

    // Check if the screen width is larger than tablet size (1024px)
    const isDesktop = window.innerWidth >= 1024;

    if (!isDesktop || !zoomRef.current || !textRef.current) return;

    let scaleValue = 3.472;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Zoom animation (only for desktop)
      gsap.fromTo(
        zoomRef.current,
        { scale: 1 },
        {
          scale: scaleValue,
          ease: "power2.out",
          scrollTrigger: {
            trigger: zoomRef.current,
            start: "center 50%",
            endTrigger: triggerRef.current,
            end: "center top-=0",
            scrub: 2,
            toggleActions: "play none none reverse",
          },
        }
      );

      // Fade out the "More Services" text (only for desktop)
      gsap.to(textRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: zoomRef.current,
          start: "top 5%",
          end: "top",
          scrub: 2,
        },
      });
    }, 100);

    // Cleanup function to kill ScrollTrigger instances on unmount
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, [loading]);

  if (loading) {
    return (
      <div id="services" className="w-full overflow-hidden px-2 md:h-full md:px-15 md:py-16">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative h-[20vh] md:h-[50vh] lg:h-[60vh] w-full bg-gray-200 animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div id="services" className="w-full overflow-hidden px-2 md:h-full md:px-15 md:py-16">
        <div
          className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6"
          ref={triggerRef}
        >
          {packages.slice(0, 4).map((pkg) => (
            <div
              key={pkg._id}
              className="relative overflow-hidden h-[20vh] md:h-[50vh] lg:h-[60vh] w-full z-10 cursor-pointer group"
              onClick={() => navigate(`/packages/${pkg.slug}`)}
            >
              <div className="absolute inset-0 bg-[#1C4D9B]/40 flex z-40 items-center justify-center group-hover:bg-[#1C4D9B]/60 transition-colors">
                <h3 className="text-white uppercase font-bold text-xl md:text-2xl lg:text-3xl text-center z-50">
                  {pkg.name}
                </h3>
              </div>
              <img
                src={pkg.coverImage}
                alt={pkg.name}
                className="w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}

          {/* More Services Card - Second row middle (5th position) */}
          <div
            className="relative overflow-x-hidden h-[20vh] md:h-[50vh] lg:h-[60vh] w-full z-[9999]"
            ref={zoomRef}
          >
            <div className="absolute inset-0 bg-[#1C4D9B] flex z-40 items-center justify-center">
              <h3 className="text-white uppercase font-bold md:text-2xl text-center z-50">
                More Services
              </h3>
            </div>
            <div className="absolute inset-0 md:bg-[#1C4D9B] hidden md:flex z-40 items-center justify-center">
              <h3
                ref={textRef}
                className="text-white w-fit text-xs md:text-3xl uppercase font-bold text-center border-b-1 py-3"
              >
                More Services
              </h3>
            </div>
          </div>

          {/* Last package */}
          {packages[4] && (
            <div
              key={packages[4]._id}
              className="relative overflow-hidden h-[20vh] md:h-[50vh] lg:h-[60vh] w-full z-10 cursor-pointer group"
              onClick={() => navigate(`/packages/${packages[4].slug}`)}
            >
              <div className="absolute inset-0 bg-[#1C4D9B]/40 flex z-40 items-center justify-center group-hover:bg-[#1C4D9B]/60 transition-colors">
                <h3 className="text-white uppercase font-bold text-xl md:text-2xl lg:text-3xl text-center z-50">
                  {packages[4].name}
                </h3>
              </div>
              <img
                src={packages[4].coverImage}
                alt={packages[4].name}
                className="w-full h-full object-cover text-xl md:text-2xl lg:text-3xl z-0 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}
        </div>

        {/* Only add scroll padding for desktop */}
        {window.innerWidth >= 1024 && (
          <div className="min-h-screen sm:overflow-hidden" />
        )}
      </div>
    </>
  );
};

export default ImageGrid;
