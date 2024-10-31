import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyAccessToken = (req: Request, res: Response, next: NextFunction)=> {
    const token = req.cookies.accessToken;
    console.log("Access token received in middleware: ", token)
    if(!token) {
        console.log("Access token not found")
        return res.status(401).json({ success: false, message: 'Access token required'});
    }
    console.log("Access token found.")
    jwt.verify(token, process.env.ACCESS_TOKEN || '', (err: jwt.VerifyErrors | null, decoded: any)=> {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                console.log("Access token expired");
                return res.status(401).json({success: false, message: 'Access token expired, please refresh'});
            }
            console.log('Invalid access token');
            return res.status(401).json({success: false, message: 'Invalid access token'});
        }
        req.user = decoded;
        next();
    })
}