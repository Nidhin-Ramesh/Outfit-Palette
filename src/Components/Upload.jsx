import React from "react";
import { useContext } from "react";
import Context from "../context/Context";

const Upload = () => {
  const { preview, findColors, handleImageChange,response } =
    useContext(Context);
  return (
    <div>
      <div className="p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Find Your Perfect Match
        </h2>
        <p className="text-gray-600 mb-6">
          Upload a clear photo of your face in natural lighting to get
          personalized color recommendations that enhance your natural skin
          tone.
        </p>

        <div className="space-y-4">
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-indigo-400 transition-colors min-h-53"
            onClick={() => document.getElementById("fileInput").click()}
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="max-h-64 mx-auto rounded"
              />
            ) : (
              <div>
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mt-2 text-sm text-gray-500">
                  Click to upload your photo
                </p>
                <p className="text-xs text-gray-400">
                  PNG, JPG, JPEG up to 10MB
                </p>
              </div>
            )}
            <input
              id="fileInput"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>
        {!response&&<button
          className="btn btn-primary m-7 self-center
              "
          disabled={!preview}
          onClick={findColors}
        >
          find my colors
        </button>}
      </div>
    </div>
  );
};

export default Upload;
