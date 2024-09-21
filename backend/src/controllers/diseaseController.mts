import axios from 'axios';
import {  Request, Response } from 'express';
import FormData from 'form-data';
// import * as fs from 'fs';

export async function Potato(req: Request, res: Response): Promise<void> {
    // console.log(req.file);
    const formData = new FormData();
    if (!req.file) {
        res.status(400).send('No file uploaded');
        return;
    }
    // fs.writeFileSync('image.jpg', req.file.buffer);
    // console.log(req.file.buffer);
    formData.append('file', req.file.buffer, {
        filename: req.file.originalname,
        contentType: req.file.mimetype
    });
    // console.log('Potato');
    const response = await axios.post('http://192.168.221.162:5000/predict', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    res.json(response.data);
}

export async function Tomato(req: Request, res: Response): Promise<void> {
    // console.log(req.file);
    const formData = new FormData();
    if (!req.file) {
        res.status(400).send('No file uploaded');
        return;
    }
    // fs.writeFileSync('image.jpg', req.file.buffer);
    // console.log(req.file.buffer);
    formData.append('file', req.file.buffer, {
        filename: req.file.originalname,
        contentType: req.file.mimetype
    });
    // console.log('Potato');
    const response = await axios.post('http://192.168.221.162:5002/predict', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    res.json(response.data);
}

export async function Pepper(req: Request, res: Response): Promise<void> {
    // console.log(req.file);
    const formData = new FormData();
    if (!req.file) {
        res.status(400).send('No file uploaded');
        return;
    }
    // fs.writeFileSync('image.jpg', req.file.buffer);
    // console.log(req.file.buffer);
    formData.append('file', req.file.buffer, {
        filename: req.file.originalname,
        contentType: req.file.mimetype
    });
    // console.log('Potato');
    const response = await axios.post('http://192.168.221.162:5001/predict', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    res.json(response.data);
}

