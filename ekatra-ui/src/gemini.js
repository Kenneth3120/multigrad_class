// src/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load API key from env
const API_KEY ="AIzaSyBqMnoCfbZ2r6PnRnGKmSjTBzYJK-dKYiY";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
console.log("Initialized Gemini with model: gemini-1.5-flash");

export async function askGemini(prompt) {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
