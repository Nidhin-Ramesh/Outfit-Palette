import React, { useContext } from "react";
import Context from "../context/Context.js";
import ColorCard from "./ColorCard.jsx";
import Skeleton from "./Skeleton.jsx";

const Colors = () => {
  const { response } = useContext(Context);

  const renderSkeletons = (count = 8) => {
    return Array.from({ length: count }).map((_, index) => (
      <Skeleton key={index} />
    ));
  };

  return (
    <div className="px-4 py-6 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Perfect Palette</h2>
              <p className="text-gray-600 max-w-2xl mx-auto pb-5">
                Based on your skin's unique undertones, we've selected these colors to enhance your natural beauty.
              </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {!response
          ? renderSkeletons()
          : response.map((color, index) => (
              <div key={index} className="w-full">
                <ColorCard color={color} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Colors;
