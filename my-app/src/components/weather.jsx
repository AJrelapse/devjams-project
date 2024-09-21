import React from 'react';
import "../styles/yield.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Weather() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="container1 cards1">
        <h1>Check Weather</h1>

          <button className="form-submit-btn" type="submit" onClick={async() => {
            navigate("/weather")
          }}>            Submit
          </button>
      </div>
  );
}

export default Weather;
