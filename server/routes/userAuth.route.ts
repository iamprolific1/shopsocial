import express from "express";
import { Signup, verifyEmail, Login, resendVerficationEmail } from "../controllers/userAuth.controller";


const router = express.Router();

router.post('/signup', Signup);
router.post('/verify-email', verifyEmail);
router.post('/login', Login);
router.post('/resend-verification-email', resendVerficationEmail)

export default router;