
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageGrid = () => {
  const zoomImageRef = useRef(null);
  const zoomTriggerRef = useRef(null);

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
      title: "Scaling Mount Everest",
    },
    {
      id: 6,
      src: "https://cms.discoveryworldtrekking.com/media/4796/everesst.webp",
      alt: "Image 6",
    },
  ];

  useEffect(() => {
    if (!zoomImageRef.current) return;

    gsap.fromTo(
      zoomImageRef.current,
      {
        scale: 1,
        transformOrigin: "center center",
      },
      {
        scale: 5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: zoomImageRef.current,
          start: "center 50%",
          endTrigger: zoomTriggerRef.current,
          end: "bottom -45%",
          toggleActions: "play none none reverse",
          scrub: 2,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="w-11/12 mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10" ref={zoomTriggerRef}>
        {images.map((image) => {
          const isZoomTarget = image.id === 5;

          return (
            <div
              key={image.id}
              className={`relative overflow-hidden h-[60vh] w-full ${
                isZoomTarget ? "z-[9999]" : "z-10"
              }`}
              ref={isZoomTarget ? zoomImageRef : null}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                style={{
                  zIndex: isZoomTarget ? 9999 : "auto",
                  position: isZoomTarget ? "relative" : "static",
                }}
              />
              {isZoomTarget && (
                <div
                  className="absolute inset-0 bg-blue-200 bg-opacity-50 flex items-center justify-center"
                  style={{ zIndex: 10000 }}
                >
                  <h3 className="text-white text-3xl font-bold text-center px-4">
                    {image.title}
                  </h3>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="h-[100vh] bg-gray-100 mt-10" />
    </div>
  );
};

export default ImageGrid;



