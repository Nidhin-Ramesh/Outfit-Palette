import React, { useState } from "react";
import main from "../config/gemini";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

const onSent = async () => {
  if (!file) return alert("Select a file first!");
  try {
    const result = await main(file);

   
    const cleaned = result.replace(/```json|```/g, '').trim();

    const parsed = JSON.parse(cleaned); 
    setResponse(cleaned);
    console.log(parsed)
  } catch (error) {
    console.error("Failed to parse response:", error);
    alert("Something went wrong while processing the image.");
  }
};


  return (
    <Context.Provider value={{ file, setFile, onSent, response }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
