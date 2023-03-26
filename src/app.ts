import express, { json } from 'express'
import { usersRoutes } from './routers';
import cors from "cors"

const app = express();

app.use(json());

app.use(cors());

app.use(usersRoutes);


export default app;