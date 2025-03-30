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

import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";
import * as db from "./Database";
// import { v4 as uuidv4 } from "uuid";
import "./index.css";
import {addCourse, deleteCourse, updateCourse} from "./Courses/reducer.ts";

export default function Dashboard() {
    // Retrieve current user from Redux store
    { /* @ts-ignore */ }
    const currentUser = useSelector((state) => state.account?.currentUser);
    console.log("Dashboard Loaded");
    console.log("Redux State - Current User:", currentUser);

    // Get enrollments from the database
    const { enrollments } = db;

    // Filter courses based on user's enrollments
    const enrolledCourses = db.courses.filter(course =>
        enrollments.some(enrollment =>
            String(enrollment.user) === String(currentUser?._id) &&
            String(enrollment.course) === String(course._id)
        )
    );

    console.log("User's Enrolled Courses:", enrolledCourses);

    // const [courses, setCourses] = useState(enrolledCourses);
    // @ts-ignore
    const courses = useSelector((state) => state.courses.courses);
    const dispatch = useDispatch();
    { /* @ts-ignore */ }
    const [newCourse, setNewCourse] = useState({ name: "", description: "" });
    const [editCourse, setEditCourse] = useState(null);

    { /* @ts-ignore */ }
    const handleAddCourse = () => {
        // const newAddedCourse = { _id: uuidv4(), ...newCourse };
        // // @ts-ignore
        // setCourses([...courses, newAddedCourse]);
        // setNewCourse({ name: "", description: "" }); // Reset form
        dispatch(addCourse(newCourse));
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


    // @ts-ignore
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr />

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
                {/* @ts-ignore*/}
                <Button variant="success" onClick={handleAddCourse}>
                    Add Course
                </Button>
            </div>

            <div id="wd-dashboard-courses">
                { /* @ts-ignore */ }
                <Row xs={1} md={5} className="g-4">
                    {/*@ts-ignore*/}
                    {courses.map((course) => (
                        //@ts-ignore
                        <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                            { /* @ts-ignore */ }
                            <Card>{ /* @ts-ignore */ }
                                <Card.Body className="card-body">{ /* @ts-ignore */ }
                                    <Card.Title className="wd-dashboard-course-title text-center">
                                        {/*// @ts-ignore*/}
                                        {editCourse && editCourse._id === course._id ? (
                                            <input
                                                type="text"
                                                // @ts-ignore
                                                value={editCourse.name}
                                                // @ts-ignore
                                                onChange={(e) => setEditCourse({ ...editCourse, name: e.target.value })}
                                            />
                                        ) : (
                                            course.name
                                        )}
                                    </Card.Title>
                                    <Link to={`/Kambaz/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-center text-dark">{ /* @ts-ignore */ }
                                        <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                                    </Link>{ /* @ts-ignore */ }
                                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        {course.description}
                                    </Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Link to={`/Kambaz/Courses/${course._id}/Home`} className="btn btn-primary">
                                            Go
                                        </Link>{ /* @ts-ignore */ }
                                        {editCourse && editCourse._id === course._id ? (
                                            <button className="btn btn-success float-end me-2" onClick={handleSaveCourse}>
                                                Save
                                            </button>
                                        ) : (
                                            <button className="btn btn-warning float-end me-2" onClick={() => handleEditCourse(course)}>
                                                Edit
                                            </button>
                                        )}{ /* @ts-ignore */ }
                                        <Button variant="danger" onClick={() => handleDeleteCourse(course._id)}>
                                            Delete
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

