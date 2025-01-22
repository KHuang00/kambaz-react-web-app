import { Link } from "react-router-dom";

export default function Dashboard() {
    const courses = [
        { id: "1234", title: "CS1234 React", description: "Full Stack software developer" },
        { id: "2345", title: "CS2345 Node.js", description: "Backend development with Node.js" },
        { id: "3456", title: "CS3456 .NET", description: ".NET Web Programming" },
        { id: "4567", title: "CS4567 Java", description: "Building scalable backend systems" },
        { id: "5678", title: "CS5678 HTML & CSS", description: "Frontend development fundamentals" },
        { id: "6789", title: "CS6789 C#", description: "C# Programming" },
    ];

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr />
            <div id="wd-dashboard-courses">
                {courses.map((course) => (
                    <div className="wd-dashboard-course" key={course.id}>
                        <img src="/images/reactjs.jpg" width={200} alt="Course" />
                        <div>
                            <Link
                                className="wd-dashboard-course-link"
                                to={`/Kambaz/Courses/${course.id}/Home`}
                            >
                                {course.title}
                            </Link>
                            <p className="wd-dashboard-course-title">{course.description}</p>
                            <Link to={`/Kambaz/Courses/${course.id}/Home`}>Go</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
