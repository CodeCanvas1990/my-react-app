import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CaseDiary = () => {
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

  const handleChange = (event) => {
    const lines = event.target.value.split("\n");
    if (lines.length <= 5000) {
        fieldAttributes.setLocationDetails(event.target.value);
    } else {
      alert("You can only enter up to 5000 lines.");
    }
  };

  const handleNextNavigate = () => {
    navigate("/Tipan", { state: fieldAttributes });
};

const handlePreviousNavigate = () => {
    navigate("/ChargeSheet", { state: fieldAttributes });
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
      <div><h1>CASE DIARY</h1></div>
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
                                गुन्हा क्रमांक:
                          </td>
                          <td>
                              <input
                                  type="text"
                                  //name={fieldAttributes.reportNumber}
                                  //value={fieldAttributes.reportNumber}
                                  onChange={(e) => fieldAttributes.reportNumber(e.target.value)}
                                  placeholder="गुन्हा क्रमांक" />
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
                                गुन्ह्याचा तपशील:
                          </th>
                      </tr>
                      <tr id="11">
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
                      <tr id="12">
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
                      <tr id="13">
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
                      <tr id="14">
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

                      <tr id="15">
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

                      <tr id="16">
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

                      <tr id = "20">
                            <th>तपासाचा तपशील</th>
                        </tr>
                        <tr id = "21">
                            <td>
                                <label>तपास अधिकारी: </label>
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
                        <tr id = "22">
                            <td>
                                <label>तपासाची सुरुवात कधी झाली: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessName}
                                //value={fieldAttributes.witnessName}
                                onChange={(e) => fieldAttributes.setWitnessName(e.target.value)}
                                placeholder="तपासाची सुरुवात कधी झाली"
                                />
                            </td>
                        </tr>

                        <tr id = "23">
                            <td>
                                <label>घटनास्थळी पोहोचण्याचा वेळ: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessContactNos}
                                //value={fieldAttributes.witnessContactNos}
                                onChange={(e) => fieldAttributes.setWitnessContactNos(e.target.value)}
                                placeholder="घटनास्थळी पोहोचण्याचा वेळ"
                                />
                            </td>
                        </tr>

                        <tr id = "30">
                            <th>घटनास्थळाचे वर्णन</th>
                        </tr>
                        <tr id = "31">
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

                        <tr id = "40">
                            <th>पुरावे</th>
                        </tr>
                        <tr id = "41">
                            <td>
                                <label>घटनास्थळावरून जप्त केलेल्या वस्तू: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessAddress}
                                //value={fieldAttributes.witnessAddress}
                                onChange={(e) => fieldAttributes.setwitnessAddress(e.target.value)}
                                placeholder="घटनास्थळावरून जप्त केलेल्या वस्तू"
                                />
                            </td>
                        </tr>
                        <tr id = "42">
                            <td>
                                <label>सीसीटीव्ही फुटेज/फोटो: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessName}
                                //value={fieldAttributes.witnessName}
                                onChange={(e) => fieldAttributes.setWitnessName(e.target.value)}
                                placeholder="सीसीटीव्ही फुटेज/फोटो"
                                />
                            </td>
                        </tr>

                        <tr id = "43">
                            <td>
                                <label>डॉक्युमेंट्स: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessContactNos}
                                //value={fieldAttributes.witnessContactNos}
                                onChange={(e) => fieldAttributes.setWitnessContactNos(e.target.value)}
                                placeholder="डॉक्युमेंट्स"
                                />
                            </td>
                        </tr>

                        <tr id = "50">
                            <th>साक्षीदारांचे तपशील</th>
                        </tr>
                        <td>
                                <label>साक्षीदार 1: </label>
                        </td>
                        <tr id = "51">
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
                        <tr id = "52">
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
                        <tr id = "53">
                            <td>
                                <label>जबाब: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessContactNos}
                                //value={fieldAttributes.witnessContactNos}
                                onChange={(e) => fieldAttributes.setWitnessContactNos(e.target.value)}
                                placeholder="जबाब"
                                />
                            </td>
                        </tr>

                        <td>
                                <label>साक्षीदार 2: </label>
                        </td>
                        <tr id = "54">
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
                        <tr id = "55">
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
                        <tr id = "56">
                            <td>
                                <label>जबाब: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessContactNos}
                                //value={fieldAttributes.witnessContactNos}
                                onChange={(e) => fieldAttributes.setWitnessContactNos(e.target.value)}
                                placeholder="जबाब"
                                />
                            </td>
                        </tr>

                        <tr id = "60">
                            <th>आरोपींचा तपशील</th>
                        </tr>
                        <td>
                                <label>आरोपी 1: </label>
                        </td>
                        <tr id = "61">
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
                        <tr id = "62">
                            <td>
                                <label>वय: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessAddress}
                                //value={fieldAttributes.witnessAddress}
                                onChange={(e) => fieldAttributes.setwitnessAddress(e.target.value)}
                                placeholder="वय"
                                />
                            </td>
                        </tr>
                        <tr id = "63">
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
                        <tr id = "64">
                            <td>
                                <label>अटक कधी करण्यात आली: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessContactNos}
                                //value={fieldAttributes.witnessContactNos}
                                onChange={(e) => fieldAttributes.setWitnessContactNos(e.target.value)}
                                placeholder="अटक कधी करण्यात आली"
                                />
                            </td>
                        </tr>
                        <tr id = "65">
                            <td>
                                <label>जबाब: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessContactNos}
                                //value={fieldAttributes.witnessContactNos}
                                onChange={(e) => fieldAttributes.setWitnessContactNos(e.target.value)}
                                placeholder="जबाब"
                                />
                            </td>
                        </tr>

                        <td>
                                <label>आरोपी 2: </label>
                        </td>
                        <tr id = "66">
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
                        <tr id = "67">
                            <td>
                                <label>वय: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessAddress}
                                //value={fieldAttributes.witnessAddress}
                                onChange={(e) => fieldAttributes.setwitnessAddress(e.target.value)}
                                placeholder="वय"
                                />
                            </td>
                        </tr>
                        <tr id = "68">
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
                        <tr id = "69">
                            <td>
                                <label>अटक कधी करण्यात आली: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessContactNos}
                                //value={fieldAttributes.witnessContactNos}
                                onChange={(e) => fieldAttributes.setWitnessContactNos(e.target.value)}
                                placeholder="अटक कधी करण्यात आली"
                                />
                            </td>
                        </tr>
                        <tr id = "70">
                            <td>
                                <label>जबाब: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessContactNos}
                                //value={fieldAttributes.witnessContactNos}
                                onChange={(e) => fieldAttributes.setWitnessContactNos(e.target.value)}
                                placeholder="जबाब"
                                />
                            </td>
                        </tr>

                        <tr id = "80">
                            <th>तपासादरम्यान घडलेल्या घटना</th>
                        </tr>
                        <tr id = "81">
                            <td>
                                <label>तपासादरम्यान घेतलेल्या प्रमुख निर्णयांचे वृतांत:: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessName}
                                //value={fieldAttributes.witnessName}
                                onChange={(e) => fieldAttributes.setWitnessName(e.target.value)}
                                placeholder="तपासादरम्यान घेतलेल्या प्रमुख निर्णयांचे वृतांत:"
                                />
                            </td>
                        </tr>
                        <tr id = "82">
                            <td>
                                <label>इतर माहिती: </label>
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

                        <tr id = "91">
                            <th>तपासाची सद्यस्थिती</th>
                        </tr>
                        <tr id = "92">
                            <td>
                                <label>गुन्ह्याचे निराकरण झाले का: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessName}
                                //value={fieldAttributes.witnessName}
                                onChange={(e) => fieldAttributes.setWitnessName(e.target.value)}
                                placeholder="होय/नाही"
                                />
                            </td>
                        </tr>
                        <tr id = "93">
                            <td>
                                <label>प्रलंबित असलेल्या गोष्टी: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessAddress}
                                //value={fieldAttributes.witnessAddress}
                                onChange={(e) => fieldAttributes.setwitnessAddress(e.target.value)}
                                placeholder="प्रलंबित असलेल्या गोष्टी"
                                />
                            </td>
                        </tr>

                        <tr id = "101">
                            <th>न्यायालयासमोर सादर करण्यासाठी तयार केलेल्या नोंदी</th>
                        </tr>
                        <tr id = "102">
                            <td>
                                <label>(संबंधित पुरावे आणि जबाब यांचा उल्लेख करा.) free text: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                //name={fieldAttributes.witnessName}
                                //value={fieldAttributes.witnessName}
                                onChange={(e) => fieldAttributes.setWitnessName(e.target.value)}
                                placeholder="(संबंधित पुरावे आणि जबाब यांचा उल्लेख करा.)"
                                />
                            </td>
                        </tr>

                        <tr id = "110">
                            <th>तपास अधिकाऱ्याचे नाव व स्वाक्षरी</th>
                        </tr>
                        <tr id = "110">
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
                        <tr id = "112">
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
                        <tr id = "113">
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
                        <tr id = "114">
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

                        <tr id = "120">
                            
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
        
        {/* [पोलीस विभागाचे नाव]
        <br/>[पोलीस ठाण्याचे नाव व पत्ता]
        <br/>गुन्हा क्रमांक: ___________
        <br/>तारीख: ___________
            
            <div>
            <br/><h3>गुन्ह्याचा तपशील:</h3>
                <br/>गुन्हा क्रमांक: ____________________________
                <br/>गुन्हा नोंदविण्याची तारीख: ____________________________
                <br/>गुन्ह्याचा प्रकार: ____________________________
                <br/>संबंधित कायद्याची कलमे: ____________________________
                <br/>फिर्यादीचे नाव व पत्ता: ____________________________
            </div> 
            <div>
            <br/><h3>तपासाची माहिती:</h3>
                <br/>तपास अधिकारी: ____________________________
                <br/>तपासाची सुरुवात कधी झाली: ____________________________
                <br/>घटनास्थळी पोहोचण्याचा वेळ: ____________________________
            </div> 
            <div>
            <br/><h3>घटनास्थळाचे वर्णन:</h3> (घटनास्थळाचा संपूर्ण तपशील, त्यातील वस्तू, परिस्थितीचा उल्लेख करा.)
                <br/>____________________________________________________________________________________
                <br/>____________________________________________________________________________________
            </div>  
            <div>
            <br/><h3>पुरावे:</h3>
                <br/>घटनास्थळावरून जप्त केलेल्या वस्तू: ____________________________
                <br/>सीसीटीव्ही फुटेज/फोटो: ____________________________
                <br/>डॉक्युमेंट्स: ____________________________
            </div> 
            <div>
            <br/><h3>साक्षीदारांचे जबाब:</h3>
                <br/><h4>साक्षीदार 1:</h4>
                <br/>नाव: ____________________________
                <br/>पत्ता: ____________________________
                <br/>जबाब: ____________________________
                <br/><h4>साक्षीदार 2:</h4>
                <br/>नाव: ____________________________
                <br/>पत्ता: ____________________________
                <br/>जबाब: ____________________________
            </div>
            <div>
            <br/><h3>आरोपींचा तपशील:</h3>
                <br/><h4>आरोपी 1:</h4>
                <br/>नाव: ____________________________
                <br/>वय: ____________________________
                <br/>पत्ता: ____________________________
                <br/>अटक कधी करण्यात आली: ____________________________
                <br/>जबाब: ____________________________
                <br/><h4>आरोपी 2:</h4>
                <br/>नाव: ____________________________
                <br/>वय: ____________________________
                <br/>पत्ता: ____________________________
                <br/>अटक कधी करण्यात आली: ____________________________
                <br/>जबाब: ____________________________
            </div>  
            <div>
            <br/><h3>तपासादरम्यान घडलेल्या घटना::</h3>
                <br/>तपासादरम्यान घेतलेल्या प्रमुख निर्णयांचे वृतांत:
                <br/>इतर माहिती:
            </div> 
            <div>
            <br/><h3>तपासाची सद्यस्थिती:</h3>
                <br/>गुन्ह्याचे निराकरण झाले का?: [होय/नाही]
                <br/>प्रलंबित असलेल्या गोष्टी: ____________________________
            </div> 
            <div>
            <br/><h3>न्यायालयासमोर सादर करण्यासाठी तयार केलेल्या नोंदी:</h3> (संबंधित पुरावे आणि जबाब यांचा उल्लेख करा.)
                <br/>____________________________________________________________________________________
                <br/>____________________________
            </div> 
            <div>
            <br/><h3>तपास अधिकाऱ्याचे नाव व स्वाक्षरी:</h3>
                <br/>नाव: ____________________________
                <br/>पदवी/हुद्दा: ____________________________
                <br/>बॅज क्रमांक: ____________________________
                <br/>स्वाक्षरी: ____________________________
            </div> */}
      </div></></>
  );
};

export default CaseDiary;
