import { Response, Request, NextFunction } from "express";

const handleErrors = (err: {status: number, message: string}, req: Request, res: Response, next: NextFunction)=> {
    const statusCode = err.status || 500;
    const message = err.message || "Internal server error";

    res.status(statusCode).json({
        success: false,
        message: message,
        status: statusCode
    })
}

export default handleErrors;
