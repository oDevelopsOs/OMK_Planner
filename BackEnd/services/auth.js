import UserModel from "../models/user.js";
import { handleHttp } from "../utils/error.handle.js";
import { check, encript } from "../utils/password.handler.js";

const registerNewUser = async ({ name, email, password }) => {
    try {
        const findUser = await UserModel.findOne({ email });
        if (findUser) return 'User Exists';
        const passHash = await encript(password);
        const user = new UserModel({ name, email, password: passHash });
        return await user.save();
    } catch (error) {
        handleHttp(res , error)
    }
};

const loginUser = async ({ email, password }) => {
    try {
        const user = await UserModel.findOne({ email });
        if (!user) return 'User not found';

        const passHash = user.password;
        const passCorrect = await check(password, passHash);
        if (!passCorrect) return 'Password incorrect';
        
        return user;
    } catch (error) {
        handleHttp(res , error)
    }
};

export { registerNewUser, loginUser };
