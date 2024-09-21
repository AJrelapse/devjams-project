import React from "react";
import "../styles/App.css";
import "../styles/pages.css";
import Navbar from "../components/navbar";
import YieldResultPage from "../components/yieldResult";
import Footer from "../components/footer";


function YieldResult() {
  return (
    <div className="App">
      <Navbar />
      <YieldResultPage />
      <Footer />
    </div>
  );
}

export default YieldResult;