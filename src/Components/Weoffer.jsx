import React from "react";

const ImageGrid = () => {
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
      src: "https://cms.discoveryworldtrekking.com/media/4796/everesst.webp",
      alt: "Image 5",
      hasOverlay: true,
      title: "Featured Destination",
      bgColor: "bg-[#1C4D9B]",
    },
    {
      id: 6,
      src: "https://assets-cdn.kathmandupost.com/uploads/source/news/2021/third-party/thumb2-1619021995.jpg",
      alt: "Image 6",
    },
  ];

  return (
    <div className="w-11/12 mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative overflow-hidden h-[60vh] ${
              index === 4 ? "md:col-span-1" : ""
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />

            {image.hasOverlay && (
              <div
                className={`absolute inset-0 ${image.bgColor} bg-opacity-70 flex flex-col items-center justify-center p-4 text-center`}
              >
                <h3 className="text-white text-3xl font-bold mb-2">
                  {image.title}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
