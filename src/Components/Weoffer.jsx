import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import images from "../data/WeOfferImages"; // Adjust the import path as necessary

gsap.registerPlugin(ScrollTrigger);

const ImageGrid = () => {
  const zoomRef = useRef(null);
  const triggerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Check if the screen width is larger than tablet size (1024px)
    const isDesktop = window.innerWidth >= 1024;

    if (!isDesktop || !zoomRef.current || !textRef.current) return;

    let scaleValue = 3.472;

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

    // Fade out the "Our Services" text (only for desktop)
    gsap.to(textRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: zoomRef.current,
        start: "top 5%",
        end: "top",
        scrub: 2,
      },
    });

    // Cleanup function to kill ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <>
      <div id="services" className="w-full overflow-hidden px-2 md:h-full md:px-15 md:py-16">
        <div
          className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6"
          ref={triggerRef}
        >
          {images.map((image) => {
            const isZoom = image.isZoomTarget;

            return (
              <div
                key={image.id}
                className={`relative overflow-x-hidden h-[20vh] md:h-[50vh] lg:h-[60vh] w-full ${
                  isZoom ? "z-[9999]" : "z-10"
                }`}
                ref={isZoom ? zoomRef : null}
              >
                <div className="absolute inset-0 bg-[#1C4D9B]/40 flex z-40 items-center justify-center">
                  <h3 className="text-white uppercase font-bold md:text-2xl text-center z-50">
                    {image.title}
                  </h3>
                </div>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover z-0 transition-transform duration-500"
                />
                {isZoom && image.title && (
                  <div className="absolute inset-0 md:bg-[#1C4D9B] hidden md:flex z-40 items-center justify-center">
                    <h3
                      ref={textRef}
                      className="text-white w-fit text-xs md:text-3xl uppercase font-bold text-center border-b-1 py-3"
                    >
                      {image.title}
                    </h3>
                  </div>
                )}
              </div>
            );
          })}
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
