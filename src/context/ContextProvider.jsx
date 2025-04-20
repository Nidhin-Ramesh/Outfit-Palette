import React, { useState } from "react";
import main from "../config/gemini";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [activeTab, setActiveTab] = useState("upload");
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file); 
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); 
        setResponse(null)
      };
      reader.readAsDataURL(file);
    }
  };
  

  const handleStart = () => {
    setStartAnimation(!startAnimation);
    setResponse(null)
    setActiveTab('upload')
    setPreview(null)
  };
  const findColors = async () => {
    setActiveTab("colors")
    if (!file) return alert("Select a file first!");
    try {
      const result = await main(file);

      const cleaned = result.replace(/```json|```/g, "").trim();

      const parsed = JSON.parse(cleaned);
      setResponse(parsed);
     
    } catch (error) {
      console.error("Failed to parse response:", error);
      alert("Something went wrong while processing the image.");
    }
  };

  return (
    <Context.Provider
  value={{
    file,
    setFile,
    findColors,
    response,
    startAnimation,
    handleStart,
    activeTab,
    setActiveTab,
    preview,
    handleImageChange
  }}
>
  {children}
</Context.Provider>

  );
};

export default ContextProvider;
