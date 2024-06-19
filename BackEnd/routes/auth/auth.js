import { Router } from "express";
import { loginController, registerController } from "../../controllers/auth.js";

const authRouter = Router();

authRouter.post('/user/auth' , registerController)

authRouter.post('/user/login' ,loginController)

export default authRouter;