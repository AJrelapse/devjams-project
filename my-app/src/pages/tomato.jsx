import React from "react";
import "../App.css";
import "../pages.css";
import Navbar from "../components/navbar";
import {useNavigate} from "react-router-dom";


function Tomato() {
    const history=useNavigate();
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default Tomato;