import { User } from "../models/User";
import bcrypt from "bcrypt"
import { Request, Response, NextFunction } from "express";
import { CreateError } from "../utils/CreateError";
import { generateVerificationToken } from "../utils/generateVerificationToken";

export const Signup = async (req: Request, res: Response, next: NextFunction)=> {
    const { firstname, lastname, username, email, accountType, password } = req.body;
    try {
        
        if (!firstname || !lastname || !username || !email || !accountType || !password) {
            return next(CreateError(401, 'All fields are required!'));
        };
    
        try {
            const isUserExisting = await User.findOne({ email });
            if (isUserExisting) return next(CreateError(409, "This account already exists"));
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

    } catch (error) {
        console.error('Error creating new user', error);
        return next(CreateError(500, "An error occured during registration"));
    }
}