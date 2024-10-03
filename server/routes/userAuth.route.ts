import express from "express";
import { Signup } from "../controllers/userAuth.controller";


const router = express.Router();

router.post('/signup', Signup);

export default router;