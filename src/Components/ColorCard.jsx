import React from "react";

const ColorCard = ({ color }) => {
  return (
    <div className="card w-full bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
      <div
        className="h-40 rounded-t-xl"
        style={{ backgroundColor: color.hex }}
      ></div>
      <div className="card-body p-4">
        <h2 className="text-lg font-semibold text-center">{color.name}</h2>
      </div>
    </div>
  );
};

export default ColorCard;
