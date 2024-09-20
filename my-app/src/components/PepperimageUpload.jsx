import React, { useState } from "react";
import "../styles/imageUpload.css";
import { useNavigate } from "react-router-dom";

// Define a functional component named UploadAndDisplayImage
const UploadAndDisplayImage = () => {
  const navigate = useNavigate();
  // Define a state variable to store the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Return the JSX for rendering
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            {/* Conditionally render the selected image if it exists */}
            <label htmlFor="upload">Upload Image</label>
            {selectedImage && (
              <div className="image-preview">
                {/* Display the selected image */}
                <img
                  alt="not found"
                  width={"250px"}
                  src={URL.createObjectURL(selectedImage)}
                />
                <br />
                {/* Button to remove the selected image */}
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => setSelectedImage(null)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* Input element to select an image file */}
          <div className="form-group">
            <input
              type="file"
              id="upload"
              name="myImage"
              className="upload-input"
              // Event handler to capture file selection and update the state
              onChange={(event) => {
                console.log(event.target.files[0]); // Log the selected file
                setSelectedImage(event.target.files[0]); // Update the state with the selected file
              }}
            />
          </div>
          <button className="form-submit-btn" type="submit" onClick={() => navigate("/pepperresultPage")}>
            Submit
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default UploadAndDisplayImage;
