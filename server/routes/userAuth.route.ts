import express from "express";
import { Signup } from "../controllers/userAuth.controller";
import { verifyEmail } from "../controllers/userAuth.controller";
import { Login } from "../controllers/userAuth.controller";

const router = express.Router();

router.post('/signup', Signup);
router.post('/verify-email', verifyEmail);
router.post('/login', Login)

export default router;