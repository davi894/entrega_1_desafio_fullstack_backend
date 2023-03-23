import express, { json } from 'express'
import { usersRoutes } from './routers';

const app = express();

app.use(json());

app.use(usersRoutes)


export default app;