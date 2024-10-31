import jwt from "jsonwebtoken";
import { Response } from 'express';
import { ObjectId } from "mongodb";

const accessToken = process.env.ACCESS_TOKEN || ""
export const generateAccessToken =(res: Response, userId: string | ObjectId)=> {
    const token = jwt.sign(
        {userId},
        accessToken,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
    res.cookie('accessToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: 'none',
        maxAge: 2 * 60 * 1000,
        path: '/'
    });
    return token;
}