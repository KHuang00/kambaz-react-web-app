import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as db from "../Database";
import { Button } from "react-bootstrap";

export default function Signin() {
    const [credentials, setCredentials] = useState<any>({ username: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signin = () => {
        console.log("🛠 Attempting Login with:", credentials);

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

        dispatch(setCurrentUser(user));

        navigate("/Kambaz/Dashboard");
    };



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
