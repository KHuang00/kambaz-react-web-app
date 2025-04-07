// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Card, Row, Col, Button, Form } from "react-bootstrap";
// import * as db from "./Database";
// import "./index.css";
// export default function Dashboard() {
//     // Initialize courses state with existing data
//     const [courses, setCourses] = useState(db.courses);
//     const [newCourse, setNewCourse] = useState({ name: "", description: "" });
//     const [editCourse, setEditCourse] = useState(null);
//
//     // Create a new course
//     const handleAddCourse = () => {
//         if (newCourse.name && newCourse.description) {
//             const newEntry = { _id: courses.length + 1, ...newCourse };
//             { /* @ts-ignore */}
//             setCourses([...courses, newEntry]);
//             setNewCourse({ name: "", description: "" });
//         }
//     };
//
//     { /* @ts-ignore */}
//     const handleDeleteCourse = (id) => {
//         setCourses((prevCourses) => prevCourses.filter(course => course._id !== id));
//     };
//
//     { /* @ts-ignore */}
//     const handleUpdateCourse = (id, newName) => {
//         setCourses(courses.map(course =>
//             course._id === id ? { ...course, name: newName } : course
//         ));
//     };
//
//     { /* @ts-ignore */}
//     const handleEditCourse = (course) => {
//         setEditCourse({ ...course });
//     };
//
//     { /* @ts-ignore */}
//     const handleSaveCourse = () => {
//         if (editCourse) {
//             { /* @ts-ignore */}
//             setCourses(courses.map((c) => (c._id === editCourse._id ? editCourse : c)));
//             setEditCourse(null);
//         }
//     };
//
//     return (
//         <div id="wd-dashboard">
//             <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//             <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
//
//
//             <div className="d-flex justify-content-between align-items-center">
//                 <h3>New Course</h3>
//                 { /* @ts-ignore */}
//                 <Button variant="primary" onClick={handleAddCourse} style={{ backgroundColor: "blue" }}>Add Course</Button>
//             </div>
//             { /* @ts-ignore */}
//             <Form>
//                 { /* @ts-ignore */}
//                 <Form.Group>
//                     { /* @ts-ignore */}
//                     <Form.Control
//                         type="text"
//                         placeholder="New Course Name"
//                         value={newCourse.name}
//                         onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
//                     />
//                     { /* @ts-ignore */}
//                     <Form.Control
//                         type="text"
//                         placeholder="New Course Description"
//                         value={newCourse.description}
//                         onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
//                     />
//                 </Form.Group>
//             </Form>
//             <br />
//
//             <div id="wd-dashboard-courses">
//                 { /* @ts-ignore */}
//                 <Row xs={1} md={5} className="g-4">
//                     {courses.map((course) => (
//                         // @ts-ignore
//                         <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
//                             { /* @ts-ignore */}
//                             <Card>
//                                 <Link to={`/Kambaz/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark">
//                                     { /* @ts-ignore */}
//                                     <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
//                                     { /* @ts-ignore */}
//                                     <Card.Body className="card-body">
//                                         { /* @ts-ignore */}
//                                         <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                                             { /* @ts-ignore */}
//                                             {editCourse && editCourse._id === course._id ? (
//                                                 <input
//                                                     type="text"
//                                                     //@ts-ignore
//                                                     value={editCourse.name}
//                                                     //@ts-ignore
//                                                     onChange={(e) => setEditCourse({ ...editCourse, name: e.target.value })}
//                                                 />
//                                             ) : (
//                                                 course.name
//                                             )}
//                                         </Card.Title>
//                                         { /* @ts-ignore */}
//                                         <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                                             {course.description}
//                                         </Card.Text>
//                                         {/*<div className="d-flex justify-content-between">*/}
//                                         {/*    { /* @ts-ignore *!/*/}
//                                         {/*    <Button variant="primary">Go</Button>*/}
//                                         {/*    { /* @ts-ignore *!/*/}
//                                         {/*    {editCourse && editCourse._id === course._id ? (*/}
//                                         {/*        <button className="btn btn-success float-end me-2"*/}
//                                         {/*                onClick={handleSaveCourse}>*/}
//                                         {/*            Save*/}
//                                         {/*        </button>*/}
//                                         {/*    ) : (*/}
//                                         {/*        <button className="btn btn-warning float-end me-2"*/}
//                                         {/*                onClick={() => handleEditCourse(course)}>*/}
//                                         {/*            Edit*/}
//                                         {/*        </button>*/}
//                                         {/*    )}*/}
//                                         {/*    { /* @ts-ignore *!/*/}
//                                         {/*    <Button variant="danger" onClick={() => handleDeleteCourse(course._id)}>Delete</Button>*/}
//                                         {/*</div>*/}
//                                         <div className="d-flex justify-content-between">
//                                             <Link to={`/Kambaz/Courses/${course._id}/Home`} className="btn btn-primary">
//                                                 Go
//                                             </Link>
//                                             { /* @ts-ignore */}
//                                             {editCourse && editCourse._id === course._id ? (
//                                                 //@ts-ignore
//                                                 <Button variant="success" className="me-2" onClick={handleSaveCourse}>
//                                                     Save
//                                                 </Button>
//                                             ) : (
//                                                 //@ts-ignore
//                                                 <Button variant="warning" className="me-2" onClick={() => handleEditCourse(course)}>
//                                                     Edit
//                                                 </Button>
//                                             )}
//                                             { /* @ts-ignore */}
//                                             <Button variant="danger" onClick={(e) => {
//                                                 e.stopPropagation(); // Prevent accidental navigation
//                                                 handleDeleteCourse(course._id);
//                                             }}>
//                                                 Delete
//                                             </Button>
//                                         </div>
//
//                                     </Card.Body>
//                                 </Link>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </div>
//         </div>
//     );
// }

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Card, Row, Col, Button, Form } from "react-bootstrap";
// import * as db from "./Database";
// import "./index.css";
// export default function Dashboard() {
//     // Initialize courses state with existing data
//     const [courses, setCourses] = useState(db.courses);
//     const [newCourse, setNewCourse] = useState({ name: "", description: "" });
//     const [editCourse, setEditCourse] = useState(null);
//
//     // Create a new course
//     const handleAddCourse = () => {
//         if (newCourse.name && newCourse.description) {
//             const newEntry = { _id: courses.length + 1, ...newCourse };
//             // @ts-ignore
//             setCourses([...courses, newEntry]);
//             setNewCourse({ name: "", description: "" });
//         }
//     };
//
//     // @ts-ignore
//     const handleDeleteCourse = (id) => {
//         setCourses(courses.filter(course => course._id !== id));
//     };
//
//     // @ts-ignore
//     const handleUpdateCourse = (id, newName) => {
//         setCourses(courses.map(course =>
//             course._id === id ? { ...course, name: newName } : course
//         ));
//     };
//
//     // @ts-ignore
//     const handleEditCourse = (course) => {
//         setEditCourse(course);
//     };
//
//     // @ts-ignore
//     const handleSaveCourse = () => {
//         if (editCourse) { { /* @ts-ignore */ }
//             setCourses(courses.map((c) => (c._id === editCourse._id ? editCourse : c)));
//             setEditCourse(null);
//         }
//     };
//
//     return (
//         <div id="wd-dashboard">
//             <h1 id="wd-dashboard-title">Dashboard</h1>
//             <hr />
//             <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//             <hr />
//
//             <div className="d-flex justify-content-between align-items-center">
//                 <h3>New Course</h3>
//                 {/* @ts-ignore */}
//                 <Button variant="primary" onClick={handleAddCourse} style={{ backgroundColor: "blue" }}>
//                     Add Course
//                 </Button>
//             </div>
//
//             {/* @ts-ignore */}
//             <Form>
//                 { /* @ts-ignore */ }
//                 <Form.Group>
//                     { /* @ts-ignore */ }
//                     <Form.Control
//                         type="text"
//                         placeholder="New Course Name"
//                         value={newCourse.name}
//                         onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
//                     />
//                     { /* @ts-ignore */ }
//                     <Form.Control
//                         type="text"
//                         placeholder="New Course Description"
//                         value={newCourse.description}
//                         onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
//                     />
//                 </Form.Group>
//             </Form>
//             <br />
//
//             <div id="wd-dashboard-courses"> { /* @ts-ignore */ }
//                 <Row xs={1} md={5} className="g-4"> { /* @ts-ignore */ }
//                     {courses.map((course) => (// @ts-ignore
//                         <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}> { /* @ts-ignore */ }
//                             <Card> { /* @ts-ignore */ }
//                                 <Card.Body className="card-body"> { /* @ts-ignore */ }
//                                     <Card.Title className="wd-dashboard-course-title text-center"> { /* @ts-ignore */ }
//                                         {editCourse && editCourse._id === course._id ? (
//                                             <input
//                                                 type="text"
//                                             //@ts-ignore
//                                                 value={editCourse.name}
//                                                 // @ts-ignore*/ }
//                                                 onChange={(e) => setEditCourse({ ...editCourse, name: e.target.value })}
//                                             />
//                                         ) : (
//                                             course.name
//                                         )}
//                                     </Card.Title>
//                                     <Link to={`/Kambaz/Courses/${course._id}/Home`}
//                                           className="wd-dashboard-course-link text-decoration-none text-center text-dark"> { /* @ts-ignore */ }
//                                         <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
//                                     </Link> { /* @ts-ignore */ }
//                                     <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                                         {course.description}
//                                     </Card.Text>
//                                     <div className="d-flex justify-content-between">
//                                         <Link to={`/Kambaz/Courses/${course._id}/Home`} className="btn btn-primary">
//                                             Go
//                                         </Link> { /* @ts-ignore */ }
//                                         {editCourse && editCourse._id === course._id ? (
//                                             <button className="btn btn-success float-end me-2"
//                                                     onClick={handleSaveCourse}>
//                                                 Save
//                                             </button>
//                                         ) : (
//                                             <button className="btn btn-warning float-end me-2"
//                                                     onClick={() => handleEditCourse(course)}>
//                                                 Edit
//                                             </button>
//                                         )} { /* @ts-ignore */ }
//                                         <Button variant="danger" onClick={() => handleDeleteCourse(course._id)}>
//                                             Delete
//                                         </Button>
//                                     </div>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </div>
//         </div>
//     );
// }

