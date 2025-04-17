import * as enrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app) {

    app.post("/api/users/:userId/enrollments/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        const enrollment = enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.status(201).json(enrollment);
    });

    app.delete("/api/users/:userId/enrollments/:courseId", async (req, res) => {
        const {userId, courseId} = req.params;
        try {
            const result = await enrollmentsDao.unenrollUserFromCourse(userId, courseId);
            if (result.deletedCount === 1) {
                res.sendStatus(204); // Success: deleted
            } else {
                res.status(404).json({message: "Enrollment not found"});
            }
        } catch (err) {
            console.error("Error in unenroll route:", err);
            res.status(500).json({message: "Internal server error"});
        }
    });

    app.get("/api/users/:userId/enrollments", async (req, res) => {
        // const { userId } = req.params;
        // const enrollments = enrollmentsDao.findEnrollmentsForUser(userId.userId);
        // res.json(enrollments);
        const currentUser = req.session?.currentUser;
        let { userId } = req.params;

        if (userId === "current") {
            if (!currentUser) {
                return res.status(401).json({ error: "Unauthorized" });
            }
            userId = currentUser._id;
        }

        try {
            const enrollments = await enrollmentsDao.findEnrollmentsForUser(userId);
            res.json(enrollments);
        } catch (err) {
            console.error("Error loading enrollments:", err);
            res.status(500).json({ error: "Server Error" });
        }
    });
}
