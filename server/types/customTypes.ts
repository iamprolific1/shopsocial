//declare a global type for the user id to enable the verification of access token

import { Request } from "express";

declare global {
    namespace Express {
        interface Request {
            user?: {
                userId: string;
            }
        }
    }
}