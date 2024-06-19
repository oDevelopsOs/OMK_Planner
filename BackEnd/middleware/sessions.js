import session from 'express-session';
import { Router } from 'express';
import 'dotenv/config';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';

const sessionRouter = Router();

const Secret = process.env.SESSION_SECRET;

sessionRouter.use(
    session({
    secret: Secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge:6000*60*42,
        secure: false 
    },
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        ttl: 60 * 60 * 24 * 120,
        client:mongoose.connection.getClient()
    })
  })
);


export default sessionRouter;