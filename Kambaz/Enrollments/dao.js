// import Database from "../Database/index.js";
// import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function enrollUserInCourse(userId, courseId) {
    // const { enrollments } = Database;
    // enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
    // return enrollments;
    const id = `${(userId)}-${(courseId)}`;
    const newEnrollment = {
        user: userId,
        course: courseId,
        _id: id,
    };
    return model.create(newEnrollment);
}

export function unenrollUserFromCourse(userId, courseId) {
    // const { enrollments } = Database;
    // const index = enrollments.findIndex(
    //     (enrollment) => enrollment.user === userId && enrollment.course === courseId
    // );
    // if (index !== -1) {
    //     enrollments.splice(index, 1);
    //     return true;
    // }
    // return false;
    return model.deleteOne({ user: userId, course: courseId });


}
//find users enrolled in a course
export async function findUsersForCourse(courseId) {
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
}

//find courses a user is enrolled in
export async function findEnrollmentsForUser(userId) {
    // return Database.enrollments.filter((enrollment) => enrollment.user === userId);
    const enrollments = await model.find({user: userId}).populate("course");
    return enrollments.map((enrollment) => enrollment.course);

}
