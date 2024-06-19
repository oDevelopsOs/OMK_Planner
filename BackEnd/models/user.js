import { Schema , model } from "mongoose";

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        unique:true,
        required:true

    },
    password:{
        type:String,
        required:true
    }
})

const UserModel = model('User', User)
export default UserModel;