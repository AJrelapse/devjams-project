import React from "react";
import "../styles/App.css";
import "../styles/pages.css";
import Navbar from "../components/navbar";
import PepperresultDisplay from "../components/potatoResult";
import Footer from "../components/footer";
import {useNavigate,useLocation} from "react-router-dom";


function PepperResult() {
  const location = useLocation();
  console.log(location);
  const res = location.state.result;
  return (
    <div className="App">
      <Navbar />
      <PepperresultDisplay result={res}/>
      <Footer />
    </div>
  );
}

export default PepperResult;