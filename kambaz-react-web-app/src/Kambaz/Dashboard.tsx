import { Link } from "react-router-dom";
import {Card, Row, Col, Button} from "react-bootstrap";
import * as db from "./Database";
import "./index.css";

export default function Dashboard() {
    const courses = db.courses;

    return (

        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                { /* @ts-ignore*/}
                <Row xs={1} md={5} className="g-4">
                    {courses.map((course) => (
                        //@ts-ignore
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            { /* @ts-ignore*/}
                            <Card>
                                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                                    { /* @ts-ignore*/}
                                    <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                                    { /* @ts-ignore*/}
                                    <Card.Body className="card-body">
                                        { /* @ts-ignore*/}
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                            {course.name} </Card.Title>
                                        { /* @ts-ignore*/}
                                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            {course.description} </Card.Text>
                                        { /* @ts-ignore*/}
                                        <Button variant="primary"> Go </Button>
                                        { /* @ts-ignore*/}
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>);}
        //@ts-ignore
        // <Container fluid className="dashboard-container">
        //     <h1 className="dashboard-title">Dashboard</h1>
        //     <hr />
        //     <h2 className="dashboard-subtitle">Published Courses ({courses.length})</h2>
        //     <hr />
        //     {/* @ts-ignore */}
        //     <Row className="g-4">
        //         {/* @ts-ignore */}
        //         {courses.map((course) => (
        //             //@ts-ignore
        //             <Col key={course._id} xs={12} sm={6} md={4} lg={3} className="d-flex">
        //                 {/* @ts-ignore */}
        //                 <Card className="course-card">
        //                     {/* @ts-ignore */}
        //                     <Link to={`/Kambaz/Courses/${course._id}/Home`} className="course-link text-decoration-none">
        //                         {/* @ts-ignore */}
        //                         <Card.Img variant="top" src="/images/reactjs.jpg" alt={course.name} />
        //                     </Link>
        //                     {/* @ts-ignore */}
        //                     <Card.Body>
        //                         {/* @ts-ignore */}
        //                         <Card.Title className="text-truncate">
        //                             <Link to={`/Kambaz/Courses/${course._id}/Home`} className="course-link">
        //                                 {course.name}
        //                             </Link>
        //                         </Card.Title>
        //                         {/* @ts-ignore */}
        //                         <Card.Text className="text-muted">{course.description}</Card.Text>
        //                         {/* @ts-ignore */}
        //                         <Link to={`/Kambaz/Courses/${course._id}/Home`} className="btn btn-primary">
        //                             Go
        //                         </Link>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //         ))}
        //     </Row>
        // </Container>
    // );
// }
