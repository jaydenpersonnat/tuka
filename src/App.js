import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FreqChar from "./components/freqchar";
import Players from "./components/players";

/** 
Setup
-----
- Run npm install to install dependencies 
- Run npm start to start the development server 

There are two component files, called freqchar and players. Read each for 
the implementation specification. 
**/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FreqChar />} />
        <Route path="/players" element={<Players />} />
      </Routes>
    </Router>
  );
}

export default App;
