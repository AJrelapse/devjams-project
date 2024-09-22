import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/map.css'; // Assuming you have a separate CSS file for styles

function Map() {
  const navigate = useNavigate();

  return (
    <div className="container3">
      <h1 className='titleMap'>MAP</h1>
      
      <div className="content-wrapper">
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-4 fw-bold forColor lh-1 mb-3 pb-3 animate-text">
                Explore Plant Disease Outbreaks Across India
              </h1>
              <p className="col-lg-10 fs-4 animate-text forColor pt-3 mt-3">
              Stay informed about the latest plant disease outbreaks in various states of India. Click below to view an interactive map that visualizes affected areas and helps track the spread. Stay ahead and safeguard your crops!
              </p>
              <button
                className="mapB"
                type="submit"
                onClick={async () => {
                  navigate("/MapPage");
                }}
              >
                <span>Open</span>
              </button>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <img className="imageMap" src="/assets/images/map.png" alt="Map" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;

