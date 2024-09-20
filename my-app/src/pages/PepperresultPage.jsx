import React from "react";
import "../styles/App.css";
import "../styles/pages.css";
import Navbar from "../components/navbar";
import {useNavigate} from "react-router-dom";
import PepperresultDisplay from "../components/potatoResult";
import Footer from "../components/footer";

const res="Hello";
function PepperResult() {
  return (
    <div className="App">
      <Navbar />
      <PepperresultDisplay result={res}/>
      <Footer />
    </div>
  );
}

export default PepperResult;