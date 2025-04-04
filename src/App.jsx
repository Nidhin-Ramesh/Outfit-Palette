import React, { useContext } from 'react';
import Context from './context/Context';


const App = () => {
  const { setFile, onSent, response } = useContext(Context);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="p-4">
      <input
        type="file"
        id="fileInput"
        className="block mb-4 p-2 border border-gray-300 rounded"
        onChange={handleFileChange}
      />
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={onSent}
      >
        Submit
      </button>
      
      {response && (
        <div className="mt-4 p-3 border rounded bg-gray-50">
          <h3 className="font-medium">Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default App;