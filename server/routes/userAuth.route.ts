import express, { Request, Response } from "express";


const router = express.Router();

router.get('/', (req: Request, res: Response)=> {
    res.send('default route');
});
router.get('/signup', (req: Request, res: Response)=> {
    res.send('signup route');
});

export default router;