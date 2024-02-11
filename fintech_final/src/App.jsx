import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import RoundUpSavings from "./components/RoundUpSavings";
import './index.css';
import Portfolio from "./components/Portfolio";
import CompoundInterestCalculator from "./components/Compound";
import Rewards from "./components/Rewards";
import Education from "./components/Education";
import Quiz from "./components/Quiz";
import Leaderboard from "./feature/leaderboard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Router>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/savings" element={<RoundUpSavings />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<CompoundInterestCalculator />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/education" element={<Education />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
