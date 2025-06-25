import React from 'react';
import { Link } from 'react-router-dom';

const LeftPanel = () => {
  return (
    <div style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '10px', height: '100vh' }}>
      <h3>Menu</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {/*<li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/Form1">Form1</Link></li>
        <li><Link to="/Form2">Form2</Link></li>
        <li><Link to="/Form3">Form3</Link></li>
        <li><Link to="/FIR">FIS</Link></li>
        <li><Link to="/SpeechToText">SpeechToText</Link></li>
        <li><Link to="/MultiState">MultiState</Link></li>
        <li><Link to="/HomePagewithSpeech">HomePagewithSpeech</Link></li>
        <li><Link to="/MainPageFinal">MainPageFinal</Link></li>
        <li><Link to="/DynamicPlaceholdersTable">DynamicPlaceholdersTable</Link></li>
        <li><Link to="/MainwithSpeechtoText">MainwithSpeechtoText</Link></li>
        <li><Link to="/DynamicTable">DynamicTable</Link></li> 
        <li><Link to="/StartPage">StartPage</Link></li>
        <li><Link to="/FirstInformationReport">FirstInformationReport</Link></li>
        <li><Link to="/ChargeSheet">ChargeSheet</Link></li>
        <li><Link to="/CaseDiary">CaseDiary</Link></li>
        <li><Link to="/Tipan">Tipan</Link></li>
        <li><Link to="/Remand">Remand</Link></li>
        */}
		<li><Link to="/SpeechToText">SpeechToText</Link></li>
        
        
      </ul>
    </div>
  );
};

export default LeftPanel;