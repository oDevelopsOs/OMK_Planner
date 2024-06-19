import { handleHttp } from "../utils/error.handle.js";
import { registerNewUser, loginUser } from "../services/auth.js";

const registerController = async (req, res) => {
    try {
        const user = await registerNewUser(req.body);
        return res.send({ "new user": user });
    } catch (error) {
        handleHttp(res, error);
    }
};

const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const log = await loginUser({ email, password });
        return res.send({ "logged": log });
    } catch (error) {
        handleHttp(res, error);
    }
};

export { loginController, registerController };
