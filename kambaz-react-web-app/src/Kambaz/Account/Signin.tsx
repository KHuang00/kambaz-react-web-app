import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as db from "../Database";
import { Button } from "react-bootstrap";
import {setEnrollments} from "../Courses/enrollmentsReducer.ts";

export default function Signin() {
    const [credentials, setCredentials] = useState<any>({ username: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signin = () => {
        console.log(" Attempting Login with:", credentials);

        if (!credentials.username || !credentials.password) {
            alert(" Please enter both username and password.");
            return;
        }

        const user = db.users.find((u) =>
            u.username === credentials.username && u.password === credentials.password
        );

        if (!user) {
            alert(" Invalid username or password.");
            return;
        }

        console.log("User Found:", user);

        // dispatch(setCurrentUser(user));
        // Set current user in Redux
        dispatch(setCurrentUser(user));

        // Load and set enrollments for this user in Redux
        const userEnrollments = db.enrollments
            .filter((e) => e.user === user._id)
            .map((e) => e.course);

        dispatch(setEnrollments(userEnrollments));

        // Persist login to localStorage
        localStorage.setItem("currentUser", JSON.stringify(user));
        localStorage.setItem("enrollments", JSON.stringify(userEnrollments));

        navigate("/Kambaz/Dashboard");
    };

    // Auto-restore session if user was saved in localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        const storedEnrollments = localStorage.getItem("enrollments");

        if (storedUser) {
            dispatch(setCurrentUser(JSON.parse(storedUser)));
        }
        if (storedEnrollments) {
            dispatch(setEnrollments(JSON.parse(storedEnrollments)));
        }
    }, [dispatch]);



    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            {/*@ts-ignore*/}
            <Form.Control
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="mb-2"
                id="wd-username"
                placeholder="Username"
            />
            {/*@ts-ignore*/}
            <Form.Control
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                id="wd-password"
                placeholder="Password"
                type="password"
                className="mb-2"
            />
            {/*@ts-ignore*/}
            <Button onClick={signin} id="wd-signin-btn" className="w-100"> Sign in </Button>

            <Link to="/Kambaz/Account/Signup" id="wd-signup-link">Sign up</Link>
        </div>
    );
}
