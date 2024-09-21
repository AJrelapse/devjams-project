import express, { Router } from 'express';
// import { authverify } from '../middleware/authMiddleware.mjs';
import { predict } from '../controllers/yieldController.mjs';

const router: Router = express.Router();

router.post('/predict', predict);

export default router;