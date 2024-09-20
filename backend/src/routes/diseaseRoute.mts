import express, { Express, Request, Response,Router } from 'express';
import multer from 'multer';
import {Potato} from '../controllers/diseaseController.mjs';

const router: Router = express.Router();

const upload = multer({
    storage:
        multer.memoryStorage()
});

router.post('/upload', upload.single('file'), Potato);

export default router;
