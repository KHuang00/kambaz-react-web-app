import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    title: { type: String, required: true },
    course: { type: String, required: true },
    // description: { type: String, required: true },
    detail: {
        module: { type: String },
        start: { type: String },
        due: { type: String },
        points: { type: String }
    },
    // availableUntil: { type: String},
}, { collection: "assignments" });

export default AssignmentSchema;
