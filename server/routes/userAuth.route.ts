import express, { Request, Response } from "express";
import { Signup, verifyEmail, Login, resendVerficationEmail, getRefreshToken } from "../controllers/userAuth.controller";
import { verifyAccessToken } from "../middlewares/authMiddleware";
import { User } from "../models/User"


const router = express.Router();

router.post('/signup', Signup);
router.post('/verify-email', verifyEmail);
router.post('/login', Login);
router.post('/resend-verification-email', resendVerficationEmail);
router.post('/refresh-token', getRefreshToken)

router.get('/auth-status', verifyAccessToken, async (req: Request, res: Response)=> {
    try{
        const userId = req.user?.userId;
        const user = await User.findById(userId).select('-password');
        
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found."});
        }
        return res.status(200).json({ success: true, user });
    }catch(error) {
        console.error("Error checking authentication status", error);
        return res.status(500).json({ success: false, message: "Internal server error"});
    }
})

export default router;