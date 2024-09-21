import React from 'react';
import "../styles/weather.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Weather() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="container5">
        

          

          <h1 className='titleMap'>Check Weather</h1>
      
      <div className="content-wrapper">
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-4 fw-bold forColor lh-1 mb-3 pb-3 animate-text">
                Vertically centered hero sign-up form
              </h1>
             
              <button className=" btnW" type="submit" onClick={async() => {
            window.location.href="http://localhost:3002"
          }}>            OPEN
          </button>
            </div>
           
          </div>
        </div>
      </div>




      </div>
  );
}

export default Weather;
