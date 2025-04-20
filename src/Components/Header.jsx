import React from "react";
import { useContext } from "react";
import Context from "../context/Context";

const Header = () => {
  const {handleStart}=useContext(Context)
  return (
    <div className="flex items-center justify-between">
      <div className="  flex items-center">
        <img
          className="w-12 mx-4 my-2"
          src="https://img.icons8.com/3d-fluency/94/color-palette.png"
          alt="color-palette"
        />
        <h1 className="text-3xl font-sans">Outfit Palette</h1>
      </div>
      <div onClick={handleStart}>
        <p className="mx-5  cursor-pointer ">Go to Home</p>
      </div>
    </div>
  );
};

export default Header;
