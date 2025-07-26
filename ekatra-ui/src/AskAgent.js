// src/AskAgent.js
import React, { useState } from "react";
import { askGemini } from "./gemini";

const AskAgent = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    setAnswer("Thinking...");
    const result = await askGemini(input);
    setAnswer(result);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Ask the Teaching Assistant</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your teaching question..."
        className="w-full p-2 border rounded"
      />
      <button
        onClick={handleAsk}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Ask
      </button>
      {answer && (
        <div className="mt-4 p-4 border bg-gray-100 rounded">
          <strong>AI Response:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AskAgent;
