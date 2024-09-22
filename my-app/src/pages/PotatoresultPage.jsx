import React from "react";
import "../styles/App.css";
import "../styles/pages.css";
import Navbar from "../components/navbar";
import {useNavigate,useLocation} from "react-router-dom";
import PotatoresultDisplay from "../components/potatoResult";
import Footer from "../components/footer";

// const res="Hello";

function PotatoResult() {
  const location = useLocation();
  console.log(location);
  const res = location.state.result;
  return (
    <div className="App">
      <Navbar />
      <PotatoresultDisplay result={res}/>
      <Footer />
    </div>
  );
}

export default PotatoResult;