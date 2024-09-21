import axios from 'axios';
import {  Request, Response } from 'express';
// import * as fs from 'fs';

export async function predict(req: Request, res: Response): Promise<void> {
    const Crop = req.body.Crop;
    const Season = req.body.Season;
    const Area = req.body.Area;
    const Annual_Rainfall = req.body.Annual_Rainfall;
    const Fertilizer = req.body.Fertilizer;
    const Pesticide = req.body.Pesticide;
    const response = await axios.post('http://192.168.221.162:8000/predict', {Crop,Season,Area,Annual_Rainfall,Fertilizer,Pesticide} )
    res.json(response.data);
}