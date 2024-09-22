import React from "react";
import "../styles/App.css";
import "../styles/pages.css";
import Navbar from "../components/navbar";
import YieldPredictPage from "../components/yieldPredictor";
import Footer from "../components/footer";

function YieldPredict() {
  return (
    <div className="App">
      <Navbar />
      <YieldPredictPage />
      <Footer />
    </div>
  );
}

export default YieldPredict;