import React from "react";
import "../styles/yield.css";
import { useNavigate } from "react-router-dom"; 


function Yield() {
  const navigate = useNavigate(); 

  return (
    <div className="container1 cards1">
      <h1>Yield Predictor</h1>
      
      <div className="card">
        <div className="image"></div>
        <div className="content">
          <a href="#">
            <span className="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </a>

          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium.
          </p>

          <button
            className="form-submit-btn action"
            type="submit"
            onClick={async () => {
              navigate("/YieldPage");
            }}
          >
            Find More <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Yield;
