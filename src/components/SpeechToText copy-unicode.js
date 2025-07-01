import { useState, useRef, useEffect } from "react";
import { unicodeToISM } from "../utils/unicodeToISM";
import "../styles/fonts.css";

const SpeechToText = () => {
  const [transcript, setTranscript] = useState("");
  const [convertedText, setConvertedText] = useState("");
  const [language, setLanguage] = useState("mr-IN");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (language === "mr-IN") {
      setConvertedText(unicodeToISM(transcript));
    } else {
      setConvertedText(transcript);
    }
  }, [transcript, language]);

  const initRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition API not supported in this browser.");
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
      const interimTranscript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join(" ");
      setTranscript(interimTranscript);
    };

    recognition.onerror = (e) => {
      console.error("Recognition error:", e.error);
      alert(`Error: ${e.error}`);
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

  const clearText = () => {
    setTranscript("");
    setConvertedText("");
  };

  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <h2>Speech to Text (Marathi / Hindi / English)</h2>

      <label>
        Select Language:
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{ marginLeft: 10, padding: 5 }}
        >
          <option value="mr-IN">Marathi</option>
          <option value="hi-IN">Hindi</option>
          <option value="en-IN">English</option>
        </select>
      </label>

      <div style={{ marginTop: 15 }}>
        <button onClick={startListening} disabled={listening} style={buttonStyle("green")}>
          {listening ? "Listening..." : "Start"}
        </button>
        <button onClick={stopListening} disabled={!listening} style={buttonStyle("red")}>
          Stop
        </button>
        <button onClick={clearText} style={buttonStyle("#555")}>
          Clear
        </button>
      </div>

      <label style={{ marginTop: 15, display: "block" }}><strong>Captured Text:</strong></label>
      <textarea
        value={convertedText}
        onChange={(e) => setConvertedText(e.target.value)}
        rows={5}
        style={{
          width: "100%",
          padding: 10,
          fontSize: 16,
          fontFamily: language === "mr-IN" ? "'DV-TTDhruv', Arial" : "Arial, sans-serif",
          border: "1px solid #ccc",
          borderRadius: 5,
          resize: "vertical"
        }}
      />
    </div>
  );
};

const buttonStyle = (bgColor) => ({
  padding: "10px 20px",
  backgroundColor: bgColor,
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "10px",
});

export default SpeechToText;
