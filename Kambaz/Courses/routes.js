import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

// export default function CourseRoutes(app) {
//     app.get("/api/courses", (req, res) => {
//         const courses = dao.findAllCourses();
//         res.send(courses);
//     });
//
//     app.delete("/api/courses/:courseId", (req, res) => {
//         const {courseId} = req.params;
//         const status = dao.deleteCourse(courseId);
//         res.send(status);
//     });
//     app.put("/api/courses/:courseId", (req, res) => {
//         const {courseId} = req.params;
//         const courseUpdates = req.body;
//         const status = dao.updateCourse(courseId, courseUpdates);
//         res.send(status);
//     });
//
//     app.post("/api/courses/:courseId/modules", (req, res) => {
//         const { courseId } = req.params;
//         const module = {
//             ...req.body,
//             course: courseId,
//         };
//         const newModule = modulesDao.createModule(module);
//         res.send(newModule);
//     });
//
//
//     app.get("/api/courses/:courseId/modules", (req, res) => {
//         const {courseId} = req.params;
//         const modules = modulesDao.findModulesForCourse(courseId);
//         res.json(modules);
//     });
//
//
//
// }


export default function CourseRoutes(app) {
    app.get("/api/courses", async (req, res) => {
        const courses = await dao.findAllCourses();
        res.send(courses);
    });

    app.post("/api/courses", async (req, res) => {
        const newCourse = await dao.createCourse(req.body);
        const currentUser = req.session["currentUser"];

        console.log("New Course Created:", newCourse);
        console.log("Current User:", currentUser);

        try {
            if (currentUser && currentUser._id) {
                const enroll = await enrollmentsDao.enrollUserInCourse(currentUser._id, newCourse._id);
                console.log("Enrolled:", enroll);
            } else {
                console.warn(" No currentUser in session");
            }
        } catch (err) {
            console.error(" Enrollment failed:", err);
        }

        res.status(201).json(newCourse);
    });


    app.put("/api/courses/:courseId", async (req, res) => {
        const {courseId} = req.params;
        const courseUpdates = req.body;
        const status = await dao.updateCourse(courseId, courseUpdates);
        res.send(status);
    });

    app.delete("/api/courses/:courseId", async (req, res) => {
        const {courseId} = req.params;
        const status = await dao.deleteCourse(courseId);
        res.send(status);
    });

    app.post("/api/courses/:courseId/modules",async (req, res) => {
        const { courseId } = req.params;
        const module = {
            ...req.body,
            course: courseId,
        };
        const newModule = await modulesDao.createModule(module);
        res.send(newModule);
    });

    app.get("/api/courses/:courseId/modules",async (req, res) => {
        const { courseId } = req.params;
        const modules =await modulesDao.findModulesForCourse(courseId);
        res.json(modules);
    });

    const findUsersForCourse = async (req, res) => {
        const { cid } = req.params;
        const users = await enrollmentsDao.findUsersForCourse(cid);
        res.json(users);
    };
    app.get("/api/courses/:cid/users", findUsersForCourse);
}
