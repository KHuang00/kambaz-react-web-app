// import { Form, Button, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
//
// export default function Profile() {
//
//     return (
//         // @ts-ignore
//         <Container id="wd-profile-screen" className="mt-4">
//             <h3 className="mb-4">Profile</h3> {/* @ts-ignore */}
//             <Form> {/* @ts-ignore */}
//                 <Form.Group controlId="wd-username" className="mb-3"> {/* @ts-ignore */}
//                     <Form.Label>Username</Form.Label> {/* @ts-ignore */}
//                     <Form.Control defaultValue="alice" placeholder="username" />
//                 </Form.Group>
//                 {/* @ts-ignore */}
//                 <Form.Group controlId="wd-password" className="mb-3"> {/* @ts-ignore */}
//                     <Form.Label>Password</Form.Label> {/* @ts-ignore */}
//                     <Form.Control
//                         defaultValue="123"
//                         placeholder="password"
//                         type="password"
//                     />
//                 </Form.Group>
//                 {/* @ts-ignore */}
//                 <Form.Group controlId="wd-firstname" className="mb-3"> {/* @ts-ignore */}
//                     <Form.Label>First Name</Form.Label> {/* @ts-ignore */}
//                     <Form.Control defaultValue="Alice" placeholder="First Name" />
//                 </Form.Group> {/* @ts-ignore */}
//
//                 <Form.Group controlId="wd-lastname" className="mb-3"> {/* @ts-ignore */}
//                     <Form.Label>Last Name</Form.Label> {/* @ts-ignore */}
//                     <Form.Control defaultValue="Wonderland" placeholder="Last Name" />
//                 </Form.Group>
//                 {/* @ts-ignore */}
//                 <Form.Group controlId="wd-dob" className="mb-3"> {/* @ts-ignore */}
//                     <Form.Label>Date of Birth</Form.Label> {/* @ts-ignore */}
//                     <Form.Control defaultValue="2000-01-01" type="date" />
//                 </Form.Group>
//                 {/* @ts-ignore */}
//                 <Form.Group controlId="wd-email" className="mb-3"> {/* @ts-ignore */}
//                     <Form.Label>Email</Form.Label> {/* @ts-ignore */}
//                     <Form.Control
//                         defaultValue="alice@wonderland.com"
//                         type="email"
//                         placeholder="Email"
//                     />
//                 </Form.Group> {/* @ts-ignore */}
//
//                 <Form.Group controlId="wd-role" className="mb-4"> {/* @ts-ignore */}
//                     <Form.Label>Role</Form.Label> {/* @ts-ignore */}
//                     <Form.Select defaultValue="FACULTY">
//                         <option value="USER">User</option>
//                         <option value="ADMIN">Admin</option>
//                         <option value="FACULTY">Faculty</option>
//                         <option value="STUDENT">Student</option>
//                     </Form.Select>
//                 </Form.Group>
//                 {/* @ts-ignore */}
//                 <Button variant="danger" as={Link} to="/Kambaz/Account/Signin" className="w-100">
//                     Sign Out
//                 </Button>
//             </Form>
//         </Container>
//     );
// }
//
//

import {useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { Form, Button, Container } from "react-bootstrap";
import * as client from "./client";

export default function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector((state: any) => state.account.currentUser);


    useEffect(() => {
        if (!currentUser) navigate("/Kambaz/Account/Signin");
    }, [currentUser, navigate]);

    const updateProfile = async () => {
        const updatedProfile = await client.updateUser(profile);
        dispatch(setCurrentUser(updatedProfile));
    };

    const [profile, setProfile] = useState(currentUser || {});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setProfile({ ...profile, [e.target.id]: e.target.value });
    };

    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null)); // Clears session
        localStorage.removeItem("currentUser");
        localStorage.removeItem("enrollments");
        navigate("/Kambaz/Account/Signin");
    };

    if (!currentUser) return null;

    return (
        // @ts-ignore
        <Container className="wd-profile-screen mt-4">
            <h3 className="mb-4">Profile</h3>
            {/* @ts-ignore*/}
            <Form>
                {/* @ts-ignore*/}
                <Form.Group controlId="username" className="mb-2">
                    {/* @ts-ignore*/}
                    <Form.Label>Username</Form.Label>      {/* @ts-ignore*/}
                    <Form.Control defaultValue={profile.username} onChange={handleChange} />
                </Form.Group>
                {/* @ts-ignore*/}
                <Form.Group controlId="password" className="mb-2">      {/* @ts-ignore*/}
                    <Form.Label>Password</Form.Label>      {/* @ts-ignore*/}
                    <Form.Control type="password" defaultValue={profile.password} onChange={handleChange} />
                </Form.Group>
                {/* @ts-ignore*/}
                <Form.Group controlId="firstName" className="mb-2">      {/* @ts-ignore*/}
                    <Form.Label>First Name</Form.Label>      {/* @ts-ignore*/}
                    <Form.Control defaultValue={profile.firstName} onChange={handleChange} />
                </Form.Group>
                {/* @ts-ignore*/}
                <Form.Group controlId="lastName" className="mb-2">      {/* @ts-ignore*/}
                    <Form.Label>Last Name</Form.Label>      {/* @ts-ignore*/}
                    <Form.Control defaultValue={profile.lastName} onChange={handleChange} />
                </Form.Group>
                {/* @ts-ignore*/}
                <Form.Group controlId="dob" className="mb-2">      {/* @ts-ignore*/}
                    <Form.Label>Date of Birth</Form.Label>      {/* @ts-ignore*/}
                    <Form.Control type="date" defaultValue={profile.dob?.split("T")[0]} onChange={handleChange} />
                </Form.Group>      {/* @ts-ignore*/}

                <Form.Group controlId="email" className="mb-2">      {/* @ts-ignore*/}
                    <Form.Label>Email</Form.Label>      {/* @ts-ignore*/}
                    <Form.Control type="email" defaultValue={profile.email} onChange={handleChange} />
                </Form.Group>
                {/* @ts-ignore*/}
                <Form.Group controlId="role" className="mb-2">      {/* @ts-ignore*/}
                    <Form.Label>Role</Form.Label>      {/* @ts-ignore*/}
                    <Form.Select defaultValue={profile.role} onChange={handleChange}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </Form.Select>
                </Form.Group>
                <br/>
                {/* @ts-ignore*/}
                <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>
                {/* @ts-ignore*/}
                <Button variant="danger" onClick={signout} className="w-100 mt-3">Sign Out</Button>

            </Form>
        </Container>
    );
}
