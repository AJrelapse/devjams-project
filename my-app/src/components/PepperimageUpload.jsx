import React, { useState } from "react";
import "../styles/imageUpload.css";
import { useNavigate } from "react-router-dom";

// Define a functional component named UploadAndDisplayImage
const UploadAndDisplayImage = () => {
  const upload = async () => {
    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const response = await fetch("http://localhost:3001/api/v1/disease/pepper", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Upload successful:', data);
      // const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.error('Error during file upload:', error);
    }
  }
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
<<<<<<< Updated upstream
          <button className="form-submit-btn" type="submit" onClick={async() => {
            // await upload();
            navigate("/pepperresultPage")
          }}>            Submit
=======
          <button className="form-submit-btn" type="submit" onClick={async(e) => {
            e.preventDefault();
            const data=upload().then((e)=>
            navigate("/pepperresultPage", { state: {result:e.class} }));
          }}>
            Submit
>>>>>>> Stashed changes
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default UploadAndDisplayImage;
