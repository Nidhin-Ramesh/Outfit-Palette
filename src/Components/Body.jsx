import React, { useContext } from "react";
import Context from "../context/Context";
import Upload from "./Upload";
import Colors from "./Colors";

const Body = () => {
  const { setActiveTab, activeTab, response} =
    useContext(Context);

  return (
    <div className="flex-col justify-items-center">
      <div className="flex flex-col items-center mt-7">
        <div className="tabs tabs-box">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label="Upload Photo"
            onClick={() => setActiveTab("upload")}
            defaultChecked
            checked={activeTab==="upload"}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label="Your Colours"
            onClick={() => setActiveTab("colors")}
            disabled={ !response}
            checked={activeTab==="colors"}
          />
        </div>
      </div>
      {activeTab === "upload" && (
        <div className="bg-white flex-col justify-items-center rounded-2xl shadow-xl overflow-hidden mt-6 w-full max-w-7xl">
          <div className="md:flex">
            <Upload/>
          </div>
        </div>
      )}
      {activeTab === "colors" && (
        <div className="bg-white flex-col justify-items-center rounded-2xl shadow-xl overflow-hidden mt-6 w-full max-w-7xl">
          <div className="md:flex">

             <Colors/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
