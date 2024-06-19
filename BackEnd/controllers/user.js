import UserModel from "../models/user.js";
import { handleHttp } from "../utils/error.handle.js";
import { encript, check } from "../utils/password.handler.js";

const getUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordValid = await check(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        handleHttp(res, error);
    }
};

const updateUser = (req, res) => {
    try {
        res.send(req.body);
    } catch (error) {
        handleHttp(res, error);
    }
};

const postUser = async (req, res) => {
    try {
        const user = req.body;
        user.password = await encript(user.password); 
        const newUser = new UserModel(user);
        await newUser.save();

        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        handleHttp(res, error);
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await UserModel.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
        handleHttp(res, error);
    }
};

export { getUser, updateUser, postUser, deleteUser };
