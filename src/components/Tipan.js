import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Tipan = () => {
  const location = useLocation();
  const fieldAttributes = location.state;
  const navigate = useNavigate();
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState("hi-IN"); // Default to Hindi

  /*if (!fieldAttributes) {
    return <p>No fieldAttributes data received!</p>;
  }*/

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

  const handleNextNavigate = () => {
    navigate("/Remand", { state: fieldAttributes });
};

const handlePreviousNavigate = () => {
    navigate("/CaseDiary", { state: fieldAttributes });
};
  return (
    <><div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
          
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
      </div><>
      <div><h1>TIPAN</h1></div>
      <div>
        <table>
            <tbody>
                <tr id = "1">
                    <th>
                        स्टेशन तपशील
                    </th>
                </tr>
                <tr id = "2">
                    <td>कार्यालयाचे नाव :</td>
                    <td>
                        <input
                            type="text"
                            //name={fieldAttributes.stationArea}
                            //value={fieldAttributes.stationArea}
                            //onChange={(e) => fieldAttributes.stationArea(e.target.value)}
                            placeholder="कार्यालयाचे नाव" />
                    </td>
                </tr>
                <tr id = "3">
                    <td>कार्यालयाचे पत्ता :</td>
                    <td>
                        <input
                            type="text"
                            //name={fieldAttributes.stationName}
                            //value={fieldAttributes.stationName}
                            //onChange={(e) => fieldAttributes.stationName(e.target.value)}
                            placeholder="कार्यालयाचे पत्ता" />
                    </td>
                </tr>
                <tr id = "4">
                    <td>तपशील क्रमांक :</td>
                    <td>
                        <input
                            type="text"
                            //name={fieldAttributes.reportNumber}
                            //value={fieldAttributes.reportNumber}
                            //onChange={(e) => fieldAttributes.reportNumber(e.target.value)}
                            placeholder="तपशील क्रमांक" />
                    </td>
                </tr>
                <tr id = "5">
                    <td>तारीख :</td>
                    <td>
                        <input
                            type="text"
                            //name={fieldAttributes.date}
                            //value={fieldAttributes.date}
                            //onChange={(e) => fieldAttributes.date(e.target.value)}
                            placeholder="तारीख" />
                    </td>
                </tr>
                {/* 
                not required mostly
                <tr>
                    <td>प्रकरण :</td>
                    <td></td>
                </tr>
                */}
                
                <tr id = "10">
                    <th>
                        प्रकरणाचा तपशील
                    </th>
                </tr>
                <tr id = "11">
                    <td>प्रकरणाचे नाव/तपशील :</td>
                    <td>
                        <input
                            type="text"
                            //name={fieldAttributes.date}
                            //value={fieldAttributes.date}
                            //onChange={(e) => fieldAttributes.date(e.target.value)}
                            placeholder="प्रकरणाचे नाव/तपशील" />
                    </td>
                </tr>
                <tr id = "12">
                    <td>संबधित व्यक्तीचे नाव/पद :</td>
                    <td>
                        <input
                            type="text"
                            //name={fieldAttributes.date}
                            //value={fieldAttributes.date}
                            //onChange={(e) => fieldAttributes.date(e.target.value)}
                            placeholder="संबधित व्यक्तीचे नाव/पद" />
                    </td>
                </tr>
                <tr id = "13">
                    <td>संबंधित घटना/निर्णयाचे वर्णन :</td>
                    <td>
                        <input
                            type="text"
                            //name={fieldAttributes.date}
                            //value={fieldAttributes.date}
                            //onChange={(e) => fieldAttributes.date(e.target.value)}
                            placeholder="संबंधित घटना/निर्णयाचे वर्णन" />
                    </td>
                </tr>

                <tr>
                    <th>
                        संबंधित पुरावे
                    </th>
                </tr>
                <tr id = "20">
                    <td>पत्रव्यवहार क्रमांक :</td>
                    <td>
                        <input
                            type="text"
                            //name={fieldAttributes.date}
                            //value={fieldAttributes.date}
                            //onChange={(e) => fieldAttributes.date(e.target.value)}
                            placeholder="पत्रव्यवहार क्रमांक" /> 
                    </td>
                </tr>
                <tr id = "21">
                    <td>दस्तऐवज :</td>
                    <td>
                        <input
                            type="text"
                            //name={fieldAttributes.date}
                            //value={fieldAttributes.date}
                            //onChange={(e) => fieldAttributes.date(e.target.value)}
                            placeholder="दस्तऐवज" />
                    </td>
                </tr>
                <tr id = "22">
                    <td>इतर पुरावे :</td>
                    <td>
                        <input
                            type="text"
                            //name={fieldAttributes.date}
                            //value={fieldAttributes.date}
                            //onChange={(e) => fieldAttributes.date(e.target.value)}
                            placeholder="इतर पुरावे" />
                    </td>
                </tr>

                <tr id = "30">
                    <th>
                        तपास अधिकाऱ्याचे नाव व स्वाक्षरी
                    </th>
                </tr>
                <tr id = "31">
                    <td>नाव :</td>
                    <td>
                        <input
                            type="text"
                            //name={fieldAttributes.officerName}
                            //value={fieldAttributes.officerName}
                            //onChange={(e) => fieldAttributes.setOfficerName(e.target.value)}
                            placeholder="नाव" />
                    </td>
                </tr>
                <tr id = "32">
                    <td>पद :</td>
                    <td>
                        <input
                            type="text"
                            //name={fieldAttributes.officerDesignation}
                            //value={fieldAttributes.officerDesignation}
                            //onChange={(e) => fieldAttributes.setOfficerDesignation(e.target.value)}
                            placeholder="पद" />
                    </td>
                </tr>
                <tr id = "33">
                    <td>स्वाक्षरी :</td>
                    <td>
                        <input
                            type="text"
                            //name={fieldAttributes.officerDesignation}
                            //value={fieldAttributes.officerDesignation}
                            //onChange={(e) => fieldAttributes.setOfficerDesignation(e.target.value)}
                            placeholder="स्वाक्षरी" />
                    </td>
                </tr>

                <tr id = "34">
                    <th>संदर्भ: (या भागात प्रकरणाशी संबंधित आधीच्या पत्रव्यवहाराचा किंवा निर्णयाचा उल्लेख करा.)</th>
                    <td>two lines space
                        <input
                            type="text"
                            //name={fieldAttributes.officerDesignation}
                            //value={fieldAttributes.officerDesignation}
                            //onChange={(e) => fieldAttributes.setOfficerDesignation(e.target.value)}
                            placeholder="संदर्भ" />
                    </td>
                </tr>
                <tr id = "35">
                    <th>विषय: </th>
                    <td>two line space
                        <input
                            type="text"
                            //name={fieldAttributes.officerDesignation}
                            //value={fieldAttributes.officerDesignation}
                            //onChange={(e) => fieldAttributes.setOfficerDesignation(e.target.value)}
                            placeholder="विषय" />
                    </td>
                </tr>

                <tr id = "36">
                    <th>सध्याची स्थिती: (प्रकरणाचा सद्यस्थितीत प्रगतीचा तपशील द्या.)</th>
                    <td>two line space
                        <input
                            type="text"
                            //name={fieldAttributes.officerDesignation}
                            //value={fieldAttributes.officerDesignation}
                            //onChange={(e) => fieldAttributes.setOfficerDesignation(e.target.value)}
                            placeholder="सध्याची स्थिती" />
                    </td>
                </tr>

                <tr id = "37">
                    <th>निर्णयासाठी सूचना: (तपासादरम्यान मिळालेल्या मुद्द्यांच्या आधारे पुढील पावले ठरविण्यासाठी सूचना द्या.)</th>
                    <td>two line space
                        <input
                            type="text"
                            //name={fieldAttributes.officerDesignation}
                            //value={fieldAttributes.officerDesignation}
                            //onChange={(e) => fieldAttributes.setOfficerDesignation(e.target.value)}
                            placeholder="निर्णयासाठी सूचना" />
                    </td>
                </tr>

                <tr id = "38">
                    <td>शिफारस: (प्रकरणाशी संबंधित अंतिम निष्कर्ष किंवा कृतीसाठी दिलेल्या सूचना.)</td>
                    <td>two line space
                        <input
                            type="text"
                            //name={fieldAttributes.officerDesignation}
                            //value={fieldAttributes.officerDesignation}
                            //onChange={(e) => fieldAttributes.setOfficerDesignation(e.target.value)}
                            placeholder="शिफारस" />
                    </td>
                </tr>


                <tr id = "40">
                            
                            <td>
                                <button onClick={handlePreviousNavigate} style={{ padding: "10px 20px" }}>
                                    Previous
                                </button>
                            </td>

                            <td>
                                <button onClick={handleNextNavigate} style={{ padding: "10px 20px" }}>
                                    Next
                                </button>
                            </td>
                      </tr>
            </tbody>
        </table>
      </div></></>
  );
};

export default Tipan;
