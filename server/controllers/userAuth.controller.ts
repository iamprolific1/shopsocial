import { User } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { generateVerificationToken } from "../utils/generateVerificationToken";
import { sendVerificationEmail } from "../mailer/emails";
import { sendWelcomeMail } from "../mailer/emails";
import { generateAccessToken } from "../utils/generateAccessToken";
import { generateRefreshToken } from "../utils/generateRefreshToken";

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
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
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
    const { verificationToken } = req.body;

    try {
        const user = await User.findOne({
            verificationToken,
            verificationTokenExpiresAt: { $gt: Date.now() }
        });
        
        if (!user) {
            return res.status(403).json({success: false, message: "Invalid verification token"});
        };

        user.isTokenVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;

        await user.save();
        await sendWelcomeMail(user.email, user.firstname)
        res.status(200).json({success:true, message: "Email verified successful, you can now login"})
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
        generateAccessToken(res, user._id);
        generateRefreshToken(res, user._id);

        //update login history
        user.lastLogin = new Date();
        await user.save();

        //destructure and remove the password from the user data before sending as response
        const { password: _, ...userWithoutPassword } = user.toObject();

        res.status(200).json({
            success: true,
            message: "Login Successfull!",
            user: userWithoutPassword
        })

    } catch (error) {
        console.error("An error occured", error)
        next(error)
    }
}

export const getRefreshToken = async (req: Request, res: Response, next: NextFunction)=> {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).json({message: "Refresh token required"});

    try {
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN || "", async(err: any, user: any)=> {
            if (err) return res.status(403).json({message: "Invalid refresh token"});

            const userData = await User.findById(user.id);
            if (!userData) return res.status(404).json({message: "User not found"});

            const accessToken = jwt.sign(
                {id: user.id},
                process.env.ACCESS_TOKEN || "",
                { expiresIn: process.env.ACCESS_TOKEN_EXPIRY}
            )
            res.cookie('accesstoken', accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 2 * 60 *1000,
            })
            res.status(200).json({success: true, accessToken})
        })
    } catch (error) {
        console.error("An error occured while verifying refresh token", error);
        next(error);
    }
}