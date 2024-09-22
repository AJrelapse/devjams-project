import React from "react";
import "../styles/App.css";
import "../styles/pages.css";
import Navbar from "../components/navbar";
import UploadAndDisplayImage from "../components/PepperimageUpload";
import Footer from "../components/footer";


function Pepper() {
  return (
    <div className="App">
      <Navbar />
      <UploadAndDisplayImage/>
      <Footer/>
    </div>
  );
}

export default Pepper;