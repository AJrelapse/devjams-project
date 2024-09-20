import React from "react";
import "../styles/App.css";
import "../styles/pages.css";
import Navbar from "../components/navbar";
import {useNavigate} from "react-router-dom";
import PotatoresultDisplay from "../components/potatoResult";
import Footer from "../components/footer";


function PotatoResult() {
  return (
    <div className="App">
      <Navbar />
      <PotatoresultDisplay />
      <Footer />
    </div>
  );
}

export default PotatoResult;