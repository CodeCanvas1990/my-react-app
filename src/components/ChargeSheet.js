import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ChargeSheet = () => {
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

  const handleChange = (event) => {
    const lines = event.target.value.split("\n");
    if (lines.length <= 5000) {
        fieldAttributes.setLocationDetails(event.target.value);
    } else {
      alert("You can only enter up to 5000 lines.");
    }
  };

  const handleNextNavigate = () => {
    navigate("/CaseDiary", { state: fieldAttributes });
};

const handlePreviousNavigate = () => {
    navigate("/FirstInformationReport", { state: fieldAttributes });
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
      <div><h1>CHARGE SHEET</h1></div>
      <div>
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
                                दाखलपत्र क्रमांक:
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
                              तारीख:
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
                              तक्रारदार/फिर्यादीचे तपशील::
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
                                प्रकरणाचा तपशील :
                          </th>
                      </tr>
                      <tr id="21">
                          <td>
                                गुन्हा क्रमांक:
                          </td>
                          <td>
                              <input
                                  type="text"
                                  //name={fieldAttributes.reportNumber}
                                  //value={fieldAttributes.reportNumber}
                                  onChange={(e) => fieldAttributes.setIncidentNumber(e.target.value)}
                                  placeholder="क्रमांक" />
                          </td>
                      </tr>
                      <tr id="22">
                          <td>
                                गुन्हा नोंदविण्याची तारीख :
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
                      <tr id="23">
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
                      <tr id="24">
                          <td>
                                संबंधित कायद्याची कलमे :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.incidentLocation}
                                //value={fieldAttributes.incidentLocation}
                                onChange={(e) => fieldAttributes.setIncidentIPCNos(e.target.value)}
                                placeholder="घटनास्थळ"
                                />
                          </td>
                      </tr>

                      <tr id="30">
                          <th>
                                आरोपींचे तपशील :
                          </th>
                      </tr>
                      <tr id="31">
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
                      <tr id="32">
                          <td>
                            वय :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.accusedBodyDetails}
                                //value={fieldAttributes.accusedBodyDetails}
                                onChange={(e) => fieldAttributes.setAge(e.target.value)}
                                placeholder="वय"
                                />
                          </td>
                      </tr>
                      <tr id="33">
                          <td>
                              पत्ता :
                          </td>
                          <td>
                            <input
                                type="text"
                                //name={fieldAttributes.accusedAge}
                                //value={fieldAttributes.accusedAge}
                                onChange={(e) => fieldAttributes.setAddress(e.target.value)}
                                placeholder="पत्ता"
                                />
                          </td>
                      </tr>
                      <tr id="34">
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
                      
                      <tr id = "40">
                            <th>साक्षीदारांचे तपशील</th>
                        </tr>
                        <tr id = "41">
                            <td>
                                <label>नाव: </label>
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
                        <tr id = "42">
                            <td>
                                <label>पत्ता: </label>
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
                        <tr id = "43">
                            <td>
                                <label>संपर्क क्रमांक: </label>
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

                        <tr id = "50">
                            <th>घटनास्थळाचे वर्णन</th>
                        </tr>
                        <tr id = "51">
                            <td>
                                <label>घटनेचे वर्णन: </label>
                            </td>
                            <td>
                                <div style={{ marginTop: "20px" }}>
                                    <textarea
                                        //value={fieldAttributes.locationDetails}
                                        onChange={handleChange}
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

                        <tr id = "60">
                            <th>आरोपींविरुद्धचे पुरावे</th>
                        </tr>
                        <tr id = "61">
                            <td>
                                <label>पुरावे जसे की साक्षीदारांचे जबाब, जप्त केलेल्या वस्तू, डॉक्युमेंट्स, सीसीटीव्ही फुटेज इत्यादी: </label>
                            </td>
                            <td>
                                <div style={{ marginTop: "20px" }}>
                                    <textarea
                                        //value={fieldAttributes.locationDetails}
                                        onChange={handleChange}
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

                        <tr id = "70">
                            <th>गुन्ह्याच्या तपासाचा तपशील</th>
                        </tr>
                        <tr id = "71">
                            <td>
                                <label>गुन्ह्याची प्राथमिक चौकशी कधी सुरू झाली: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessName}
                                //value={fieldAttributes.witnessName}
                                onChange={(e) => fieldAttributes.setWitnessName(e.target.value)}
                                placeholder="गुन्ह्याची प्राथमिक चौकशी कधी सुरू झाली"
                                />
                            </td>
                        </tr>
                        <tr id = "72">
                            <td>
                                <label>गुन्ह्याचे तपास अधिकारी: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessAddress}
                                //value={fieldAttributes.witnessAddress}
                                onChange={(e) => fieldAttributes.setwitnessAddress(e.target.value)}
                                placeholder="गुन्ह्याचे तपास अधिकारी"
                                />
                            </td>
                        </tr>
                        <tr id = "73">
                            <td>
                                <label>तपासादरम्यान केलेली कार्यवाही: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessContactNos}
                                //value={fieldAttributes.witnessContactNos}
                                onChange={(e) => fieldAttributes.setWitnessContactNos(e.target.value)}
                                placeholder="तपासादरम्यान केलेली कार्यवाही"
                                />
                            </td>
                        </tr>

                        <tr id = "80">
                            <th>कलमे व कायदे</th>
                        </tr>
                        <tr id = "81">
                            <td>
                                <label>भारतीय दंड संहिता (IPC): </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessName}
                                //value={fieldAttributes.witnessName}
                                onChange={(e) => fieldAttributes.setWitnessName(e.target.value)}
                                placeholder="भारतीय दंड संहिता (IPC)"
                                />
                            </td>
                        </tr>
                        <tr id = "82">
                            <td>
                                <label>इतर संबंधित कायदे: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessAddress}
                                //value={fieldAttributes.witnessAddress}
                                onChange={(e) => fieldAttributes.setwitnessAddress(e.target.value)}
                                placeholder="इतर संबंधित कायदे"
                                />
                            </td>
                        </tr>

                        <tr id = "90">
                            <th>अंतिम निष्कर्ष</th>
                        </tr>
                        <tr id = "91">
                            <td>
                                <label>आरोपी दोषी असल्याचे पुरावे उपलब्ध आहेत की नाही: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessName}
                                //value={fieldAttributes.witnessName}
                                onChange={(e) => fieldAttributes.setWitnessName(e.target.value)}
                                placeholder="आहेत की नाही"
                                />
                            </td>
                        </tr>
                        <tr id = "92">
                            <td>
                                <label>पुरावे व कायदेशीर कलमांचा आधार घेत, प्रकरण न्यायालयात सादर करण्यासाठी पूर्ण आहे: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessAddress}
                                //value={fieldAttributes.witnessAddress}
                                onChange={(e) => fieldAttributes.setwitnessAddress(e.target.value)}
                                placeholder="आहेत की नाही"
                                />
                            </td>
                        </tr>
                        

                        <tr id = "100">
                            <th>पोलीस अधिकाऱ्याची तपशील</th>
                        </tr>
                        <tr id = "61">
                            <td>
                                <label>नाव: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={officerName}
                                //value={officerName}
                                onChange={(e) => fieldAttributes.setOfficerName(e.target.value)}
                                placeholder="नाव"
                                />
                            </td>
                        </tr>
                        <tr id = "101">
                            <td>
                                <label>पदवी/हुद्दा: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={officerDesignation}
                                //value={officerDesignation}
                                onChange={(e) => fieldAttributes.setOfficerDesignation(e.target.value)}
                                placeholder="पदवी/हुद्दा"
                                />
                            </td>
                        </tr>
                        <tr id = "102">
                            <td>
                                <label>बॅज क्रमांक: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={officerEmployeeNos}
                                //value={officerEmployeeNos}
                                onChange={(e) => fieldAttributes.setOfficerEmployeeNos(e.target.value)}
                                placeholder="बॅज क्रमांक"
                                />
                            </td>
                        </tr>
                        <tr id = "103">
                            <td>
                                <label>स्वाक्षरी: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={officerStationName}
                                //value={officerStationName}
                                onChange={(e) => fieldAttributes.setOfficerStationName(e.target.value)}
                                placeholder="स्वाक्षरी"
                                />
                            </td>
                        </tr>

                        <tr id = "110">
                            
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
        {/*
        [पोलीस विभागाचे नाव]
        <br/>[पोलीस ठाण्याचे नाव व पत्ता]
        <br/>दाखलपत्र क्रमांक: ___________
        <br/>तारीख: ___________

            <div>
            <br/><h3>प्रकरणाचा तपशील:</h3>
                <br/>गुन्हा क्रमांक: ____________________________
                <br/>गुन्हा नोंदविण्याची तारीख: ____________________________
                <br/>गुन्ह्याचा प्रकार: ____________________________
                <br/>संबंधित कायद्याची कलमे: ____________________________
            </div>
            <div>
            <br/><h3>तक्रारदार/फिर्यादीचे तपशील:</h3>
                <br/>नाव: ____________________________
                <br/>वडिलांचे/पतीचे नाव: ____________________________
                <br/>पत्ता: ____________________________
                <br/>संपर्क क्रमांक: ____________________________
            </div>
            <div>
            <br/><h3>आरोपींचे तपशील:</h3>
                <br/>नाव: ____________________________
                <br/>वय: ____________________________
                <br/>पत्ता: ____________________________
                <br/>शारीरिक वर्णन: ____________________________
            </div>
            <div>
            <br/><h3>साक्षीदारांचे तपशील (जर असतील तर):</h3>
                <br/>नाव: ____________________________
                <br/>पत्ता: ____________________________
                <br/>संपर्क क्रमांक: ____________________________
            </div>
            <div>
            <br/><h3>घटनेचे वर्णन (तक्रारदाराच्या शब्दात)</h3> (घटना कशी घडली, त्याचा तपशील द्या. घटनास्थळ, गुन्हा कसा केला गेला याचा उल्लेख करा.):
                <br/>________________________________________________________________________________________________________________
                <br/>________________________________________________________________________________________________________________
                <br/>________________________________________________________________________________________________________________
                <br/>________________________________________________________________________________________________________________
            </div> 
            <div>
            <br/><h3>आरोपींविरुद्धचे पुरावे:</h3> (पुरावे जसे की साक्षीदारांचे जबाब, जप्त केलेल्या वस्तू, डॉक्युमेंट्स, सीसीटीव्ही फुटेज इत्यादी.):
                <br/>____________________________________________________________________________________
                <br/>____________________________________________________________________________________
            </div> 
            <div>
            <br/><h3>गुन्ह्याच्या तपासाचा तपशील:</h3>
                <br/>गुन्ह्याची प्राथमिक चौकशी कधी सुरू झाली: ____________________________
                <br/>गुन्ह्याचे तपास अधिकारी: ____________________________
                <br/>तपासादरम्यान केलेली कार्यवाही: ____________________________
            </div>  
            <div>
            <br/><h3>कलमे व कायदे:</h3>
                <br/>भारतीय दंड संहिता (IPC): ____________________________
                <br/>इतर संबंधित कायदे: ____________________________
            </div>  
            <div>
            <br/><h3>अंतिम निष्कर्ष:</h3>
                <br/>आरोपी दोषी असल्याचे पुरावे उपलब्ध आहेत की नाही?
                <br/>पुरावे व कायदेशीर कलमांचा आधार घेत, प्रकरण न्यायालयात सादर करण्यासाठी पूर्ण आहे.
            </div>
            <div>
            <br/><h3>दाखल करणाऱ्या अधिकाऱ्याचे तपशील:</h3>
                <br/>नाव: ____________________________
                <br/>पदवी/हुद्दा: ____________________________
                <br/>बॅज क्रमांक: ____________________________
                <br/>स्वाक्षरी: ____________________________
            </div>*/}
      </div></></>
  );
};

export default ChargeSheet;
