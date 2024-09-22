import express, { Express, Request, Response } from 'express';
import cookieParser from "cookie-parser";
import authRouter from '../routes/authRoute.mjs';
import userRouter from '../routes/userRoute.mjs';
import diseaseRouter from '../routes/diseaseRoute.mjs';
import yieldRouter from '../routes/yieldRoute.mjs';
import { connectDB } from "../helpers/dbController.mjs";
import { authverify } from '../middleware/authMiddleware.mjs';
import { config } from "dotenv";
import cors from 'cors'

const app: Express = express();

config();
app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true,
    }
));
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/disease', diseaseRouter);
app.use('/api/v1/yield', yieldRouter);

connectDB();

const port = process.env.PORT?process.env.PORT:3001;

app.get('/',authverify, (_req: Request, res: Response) => {
    res.send('Hello World!')
})
app.listen(port, () => console.log(`Auth Server port ${port}!`))
