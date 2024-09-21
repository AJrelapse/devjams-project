import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../styles/YieldResult.module.css'; // Import CSS module

function YieldResultPage() {
  const navigate = useNavigate();
  const [yieldResult, setYieldResult] = useState(null); // State to store the yield result

  useEffect(() => {
    // Simulating an API call or a calculation for the yield result
    const result = calculateYield(); 
    setYieldResult(result);
  }, []);

  const calculateYield = () => {
    // Replace with actual logic to calculate yield prediction
    return {
      crop: "Wheat",
      predictedYield: "15 tons",
      season: "Winter",
      area: "100 hectares",
    };
  };

  return (
    <div className={styles.container}>
      <div className={styles.resultCard}>
        <h1 className={styles.title}>Yield Prediction Result</h1>

        {yieldResult ? (
          <div className={styles.resultContent}>
            <p><strong>Crop:</strong> {yieldResult.crop}</p>
            <p><strong>Predicted Yield:</strong> {yieldResult.predictedYield}</p>
            <p><strong>Season:</strong> {yieldResult.season}</p>
            <p><strong>Area:</strong> {yieldResult.area}</p>
          </div>
        ) : (
          <p>Loading result...</p>
        )}

        <button
          className={styles.backBtn}
          onClick={() => navigate("/YieldPage")}
        >
          Back to Prediction
        </button>
      </div>
    </div>
  );
}

export default YieldResultPage;
