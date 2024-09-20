import React from "react";
import "./styles/App.css";
import "./styles/pages.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Route

import Home from "./pages/Home";
import Tomato from "./pages/tomato";
import Potato from "./pages/potato";
import Pepper from "./pages/pepper";
import TomatoResult from "./pages/TomatoresultPage";
import PotatoResult from "./pages/PotatoresultPage";
import PepperResult from "./pages/PepperresultPage";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes> {/* Wrap Route components inside Routes */}
          <Route path="/" element={<Home />} /> {/* Replace component with element */}
          <Route path="/tomato" element={<Tomato />} /> {/* Same here */}
          <Route path="/potato" element={<Potato />} /> 
          <Route path="/pepper" element={<Pepper />} />
          <Route path="/tomatoresultPage" element={<TomatoResult />} />
          <Route path="/potatoresultPage" element={<PotatoResult />} />
          <Route path="/pepperresultPage" element={<PepperResult />} />



        </Routes>
      </Router>
      
      {/* <Login />
      <Signup/> */}
    </div>
  );
}

export default App;
