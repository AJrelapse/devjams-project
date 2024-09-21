import React from 'react';
import "../styles/yield.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Yield() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="container1 cards1">
        <h1>Hello</h1>

          <button className="form-submit-btn" type="submit" onClick={async() => {
            navigate("/YieldPage")
          }}>            Submit
          </button>
      </div>
  );
}

export default Yield;
