import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}

export function findAssignmentsForModule(moduleId) {
    const { assignments } = Database;
    return assignments.filter((assignment) => assignment._id === moduleId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
}

export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    const index = assignments.findIndex((assignment) => assignment._id === assignmentId);
    if (index !== -1) {
        assignments.splice(index, 1);
        return true;
    }
    return false;
}
