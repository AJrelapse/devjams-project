import express, { Router } from 'express';
import { Potato } from '../controllers/diseaseController.mjs';
import multer from 'multer';

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

router.post('/potato', upload.single('file'), Potato);
router.post('/tomato', upload.single('file'), Potato);
router.post('/pepper', upload.single('file'), Potato);

export default router;
