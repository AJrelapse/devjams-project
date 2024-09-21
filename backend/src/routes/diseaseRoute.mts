import express, { Router } from 'express';
import { Potato } from '../controllers/diseaseController.mjs';
import multer from 'multer';
import { authverify } from '../middleware/authMiddleware.mjs';

const router: Router = express.Router();

// const uploadDir = path.join(__dirname, 'upload');

// // Ensure the uploads directory exists
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

const upload = multer({
    // dest: uploadDir
    storage: multer.memoryStorage()
});

router.post('/potato', authverify,upload.single('file'), Potato);
router.post('/tomato', authverify,upload.single('file'), Potato);
router.post('/pepper', authverify,upload.single('file'), Potato);

export default router;
