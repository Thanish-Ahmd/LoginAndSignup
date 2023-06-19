import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Login /> }  />
          <Route path="/signup" element={ <Signup /> }  />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
