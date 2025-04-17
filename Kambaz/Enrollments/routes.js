import * as enrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app) {

    app.post("/api/users/:userId/enrollments/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        const enrollment = enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.status(201).json(enrollment);
    });

    app.delete("/api/users/:userId/enrollments/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        const success = enrollmentsDao.unenrollUserFromCourse(userId, courseId);
        if (success) {
            res.sendStatus(204);
        } else {
            res.status(404).json({ message: "Enrollment not found" });
        }
    });

    app.get("/api/users/:userId/enrollments", (req, res) => {
        // const { userId } = req.params;
        // const enrollments = enrollmentsDao.findEnrollmentsForUser(req.params.userId);
        // res.json(enrollments);

        let { uid } = req.params;

        const userId = uid === "current"
            ? req.session?.currentUser?._id
            : uid;

        if (!userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        try {
            const enrollments = enrollmentsDao.findEnrollmentsForUser(userId);
            res.json(enrollments);
        } catch (err) {
            res.status(500).json({ error: "Server Error" });
        }
    });
}
