// import {useEffect, useState} from "react";
// import { FaChevronDown, FaChevronUp, FaAlignJustify } from "react-icons/fa";
// import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
// import CoursesNavigation from "./Navigations";
// import Modules from "./Modules";
// import Home from "./Home";
// import Assignments from "./Assignments";
// import AssignmentEditor from "./Assignments/Editor";
// import PeopleTable from "./people/Table.tsx";
// import "./index.css";
//
//
// export default function Courses(
//     { courses }: { courses: any[]; }
//
// ) {
//     const { courseId } = useParams();
//     // const params = useParams();
//     // console.log("Extracted Params:", params);
//
//     const { pathname } = useLocation();
//     const [showNav, setShowNav] = useState(false);
//     const [section, setSection] = useState("Home");
//
//     useEffect(() => {
//         const pathParts = pathname.split("/");
//         setSection(pathParts.length > 4 ? pathParts[4] : "Home");
//     }, [pathname]);
//
//     const course = courses.find((course) => course._id === courseId);
//
//      const links =  ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
//     return (
//         <div id="wd-courses" className="container-fluid">
//             <h2 className="text-danger d-flex align-items-center justify-content-between">
//                 <span>
//                     <FaAlignJustify className="me-3 fs-4 mb-1" />
//                     {/*{courseName} &gt; {section}*/}
//                     {course ? `${course.name} > ${section}` : `Course Not Found`}
//                 </span>
//                 <span
//                     className="fs-4 mb-1 d-md-none"
//                     onClick={() => setShowNav((prev) => !prev)}
//                     style={{ cursor: "pointer" }}
//                 >
//                     {showNav ? <FaChevronUp /> : <FaChevronDown />}
//                 </span>
//             </h2>
//
//             {showNav && (
//                 <div
//                     className="bg-white p-3 shadow-sm"
//                     style={{
//                         position: "absolute",
//                         top: "60px",
//                         left: 0,
//                         width: "100%",
//                         zIndex: 1000,
//                         borderBottom: "1px solid #ddd",
//                     }}
//                 >
//                     <ul className="list-unstyled">
//                         {links.map(
//                             (item) => (
//                                 <li key={item} className="p-2 text-danger" onClick={() => setShowNav(false)}>
//                                     {item}
//                                 </li>
//                             )
//                         )}
//                     </ul>
//                 </div>
//             )}
//
//             <div className="row">
//                 <div className="col-md-3 d-none d-md-block">
//                     <CoursesNavigation />
//                 </div>
//
//                 <div className="col-md-9">
//                     <Routes>
//                         <Route path="/" element={<Navigate to="Home" />} />
//                         <Route path="Home" element={<Home />} />
//                         <Route path="Modules" element={<Modules />} />
//                         <Route path="Piazza" element={<h2>Piazza</h2>} />
//                         <Route path="Zoom" element={<h2>Zoom</h2>} />
//                         <Route path="Assignments" element={<Assignments />} />
//                         {/*<Route path="Assignments/:aid" element={<AssignmentEditor />} />*/}
//                         <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
//                         <Route path="Quizzes" element={<h2>Quizzes</h2>} />
//                         <Route path="Exams" element={<h2>Exams</h2>} />
//                         <Route path="Projects" element={<h2>Projects</h2>} />
//                         <Route path="Projects/:pid" element={<AssignmentEditor />} />
//                         <Route path="Grades" element={<h2>Grades</h2>} />
//                         <Route path="People" element={<PeopleTable />} />
//                     </Routes>
//                 </div>
//             </div>
//         </div>
//     );
// }
//

