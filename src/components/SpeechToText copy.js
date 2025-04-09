import React, { useState, useRef } from "react";
import "../styles/fonts.css"; // Make sure font is correctly imported

const SpeechToText = () => {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState("mr-IN");
  const recognitionRef = useRef(null);

  const initRecognition = () => {
    const SpeechRecognition =
      window.webkitSpeechRecognition || window.SpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition API is not supported in your browser.");
      return null;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language;
    recognition.continuous = true;
    recognition.interimResults = true;

    return recognition;
  };

  const startListening = () => {
    if (listening) return;

    const recognition = initRecognition();
    if (!recognition) return;

    recognitionRef.current = recognition;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event) => {
      const currentTranscript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join(" ");
      setTranscript(currentTranscript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      alert(`Speech recognition error: ${event.error}`);
    };

    recognition.onend = () => setListening(false);

    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  const clearText = () => setTranscript("");

  // Apply legacy DV-TTDhruv font only when Marathi is selected
  const isMarathi = language === "mr-IN";
  const textareaFont = isMarathi ? "'DV-TTDhruv', Arial, sans-serif" : "Arial, sans-serif";

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "500px" }}>
      <h2>Speech to Text (Marathi / Hindi / English)</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Select Language:
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            <option value="mr-IN">Marathi</option>
            <option value="hi-IN">Hindi</option>
            <option value="en-IN">English</option>
          </select>
        </label>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <button
          onClick={startListening}
          disabled={listening}
          style={{
            padding: "10px 20px",
            backgroundColor: listening ? "gray" : "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          {listening ? "Listening..." : "Start Listening"}
        </button>

        <button
          onClick={stopListening}
          disabled={!listening}
          style={{
            padding: "10px 20px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          Stop
        </button>

        <button
          onClick={clearText}
          style={{
            padding: "10px 20px",
            backgroundColor: "#555",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Clear
        </button>
      </div>

      <div>
        <label>
          <strong>Captured Text:</strong>
        </label>
        <textarea
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          rows={5}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            resize: "vertical",
            fontFamily: textareaFont,
            fontSize: "16px",
          }}
        />
      </div>
    </div>
  );
};

export default SpeechToText;
