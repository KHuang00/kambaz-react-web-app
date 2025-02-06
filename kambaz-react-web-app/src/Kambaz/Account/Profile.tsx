import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {

    return (
        // @ts-ignore
        <Container id="wd-profile-screen" className="mt-4">
            <h3 className="mb-4">Profile</h3> {/* @ts-ignore */}
            <Form> {/* @ts-ignore */}
                <Form.Group controlId="wd-username" className="mb-3"> {/* @ts-ignore */}
                    <Form.Label>Username</Form.Label> {/* @ts-ignore */}
                    <Form.Control defaultValue="alice" placeholder="username" />
                </Form.Group>
                {/* @ts-ignore */}
                <Form.Group controlId="wd-password" className="mb-3"> {/* @ts-ignore */}
                    <Form.Label>Password</Form.Label> {/* @ts-ignore */}
                    <Form.Control
                        defaultValue="123"
                        placeholder="password"
                        type="password"
                    />
                </Form.Group>
                {/* @ts-ignore */}
                <Form.Group controlId="wd-firstname" className="mb-3"> {/* @ts-ignore */}
                    <Form.Label>First Name</Form.Label> {/* @ts-ignore */}
                    <Form.Control defaultValue="Alice" placeholder="First Name" />
                </Form.Group> {/* @ts-ignore */}

                <Form.Group controlId="wd-lastname" className="mb-3"> {/* @ts-ignore */}
                    <Form.Label>Last Name</Form.Label> {/* @ts-ignore */}
                    <Form.Control defaultValue="Wonderland" placeholder="Last Name" />
                </Form.Group>
                {/* @ts-ignore */}
                <Form.Group controlId="wd-dob" className="mb-3"> {/* @ts-ignore */}
                    <Form.Label>Date of Birth</Form.Label> {/* @ts-ignore */}
                    <Form.Control defaultValue="2000-01-01" type="date" />
                </Form.Group>
                {/* @ts-ignore */}
                <Form.Group controlId="wd-email" className="mb-3"> {/* @ts-ignore */}
                    <Form.Label>Email</Form.Label> {/* @ts-ignore */}
                    <Form.Control
                        defaultValue="alice@wonderland.com"
                        type="email"
                        placeholder="Email"
                    />
                </Form.Group> {/* @ts-ignore */}

                <Form.Group controlId="wd-role" className="mb-4"> {/* @ts-ignore */}
                    <Form.Label>Role</Form.Label> {/* @ts-ignore */}
                    <Form.Select defaultValue="FACULTY">
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </Form.Select>
                </Form.Group>
                {/* @ts-ignore */}
                <Button variant="danger" as={Link} to="/Kambaz/Account/Signin" className="w-100">
                    Sign Out
                </Button>
            </Form>
        </Container>
    );
}
