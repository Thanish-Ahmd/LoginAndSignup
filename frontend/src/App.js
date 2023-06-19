import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={ <Login /> }  />
          <Route path="/signup" element={ <Signup /> }  />
          <Route path="/" element={ <Dashboard /> }  />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
