import React from "react";
import "../styles/App.css";
import "../styles/pages.css";
import Navbar from "../components/navbar";
import {useNavigate} from "react-router-dom";
import TomatoresultDisplay from "../components/tomatoResult";
import Footer from "../components/footer";

const res="early";
function TomatoResult() {
  return (
    <div className="App">
      <Navbar />
      <TomatoresultDisplay result={res}/>
      <Footer />
    </div>
  );
}

export default TomatoResult;