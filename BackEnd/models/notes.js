import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const NTS_schema = new Schema(
    {
        _id: { type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId() }, // Definir explícitamente el campo _id
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

const notes_schema = model('notes', NTS_schema);
export default notes_schema;
