import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../styles/YieldResult.module.css'; // Import CSS module

function YieldResultPage(props) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.resultCard}>
        <h1 className={styles.title}>Yield Prediction Result</h1>


          <div className={styles.resultContent}>
            <p><strong>Crop:</strong> {props.result.crop}</p>
            <p><strong>Predicted Yield:</strong> {props.result.predictedYield}</p>
            <p><strong>Season:</strong> {props.result.season}</p>
            <p><strong>Area:</strong> {props.result.area}</p>
          </div>


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
