import React from 'react';
import "../styles/yield.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Map() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="container1 cards1">
        <h1>Map</h1>

          <button className="form-submit-btn" type="submit" onClick={async() => {
            navigate("/MapPage")
          }}>            Submit
          </button>
      </div>
  );
}

export default Map;