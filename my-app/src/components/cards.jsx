import React from 'react';
import "../Cards.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Cards() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="container cards1">
      <h1 className="card__title">PLANT</h1>
      <ul id="cards">
        <li className="card" id="card1" key="card1">
          <div className="card" data-index="0">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta
                </p>
                <button className="button" onClick={() => navigate("/tomato")}>EXAMINE</button> {/* Replace history.push with navigate */}
              </div>
            </div>
          </div>
        </li>

        <li className="card" id="card2" key="card2">
          <div className="card" data-index="0">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta
                </p>
                <button className="button" onClick={() => navigate("/potato")}>EXAMINE</button> {/* Navigate to the potato page */}
              </div>
            </div>
          </div>
        </li>

        <li className="card" id="card3" key="card3">
          <div className="card" data-index="0">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta
                </p>
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
