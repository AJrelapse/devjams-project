import { Router } from 'express';
import { resetPassword, changePassword, getTkn } from '../controllers/userController.mjs';
import { authverify } from '../middleware/authMiddleware.mjs';

const router = Router();

router.put('/passwd', authverify, changePassword);
router.post('/reset/:user/:token', resetPassword);
router.get('/get-reset-token', getTkn);

export default router;