import React from "react";

const ImageGridDivider = ({ image }) => {
  return (
    <div
      className="relative h-screen w-full bg-fixed bg-center bg-cover bg-no-repeat mt-20"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 top-0 left-0 right-0 bg-blue-900/30 "></div>
    </div>
  );
};

export default ImageGridDivider;
