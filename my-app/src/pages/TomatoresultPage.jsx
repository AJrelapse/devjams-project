import React from "react";
import "../styles/App.css";
import "../styles/pages.css";
import Navbar from "../components/navbar";
import TomatoresultDisplay from "../components/tomatoResult";
import Footer from "../components/footer";
import {useNavigate,useLocation} from "react-router-dom";

function TomatoResult() {
  const location = useLocation();
  console.log(location);
  const res = location.state.result;
  return (
    <div className="App">
      <Navbar />
      <TomatoresultDisplay result={res}/>
      <Footer />
    </div>
  );
}

export default TomatoResult;