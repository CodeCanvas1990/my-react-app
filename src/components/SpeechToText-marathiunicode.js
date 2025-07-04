import { useState, useRef } from "react";
import "../styles/fonts.css"; // Make sure font is correctly imported

const SpeechToText = () => {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState("mr-IN");
  const recognitionRef = useRef(null);

  // Dummy Unicode → ISM transliteration function
  const unicodeToISM = (unicodeText) => {
    // Replace with real mapping logic
    // Example: Replace अ with ¢, ब with ™ etc. (fake mapping for illustration)
    return unicodeText
    .replace(/अ/g, "अ")  // Example, map 'अ' to ISM 'A'
    .replace(/आ/g, "आ")
    .replace(/इ/g, "इ")
    .replace(/ई/g, "ई")
    .replace(/उ/g, "उ")
    .replace(/ऊ/g, "ऊ")
    .replace(/ए/g, "ए")
    .replace(/ऐ/g, "ऐ")
    .replace(/ओ/g, "ओ")
    .replace(/औ/g, "औ")
    .replace(/अं/g, "अं")
    .replace(/अः/g, "अः")
    // Add more rules here
    // Consonants
    .replace(/क/g, "क")
    .replace(/ख/g, "ख")
    .replace(/ग/g, "ग")
    .replace(/घ/g, "घ")
    .replace(/च/g, "च")
    .replace(/छ/g, "छ")
    .replace(/ज/g, "ज")
    .replace(/झ/g, "झ")
    .replace(/ट/g, "ट")
    .replace(/ठ/g, "ठ")
    .replace(/ड/g, "ड")
    .replace(/ढ/g, "ढ")
    .replace(/ण/g, "ण")
    .replace(/त/g, "त")
    .replace(/थ/g, "थ")
    .replace(/द/g, "द")
    .replace(/ध/g, "ध")
    .replace(/न/g, "न")
  
    .replace(/प/g, "प")
    .replace(/फ/g, "फ")
    .replace(/ब/g, "ब")
    .replace(/भ/g, "भ")
    .replace(/म/g, "म")
  
    .replace(/य/g, "य")
    .replace(/र/g, "र")
    .replace(/ल/g, "ल")
    .replace(/व/g, "व")
  
    .replace(/श/g, "श")
    .replace(/ष/g, "ष")
    .replace(/स/g, "स")
    .replace(/ह/g, "ह")
  
    // Matras
    .replace(/ा/g, "ा")
    .replace(/ि/g, "")
    .replace(/ी/g, "ी")
    .replace(/ु/g, "ु")
    .replace(/ू/g, "ू")
    .replace(/े/g, "े")
    .replace(/ै/g, "ै")
    .replace(/ो/g, "ो")
    .replace(/ौ/g, "ौ")
    .replace(/ं/g, "ं")
    .replace(/ँ/g, "ँ") // nasalization
    .replace(/्/g, "्")  // halant/virama (skip)
  
    // Others
    .replace(/।/g, "।")
    .replace(/ /g, " ");
    // Add full mapping as needed
  };

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

  const copyText = () => {
    const textToCopy = language === "mr-IN" ? unicodeToISM(transcript) : transcript;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Text copied to clipboard!");
    });
  };

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
            marginRight: "10px",
          }}
        >
          Clear
        </button>

        <button
          onClick={copyText}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Copy
        </button>
      </div>

      <div>
        <label>
          <strong>Captured Text:</strong>
        </label>
        <textarea
          value={isMarathi ? unicodeToISM(transcript) : transcript}
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