import {useEffect, useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";
// import * as db from "./Database";
// import { v4 as uuidv4 } from "uuid";
import "./index.css";
import {addCourse, deleteCourse, setCourses, updateCourse} from "./Courses/reducer.ts";
import {enroll, setEnrollments, unenroll} from "./Courses/enrollmentsReducer.ts";
import * as enrollmentsClient from "../Kambaz/Courses/enrollmentsClient";
import * as coursesClient from "../Kambaz/Courses/client.ts";

export default function Dashboard() {

    const dispatch = useDispatch();
    // Retrieve current user from Redux store
    { /* @ts-ignore */ }
    const currentUser = useSelector((state) => state.account?.currentUser);
    console.log("Dashboard Loaded");
    console.log("Redux State - Current User:", currentUser);
    // @ts-ignore
    const courses = useSelector((state) => state.courses.courses);
    // @ts-ignore
    const enrolledCourseIds = useSelector((state) => state.enrollments.enrollments || []);
    // Get enrollments from the database
    // const { enrollments } = db;

    // Filter courses based on user's enrollments
    // const enrolledCourses = db.courses.filter(course =>
    //     enrollments.some(enrollment =>
    //         String(enrollment.user) === String(currentUser?._id) &&
    //         String(enrollment.course) === String(course._id)
    //     )
    // );
    // console.log("User's Enrolled Courses:", enrolledCourses);

    // const [courses, setCourses] = useState(enrolledCourses);

    { /* @ts-ignore */ }
    const [newCourse, setNewCourse] = useState({ name: "", description: "" });
    const [editCourse, setEditCourse] = useState(null);
    const [showAllCourses, setShowAllCourses] = useState(false);

    const isFaculty = currentUser?.role === "FACULTY";
    const userId = currentUser?._id;

    // Fetch enrollments on initial load
    useEffect(() => {
        enrollmentsClient.fetchUserEnrollments(userId)
            .then((data) => {
                if (Array.isArray(data)) {
                    const enrolledIds = data.map(e => e.course);
                    dispatch(setEnrollments(enrolledIds));
                } else {
                    console.error("Unexpected enrollments response:", data);
                    dispatch(setEnrollments([]));
                }
            })
            .catch((err) => console.error("Error fetching enrollments:", err));
    }, [userId, dispatch]);


    const visibleCourses = showAllCourses
        ? courses
        : courses.filter((course: { _id: any; }) => enrolledCourseIds.includes(course._id));


    { /* @ts-ignore */ }
    const handleAddCourse = async () => {
        // const newAddedCourse = { _id: uuidv4(), ...newCourse };
        // // @ts-ignore
        // setCourses([...courses, newAddedCourse]);
        // setNewCourse({ name: "", description: "" }); // Reset form

        // dispatch(addCourse(newCourse));
        if (!newCourse.name.trim()) {
            console.log("Course name is required.");
            alert("Please enter a course name and description.");
            return;
        }
        // alert("Course created!")
        // console.log("Dispatching addCourse with:", newCourse); // Debug log
        // dispatch(addCourse(newCourse));
        // setNewCourse({ name: "", description: "" });
        const createdCourse = await coursesClient.createCourse(newCourse);
        dispatch(addCourse(createdCourse));
        alert("Course created and saved to backend!");
        setNewCourse({name: "", description: ""});

    };

    { /* @ts-ignore */ }
    const handleDeleteCourse = (id) => {
        // setCourses(courses.filter(course => course._id !== id));
        dispatch(deleteCourse(id));
    };

    { /* @ts-ignore */ }
    const handleEditCourse = (course) => {
        setEditCourse(course);
    };

    const handleSaveCourse = () => {
        if (editCourse) {
            { /* @ts-ignore */ }
            // setCourses(courses.map((c) => (c._id === editCourse._id ? editCourse : c)));
            dispatch(updateCourse(editCourse));
            setEditCourse(null);
        }
    };

    const handleEnroll = async (courseId: string) => {
        try {
            await enrollmentsClient.enrollUser(userId, courseId);
            dispatch(enroll(courseId));
            alert("Enrolled successfully!");
        console.log("Enrolled successfully for course to user:", courseId, userId);
            const updatedCourses = await coursesClient.fetchAllCourses();
            dispatch(setCourses(updatedCourses));
        } catch (error) {
            console.error("Enrollment error:", error);
            alert("Enrollment failed.");
        }
    };

    const handleUnenroll = async (courseId: string) => {
        try {
            await enrollmentsClient.unenrollUser(userId, courseId);
            dispatch(unenroll(courseId));
            alert("Unenrolled successfully!");
        } catch (error) {
            console.error("Unenrollment error:", error);
            alert("Unenrollment failed.");
        }
    };

    // @ts-ignore
    return (


        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />

            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 id="wd-dashboard-published">
                    {showAllCourses ? "All Courses" : "My Enrolled Courses"} ({visibleCourses.length})
                </h2>
                {/*@ts-ignore*/}
                <Button variant="primary" onClick={() => setShowAllCourses(!showAllCourses)}>
                    {showAllCourses ? "Show Enrolled Only" : "Show All Courses"}
                </Button>
            </div>

            {isFaculty && (
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="Course Name"
                        className="form-control mb-2"
                        value={newCourse.name}
                        onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Course Description"
                        className="form-control mb-2"
                        value={newCourse.description}
                        onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                    />
                    {/*@ts-ignore*/}
                    <Button variant="success" onClick={handleAddCourse}>
                        Add Course
                    </Button>
                </div>
            )}

            <div id="wd-dashboard-courses">
                {/*@ts-ignore*/}
                <Row xs={1} md={5} className="g-4">
                    {/*@ts-ignore*/}
                    {visibleCourses.map((course) => (
                        //@ts-ignore
                        <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                            {/*@ts-ignore*/}
                            <Card>
                                {/*@ts-ignore*/}
                                <Card.Body className="card-body">
                                    {/*@ts-ignore*/}
                                    <Card.Title className="wd-dashboard-course-title text-center">
                                        {/*@ts-ignore*/}
                                        {editCourse && editCourse._id === course._id ? (
                                            <input
                                                type="text"
                                                //@ts-ignore
                                                value={editCourse.name}
                                                //@ts-ignore
                                                onChange={(e) => setEditCourse({ ...editCourse, name: e.target.value })}
                                            />
                                        ) : (
                                            course.name
                                        )}
                                    </Card.Title>

                                    <Link
                                        to={`/Kambaz/Courses/${course._id}/Home`}
                                        className="wd-dashboard-course-link text-decoration-none text-center text-dark"
                                    >
                                        {/*@ts-ignore*/}
                                        <Card.Img
                                            src="/images/reactjs.jpg"
                                            variant="top"
                                            width="100%"
                                            height={160}
                                        />
                                    </Link>
                                    {/*@ts-ignore*/}
                                    <Card.Text
                                        className="wd-dashboard-course-description overflow-hidden"
                                        style={{ height: "100px" }}
                                    >
                                        {course.description}
                                    </Card.Text>

                                    <div className="d-flex justify-content-between">
                                        <Link to={`/Kambaz/Courses/${course._id}/Home`} className="btn btn-primary">
                                            Go
                                        </Link>

                                        {isFaculty ? (
                                            <>
                                                {/*@ts-ignore*/}
                                                {editCourse && editCourse._id === course._id ? (
                                                    <button className="btn btn-success me-2" onClick={handleSaveCourse}>
                                                        Save
                                                    </button>
                                                ) : (
                                                    <button className="btn btn-warning me-2" onClick={() => handleEditCourse(course)}>
                                                        Edit
                                                    </button>
                                                )}
                                                {/*@ts-ignore*/}
                                                <Button variant="danger" onClick={() => handleDeleteCourse(course._id)}>
                                                    Delete
                                                </Button>
                                            </>
                                        ) : (
                                            //@ts-ignore
                                            <Button
                                                variant={enrolledCourseIds.includes(course._id) ? "danger" : "success"}
                                                onClick={() =>
                                                    enrolledCourseIds.includes(course._id)
                                                        ? handleUnenroll(course._id)
                                                        : handleEnroll(course._id)
                                                }
                                            >
                                                {enrolledCourseIds.includes(course._id) ? "Unenroll" : "Enroll"}

                                            </Button>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>

        // <div id="wd-dashboard">
        //     <h1 id="wd-dashboard-title">Dashboard</h1>
        //     <hr />
        //     <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
        //     <hr />
        //
        //     <div className="mb-3">
        //         <input
        //             type="text"
        //             placeholder="Course Name"
        //             className="form-control mb-2"
        //             value={newCourse.name}
        //             onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
        //         />
        //         <input
        //             type="text"
        //             placeholder="Course Description"
        //             className="form-control mb-2"
        //             value={newCourse.description}
        //             onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
        //         />
        //         {/* @ts-ignore*/}
        //         <Button variant="success" onClick={handleAddCourse}>
        //             Add Course
        //         </Button>
        //     </div>
        //
        //     <div id="wd-dashboard-courses">
        //         { /* @ts-ignore */ }
        //         <Row xs={1} md={5} className="g-4">
        //             {/*@ts-ignore*/}
        //             {courses.map((course) => (
        //                 //@ts-ignore
        //                 <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
        //                     { /* @ts-ignore */ }
        //                     <Card>{ /* @ts-ignore */ }
        //                         <Card.Body className="card-body">{ /* @ts-ignore */ }
        //                             <Card.Title className="wd-dashboard-course-title text-center">
        //                                 {/*// @ts-ignore*/}
        //                                 {editCourse && editCourse._id === course._id ? (
        //                                     <input
        //                                         type="text"
        //                                         // @ts-ignore
        //                                         value={editCourse.name}
        //                                         // @ts-ignore
        //                                         onChange={(e) => setEditCourse({ ...editCourse, name: e.target.value })}
        //                                     />
        //                                 ) : (
        //                                     course.name
        //                                 )}
        //                             </Card.Title>
        //                             <Link to={`/Kambaz/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-center text-dark">{ /* @ts-ignore */ }
        //                                 <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
        //                             </Link>{ /* @ts-ignore */ }
        //                             <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        //                                 {course.description}
        //                             </Card.Text>
        //                             <div className="d-flex justify-content-between">
        //                                 <Link to={`/Kambaz/Courses/${course._id}/Home`} className="btn btn-primary">
        //                                     Go
        //                                 </Link>{ /* @ts-ignore */ }
        //                                 {editCourse && editCourse._id === course._id ? (
        //                                     <button className="btn btn-success float-end me-2" onClick={handleSaveCourse}>
        //                                         Save
        //                                     </button>
        //                                 ) : (
        //                                     <button className="btn btn-warning float-end me-2" onClick={() => handleEditCourse(course)}>
        //                                         Edit
        //                                     </button>
        //                                 )}{ /* @ts-ignore */ }
        //                                 <Button variant="danger" onClick={() => handleDeleteCourse(course._id)}>
        //                                     Delete
        //                                 </Button>
        //                             </div>
        //                         </Card.Body>
        //                     </Card>
        //                 </Col>
        //             ))}
        //         </Row>
        //     </div>
        // </div>
    );
}


