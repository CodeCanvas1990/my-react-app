import { useState } from 'react';
import '../../src/App.css';

const MainwithSpeechtoText = () => {

  const [language, setLanguage] = useState("mr-IN");
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);

  const [selectedField, setSelectedField] = useState(""); // To track the selected field (name, age, city)
    const [inputValue, setInputValue] = useState(""); // To track the input value

  const [stationName, setStationName] = useState("");
  const [reportName, setReportName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [incidentDateTime, setIncidentDateTime] = useState("");
  const [incidentLocation, setIncidentLocation] = useState("");
  const [complaintDetails, setComplaintDetails] = useState("");

  // Replace placeholder [name] with input value
 
    const startListening = () => {
        //console.info("value is " + id);
        if (!("webkitSpeechRecognition" in window)) {
            alert("Speech Recognition API is not supported in your browser.");
            return;
        }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = language; // Set language (Hindi or Marathi)
    recognition.continuous = false; // Stop when input ends
    recognition.interimResults = true;

    recognition.onstart = () => {
        //console.info("id is " + e.target.id)
        setListening(true);
        setTranscript("");
        /*setListening1(true);
        setTranscript1("");*/
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
        setListening(false);
    };

    recognition.start();
    };


    return (
        <><>
        <div>
               {/* Dropdown to select field */}
            <div style={{ marginBottom: "10px" }}>
                <label htmlFor="fieldDropdown">Select Field: </label>
                <select
                    id="fieldDropdown"
                    value={selectedField}
                    onChange={(e) => setSelectedField(e.target.value)}
                >
                    <option value="">-- Select Field --</option>
                    <option value="name">स्टेशन</option>
                    <option value="age">अहवाल क्रमांक</option>
                    <option value="city">तारीख</option>
                    <option value="city">वेळ</option>
                    <option value="city">तक्रारदाराचे नाव</option>
                    <option value="city">वय</option>
                    <option value="city">पत्ता</option>
                    <option value="city">संपर्क क्रमांक</option>
                    <option value="city">घटनेची तारीख व वेळ</option>
                    <option value="city">घटनेचे ठिकाण</option>
                    <option value="city">तक्रारीचा तपशील</option>
                </select>
            </div>

            {/* Input box to enter new value */}
            <div style={{ marginBottom: "10px" }}>
                <label htmlFor="inputValue">Enter Value: </label>
                <input
                    id="inputValue"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <div>
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
            </div>
            <></>
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
                            <option value="en-IN">English</option>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr id = "1">
                            <><td>
                                <label>स्टेशन: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={stationName}
                                value={transcript}
                                onChange={(e) => setStationName(e.target.value)}
                                placeholder="स्टेशन"
                                />
                            </td>
                            </>
                        </tr>
                        <tr id = "2">
                            <><td>
                                <label>अहवाल क्रमांक: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={reportName}
                                value={transcript}
                                onChange={(e) => setReportName(e.target.value)}
                                placeholder="स्अहवाल क्रमांक"
                                />
                            </td>
                            </>
                        </tr>
                        <tr id = "3">
                            <><td>
                                <label>तारीख: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={date}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                placeholder="तारीख"
                                />
                            </td>
                            <td>
                            </td></>
                        </tr>
                        <tr id = "4">
                            <><td>
                                <label> वेळ : </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={time}
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                placeholder="वेळ"
                                />
                            </td>
                            <td>
                            </td></>
                        </tr>
                        <tr id = "5">
                            <><td>
                                <label>तक्रारदाराचे नाव: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={name}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="स्तक्रारदाराचे नाव"
                                />
                            </td>
                            <td>
                            </td></>
                        </tr>
                        <tr id = "6">
                            <><td>
                                <label>वय: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={age}
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                placeholder="वय"
                                />
                            </td>
                            <td>
                            </td></>
                        </tr>
                        <tr id = "7">
                            <><td>
                                <label>पत्ता: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={address}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="पत्ता"
                                />
                            </td>
                            <td>
                            </td></>
                        </tr>
                        <tr id = "8">
                            <><td>
                                <label>संपर्क क्रमांक: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={contactNumber}
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                                placeholder="संपर्क क्रमांक"
                                />
                            </td>
                            <td>
                            </td></>
                        </tr>
                        <tr id = "9">
                            <><td>
                                <label>घटनेची तारीख व वेळ: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={incidentDateTime}
                                value={incidentDateTime}
                                onChange={(e) => setIncidentDateTime(e.target.value)}
                                placeholder="घटनेची तारीख व वेळ"
                                />
                            </td>
                            <td>
                            </td></>
                        </tr>
                        <tr id = "10">
                            <><td>
                                <label>घटनेचे ठिकाण: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={incidentLocation}
                                value={incidentLocation}
                                onChange={(e) => setIncidentLocation(e.target.value)}
                                placeholder="घटनेचे ठिकाण"
                                />
                            </td>
                            <td>
                            </td></>
                        </tr>
                        <tr id = "11">
                            <><td>
                                <label>तक्रारीचा तपशील: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={complaintDetails}
                                value={complaintDetails}
                                onChange={(e) => setComplaintDetails(e.target.value)}
                                placeholder="तक्रारीचा तपशील"
                                />
                            </td>
                            <td>
                            </td></>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <h3>Dynamic Placeholders:</h3>
                </div>
            </div>
        </div>
        </></>
    );
}
export default MainwithSpeechtoText;