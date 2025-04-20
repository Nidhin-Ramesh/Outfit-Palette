import React, { useContext } from "react";
import Context from "./context/Context";
import Header from "./Components/Header";
import Hero from "./Components/Hero.jsx";
import Body from "./Components/Body.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  const { startAnimation } = useContext(Context);
  // const { setFile, onSent, response } = useContext(Context);

  // const handleFileChange = (e) => {
  //   if (e.target.files[0]) {
  //     setFile(e.target.files[0]);
  //   }
  // };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      {startAnimation && <Body />}
      <Footer/>
    </div>
    // <div className="p-4">
    //   <input
    //     type="file"
    //     id="fileInput"
    //     className="block mb-4 p-2 border border-gray-300 rounded"
    //     onChange={handleFileChange}
    //   />
    //   <button
    //     className="btn btn-primary"
    //     onClick={onSent}
    //   >
    //     Submit
    //   </button>

    //   {response && (
    //     <div className="mt-4 p-3 border rounded bg-gray-50">
    //       <h3 className="font-medium">Response:</h3>
    //       <p>{response}</p>
    //     </div>
    //   )}
    // </div>
  );
};

export default App;
