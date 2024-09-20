import React from 'react';
import "../Cards.css"

function Cards() {
  
  return (
    <div class="container">
      <h1 class="card__title">PLANT</h1>
    <ul id="cards">
        <li class="card" id="card1">
        <div class="card" data-index="0">
    <div class="card__inner">
      <div class="card__image-container">
        <img
          class="card__image"
          src="/assets/images/tomatoes.jpg"
          alt=""
        />
      </div>
      <div class="card__content">
        <h1 class="card__title">TOMATO</h1>
        <p class="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta
        </p>
        <button class="button">EXAMINE</button>
      </div>
    </div>
  </div>
        </li>
        <li class="card" id="card2">
        <div class="card" data-index="0">
    <div class="card__inner">
      <div class="card__image-container">
        <img
          class="card__image"
          src="/assets/images/potatoes.jpg"
          alt=""
        />
      </div>
      <div class="card__content">
        <h1 class="card__title">POTATO</h1>
        <p class="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta
        </p>
        <button class="button">EXAMINE</button>
      </div>
    </div>
  </div>
        </li>
        <li class="card" id="card3">
        <div class="card" data-index="0">
    <div class="card__inner">
      <div class="card__image-container">
        <img
          class="card__image"
          src="/assets/images/pepper.webp"
          alt=""
        />
      </div>
        <div class="card__content">
            <h1 class="card__title">PEPPER</h1>
            <p class="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta
            </p>
            <button class="button">EXAMINE</button>
          </div>
        </div>
      </div>
        </li>
        
    </ul>
</div>
  );
}

export default Cards;
