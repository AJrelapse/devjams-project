import React from "react";
import "../styles/map.css";
import MapChart from "../components/mapIndia";
import Navbar from "../components/navbar";

function MapPage() {
  return (
    <div>
        <Navbar /> 
        <MapChart />
    </div>
  );
}

export default MapPage;
