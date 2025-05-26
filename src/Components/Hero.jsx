import React, { useContext } from "react";
import Context from "../context/Context.js";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const { startAnimation, handleStart } = useContext(Context);

  const gradientStyle = {
    background:
      "linear-gradient(135deg, #d15790 0%, #f76e9e 50%, #f76e9e 100%)",
  };

  return (
    <div className="flex flex-col overflow-hidden pt-16">
      <motion.div
        className="hero bg-base-200  text-white relative overflow-hidden"
        style={gradientStyle}
        initial={{ height: "100vh" }}
        animate={{
          height: startAnimation ? "180px" : "100vh",
        }}
        transition={{ duration: 1 }}
      >
        {/* Left Image - Model */}
        <AnimatePresence>
          {!startAnimation && (
            <motion.img
              key="model"
              src="/model.png"
              alt=""
              className="hidden lg:block absolute left-0 bottom-0 h-screen max-h-screen w-auto object-cover"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 1 }}
            />
          )}
        </AnimatePresence>

        {/* Right Image - Palette */}
        <AnimatePresence>
          {!startAnimation && (
            <motion.img
              key="palette"
              src="/palettte.png"
              alt=""
              className="hidden lg:block absolute right-0 bottom-0 h-screen max-h-screen w-auto object-cover"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 1 }}
            />
          )}
        </AnimatePresence>

        {/* Text Content */}

        <motion.div
          key="text"
          className="hero-content text-center  m-auto z-10 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            className={`max-w-xs sm:max-w-s md:max-w-md lg:max-w-xl`}
          >
            <h1 className="text-3xl sm:text-4xl  lg:text-5xl font-bold">
              Color Harmony
            </h1>
            <p className="py-6 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Discover the perfect colors that complement your unique skin tone
            </p>
            <div className="h-16 flex items-center justify-center">
              <AnimatePresence>
                {!startAnimation && (
                  <motion.button
                    key={"get_started"}
                    className="btn btn-outline btn-lg"
                    exit={{ opacity: 0, y: 50 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleStart}
                  >
                    Get Started
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
