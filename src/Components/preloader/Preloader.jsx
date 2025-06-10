import React from "react";
import loader from "./dmc.gif";

const Loader = () => {
  return (
    <div className="flex">
      <img src={loader} alt="Everest DMC" className="h-52 "/>
    </div>
  );
};

export default Loader;
