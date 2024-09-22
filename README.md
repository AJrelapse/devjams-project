# Farming Community Support Platform

### Overview
This platform is designed to empower the farming community by leveraging machine learning to optimize farming decisions, detect plant diseases, and provide actionable insights in real-time. It integrates modern technology to address key challenges in agriculture and improve crop management through predictive analytics and real-time alerts.

### Key Features

1. **Plant Disease Detection**  
   The platform currently supports the detection of diseases in three different plant species. As the model improves with more user data, it will expand to cover additional plant species.

2. **Real-Time Disease Outbreak Monitoring**  
   The platform continuously monitors disease outbreaks and sends alert emails to farmers in affected areas. These outbreaks are also visualized on a heat map, which users can view to track the spread and intensity of diseases in their region.

3. **Crowdsourcing for Enhanced Accuracy**  
   As a crowd-sourced software, the platform becomes increasingly accurate with the addition of more users. The larger the user base, the better the disease prediction and outbreak monitoring will become.

4. **Weather Alerts & Push Notifications**  
   Farmers receive real-time weather details and are alerted about significant weather events via push notifications and email. These alerts help them take timely action to protect their crops.

5. **Yield Prediction**  
   The platform predicts crop yield based on factors such as pesticide and fungicide usage, rainfall, crop type, and plot area. This helps farmers make data-driven decisions to maximize their yield.

6. **Interactive Disease Outbreak Map**  
   An interactive map feature on the platform displays the intensity of plant disease outbreaks across different states in India, based on the area of affected plots. This helps farmers visualize how widespread a disease is and take preventive measures.

### Tech Stack

- **Machine Learning**:  
  - **Python**: Model development  
  - **TensorFlow & XGBoost**: For building the machine learning models  
  - **FastAPI**: To serve the machine learning models as APIs

- **Frontend**:  
  - **React.js**: For building an interactive user interface  
  - **HTML/CSS**: For structuring and styling web pages

- **Backend**:  
  - **TypeScript**: For strong typing and enhanced code quality  
  - **Node.js with Express**: For building the server-side logic  
  - **JWT**: For authentication  
  - **Magic Link**: For password resets  
  - **MongoDB**: To store user data, disease reports, and other platform-related information

- **DevOps**:  
  - **Docker**: For containerizing the entire platform and ensuring smooth deployment

---

### Getting Started

#### Prerequisites
- Docker
- Node.js
- Python (with TensorFlow, XGBoost installed)
- MongoDB

#### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/farming-platform.git
   cd farming-platform
   ```

2. **Backend Setup:**
```bash
cd backend
npm install
```

3. **Frontend Setup:**
```bash
cd my-app
npm install
```
4. **ML Models**
```bash
cd ml-models
pip install -r requirements.txt
```

5. **Run with Docker:**
```bash
docker-compose up
```
### Contributing

Feel free to submit issues or pull requests. Contributions are welcome to improve the platform.

