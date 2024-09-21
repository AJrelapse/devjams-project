import React from 'react';
import "../styles/yield.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Map() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="container3 ">
      <h1 className='titleMap'>MAP</h1>

      





      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
        <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        <button className="form-submit-btn" type="submit" onClick={async() => {
                navigate("/MapPage")
              }}>Open</button>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
      <img className="imageMap" src="/assets/images/map.png" alt="Bootstrap Docs" width="720" />
      </div>
    </div>
  </div>

    </div>
  );
}

export default Map;
