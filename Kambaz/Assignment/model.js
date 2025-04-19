import mongoose from "mongoose";
import AssignmentSchema from "./schema.js";

const AssignmentModel = mongoose.model("AssignmentModel", AssignmentSchema);
export default AssignmentModel;
