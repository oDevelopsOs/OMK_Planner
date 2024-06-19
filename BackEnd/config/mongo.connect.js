import 'dotenv/config';
import { connect } from 'mongoose';

const NODE_ENV = process.env.MONGO_URI;

async function dbConnect(){
    try {
    await connect(NODE_ENV); 
    console.log('conected a mongo')
    } catch (e) {
        console.error(new Error(e))
    }
}

export default dbConnect;