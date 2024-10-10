import express from "express";
import { Signup, verifyEmail, Login } from "../controllers/userAuth.controller";


const router = express.Router();

router.post('/signup', Signup);
router.post('/verify-email', verifyEmail);
router.post('/login', Login)

export default router;