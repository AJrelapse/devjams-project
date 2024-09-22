import React from "react";
import "../styles/App.css";
import "../styles/pages.css";
import Navbar from "../components/navbar";
import YieldResultPage from "../components/yieldResult";
import Footer from "../components/footer";
import {useNavigate,useLocation} from "react-router-dom";


function YieldResult() {
  const location = useLocation();
  console.log(location);
  const res = location.state.result;
  return (
    <div className="App">
      <Navbar />
      <YieldResultPage result={res}/>
      <Footer />
    </div>
  );
}

export default YieldResult;