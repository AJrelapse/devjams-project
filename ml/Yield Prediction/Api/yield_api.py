import pandas as pd
from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json

app= FastAPI()

class ScoringItem(BaseModel):
    Crop: object
    Season: object
    Area: float
    Annual_Rainfall	: float
    Fertilizer: float
    Pesticide:float

with open('pipe_yieldprediction.pkl','rb') as f:
    model = pickle.load(f)

from fastapi import HTTPException

@app.post('/predict')
async def scoring_endpoint(item: ScoringItem):
    try:
        df = pd.DataFrame({
            'Crop': [item.Crop],
            'Season': [item.Season],
            'Area': [item.Area],
            'Annual_Rainfall': [item.Annual_Rainfall],
            'Fertilizer': [item.Fertilizer],
            'Pesticide': [item.Pesticide]
        })

        result = model.predict(df)
        return {"yield": result.tolist()[0]}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5003)