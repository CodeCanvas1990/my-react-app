import { useState } from 'react';
import '../../src/App.css';
import SpeechToText from './SpeechToText'

const HomePagewithSpeech = () => {

  const [language] = useState("mr-IN");


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


  const stationNameString = "स्टेशन: [stationName]";
  const reportNameString = "अहवाल क्रमांक: [reportName]";
  const dateString = "तारीख: [date]";
  const timeString = "वेळ: [time]";
  const cNameString = "तक्रारदाराचे नाव: [name]";
  const ageString = "वय: [age]";
  const addressString = "पत्ता: [address]";
  const contactNumberString = "संपर्क क्रमांक: [contactNumber]";
  const incidentDateTimeString = "घटनेची तारीख व वेळ: [incidentDateTime]";
  const incidentLocationString = "घटनेचे ठिकाण: [incidentLocation]";
  const complaintDetailsString = "तक्रारीचा तपशील: [complaintDetails]";
  // Replace placeholder [name] with input value
  const updatedStationName = stationNameString.replace("[stationName]", stationName || "Guest");
  const updatedReportName = reportNameString.replace("[reportName]", reportName || "Guest");
  const updatedDate = dateString.replace("[date]", date || "Guest");
  const updatedTime = timeString.replace("[time]", time || "Guest");
  const updatedCName = cNameString.replace("[name]", name || "Guest");
  const updatedAge = ageString.replace("[age]", age || "Guest");
  const updatedAddress = addressString.replace("[address]", address || "Guest");
  const updatedContactNumber = contactNumberString.replace("[contactNumber]", contactNumber || "Guest");
  const updatedIncidentDateTime = incidentDateTimeString.replace("[incidentDateTime]", incidentDateTime || "Guest");
  const updatedInidentLocation = incidentLocationString.replace("[incidentLocation]", incidentLocation || "Guest");
  const updatedIncidentDetails = complaintDetailsString.replace("[complaintDetails]", complaintDetails || "Guest");

  const data = [
    {name: stationNameString, value: updatedStationName},
    {name: reportNameString, value: updatedReportName},
    {name: dateString, value: updatedDate},
    {name: timeString, value: updatedTime},
    {name: cNameString, value: updatedCName},
    {name: ageString, value: updatedAge},
    {name: addressString, value: updatedAddress},
    {name: contactNumberString, value: updatedContactNumber},
    {name: incidentDateTimeString, value: updatedIncidentDateTime},
    {name: incidentLocationString, value: updatedInidentLocation},
    {name: complaintDetailsString, value: updatedIncidentDetails},
  ]


  return (
    <><div className='table'>
        <table>
                <tr>
                    <th>Feild</th>
                    <th>Value</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>
                            <label>{val.name} </label>
                            </td>
                            <td>{val.value}</td>
                            <td>{val.gender}</td>
                        </tr>
                    )
                })}
            </table>
      </div><>
    <div style={{ textAlign: "left", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Select Language:
          <select
            value={language}
            onChange={(e) => SpeechToText.setLanguage(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            <option value="hi-IN">Hindi</option>
            <option value="mr-IN">Marathi</option>
          </select>
        </label>
      </div>

      {/* Input field */}
      <label>स्टेशन: </label>
      <input
        type="text"
        placeholder="स्टेशन"
        value={stationName}
        onChange={(e) => setStationName(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }} />

      <br />
      <label>अहवाल क्रमांक: </label>
      <input
        type="text"
        placeholder="अहवाल क्रमांक"
        value={reportName}
        onChange={(e) => setReportName(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }} />
      <br />
      <label>तारीख: </label>
      <input
        type="text"
        placeholder="तारीख"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }} />
      <br />
      <label>वेळ: </label>
      <input
        type="text"
        placeholder="वेळ"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }} />
      <br />
      <label>तक्रारदाराचे नाव: </label>
      <input
        type="text"
        placeholder="तक्रारदाराचे नाव"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }} />
      <br />
      <label>वय: </label>
      <input
        type="text"
        placeholder="वय"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }} />
      <br />
      <label>पत्ता: </label>
      <input
        type="text"
        placeholder="पत्ता"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }} />
      <br />
      <label>संपर्क क्रमांक: </label>
      <input
        type="text"
        placeholder="संपर्क क्रमांक"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }} />
      <br />
      <label>घटनेची तारीख व वेळ: </label>
      <input
        type="text"
        placeholder="घटनेची तारीख व वेळ"
        value={incidentDateTime}
        onChange={(e) => setIncidentDateTime(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }} />
      <br />
      <label>घटनेचे ठिकाण: </label>
      <input
        type="text"
        placeholder="घटनेचे ठिकाण"
        value={incidentLocation}
        onChange={(e) => setIncidentLocation(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }} />
      <br />
      <label>तक्रारीचा तपशील: </label>
      <input
        type="text"
        placeholder="तक्रारीचा तपशील"
        value={complaintDetails}
        onChange={(e) => setComplaintDetails(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }} />
      <br />
    </div><div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
        {/* Display Updated String */}
        <p style={{ fontSize: "20px", marginTop: "20px" }}>{updatedStationName}  {updatedReportName}</p>
        <p style={{ fontSize: "20px", marginTop: "20px" }}>{updatedTime}  {updatedDate}</p>
        <p style={{ fontSize: "20px", marginTop: "20px" }}>{updatedCName}   {updatedAge}</p>
        <p style={{ fontSize: "20px", marginTop: "20px" }}>{updatedAddress}   {updatedContactNumber}</p>
        <p style={{ fontSize: "20px", marginTop: "20px" }}>{updatedIncidentDateTime}   {updatedInidentLocation}</p>
        <p style={{ fontSize: "20px", marginTop: "20px" }}>{updatedIncidentDetails}</p>
      </div></></>
  );
};
export default HomePagewithSpeech;