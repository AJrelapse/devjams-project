import React from "react";
import "../styles/App.css";
import "../styles/pages.css";
import Navbar from "../components/navbar";
import {useNavigate} from "react-router-dom";
import UploadAndDisplayImage from "../components/imageUpload";


function Tomato() {
  return (
    <div className="App">
      <Navbar />
      <UploadAndDisplayImage/>
    </div>
  );
}

export default Tomato;