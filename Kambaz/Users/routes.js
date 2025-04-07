// import * as dao from "./dao.js";
// let currentUser = null;
// export default function UserRoutes(app) {
//     const createUser = (req, res) => { };
//     const deleteUser = (req, res) => { };
//     const findAllUsers = (req, res) => { };
//     const findUserById = (req, res) => { };
//     const updateUser = (req, res) => { };
//     const signup = (req, res) => { };
//     const signin = (req, res) => {
//         const { username, password } = req.body;
//         currentUser = dao.findUserByCredentials(username, password);
//         res.json(currentUser);
//
//     };app.post("/api/users/signin", signin);
//     const signout = (req, res) => { };
//     const profile = (req, res) => { };
//     app.post("/api/users", createUser);
//     app.get("/api/users", findAllUsers);
//     app.get("/api/users/:userId", findUserById);
//     app.put("/api/users/:userId", updateUser);
//     app.delete("/api/users/:userId", deleteUser);
//     app.post("/api/users/signup", signup);
//
//     app.post("/api/users/signout", signout);
//     app.post("/api/users/profile", profile);
// }
import * as dao from "./dao.js";
import * as courseDao from "../Courses/dao.js";
import express from 'express';
import * as enrollmentsDao from "../Enrollments/dao.js";

// let currentUser = null;
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

export default function UserRoutes(app) {
    // Create a new user
    const createUser = async (req, res) => {
        try {
            const user = req.body;
            const createdUser = await dao.createUser(user);
            res.status(201).json(createdUser);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    };

    // Delete a user
    const deleteUser = async (req, res) => {
        try {
            const { userId } = req.params;
            await dao.deleteUser(userId);
            res.status(200).json({ message: "User deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    };

    // Find all users
    const findAllUsers = async (req, res) => {
        try {
            const users = await dao.findAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    };

    // Find a user by ID
    const findUserById = async (req, res) => {
        try {
            const { userId } = req.params;
            const user = await dao.findUserById(userId);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    };

    // Update a user
    const updateUser = async (req, res) => {
        try {
            const userId = req.params.userId;
            const userUpdates = req.body;
            dao.updateUser(userId, userUpdates);
            const currentUser = dao.findUserById(userId);
            req.session["currentUser"] = currentUser;
            res.json(currentUser);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    };

    // User sign up
    // User sign up
    const signup = async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await dao.findUserByUsername(username);
            if (user) {
                res.status(400).json({ message: "Username already in use" });
                return;
            }
            const currentUser = dao.createUser(req.body);
            req.session["currentUser"] = currentUser;
            res.json(currentUser);

        } catch (error) {
            console.error('Error signing up:', error);
            res.status(500).json({ error: "Error signing up", message: error.message });
        }
    };


    // User sign in
    const signin = async (req, res) => {
        try {
            const { username, password } = req.body;
            const currentUser = dao.findUserByCredentials(username, password);
            if (currentUser) {
                req.session["currentUser"] = currentUser;
                res.json(currentUser);
            } else {
                res.status(401).json({ message: "Unable to login. Try again later." });
            }
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    };

    // User sign out
    const signout = (req, res) => {
        req.session.destroy();
        res.status(200).json({ message: "Logged out successfully" });
    };

    // User profile
    const profile = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (currentUser) {
            res.json(currentUser);
        } else {
            res.status(401).json({ error: "Not authenticated" });
        }
    };

    // const findCoursesForEnrolledUser = (req, res) => {
    //     let { userId } = req.params;
    //     if (userId === "current") {
    //         const currentUser = req.session["currentUser"];
    //         if (!currentUser) {
    //             res.sendStatus(401);
    //             return;
    //         }
    //         userId = currentUser._id;
    //     }
    //     const courses = courseDao.findCoursesForEnrolledUser(userId);
    //     res.json(courses);
    // };

    const findCoursesForEnrolledUser = (req, res) => {
        if (!req.session || !req.session.currentUser) {
            return res.status(401).json({ error: "Not authenticated" });
        }
        const courses = courseDao.findCoursesForEnrolledUser(req.session.currentUser._id);
        res.json(courses);
    };

    const createCourse = (req, res) => {
        const currentUser = req.session["currentUser"];
        const newCourse = courseDao.createCourse(req.body);
        enrollmentsDao.enrollUserInCourse(currentUser._id, newCourse._id);
        res.json(newCourse);
    };



    // Register routes
    app.post("/api/users", createUser);
    app.get("/api/users", findAllUsers);
    app.get("/api/users/:userId", findUserById);
    app.put("/api/users/:userId", updateUser);
    app.delete("/api/users/:userId", deleteUser);
    app.post("/api/users/signup", signup);
    app.post("/api/users/signin", signin);
    app.post("/api/users/signout", signout);
    app.get("/api/users/profile", profile);
    app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);
    app.post("/api/users/current/courses", createCourse);
};
