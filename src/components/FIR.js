import React, { useState } from "react";

const SpeechToText = () => {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState("hi-IN"); // Default to Hindi

  // Function to start speech recognition
  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech Recognition API is not supported in your browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = language; // Set language (Hindi or Marathi)
    recognition.continuous = false; // Stop when input ends
    recognition.interimResults = true;

    recognition.onstart = () => {
      setListening(true);
      setTranscript("");
    };

    recognition.onresult = (event) => {
      const currentTranscript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join(" ");
      setTranscript(currentTranscript);
    };

    recognition.onerror = (event) => {
      console.error("Error occurred in recognition: ", event.error);
      alert(`Speech recognition error: ${event.error}`);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>प्राथमिक माहिती अहवाल भाषा(Hindi / Marathi)</h2>

      {/* Language Selection */}
      <div style={{ marginBottom: "10px" }}>
        <label>
          Select Language:
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            <option value="hi-IN">Hindi</option>
            <option value="mr-IN">Marathi</option>
          </select>
        </label>
      </div>
      <div>
        <label>पोलिस स्टेशन:</label>
      </div>
      {/* Start Button */}
      <button
        onClick={startListening}
        disabled={listening}
        style={{
          padding: "10px 20px",
          backgroundColor: listening ? "gray" : "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {listening ? "Listening..." : "Start Listening"}
      </button>

      {/* Transcript Output */}
      <div style={{ marginTop: "20px" }}>
        <h4>Captured Text:</h4>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            minHeight: "50px",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
          }}
        >
          {transcript || "No text captured yet..."}
        </div>
      </div>
    </div>
  );
};

export default SpeechToText;
