import React from "react";
import styles from "../styles/yieldpage.module.css";
import { useNavigate } from "react-router-dom";

function Yield() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>YIELD PREDICTOR</h1>
      
      <div className={styles.parallax}></div>
      
      <div className={styles.card}>
        <div className={styles.image}></div>
        <div className={styles.content}>
          <a href="#">
            <span className={styles.cardTitle}>
              Learn more about our advanced yield prediction system.
            </span>
          </a>

          <p className={styles.desc}>
            Gain insights into expected yield based on real-time data and
            advanced AI models. Make data-driven decisions for better
            outcomes.
          </p>

          <button
            className={`${styles.action} ${styles.animate}`}
            onClick={() => navigate("/YieldPage")}
          >
            Explore More <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Yield;
