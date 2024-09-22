import React from 'react';
import "../styles/Cards.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Cards() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="container1 cards1">
      <h1 className="card__title1 ">PLANT DISEASE PREDICTOR</h1>
      <ul id="cards">
        <li className="cardd" id="card1" key="card1">
          <div className="cardd" data-index="0">
            <div className="card__inner">
              <div className="card__image-container">
                <img
                  className="card__image"
                  src="/assets/images/tomatoes.jpg"
                  alt="Tomatoes"
                />
              </div>
              <div className="card__content">
                <h1 className="card__title">TOMATO</h1>
                <p className="card__description">
                Leverage our cutting-edge AI-powered plant disease predictor to quickly identify if your plant is suffering from any diseases. With advanced machine learning models and real-time analysis, our tool helps you diagnose plant health issues effortlessly, enabling you to take prompt action to protect your crops.
                </p>
                <button className="button" onClick={() => navigate("/tomato")}>EXAMINE</button> {/* Replace history.push with navigate */}
              </div>
            </div>
          </div>
        </li>

        <li className="cardd" id="card2" key="card2">
          <div className="cardd" data-index="0">
            <div className="card__inner">
              <div className="card__image-container">
                <img
                  className="card__image"
                  src="/assets/images/potatoes.jpg"
                  alt="Potatoes"
                />
              </div>
              <div className="card__content">
                <h1 className="card__title">POTATO</h1>
                <p className="card__description">
                Leverage our cutting-edge AI-powered plant disease predictor to quickly identify if your plant is suffering from any diseases. With advanced machine learning models and real-time analysis, our tool helps you diagnose plant health issues effortlessly, enabling you to take prompt action to protect your crops.                </p>
                <button className="button" onClick={() => navigate("/potato")}>EXAMINE</button> {/* Navigate to the potato page */}
              </div>
            </div>
          </div>
        </li>

        <li className="cardd" id="card3" key="card3">
          <div className="cardd" data-index="0">
            <div className="card__inner">
              <div className="card__image-container">
                <img
                  className="card__image"
                  src="/assets/images/pepper.webp"
                  alt="Pepper"
                />
              </div>
              <div className="card__content">
                <h1 className="card__title">PEPPER</h1>
                <p className="card__description">
                Leverage our cutting-edge AI-powered plant disease predictor to quickly identify if your plant is suffering from any diseases. With advanced machine learning models and real-time analysis, our tool helps you diagnose plant health issues effortlessly, enabling you to take prompt action to protect your crops.                </p>
                <button className="button" onClick={() => navigate("/pepper")}>EXAMINE</button> {/* Navigate to the pepper page */}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Cards;