// import { useEffect, useState } from "react";
// import { FaChevronDown, FaChevronUp, FaAlignJustify } from "react-icons/fa";
// import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
// import { useSelector } from "react-redux"; // Import Redux state
// import { courses as allCourses, enrollments } from "../Database/index.tsx";
// import CoursesNavigation from "./Navigations";
// import Modules from "./Modules";
// import Home from "./Home";
// import Assignments from "./Assignments";
// import AssignmentEditor from "./Assignments/Editor";
// import PeopleTable from "./people/Table.tsx";
// import "./index.css";
//
// export default function Courses() {
//     const { courseId } = useParams();
//     const { pathname } = useLocation();
//     const [showNav, setShowNav] = useState(false);
//     const [section, setSection] = useState("Home");
//     const [userCourses, setUserCourses] = useState([]);
//
//     // @ts-ignore
//     const currentUser = useSelector((state) => state.account.currentUser);
//     console.log("Current User:", currentUser);
//
//
//     useEffect(() => {
//         if (currentUser) {
//             // Get enrollments for the current user
//             const userEnrollments = enrollments.filter(e => e.user === currentUser._id);
//
//             // Get courses based on enrollments
//             const filteredCourses = allCourses.filter(course =>
//                 userEnrollments.some(enrollment => enrollment.course === course._id)
//             );
//
//             // @ts-ignore
//             setUserCourses(filteredCourses);
//         }
//     }, [currentUser]);
//
//     useEffect(() => {
//         const pathParts = pathname.split("/");
//         setSection(pathParts.length > 4 ? pathParts[4] : "Home");
//     }, [pathname]);
//
//     // @ts-ignore
//     const course = userCourses.find((course) => course._id === courseId);
//
//     const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
//
//
//     return (
//         <div id="wd-courses" className="container-fluid">
//             <h2 className="text-danger d-flex align-items-center justify-content-between">
//                 <span>
//                     <FaAlignJustify className="me-3 fs-4 mb-1" />
//                       {/* @ts-ignore*/}
//                     {course ? `${course.name} > ${section}` : `Course Not Found`}
//                 </span>
//                 <span
//                     className="fs-4 mb-1 d-md-none"
//                     onClick={() => setShowNav((prev) => !prev)}
//                     style={{ cursor: "pointer" }}
//                 >
//                     {showNav ? <FaChevronUp /> : <FaChevronDown />}
//                 </span>
//             </h2>
//
//             {showNav && (
//                 <div
//                     className="bg-white p-3 shadow-sm"
//                     style={{
//                         position: "absolute",
//                         top: "60px",
//                         left: 0,
//                         width: "100%",
//                         zIndex: 1000,
//                         borderBottom: "1px solid #ddd",
//                     }}
//                 >
//                     <ul className="list-unstyled">
//                         {links.map(
//                             (item) => (
//                                 <li key={item} className="p-2 text-danger" onClick={() => setShowNav(false)}>
//                                     {item}
//                                 </li>
//                             )
//                         )}
//                     </ul>
//                 </div>
//             )}
//
//             <div className="row">
//                 <div className="col-md-3 d-none d-md-block">
//                     <CoursesNavigation />
//                 </div>
//
//                 <div className="col-md-9">
//                     {course ? (
//                         <Routes>
//                             <Route path="/" element={<Navigate to="Home" />} />
//                             <Route path="Home" element={<Home />} />
//                             <Route path="Modules" element={<Modules />} />
//                             <Route path="Piazza" element={<h2>Piazza</h2>} />
//                             <Route path="Zoom" element={<h2>Zoom</h2>} />
//                             <Route path="Assignments" element={<Assignments />} />
//                             <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
//                             <Route path="Quizzes" element={<h2>Quizzes</h2>} />
//                             <Route path="Exams" element={<h2>Exams</h2>} />
//                             <Route path="Projects" element={<h2>Projects</h2>} />
//                             <Route path="Projects/:pid" element={<AssignmentEditor />} />
//                             <Route path="Grades" element={<h2>Grades</h2>} />
//                             <Route path="People" element={<PeopleTable />} />
//                         </Routes>
//                     ) : (
//                         <p className="text-danger">You are not enrolled in this course.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }
//



import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaAlignJustify } from "react-icons/fa";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { useSelector } from "react-redux"; // Import Redux state
import { enrollments } from "../Database/index.tsx"; // Import only enrollments
import CoursesNavigation from "./Navigations";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./people/Table.tsx";
import "./index.css";

// @ts-ignore
export default function Courses({ courses }) {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const [showNav, setShowNav] = useState(false);
    const [section, setSection] = useState("Home");
    const [userCourses, setUserCourses] = useState([]);

    // @ts-ignore
    const currentUser = useSelector((state) => state.account.currentUser);
    console.log("Current User:", currentUser);

    useEffect(() => {
        if (currentUser) {
            console.log("Checking enrollments for user:", currentUser._id);
            // @ts-ignore
            const userEnrollments = enrollments.filter(e => String(e.user) === String(currentUser._id));
            console.log("User Enrollments:", userEnrollments);

            // @ts-ignore
            const filteredCourses = courses.filter(course =>
                userEnrollments.some(enrollment => String(enrollment.course) === String(course._id))
            );

            console.log("Filtered Courses:", filteredCourses);
            // @ts-ignore
            setUserCourses(filteredCourses);
        }
    }, [currentUser, courses]);

    useEffect(() => {
        const pathParts = pathname.split("/");
        setSection(pathParts.length > 4 ? pathParts[4] : "Home");
    }, [pathname]);

    // @ts-ignore
    const course = userCourses.find((course) => String(course._id) === String(courseId));

    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    return (
        <div id="wd-courses" className="container-fluid">
            <h2 className="text-danger d-flex align-items-center justify-content-between">
                <span>
                    <FaAlignJustify className="me-3 fs-4 mb-1" />
                    {/* @ts-ignore */}
                    {course ? `${course.name} > ${section}` : `Course Not Found`}
                </span>
                <span
                    className="fs-4 mb-1 d-md-none"
                    onClick={() => setShowNav((prev) => !prev)}
                    style={{ cursor: "pointer" }}
                >
                    {showNav ? <FaChevronUp /> : <FaChevronDown />}
                </span>
            </h2>

            {showNav && (
                <div
                    className="bg-white p-3 shadow-sm"
                    style={{
                        position: "absolute",
                        top: "60px",
                        left: 0,
                        width: "100%",
                        zIndex: 1000,
                        borderBottom: "1px solid #ddd",
                    }}
                >
                    <ul className="list-unstyled">
                        {links.map(
                            (item) => (
                                <li key={item} className="p-2 text-danger" onClick={() => setShowNav(false)}>
                                    {item}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}

            <div className="row">
                <div className="col-md-3 d-none d-md-block">
                    <CoursesNavigation />
                </div>

                <div className="col-md-9">
                    {course ? (
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Piazza" element={<h2>Piazza</h2>} />
                            <Route path="Zoom" element={<h2>Zoom</h2>} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                            <Route path="Quizzes" element={<h2>Quizzes</h2>} />
                            <Route path="Exams" element={<h2>Exams</h2>} />
                            <Route path="Projects" element={<h2>Projects</h2>} />
                            <Route path="Projects/:pid" element={<AssignmentEditor />} />
                            <Route path="Grades" element={<h2>Grades</h2>} />
                            <Route path="People" element={<PeopleTable />} />
                        </Routes>
                    ) : (
                        <p className="text-danger">You are not enrolled in this course.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
