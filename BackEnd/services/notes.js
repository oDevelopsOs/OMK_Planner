import notes_schema from "../models/notes.js";

const insertNotes = async (noteData) => {
    const note = new notes_schema(noteData);
    return await note.save();
}

const getNoteById = async (id) => {
    return await notes_schema.findById(id);
}

const getAllNotes = async () => {
    return await notes_schema.find();
}

const updateNoteById = async (id, noteData) => {
    return await notes_schema.findByIdAndUpdate(id, noteData, { new: true });
}

const deleteNoteById = async (id) => {
    note = await notes_schema.findByIdAndDelete(id);
    if(note) return console.log('deleted')
}

export { insertNotes, getNoteById, getAllNotes, updateNoteById, deleteNoteById };
