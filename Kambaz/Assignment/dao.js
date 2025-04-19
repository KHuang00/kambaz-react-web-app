// import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export async function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    // Database.assignments = [...Database.assignments, newAssignment];
    // return newAssignment;
    return await model.create(newAssignment);
}

export async function findAssignmentsForModule(moduleId) {
    // const { assignments } = Database;
    // return assignments.filter((assignment) => assignment.course === moduleId);
    return model.find({course: moduleId});
}

export async function updateAssignment(assignmentId, assignmentUpdates) {
    // const { assignments } = Database;
    // const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    // Object.assign(assignment, assignmentUpdates);
    //
    return model.findByIdAndUpdate(assignmentId, assignmentUpdates, {new: true});
}

export  async  function deleteAssignment(assignmentId) {
    // const { assignments } = Database;
    // const index = assignments.findIndex((assignment) => assignment._id === assignmentId);
    // if (index !== -1) {
    //     assignments.splice(index, 1);
    //     return true;
    // }
    // return false;
    return model.findByIdAndDelete(assignmentId);
}

export async function findAssignmentById(assignmentId) {
    return model.findById(assignmentId);
}

