import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FirstInformationReport = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fieldAttributes = location.state;
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
    navigate("/ChargeSheet", { state: fieldAttributes });
};

const handlePreviousNavigate = () => {
    navigate("/StartPage", { state: fieldAttributes });
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
                      <option value="en-IN">English</option>
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
      </div><div>
              <h1>FIRST INFORMATION REPORT</h1>
          </div><div>
              <table>
                  <tbody>
                      <tr id="0">
                          <th>
                              स्टेशन तपशील
                          </th>
                      </tr>
                      <tr id="1">
                          <td>
                              पोलीस विभागाचे नाव:
                          </td>
                          <td>
                              <input
                                  type="text"
                                  //name={fieldAttributes.stationArea}
                                  //value={fieldAttributes.stationArea}
                                  onChange={(e) => fieldAttributes.stationArea(e.target.value)}
                                  placeholder="स्टेशन विभागाचे नाव" />
                          </td>
                      </tr>
                      <tr id="2">
                          <td>
                              पोलीस ठाण्याचे नाव व पत्ता:
                          </td>
                          <td>
                              <input
                                  type="text"
                                  //name={fieldAttributes.stationName}
                                  //value={fieldAttributes.stationName}
                                  onChange={(e) => fieldAttributes.stationName(e.target.value)}
                                  placeholder="ठाण्याचे नाव व पत्ता" />
                          </td>
                      </tr>
                      <tr id="3">
                          <td>
                              एफआयआर क्रमांक:
                          </td>
                          <td>
                              <input
                                  type="text"
                                  //name={fieldAttributes.reportNumber}
                                  //value={fieldAttributes.reportNumber}
                                  onChange={(e) => fieldAttributes.reportNumber(e.target.value)}
                                  placeholder="क्रमांक" />
                          </td>
                      </tr>
                      <tr id="4">
                          <td>
                              नोंदणीची तारीख व वेळ:
                          </td>
                          <td>
                              <input
                                  type="text"
                                  //name={fieldAttributes.date}
                                  //value={fieldAttributes.date}
                                  onChange={(e) => fieldAttributes.date(e.target.value)}
                                  placeholder="तारीख" />
                          </td>
                      </tr>
                      <tr id="10">
                          <th>
                              तक्रारदार/माहिती देणाऱ्या व्यक्तीचे तपशील:
                          </th>
                      </tr>
                      <tr id="11">
                          <td>
                              नाव :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.name}
                                //value={fieldAttributes.name}
                                onChange={(e) => fieldAttributes.name(e.target.value)}
                                placeholder="नाव"
                            />
                          </td>
                      </tr>
                      <tr id="12">
                          <td>
                              वडिलांचे/पतीचे नाव :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.reporterHusbandFatherDetails}
                                //value={fieldAttributes.reporterHusbandFatherDetails}
                                onChange={(e) => fieldAttributes.reporterHusbandFatherDetails(e.target.value)}
                                placeholder="वय"
                                />  
                          </td>
                      </tr>
                      <tr id="13">
                          <td>
                              पत्ता :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.address}
                                //value={fieldAttributes.address}
                                onChange={(e) => fieldAttributes.setAddress(e.target.value)}
                                placeholder="पत्ता"
                                />
                          </td>
                      </tr>
                      <tr id="14">
                          <td>
                              संपर्क क्रमांक :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.contactNumber}
                                //value={fieldAttributes.contactNumber}
                                onChange={(e) => fieldAttributes.setContactNumber(e.target.value)}
                                placeholder="संपर्क क्रमांक"
                                />
                          </td>
                      </tr>

                      <tr id="20">
                          <th>
                              घटनेचे तपशील :
                          </th>
                      </tr>
                      <tr id="21">
                          <td>
                              घडल्याची तारीख :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.incidentDateTime}
                                //value={fieldAttributes.incidentDateTime}
                                onChange={(e) => fieldAttributes.setIncidentDateTime(e.target.value)}
                                placeholder="घडल्याची तारीख"
                                />
                          </td>
                      </tr>
                      <tr id="22">
                          <td>
                              घडल्याची वेळ :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.incidentDateTime}
                                //value={fieldAttributes.incidentDateTime}
                                onChange={(e) => fieldAttributes.setIncidentDateTime(e.target.value)}
                                placeholder="घटनेची वेळ"
                                />
                          </td>
                      </tr>
                      <tr id="23">
                          <td>
                              घटनास्थळ :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.incidentLocation}
                                //value={fieldAttributes.incidentLocation}
                                onChange={(e) => fieldAttributes.setIncidentLocation(e.target.value)}
                                placeholder="घटनास्थळ"
                                />
                          </td>
                      </tr>
                      <tr id="24">
                          <td>
                              जवळची ओळख पटवणारी ठिकाणे :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.incidentLocation} to set nearBY location value
                                //value={fieldAttributes.incidentLocation}
                                onChange={(e) => fieldAttributes.setIncidentLocation(e.target.value)}
                                placeholder="जवळची ओळख पटवणारी ठिकाणे"
                                />
                          </td>
                      </tr>

                      <tr id="30">
                          <th>
                              गुन्ह्याचा प्रकार:
                          </th>
                      </tr>
                      <tr id="31">
                          <td>
                              गुन्ह्याचा प्रकार :
                              (उदा. चोरी, मारहाण, फसवणूक इत्यादी)
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.incidentType}
                                //value={fieldAttributes.incidentType}
                                onChange={(e) => fieldAttributes.setIncidentType(e.target.value)}
                                placeholder="गुन्ह्याचा प्रकार"
                                />
                          </td>
                      </tr>
                      <tr id="32">
                          <td>
                              संबंधित कलम (IPC/इतर कायदे):
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.incidentNumber}
                                //value={fieldAttributes.incidentNumber}
                                onChange={(e) => fieldAttributes.setIncidentNumber(e.target.value)}
                                placeholder="संबंधित कायद्याची कलमे"
                                />
                          </td>
                      </tr>

                      <tr id="40">
                          <th>
                              संशयित/आरोपी व्यक्तीचे तपशील (माहित असल्यास) :
                          </th>
                      </tr>
                      <tr id="41">
                          <td>
                              नाव :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.accusedName}
                                //value={fieldAttributes.accusedName}
                                onChange={(e) => fieldAttributes.setAccusedName(e.target.value)}
                                placeholder="नाव"
                                />
                          </td>
                      </tr>
                      <tr id="42">
                          <td>
                              पत्ता :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.accusedAge}
                                //value={fieldAttributes.accusedAge}
                                onChange={(e) => fieldAttributes.setAccusedAge(e.target.value)}
                                placeholder="वय"
                                />
                          </td>
                      </tr>
                      <tr id="43">
                          <td>
                              शारीरिक वर्णन :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.accusedBodyDetails}
                                //value={fieldAttributes.accusedBodyDetails}
                                onChange={(e) => fieldAttributes.setAccusedBodyDetails(e.target.value)}
                                placeholder="शारीरिक वर्णन"
                                />
                          </td>
                      </tr>

                      <tr id="50">
                          <th>
                              साक्षीदारांचे तपशील (जर असतील तर) :
                          </th>
                      </tr>
                      <tr id="51">
                          <td>
                              नाव :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.witnessName}
                                //value={fieldAttributes.witnessName}
                                onChange={(e) => fieldAttributes.setWitnessName(e.target.value)}
                                placeholder="नाव"
                                />
                          </td>
                      </tr>
                      <tr id="52">
                          <td>
                              पत्ता :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.witnessAddress}
                                //value={fieldAttributes.witnessAddress}
                                onChange={(e) => fieldAttributes.setwitnessAddress(e.target.value)}
                                placeholder="पत्ता"
                                />
                          </td>
                      </tr>
                      <tr id="53">
                          <td>
                              संपर्क क्रमांक :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.witnessContactNos}
                                //value={fieldAttributes.witnessContactNos}
                                onChange={(e) => fieldAttributes.setWitnessContactNos(e.target.value)}
                                placeholder="संपर्क क्रमांक"
                                />
                          </td>
                      </tr>

                      <tr id="60">
                          <th>
                              पुराव्याचे तपशील (जर उपलब्ध असतील तर) :
                          </th>
                      </tr>
                      <tr id="61">
                          <td>
                              पुराव्याचा प्रकार :
                              (दस्तऐवज, वस्तू, व्हिडिओ फुटेज इत्यादी)
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.witnessContactNos} update this value
                                //value={fieldAttributes.witnessContactNos}
                                onChange={(e) => fieldAttributes.setWitnessContactNos(e.target.value)}
                                placeholder="संपर्क क्रमांक"
                                />
                          </td>
                      </tr>

                      <tr id="70">
                          <th>
                              पोलीस अधिकाऱ्याची पुष्टी :
                          </th>
                      </tr>
                      <tr id="71">
                          <td>
                              नाव :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.officerName}
                                //value={fieldAttributes.officerName}
                                onChange={(e) => fieldAttributes.setOfficerName(e.target.value)}
                                placeholder="नाव"
                                />
                          </td>
                      </tr>
                      <tr id="72">
                          <td>
                              हुद्दा :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.officerDesignation}
                                //value={fieldAttributes.officerDesignation}
                                onChange={(e) => fieldAttributes.setOfficerDesignation(e.target.value)}
                                placeholder="पदवी/हुद्दा"
                                />
                          </td>
                      </tr>
                      <tr id="73">
                          <td>
                              बॅज क्रमांक :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.officerEmployeeNos}
                                //value={fieldAttributes.officerEmployeeNos}
                                onChange={(e) => fieldAttributes.setOfficerEmployeeNos(e.target.value)}
                                placeholder="बॅज क्रमांक"
                                />
                          </td>
                      </tr>
                      <tr id="74">
                          <td>
                              पोलीस ठाण्याचे नाव :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.officerStationName}
                                //value={fieldAttributes.officerStationName}
                                onChange={(e) => fieldAttributes.setOfficerStationName(e.target.value)}
                                placeholder="पोलीस ठाण्याचे नाव"
                                />
                          </td>
                      </tr>
                      <tr id="80">
                          <th>
                              घटनेचे वर्णन (तक्रारदाराच्या शब्दात) (घटनेचे सविस्तर वर्णन द्या. यामध्ये घडलेली हानी, नुकसान किंवा इजा याचा समावेश करा.) :
                          </th>
                      </tr>
                      <tr id="81">
                          <td>
                              वर्णन :
                          </td>
                          <td>
                            <div style={{ marginTop: "20px" }}>
                                <textarea
                                        //value={locationDetails}
                                        //onChange={handleChange}
                                        rows={30}
                                        cols={80}
                                        style={{
                                            width: "100%",
                                            height: "400px",
                                            resize: "vertical",
                                            overflow: "auto",
                                            fontSize: "14px",
                                            lineHeight: "1.5",
                                        }}
                                >
                                </textarea>
                            </div>
                          </td>
                      </tr>
                      <tr id="91">
                          <td>
                              तक्रारदाराचा स्वाक्षरी/ठसा :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.officerStationName} to update 
                                //value={fieldAttributes.officerStationName}
                                onChange={(e) => fieldAttributes.setOfficerStationName(e.target.value)}
                                placeholder="तक्रारदाराचा स्वाक्षरी/ठसा"
                                />
                          </td>
                      </tr>

                      <tr id="92">
                          <td>
                              पोलीस अधिकाऱ्याची स्वाक्षरी :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.officerStationName} to update 
                                //value={fieldAttributes.officerStationName}
                                onChange={(e) => fieldAttributes.setOfficerStationName(e.target.value)}
                                placeholder="पोलीस अधिकाऱ्याची स्वाक्षरी"
                                />
                          </td>
                      </tr>

                      <tr id = "101">
                            
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
          </div></>

        );
}
export default FirstInformationReport;