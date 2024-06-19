import { Router } from "express";
import { getNote, getNotes, postNote, deleteNote, updateNote } from "../../controllers/notes.js";
import { logMiddelware } from "../../middleware/log.js";

const notesRouter = Router();

notesRouter.get('/note/:id', getNote);
notesRouter.get('/notes', getNotes);
notesRouter.post('/note',logMiddelware, postNote);
notesRouter.put('/note/:id', updateNote);
notesRouter.delete('/note/:id', deleteNote);

export default notesRouter;
