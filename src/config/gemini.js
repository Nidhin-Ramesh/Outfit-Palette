import {
  GoogleGenAI,
  createUserContent,
  createPartFromUri,
} from "@google/genai";

const ai = new GoogleGenAI({
  apiKey:  import.meta.env.VITE_GEMINI_API_KEY,
});

async function main(file) {
  const image = await ai.files.upload({
    file: file,
  });

  const prompt = `
  You are an expert in identifying colors that complement human skin tones in photographs.
  
  Your task is to analyze the provided image of a person and return a **valid JSON array** of objects. Each object should represent a color that matches or complements the observed skin tone.
  
  Each object in the array must include the following keys:
  
  - "group": A string categorizing the color (e.g., "Warm Tones", "Neutral Tones", "Cool Tones (Potentially Complementary)").
  - "name": A descriptive name for the color (e.g., "Light Tan", "Beige", "Steel Blue").
  - "hex": A string with the hexadecimal color code (e.g., "#F8F0E3").
  - "rgb": A string with the RGB color code (e.g., "rgb(248, 240, 227)").
  - "hsl": A string with the HSL color code (e.g., "hsl(37, 47%, 93%)").
  
  Please return **only** the JSON array. Do not include any explanation or introductory text.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
      createUserContent([prompt, createPartFromUri(image.uri, image.mimeType)]),
    ],
  });
console.log(response.text)
  return response.text;
}

export default main;
