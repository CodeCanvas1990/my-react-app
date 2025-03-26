import Reac, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeftPanel from './components/LeftPanel';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import SpeechToText from './components/SpeechToText';
import FIR from './components/FIR';
import MultiState from './components/MultiState.js';
import HomePagewithSpeech from './components/HomePagewithSpeech';
import MainPageFinal from './components/MainPageFinal';
import DynamicPlaceholdersTable from './components/DynamicPlaceholdersTable';
import MainwithSpeechtoText from './components/MainwithSpeechtoText.js';
import DynamicTable from './components/DynamicTable';
import FirstInformationReport from './components/FirstInformationReport';
import ChargeSheet from './components/ChargeSheet';
import CaseDiary from './components/CaseDiary';
import Tipan from './components/Tipan';
import StartPage from './components/StartPage'
import Remand from './components/Remand';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Left Panel */}
        <LeftPanel />
        
        {/* Main Content Area */}
        <div style={{ marginLeft: '200px', padding: '20px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/Form1" element={<Form1 />} />
            <Route path="/Form2" element={<Form2 />} />
            <Route path="/Form3" element={<Form3 />} />
            <Route path="/FIR" element={<FIR />} />
            <Route path="/SpeechToText" element={<SpeechToText />} />
            <Route path="/MultiState" element={<MultiState />} />
            <Route path="/HomePagewithSpeech" element={<HomePagewithSpeech />} />
            <Route path="/MainPageFinal" element={<MainPageFinal />} />
            <Route path="/DynamicPlaceholdersTable" element={<DynamicPlaceholdersTable />} />
            <Route path="/MainwithSpeechtoText" element={<MainwithSpeechtoText />} />
            <Route path="/DynamicTable" element={<DynamicTable />} />
            <Route path="/FirstInformationReport" element={<FirstInformationReport />} />
            <Route path="/ChargeSheet" element={<ChargeSheet />} />
            <Route path="/CaseDiary" element={<CaseDiary />} />
            <Route path="/Tipan" element={<Tipan />} />
            <Route path="/StartPage" element={<StartPage />} />
            <Route path="/Remand" element={<Remand />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;