import { User } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { generateVerificationToken } from "../utils/generateVerificationToken";
import { sendVerificationEmail } from "../mailer/emails";
import { sendWelcomeMail } from "../mailer/emails";
import { generateAccessToken } from "../utils/generateAccessToken";
import { generateRefreshToken } from "../utils/generateRefreshToken";
// import { promisify } from 'util';

export const Signup = async (req: Request, res: Response, next: NextFunction)=> {
    const { firstname, lastname, username, email, accountType, password } = req.body;
    try {
        
        if (!firstname || !lastname || !username || !email || !accountType || !password) {
            return res.status(401).json({success: false, message: "All fields are required"})
        };
    
        try {
            const isUserExisting = await User.findOne({ email });
            if (isUserExisting) {
                return res.status(409).json({success: false, message: "This account already exists"})
            };
        } catch (error) {
            console.error("An error occured", error);
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = generateVerificationToken();
        const user = new User({ 
            firstname, 
            lastname, 
            username, 
            email, 
            accountType, 
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 15 * 60 * 1000,
        });
        
        await user.save();
        res.status(201).json({success: true, message: "Registration Successfull! Please verify your email"});

        await sendVerificationEmail(user.email, verificationToken);

    } catch (error) {
        console.error('Error creating new user', error);
        next(error)
    }
}

export const verifyEmail = async(req: Request, res: Response)=> {
    const { email, verificationToken } = req.body;

    try {
        const user = await User.findOne({
            email,
            verificationToken,
            verificationTokenExpiresAt: { $gt: Date.now() }
        });
        
        if (!user) {
            return res.status(403).json({success: false, message: "Invalid verification code"});
        };

        user.isTokenVerified = true;
        user.isAccountVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;

        await user.save();
        await sendWelcomeMail(user.email, user.firstname)
        return res.status(200).json({success:true, message: "Email verified successful, you can now login"})
    } catch (error) {
        console.error("Error sending welcome email", error);
    }
};
export const Login = async (req: Request, res: Response, next: NextFunction)=> {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(401).json({success:false, message: "All fields are required"});
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User does not exist"});
        };
        
        const validatePassword = await bcrypt.compare(password, user.password);
        if (!validatePassword) {
            return res.status(403).json({ success: false, message: "Invalid credentials"});
        };
        
        //password valid, generate tokens
        const accessToken = generateAccessToken(res, user._id);
        const refreshToken = generateRefreshToken(res, user._id);

        //update login history
        user.lastLogin = new Date();
        await user.save();

        //destructure and remove the password from the user data before sending as response
        const { password: _, ...userWithoutPassword } = user.toObject();

        res.status(200).json({
            success: true,
            message: "Login Successfull!",
            user: userWithoutPassword,
            accessToken,
            refreshToken,
        })

    } catch (error) {
        console.error("An error occured", error)
        next(error)
    }
};

export const getRefreshToken = async (req: Request, res: Response, next: NextFunction)=> {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        console.log("Refresh token required/not found");
        return res.status(401).json({ success: false, message: "Refresh token required/not found"})
    };

    try {
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN || "", async(err: any, user: any)=> {
            if (err) return res.status(403).json({ success: false, message: "Invalid refresh token"});

            const userData = await User.findById(user.userId);
            if (!userData) return res.status(404).json({ success: false, message: "User not found"});

            const accessToken = jwt.sign(
                {id: user.id},
                process.env.ACCESS_TOKEN || "",
                { expiresIn: process.env.ACCESS_TOKEN_EXPIRY}
            )
            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 2 * 60 *1000,
            })
            return res.status(200).json({success: true, accessToken, userData})
        })
    } catch (error) {
        console.error("An error occured while verifying refresh token", error);
        next(error);
    }
}

export const resendVerficationEmail = async(req: Request, res: Response, next: NextFunction)=> {
    const { email } = req.body;

    const MAX_RESEND_ATTEMPTS = 3;
    const CODE_EXPIRATION_TIME = 15 * 60 * 1000;
    try {
        
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found!"});
        }
    
        if (user.isTokenVerified) {
            return res.status(400).json({ success: true, message: "User is already verified"});
        }
    
        if (user.resendAttempts >= MAX_RESEND_ATTEMPTS) {
            return res.status(409).json({ success: false, message: "Too many attempts, please try again later."});
        }
    
        const currentTime = new Date().getTime();
        
        /* Ran into an error when try to pass the verificationTokenExpiresAt data. first error was that it might be undefined, so the "&&" operator was used to check before proceeding with logic. second error was that typescript was unsure if `verificationTokenExipiresAt` was a number | Date, so it was converted to a number before proceeding with logic. */

        if (user.verificationTokenExpiresAt && new Date(user.verificationTokenExpiresAt).getTime() > currentTime) {
            return res.status(400).json({ success: false, message: "Verification code is still valid. Please wait until it expires."})
        }
    
        // update user's resnd attempts and send a new verification email
        user.resendAttempts += 1;
        user.verificationToken = generateVerificationToken();
        user.verificationTokenExpiresAt = currentTime + CODE_EXPIRATION_TIME;
    
        await user.save();
        sendVerificationEmail(user.email, user.verificationToken);
        return res.status(200).json({ success: true, message: "A new verification code has been sent to your email."});
    } catch (error) {
        console.error("Error resending verification email: ", error);
        return next(error);
    }
}

export const forgotPassword = async (req:Request, res: Response, next: NextFunction)=>{
    const { email } = req.body;
    if (!email) res.status(401).json({ success: false, message: 'Email is required' });
}