import axios from 'axios';
import {  Request, Response } from 'express';
// import * as fs from 'fs';

export async function predict(req: Request, res: Response): Promise<void> {
    const Crop = req.body.cropType;
    // console.log("hi")
    const Season = req.body.season;
    const Area = req.body.area;
    const Annual_Rainfall = req.body.rainfall;
    const Fertilizer = req.body.fertilizers;
    const Pesticide = req.body.pesticides;
    const data = { Crop, Season, Area, Annual_Rainfall, Fertilizer, Pesticide };
    console.log(data);
    try {
        
        const response = await axios.post('http://192.168.221.162:8000/predict', data )
        res.json(response.data.yield);   
    } catch (error) {
        
    }
}