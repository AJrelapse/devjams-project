import React from "react";
import "../styles/App.css";
import "../styles/pages.css";
import Navbar from "../components/navbar";
import PotatoresultDisplay from "../components/potatoResult";
import Footer from "../components/footer";

const res="Hello";
function PotatoResult() {
  return (
    <div className="App">
      <Navbar />
      <PotatoresultDisplay result={res}/>
      <Footer />
    </div>
  );
}

export default PotatoResult;