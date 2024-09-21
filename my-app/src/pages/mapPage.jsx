import React from "react";
import "../styles/map.css";
import MapChart from "../components/mapIndia";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function MapPage() {
  return (
    <div>
        <Navbar /> 
      <MapChart />
      <Footer/>
    </div>
  );
}

export default MapPage;
