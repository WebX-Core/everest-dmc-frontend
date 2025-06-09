import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import images from "../data/WeOfferImages"; // Adjust the import path as necessary

gsap.registerPlugin(ScrollTrigger);

const ImageGrid = () => {
  const zoomRef = useRef(null);
  const triggerRef = useRef(null);
  const textRef = useRef(null); //

  useEffect(() => {
    if (!zoomRef.current || !textRef.current) return;
    // const height = window.innerHeight;
    const width = window.innerWidth;

    let scaleValue = 3.472;

    if (width < 480) {
      scaleValue = 4;
    } else if (width < 768) {
      scaleValue = 2.5;
    } else if (width < 1024) {
      scaleValue = 3.0;
    }

    // Zoom animation
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

    // Fade out the "Our Services" text
    gsap.to(textRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: zoomRef.current,
        start: "top 5%",
        end: "top",
        scrub: 2,
      },
    });
  }, []);

  return (
    <section id="services" className="w-full overflow-hidden px-15  py-16">
      <div
        className="grid grid-cols-3  md:grid-cols-3 gap-2 md:gap-6 "
        ref={triggerRef}
      >
        {images.map((image) => {
          const isZoom = image.isZoomTarget;

          return (
            <div
              key={image.id}
              className={`relative overflow-x-hidden h-[40vh] md:h-[50vh] lg:h-[60vh] w-full ${
                isZoom ? "z-[9999] " : "z-10"
              } `}
              ref={isZoom ? zoomRef : null}
            >
              <div className="absolute inset-0 bg-[#1C4D9B]/40 flex z-40 items-center justify-center">
              <h3 className="text-white uppercase font-bold text-2xl text-center z-50">{image.title}</h3>
              </div>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover z-0 transition-transform duration-500 "
              />
              {isZoom && image.title && (
                <div className="absolute inset-0 bg-[#1C4D9B] flex z-40 items-center justify-center">
                  <h3
                    ref={textRef}
                    className="text-white w-fit text-xs md:text-3xl uppercase font-bold text-center border-b-1 py-3 "
                  >
                    {image.title}
                  </h3>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Scroll padding for effect */}
      <div className="min-h-screen sm:overflow-hidden" />
    </section>
  );
};

export default ImageGrid;
