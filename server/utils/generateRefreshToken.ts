import { Response } from "express";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken"

const refreshToken = process.env.REFRESH_TOKEN || ""

export const generateRefreshToken = (res: Response, userId: ObjectId)=> {
    const token = jwt.sign(
        {userId},
        refreshToken,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    )

    res.cookie('refreshToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: 'none',
        maxAge: 15 * 60 * 1000,
        path: '/'
    });
    return token;
}