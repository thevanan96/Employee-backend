import express from 'express';
import { login, verify as verifyUser } from '../controllers/authController.js'; // Rename the import
import authMiddlware from '../middleware/authMiddlware.js';

const router = express.Router();

router.post('/login', login);
router.get('/verify', authMiddlware, verifyUser); // Use renamed function

export default router;
