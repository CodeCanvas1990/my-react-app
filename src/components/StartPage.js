import Reac, { useState } from 'react';
import '../../src/App.css';
import { useNavigate } from "react-router-dom";

const StartPage = () => {

    //const [transcript, setTranscript] = useState("");
    const navigate = useNavigate();
    const [stationName, setStationName] = useState("");
    const [stationArea, setStationArea] = useState("");
    const [reportNumber, setReportNumber] = useState("");
    
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [reporterHusbandFatherDetails, setReporterHusbandFatherDetails] = useState("");

    const [contactNumber, setContactNumber] = useState("");
    const [incidentDateTime, setIncidentDateTime] = useState("");
    const [incidentLocation, setIncidentLocation] = useState("");
    const [incidentType, setIncidentType] = useState("");
    const [incidentNumber, setIncidentNumber] = useState("");
    const [incidentIPCNos, setIncidentIPCNos] = useState("");

    const [accusedName, setAccusedName] = useState("");
    const [accusedAddress, setAccusedAddress] = useState("");
    const [accusedAge, setAccusedAge] = useState("");
    const [accusedBodyDetails, setAccusedBodyDetails] = useState("");

    const [witnessName, setWitnessName] = useState("");
    const [witnessAddress, setwitnessAddress] = useState("");
    const [witnessContactNos, setWitnessContactNos] = useState("");
  
    const [officerName, setOfficerName] = useState("");
    const [officerDesignation, setOfficerDesignation] = useState("");
    const [officerEmployeeNos, setOfficerEmployeeNos] = useState("");
    const [officerStationName, setOfficerStationName] = useState("");

    const [investigationStartDate, setInvestigationStartDate] = useState("");
    const [investigationOfficeName, setInvestigationOfficerName] = useState("");
    const [locationDetails, setLocationDetails] = useState("");

    const fieldAttributes = {
        stationNameStartPage: stationName,
        stationAreaStartPage: stationArea,
        reportNumberStartPage: reportNumber,
        dateStartPage: date,
        timeStartPage: time,
        nameStartPage: name,
        ageStartPage: age,
        addressStartPage: address,
        reporterHusbandFatherDetailsStartPage: reporterHusbandFatherDetails,
        contactNumberStartPage: contactNumber,
        incidentDateTimeStartPage: incidentDateTime,
        incidentLocationStartPage: incidentLocation,
        incidentTypeStartPage: incidentType,
        incidentNumberStartPage: incidentNumber,
        incidentIPCNosStartPage: incidentIPCNos,
        accusedNameStartPage: accusedName,
        accusedAddressStartPage: accusedAddress,
        accusedAgeStartPage: accusedAge,
        accusedBodyDetailsStartPage: accusedBodyDetails,
        witnessNameStartPage: witnessName,
        witnessAddressStartPage: witnessAddress,
        witnessContactNosStartPage: witnessContactNos,
        officerNameStartPage: officerName,
        officerDesignationStartPage: officerDesignation,
        officerEmployeeNosStartPage: officerEmployeeNos,
        officerStationNameStartPage: officerStationName,
        investigationStartDateStartPage: investigationStartDate,
        investigationOfficeNameStartPage: investigationOfficeName,
        locationDetailsStartPage: locationDetails,
      };

    const handleChange = (event) => {
        const lines = event.target.value.split("\n");
        if (lines.length <= 5000) {
            setLocationDetails(event.target.value);
        } else {
          alert("You can only enter up to 5000 lines.");
        }
      };

    const handleNavigate = () => {
        navigate("/FirstInformationReport", { state: fieldAttributes });
    };

    return (
        <><>
        <div>
            <div className='table'>
                <table>
                    <tbody>
                        <tr id = "0">
                            <th>स्टेशन तपशील</th>
                        </tr>
                        <tr id = "1">
                            <td>
                                <label>पोलीस विभागाचे नाव: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={stationArea}
                                value={stationArea}
                                onChange={(e) => stationArea(e.target.value)}
                                placeholder="स्टेशन विभागाचे नाव"
                                />
                            </td>
                        </tr>
                        <tr id = "2">
                            <td>
                                <label>पोलीस ठाण्याचे नाव व पत्ता: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={stationName}
                                value={stationName}
                                onChange={(e) => setStationName(e.target.value)}
                                placeholder="ठाण्याचे नाव व पत्ता"
                                />
                            </td>
                        </tr>
                        <tr id = "3">
                            <td>
                                <label>क्रमांक: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={reportNumber}
                                value={reportNumber}
                                onChange={(e) => setReportNumber(e.target.value)}
                                placeholder="क्रमांक"
                                />
                            </td>
                        </tr>
                        <tr id = "4">
                            <td>
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
                        </tr>
                        <tr id = "5">
                            <td>
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
                        </tr>
                        <tr id = "6">
                            <th>तक्रारदार/माहिती/फिर्यादीचे देणाऱ्या व्यक्तीचे तपशील</th>
                        </tr>
                        <tr id = "7">
                            <td>
                                <label>नाव: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={name}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="नाव"
                                />
                            </td>
                        </tr>
                        <tr id = "8">
                            <td>
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
                        </tr>
                        <tr id = "9">
                            <td>
                                <label>वडिलांचे/पतीचे नाव: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={reporterHusbandFatherDetails}
                                value={reporterHusbandFatherDetails}
                                onChange={(e) => setAge(e.target.value)}
                                placeholder="वडिलांचे/पतीचे नाव"
                                />
                            </td>
                        </tr>
                        <tr id = "10">
                            <td>
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
                        </tr>
                        <tr id = "11">
                            <td>
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
                        </tr>
                        <tr id = "20">
                            <th>घटनेचे/प्रकरणाचा/गुन्ह्याचा तपशील</th>
                        </tr>
                        <tr id = "21">
                            <td>
                                <label>क्रमांक: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={reportNumber}
                                value={reportNumber}
                                onChange={(e) => setReportNumber(e.target.value)}
                                placeholder="क्रमांक"
                                />
                            </td>
                        </tr>
                        <tr id = "22">
                            <td>
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
                        </tr>
                        <tr id = "23">
                            <td>
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
                        </tr>
                        <tr id = "24">
                            <td>
                                <label>गुन्ह्याचा प्रकार: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={incidentType}
                                value={incidentType}
                                onChange={(e) => setIncidentType(e.target.value)}
                                placeholder="गुन्ह्याचा प्रकार"
                                />
                            </td>
                        </tr>
                        <tr id = "25">
                            <td>
                                <label>संबंधित कायद्याची कलमे: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={incidentNumber}
                                value={incidentNumber}
                                onChange={(e) => setIncidentNumber(e.target.value)}
                                placeholder="संबंधित कायद्याची कलमे"
                                />
                            </td>
                        </tr>
                        <tr id = "26">
                            <td>
                                <label>भारतीय दंड संहिता (IPC): </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={incidentIPCNos}
                                value={incidentIPCNos}
                                onChange={(e) => setIncidentIPCNos(e.target.value)}
                                placeholder="भारतीय दंड संहिता (IPC)"
                                />
                            </td>
                        </tr>
                        <tr id = "30">
                            <th>आरोपींचे तपशील</th>
                        </tr>
                        <tr id = "31">
                            <td>
                                <label>नाव: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={accusedName}
                                value={accusedName}
                                onChange={(e) => setAccusedName(e.target.value)}
                                placeholder="नाव"
                                />
                            </td>
                        </tr>
                        <tr id = "32">
                            <td>
                                <label>वय: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={accusedAge}
                                value={accusedAge}
                                onChange={(e) => setAccusedAge(e.target.value)}
                                placeholder="वय"
                                />
                            </td>
                        </tr>
                        <tr id = "33">
                            <td>
                                <label>पत्ता: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={accusedAddress}
                                value={accusedAddress}
                                onChange={(e) => setAccusedAddress(e.target.value)}
                                placeholder="पत्ता"
                                />
                            </td>
                        </tr>
                        <tr id = "34">
                            <td>
                                <label>शारीरिक वर्णन: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={accusedBodyDetails}
                                value={accusedBodyDetails}
                                onChange={(e) => setAccusedBodyDetails(e.target.value)}
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
                                name={witnessName}
                                value={witnessName}
                                onChange={(e) => setWitnessName(e.target.value)}
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
                                name={witnessAddress}
                                value={witnessAddress}
                                onChange={(e) => setwitnessAddress(e.target.value)}
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
                                name={witnessContactNos}
                                value={witnessContactNos}
                                onChange={(e) => setWitnessContactNos(e.target.value)}
                                placeholder="संपर्क क्रमांक"
                                />
                            </td>
                        </tr>
                        <tr id = "50">
                            <th>गुन्ह्याच्या तपासाचा तपशील</th>
                        </tr>
                        <tr id = "51">
                            <td>
                                <label>तपासाची सुरुवात कधी झाली: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={investigationStartDate}
                                value={investigationStartDate}
                                onChange={(e) => setInvestigationStartDate(e.target.value)}
                                placeholder="तपासाची सुरुवात कधी झाली"
                                />
                            </td>
                        </tr>
                        <tr id = "52">
                            <td>
                                <label>तपास अधिकारी: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={investigationOfficeName}
                                value={investigationOfficeName}
                                onChange={(e) => setInvestigationOfficerName(e.target.value)}
                                placeholder="तपास अधिकारी"
                                />
                            </td>
                        </tr>
                        <tr id = "60">
                            <th>पोलीस अधिकाऱ्याची तपशील</th>
                        </tr>
                        <tr id = "61">
                            <td>
                                <label>नाव: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={officerName}
                                value={officerName}
                                onChange={(e) => setOfficerName(e.target.value)}
                                placeholder="नाव"
                                />
                            </td>
                        </tr>
                        <tr id = "62">
                            <td>
                                <label>पदवी/हुद्दा: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={officerDesignation}
                                value={officerDesignation}
                                onChange={(e) => setOfficerDesignation(e.target.value)}
                                placeholder="पदवी/हुद्दा"
                                />
                            </td>
                        </tr>
                        <tr id = "63">
                            <td>
                                <label>बॅज क्रमांक: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={officerEmployeeNos}
                                value={officerEmployeeNos}
                                onChange={(e) => setOfficerEmployeeNos(e.target.value)}
                                placeholder="बॅज क्रमांक"
                                />
                            </td>
                        </tr>
                        <tr id = "64">
                            <td>
                                <label>पोलीस ठाण्याचे नाव: </label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name={officerStationName}
                                value={officerStationName}
                                onChange={(e) => setOfficerStationName(e.target.value)}
                                placeholder="पोलीस ठाण्याचे नाव"
                                />
                            </td>
                        </tr>
                        <tr id = "70">
                            <th>घटनास्थळाचे वर्णन</th>
                        </tr>
                        <tr id = "71">
                            <td>
                                <label>घटनेचे वर्णन: </label>
                            </td>
                            <td>
                                <div style={{ marginTop: "20px" }}>
                                    <textarea
                                        value={locationDetails}
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
                        <tr id = "100">
                            <td></td>
                            <td>
                                <button onClick={handleNavigate} style={{ padding: "10px 20px" }}>
                                    Next
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </></>
    );
}
export default StartPage;