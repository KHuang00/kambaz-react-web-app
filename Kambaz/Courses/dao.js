import { v4 as uuidv4 } from "uuid";
// import Database from "../Database/index.js";
import model from "./model.js";
import  enrollmentModel from "../Enrollments/model.js";
import moduleModel from "../Modules/model.js";

export function deleteCourse(courseId) {
    // const { courses, enrollments } = Database;
    // Database.courses = courses.filter((course) => course._id !== courseId);
    // Database.enrollments = enrollments.filter(
    //     (enrollment) => enrollment.course !== courseId
    // );
    return model.deleteOne({ _id: courseId });
}

export function findAllCourses() {
    // return Database.courses;
    return model.find();
}
export function findCoursesForEnrolledUser(userId) {
    // const { courses, enrollments } = Database;
    // const enrolledCourses = courses.filter((course) =>
    //     enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
    // return enrolledCourses;
    return enrollmentModel.find({ user: userId })
        .then((enrollments) => {
            const courseIds = enrollments.map((e) => e.course);
            return model.find({ _id: { $in: courseIds } });
        });
}
export function createCourse(course) {
    const newCourse = { ...course, _id: uuidv4() };
    // Database.courses = [...Database.courses, newCourse];
    // return newCourse;
    return model.create(newCourse);

}
export function updateCourse(courseId, courseUpdates) {
    // const { courses } = Database;
    // const course = courses.find((course) => course._id === courseId);
    // Object.assign(course, courseUpdates);
    // return course;
    return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}
export function deleteModule(moduleId) {
    // const { modules } = Database;
    // Database.modules = modules.filter((module) => module._id !== moduleId);
    return moduleModel.deleteOne({ _id: moduleId });
}
