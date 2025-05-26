import React, { useContext } from "react";
import Context from "../context/Context.js";
import Upload from "./Upload.jsx";
import Colors from "./Colors.jsx";
import Hero from "./Hero.jsx";
import { AnimatePresence, motion } from "framer-motion";

const Body = () => {
  const { setActiveTab, activeTab, response, startAnimation } = useContext(Context);

  return (
    <>
      <Hero />
      <AnimatePresence>
        {startAnimation && (
          <motion.div
            key="main-content"
            className="flex-col justify-items-center"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 1,  }}
          >
            <div className="flex flex-col items-center mt-7">
              <div className="tabs tabs-box">
                <input
                  type="radio"
                  name="my_tabs_1"
                  className="tab"
                  aria-label="Upload Photo"
                  onClick={() => setActiveTab("upload")}
                  defaultChecked
                  checked={activeTab === "upload"}
                />
                <input
                  type="radio"
                  name="my_tabs_1"
                  className="tab"
                  aria-label="Your Colours"
                  onClick={() => setActiveTab("colors")}
                  disabled={!response}
                  checked={activeTab === "colors"}
                />
              </div>
            </div>
            {activeTab === "upload" && (
              <div className="bg-white flex-col justify-items-center rounded-2xl shadow-xl overflow-hidden mt-6 w-full max-w-7xl">
                <div className="md:flex">
                  <Upload />
                </div>
              </div>
            )}
            {activeTab === "colors" && (
              <div className="bg-white flex-col justify-items-center rounded-2xl shadow-xl overflow-hidden mt-6 w-full max-w-7xl">
                <div className="md:flex">
                  <Colors />
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Body;
