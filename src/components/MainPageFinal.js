import Reac, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../src/App.css';

const MainPageFinal = () => {

  const [language, setLanguage] = useState("mr-IN");
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const stationNameString = "स्टेशन:";
  const reportNameString = "अहवाल क्रमांक:";
  const dateString = "तारीख:";
  const timeString = "वेळ:";
  const cNameString = "तक्रारदाराचे नाव:";
  const ageString = "वय:";
  const addressString = "पत्ता:";
  const contactNumberString = "संपर्क क्रमांक:";
  const incidentDateTimeString = "घटनेची तारीख व वेळ:";
  const incidentLocationString = "घटनेचे ठिकाण:";
  const complaintDetailsString = "तक्रारीचा तपशील:";
  // Replace placeholder [name] with input value
 
 //const [dataName, setDataValue] = useState(data);
  const [columns, setColumns] = useState(["stationNameString", "reportNameString", 
    "dateString", "timeString", "cNameString", "ageString", "addressString", "contactNumberString",
    "incidentDateTimeString", "incidentLocationString", "complaintDetailsString"]);

  const [inputs, setInputs] = useState(
        columns.reduce((acc, col) => ({ ...acc, [col]: "" }), {}) // Initialize inputs for each column
  );

  const handleInputChange = (e) => {
    console.info(e.target.id);
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  
  const startListening = (e) => {
    setListening(e.id);
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
    <><>
    <div>
        <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
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
                    </select>
                </label>
            </div>
        </div>
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>Feild</th>
                        <th>Value</th>
                        <th>Talk</th>
                    </tr>
                </thead>
                <tbody>
                    {columns.map((col, index) => (
                        <tr key={index}>
                            <><td>
                                <label>{col}</label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={col}
                                //value={inputs[col]}
                                value={transcript || "No text captured yet..."}
                                onChange={handleInputChange}
                                placeholder={`Enter ${col}`}
                                />
                            </td>
                            <td>
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
                            }}>
                                {listening === index ? "Listening..." : "Start Listening"}
                            </button>
                            </td></>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h3>Dynamic Placeholders:</h3>
                {columns.map((col, index) => (
                    <p key= {index} >
                        <strong>{col}:</strong> {inputs[col] || `Placeholder for ${col}`}
                    </p>
                ))}
            </div>
        </div>
    </div>
    </></>
  );
};
export default MainPageFinal;