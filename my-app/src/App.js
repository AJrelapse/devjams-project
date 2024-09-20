import React from "react";
import "./styles/App.css";
import "./styles/pages.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes

import Home from "./pages/Home";
import Tomato from "./pages/tomato";
import Potato from "./pages/potato";
import Pepper from "./pages/pepper";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> {/* Wrap Route components inside Routes */}
          <Route path="/" element={<Home />} /> {/* Replace component with element */}
          <Route path="/tomato" element={<Tomato />} /> {/* Same here */}
          <Route path="/potato" element={<Potato />} /> 
          <Route path="/pepper" element={<Pepper />} /> 
        </Routes>
      </Router>
      
      {/* <Login />
      <Signup/> */}
    </div>
  );
}

export default App;
