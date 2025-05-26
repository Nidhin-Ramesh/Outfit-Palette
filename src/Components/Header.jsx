import React from "react";
import { useContext } from "react";
import Context from "../context/Context.js";

const Header = () => {
  const { handleStart, startAnimation } = useContext(Context);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex items-center justify-between border-b border-gray-200 backdrop-blur-sm bg-opacity-90">

      <div className="flex items-center">
        <img
          className="w-12 mx-4 my-2"
          src="https://img.icons8.com/3d-fluency/94/color-palette.png"
          alt="color-palette"
        />
        <h1 className="text-2xl lg:text-3xl font-sans">Outfit Palette</h1>
      </div>
      {startAnimation && (
        <div onClick={handleStart}>
          <p className="mx-5 cursor-pointer">Home</p>
        </div>
      )}
    </div>
  );
};

export default Header;
