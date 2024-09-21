import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../styles/yieldpredict.module.css'; // Import CSS module
import axios from 'axios';

function YieldPredictPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cropType: '',
    season: '',
    area: '',
    rainfall: '',
    fertilizers: '',
    pesticides: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      const data = formData;
      const response = axios.post(
        "http://localhost:3001/api/v1/yield/predict",
        data,
        { withCredentials: true }
      ).then(()=>
        navigate("/Yieldresult"));
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

const cropOptions = [
    'Arecanut', 'Arhar/Tur', 'Castor seed', 'Coconut', 'Cotton(lint)',
    'Dry chillies', 'Gram', 'Jute', 'Linseed', 'Maize', 'Mesta',
    'Niger seed', 'Onion', 'Other Rabi pulses', 'Potato',
    'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets',
    'Sugarcane', 'Sweet potato', 'Tapioca', 'Tobacco', 'Turmeric',
    'Wheat', 'Bajra', 'Black pepper', 'Cardamom', 'Coriander',
    'Garlic', 'Ginger', 'Groundnut', 'Horse-gram', 'Jowar', 'Ragi',
    'Cashewnut', 'Banana', 'Soyabean', 'Barley', 'Khesari', 'Masoor',
    'Moong(Green Gram)', 'Other Kharif pulses', 'Safflower',
    'Sannhamp', 'Sunflower', 'Urad', 'Peas & beans (Pulses)',
    'other oilseeds', 'Other Cereals', 'Cowpea(Lobia)',
    'Oilseeds total', 'Guar seed', 'Other Summer Pulses', 'Moth'
  ];
  

  return (
    
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Yield Prediction</h1>

        <div className={styles.inputGroup}>
          <label htmlFor="cropType">Crop Type</label>
          <select
            name="cropType"
            value={formData.cropType}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="" disabled>Select Crop Type</option>
            {cropOptions.map((crop, index) => (
              <option key={index} value={crop}>{crop}</option>
            ))}
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="season">Season</label>
          <select
            name="season"
            value={formData.season}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="" disabled>Select Season</option>
            <option value="Winter">Winter</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Kharif">Kharif</option>
            <option value="Rabi">Rabi</option>
            <option value="Whole Year">Whole Year</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="area">Area (in hectares)</label>
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="rainfall">Annual Rainfall (mm)</label>
          <input
            type="number"
            name="rainfall"
            value={formData.rainfall}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="fertilizers">Fertilizers (kg)</label>
          <input
            type="number"
            name="fertilizers"
            value={formData.fertilizers}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="pesticides">Pesticides (kg)</label>
          <input
            type="number"
            name="pesticides"
            value={formData.pesticides}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <button type="submit" className={styles.submitBtn} onClick={async () => {
              navigate("/Yieldresult");
            }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default YieldPredictPage;
