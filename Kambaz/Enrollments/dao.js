import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
    return enrollments;
}

export function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = Database;
    const index = enrollments.findIndex(
        (enrollment) => enrollment.user === userId && enrollment.course === courseId
    );
    if (index !== -1) {
        enrollments.splice(index, 1);
        return true;
    }
    return false;
}

export function findEnrollmentsForUser(userId) {
    return Database.enrollments.filter((enrollment) => enrollment.user === userId);
}