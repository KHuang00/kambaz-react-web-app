import "./index.css";
import { Link, useParams, useLocation } from "react-router-dom";
import { courseLinks } from "./coursesLink.tsx";

export default function CoursesNavigation() {
    const { courseId } = useParams();
    const { pathname } = useLocation();


    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {courseLinks.map(({ name, path }) => {
                const isActive = pathname === `/Kambaz/Courses/${courseId}/${path}`;

                return (
                    <Link
                        key={path}
                        to={`/Kambaz/Courses/${courseId}/${path}`}
                        id={`wd-course-${path.toLowerCase()}-link`}
                        className={`list-group-item border border-0 ${isActive ? "active text-white bg-danger" : "text-danger"}`}
                    >
                        {name}
                    </Link>
                );
            })}
        </div>
    );
}