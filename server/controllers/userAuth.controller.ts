import { User } from "../models/User";
import bcrypt from "bcrypt"
import { Request, Response, NextFunction } from "express";
import { CreateError } from "../utils/CreateError";
import { generateVerificationToken } from "../utils/generateVerificationToken";
import { sendVerificationEmail } from "../mailer/emails";
import { sendWelcomeMail } from "../mailer/emails";

export const Signup = async (req: Request, res: Response, next: NextFunction)=> {
    const { firstname, lastname, username, email, accountType, password } = req.body;
    try {
        
        if (!firstname || !lastname || !username || !email || !accountType || !password) {
            res.status(401).json({success: false, message: "All fields are required"})
            return next(CreateError(401, 'All fields are required!'));
        };
    
        try {
            const isUserExisting = await User.findOne({ email });
            if (isUserExisting) {
                res.status(409).json({success: false, message: "This account already exists"})
                return next(CreateError(409, "This account already exists"))
            };
        } catch (error) {
            console.error("An error occured", error);
            return next(CreateError(500, "Internal server error"));
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
        return next(CreateError(500, "An error occured during registration"));
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
            throw new Error("Invalid or expired verification token");
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

export const Login = async (req: Request, res: Response)=> {

}