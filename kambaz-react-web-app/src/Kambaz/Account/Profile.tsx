import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <Container id="wd-profile-screen" className="mt-4">
            <h3 className="mb-4">Profile</h3>
            <Form>
                <Form.Group controlId="wd-username" className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control defaultValue="alice" placeholder="username" />
                </Form.Group>

                <Form.Group controlId="wd-password" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        defaultValue="123"
                        placeholder="password"
                        type="password"
                    />
                </Form.Group>

                <Form.Group controlId="wd-firstname" className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control defaultValue="Alice" placeholder="First Name" />
                </Form.Group>

                <Form.Group controlId="wd-lastname" className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control defaultValue="Wonderland" placeholder="Last Name" />
                </Form.Group>

                <Form.Group controlId="wd-dob" className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control defaultValue="2000-01-01" type="date" />
                </Form.Group>

                <Form.Group controlId="wd-email" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        defaultValue="alice@wonderland.com"
                        type="email"
                        placeholder="Email"
                    />
                </Form.Group>

                <Form.Group controlId="wd-role" className="mb-4">
                    <Form.Label>Role</Form.Label>
                    <Form.Select defaultValue="FACULTY">
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="danger" as={Link} to="/Kambaz/Account/Signin" className="w-100">
                    Sign Out
                </Button>
            </Form>
        </Container>
    );
}
