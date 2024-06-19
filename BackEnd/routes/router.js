import { Router } from "express";
import notesRouter from "./notes/notes.js";
import usersRouter from "./users/user.js";
import authRouter from "./auth/auth.js";
import sessionRouter from "../middleware/sessions.js";
import passport from 'passport';


const router = Router();

// Use session middleware
router.use(sessionRouter);

// Initialize passport and session management
router.use(passport.initialize());
router.use(passport.session());


// Load route modules
router.use("/notes", notesRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);

export default router;
