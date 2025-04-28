import express from 'express';
import { getAttendance,updateAttendance,attendanceReport } from '../controllers/attendanceController.js';
import verifyUser from '../middleware/authMiddlware.js'
import defaultAttendance from '../middleware/defaultAttendance.js'


const router = express.Router();

router.get('/',verifyUser,defaultAttendance, getAttendance);


router.put('/update/:employeeId',verifyUser, updateAttendance);

router.get('/report',verifyUser, attendanceReport);


export default router;
