import React, { useState } from "react";
import "../styles/imageUpload.css";

// Define a functional component named UploadAndDisplayImage
const PotatoresultDisplay = (props) => {

  // Return the JSX for rendering
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <h1>PREDICTIONS</h1>
          </div>

          {/* Input element to select an image file */}
          <div className="form-group">
          <h3>The potato plant has {props.result}</h3>

          </div>
        </form>
      </div>
    </div>
    
  );
};

export default PotatoresultDisplay;
