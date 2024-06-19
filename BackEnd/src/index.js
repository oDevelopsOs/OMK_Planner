import express from "express";
import cors from 'cors';
import 'dotenv/config';
import dbConnect from "../config/mongo.connect.js";
import router from "../routes/router.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({
    origin:[ '*' , 'http://localhost:5173'],

}));
app.use(express.json());
app.use(router);

dbConnect().then(() => {
    console.log('Database connected successfully');
}).catch((e) => {
    console.error(e);
});

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
});
