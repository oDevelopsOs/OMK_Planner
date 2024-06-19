// Import necessary modules
import { Router } from "express";
import { getUser, updateUser, postUser, deleteUser } from "../../controllers/user.js";
import LocalStrategy from "../../services/Strategy/localStrategy.js";

// Create a router instance
const usersRouter = Router();

// Define routes with appropriate middleware and controllers
usersRouter.post('/auth/', LocalStrategy.authenticate("local"), getUser);
usersRouter.put('/', updateUser);
usersRouter.post('/new-user/', postUser);
usersRouter.delete('/:id', deleteUser);

// Export the router for use in your main application
export default usersRouter;
