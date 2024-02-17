import './App.css';
import  { BrowserRouter as Router, Routes, Route } from  'react-router-dom';
import Landing from './Landing.js';
import Success from './Success.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;