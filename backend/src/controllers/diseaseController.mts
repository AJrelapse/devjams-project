import axios from 'axios';
import {  Request, Response } from 'express';
import FormData from 'form-data';

export async function Potato (req: Request, res: Response):Promise<void> {
    console.log(req.file);
    const formData = new FormData();
    if (!req.file) {
        res.status(400).send('No file uploaded');
        return;
    }
    formData.append('file', req.file.buffer, {
        filename: req.file.originalname,
        contentType: req.file.mimetype
    });
    const response = await axios.post('http://192.168.221.162:5000/predict', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    res.send(response.data);
}

