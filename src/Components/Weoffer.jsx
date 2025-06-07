import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageGrid = () => {
  const zoomRef = useRef(null);
  const triggerRef = useRef(null);
  const textRef = useRef(null); //

  const images = [
    {
      id: 1,
      src: "https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Mount_Everest_as_seen_from_Drukair2_PLW_edit_Cropped.jpg",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://cdn.britannica.com/39/76239-050-DE5FCF36/Climbers-side-Nepali-Mount-Everest.jpg",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Close_Up_View_of_Mount_Everest_from_Kala_Patthar_%285644_m%29_in_2023-IMG-3485.jpg/1000px-Close_Up_View_of_Mount_Everest_from_Kala_Patthar_%285644_m%29_in_2023-IMG-3485.jpg",
      alt: "Image 4",
    },
    {
      id: 5,
      src: "https://assets-cdn.kathmandupost.com/uploads/source/news/2021/third-party/thumb2-1619021995.jpg",
      alt: "Image 5",
      title: "Our Services",
      isZoomTarget: true,
    },
    {
      id: 6,
      src: "https://cms.discoveryworldtrekking.com/media/4796/everesst.webp",
      alt: "Image 6",
    },
  ];

  useEffect(() => {
    if (!zoomRef.current || !textRef.current) return;

    gsap.fromTo(
      zoomRef.current,
      { scale: 1 },
      {
        scale: 3.472,
        ease: "power2.out",
        scrollTrigger: {
          trigger: zoomRef.current,
          start: "center 50%",
          endTrigger: triggerRef.current,
          end: "center top-=0",
          scrub: true,
          pin: true,
          // anticipatePin: 1,
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment to debug
        },
      }
    );
    // Fade out the "Our Services" text
    gsap.to(textRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: zoomRef.current,
        start: "top 50%",
        end: " top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="services" className="w-11/12 mx-auto px-4 py-16 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" ref={triggerRef}>
        {images.map((image) => {
          const isZoom = image.isZoomTarget;

          return (
            <div
              key={image.id}
              className={`relative overflow-hidden h-[60vh] w-full ${
                isZoom ? "z-[9999] " : "z-10"
              } `}
              ref={isZoom ? zoomRef : null}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover z-0 transition-transform duration-500"
              />
              {isZoom && image.title && (
                <div className="absolute inset-0 bg-[#1C4D9B] flex z-40 items-center justify-center">
                  <h3
                    ref={textRef}
                    className="text-white text-3xl uppercase font-bold text-center px-6 border-t-2 border-b-2 py-3"
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
      <div className="h-[100vh]" />
    </section>
  );
};

export default ImageGrid;
