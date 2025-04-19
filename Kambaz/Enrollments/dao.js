// import Database from "../Database/index.js";
// import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export async function enrollUserInCourse(userId, courseId) {
    const id = `${userId}-${courseId}`;
    const newEnrollment = {
        user: userId,
        course: courseId,
        _id: id,
    };

    try {
        return await model.create(newEnrollment);
    } catch (err) {
        if (err.code === 11000) {
            console.warn(`Enrollment already exists for user ${userId} in course ${courseId}`);
            return null;
        }
        throw err;
    }
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
    // return model.deleteOne({ user: userId, course: courseId });
    return model.deleteOne({ user: String(userId), course: String(courseId) });


}
//find users enrolled in a course
export async function findUsersForCourse(courseId) {
    const enrollments = await model.find({ course: String(courseId) }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
}

//find courses a user is enrolled in
export async function findEnrollmentsForUser(userId) {
    // return Database.enrollments.filter((enrollment) => enrollment.user === userId);
    //1-2
    // const enrollments = await model.find({user: String(userId)}).populate("course");
    //1
    // console.log("Enrollments found for user:", userId, enrollments);
    // return enrollments.map((enrollment) => enrollment.course);
    //2
    // const validCourses = enrollments
    //     .filter(e => e && e.course)   // remove null course refs
    //     .map(e => e.course._id);      // only return course IDs
    // console.log("Clean enrolled course IDs:", validCourses);
    // return validCourses;

    // 3
    const enrollments = await model.find({ user: String(userId) });
    // Return course IDs only
    return enrollments.map((e) => String(e.course));
}
