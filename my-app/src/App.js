import React from "react";
import "./App.css";
import "./pages.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes

import Home from "./pages/Home";
import Tomato from "./pages/tomato";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> {/* Wrap Route components inside Routes */}
          <Route path="/" element={<Home />} /> {/* Replace component with element */}
          <Route path="/tomato" element={<Tomato />} /> {/* Same here */}
        </Routes>
      </Router>
      
      {/* <Login />
      <Signup/> */}
    </div>
  );
}

export default App;
