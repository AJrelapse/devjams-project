import express, { Express, Request, Response } from 'express';
import cookieParser from "cookie-parser";
import authRouter from '../routes/authRoute.mjs';
import userRouter from '../routes/userRoute.mjs';
import { connectDB } from "../helpers/dbController.mjs";
import { authverify } from '../middleware/authMiddleware.mjs';
import { config } from "dotenv";
const app: Express = express();

config();
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
connectDB();

const port = 3000

app.get('/', authverify, (_req: Request, res: Response) => {
    res.send('Hello World!')
})
app.listen(port, () => console.log(`Auth Server port ${port}!`))