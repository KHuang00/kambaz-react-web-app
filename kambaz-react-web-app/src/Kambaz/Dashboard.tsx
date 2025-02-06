import { Link } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./index.css";

export default function Dashboard() {
    const courses = [
        { id: "1234", title: "CS1234 React", description: "Full Stack software developer" },
        { id: "2345", title: "CS2345 Node.js", description: "Backend development with Node.js" },
        { id: "3456", title: "CS3456 .NET", description: ".NET Web Programming" },
        { id: "4567", title: "CS4567 Java", description: "Building scalable backend systems" },
        { id: "5678", title: "CS5678 HTML & CSS", description: "Frontend development fundamentals" },
        { id: "6789", title: "CS6789 C#", description: "C# Programming" },
        { id: "7890", title: "CS7890 AI & ML", description: "Machine learning and AI fundamentals" },
    ];

    return (
        <Container fluid className="dashboard-container">{/* Dashboard Title */}
            <h1 className="dashboard-title">Dashboard</h1>
            <hr />

            <h2 className="dashboard-subtitle">Published Courses ({courses.length})</h2>
            <hr />

            <Row className="g-4">
                {courses.map((course) => (
                    // Bootstrap Columns for Grid Layout
                    <Col key={course.id} xs={12} sm={6} md={4} lg={3} className="d-flex">
                        {/* Bootstrap Card for Course Display */}
                        <Card className="course-card">
                            <Card.Img variant="top" src="/images/reactjs.jpg" alt="Course" />
                            <Card.Body>
                                <Card.Title>
                                    <Link
                                        to={`/Kambaz/Courses/${course.id}/Home`}
                                        className="course-link"
                                    >
                                        {course.title}
                                    </Link>
                                </Card.Title>

                                <Card.Text>{course.description}</Card.Text>
                                <Link to={`/Kambaz/Courses/${course.id}/Home`} className="btn btn-primary">
                                    Go
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

//     return (
//         <div id="wd-dashboard">
//             <h1 id="wd-dashboard-title">Dashboard</h1>
//             <hr />
//             <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//             <hr />
//             <div id="wd-dashboard-courses">
//                 {courses.map((course) => (
//                     <div className="wd-dashboard-course" key={course.id}>
//                         <img src="/images/reactjs.jpg" width={200} alt="Course" />
//                         <div>
//                             <Link
//                                 className="wd-dashboard-course-link"
//                                 to={`/Kambaz/Courses/${course.id}/Home`}
//                             >
//                                 {course.title}
//                             </Link>
//                             <p className="wd-dashboard-course-title">{course.description}</p>
//                             <Link to={`/Kambaz/Courses/${course.id}/Home`}>Go</Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
