import { handleHttp } from "../utils/error.handle.js";
import { insertNotes, getNoteById, getAllNotes, updateNoteById, deleteNoteById } from "../services/notes.js";


const getNote = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await getNoteById(id);
        res.send(note);
    } catch (error) {
        handleHttp(res, error);
    }
}

const getNotes = async (req, res) => {
    try {
        console.log(req.session) 
        console.log(req.session.id) 
        const notes = await getAllNotes();
        res.send(notes);
    } catch (error) {
        handleHttp(res, error);
    }
}

const postNote = async (req, res) => {
    try {
        const data = await insertNotes(req.body);
        res.send(data);
    } catch (error) {
        handleHttp(res, error);
    }
}

const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await updateNoteById(id, req.body);
        res.send(data);
    } catch (error) {
        handleHttp(res, error);
    }
}

const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteNoteById(id);
        res.send({ message: "Note deleted successfully" });
    } catch (error) {
        handleHttp(res, error);
    }
}

export { getNote, getNotes, postNote, updateNote, deleteNote };
