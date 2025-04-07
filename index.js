// equivalent to import
// create new express instance
// create a route that responds 'hello'
// listen to http://localhost:


// 5.1.7 instead of using require() to load libraries: in package.json, 1. type module turns on ES6 2. use npm start to start server
// const express = require('express')
import express from 'express';
// CORS stands for Cross Origin Request Sharing
import cors from 'cors';
//5.1.8
import Hello from './Hello.js';

import Lab5 from './Lab5/index.js';
import "dotenv/config";
import session from "express-session";
import UserRoutes from "./Kambaz/Users/routes.js";
import EnrollmentsRoutes from "./Kambaz/Enrollments/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentsRoutes from "./Kambaz/Assignment/routes.js";

//server side
const app = express()
// http://localhost:4000/hello responds "Life is good"
// http://localhost:4000 responds "Welcome to Full ..."

// app.use(cors())


app.use(
    cors({
        credentials: true,
        origin: process.env.NETLIFY_URL || "http://localhost:5173",
    })
);

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kambaz",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
EnrollmentsRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentsRoutes(app);
// app.use(cors({
//     origin: 'http://localhost:5173',  // This should match the port React app is running on
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowable methods
//     credentials: true
// }));

// 5.1.8: create http routes move these to hello.js then import it
// app.get('/hello', (req,
//                    res) => {res.send('Life is good!')})
//
// app.get('/', (req, res) => {
//     res.send('Welcome to Full Stack Development!')})

Lab5(app)
Hello(app)

app.listen(process.env.PORT ||4000)

//start with log :nodemon  index.js