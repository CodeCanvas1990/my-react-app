
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeftPanel from './components/LeftPanel';
import HomePage from './components/HomePage';
import SpeechToText from './components/SpeechToText';
import HomePagewithSpeech from './components/HomePagewithSpeech';
import MainPageFinal from './components/MainPageFinal';
import MainwithSpeechtoText from './components/MainwithSpeechtoText.js';
import StartPage from './components/StartPage'


const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Left Panel */}
        <LeftPanel />
        
        {/* Main Content Area */}
        <div style={{ marginLeft: '200px', padding: '20px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<SpeechToText />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/SpeechToText" element={<SpeechToText />} />
            <Route path="/HomePagewithSpeech" element={<HomePagewithSpeech />} />
            <Route path="/MainPageFinal" element={<MainPageFinal />} />
            <Route path="/MainwithSpeechtoText" element={<MainwithSpeechtoText />} />
            <Route path="/StartPage" element={<StartPage />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;