import { useState } from "react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import { Navigate, Route, Routes } from "react-router";
import CoursesNavigation from "./Navigations";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./people/Table.tsx";
export default function Courses() {
    const [showNav, setShowNav] = useState(false);

    return (
        <div id="wd-courses" className="container-fluid">
            {/*<h2 className="text-danger d-flex align-items-center">*/}
            {/*    <FaAlignJustify*/}
            {/*        className="me-4 fs-4 mb-1 d-md-none"*/}
            {/*        onClick={() => setShowNav(!showNav)}*/}
            {/*        style={{ cursor: "pointer" }}*/}
            {/*    />*/}
            {/*    Course 1234*/}
            {/*</h2>*/}
            {/*<hr />*/}

            <h2 className="text-danger d-flex align-items-center justify-content-between">
                <span>Course 1234</span> {/* Course title */}
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
                        <li className="p-2 text-danger" onClick={() => setShowNav(false)}>
                            Home
                        </li>
                        <li className="p-2 text-danger" onClick={() => setShowNav(false)}>
                            Modules
                        </li>
                        <li className="p-2 text-danger" onClick={() => setShowNav(false)}>
                            Piazza
                        </li>
                        <li className="p-2 text-danger" onClick={() => setShowNav(false)}>
                            Zoom
                        </li>
                        <li className="p-2 text-danger" onClick={() => setShowNav(false)}>
                            Assignments
                        </li>
                        <li className="p-2 text-danger" onClick={() => setShowNav(false)}>
                            Quizzes
                        </li>
                        <li className="p-2 text-danger" onClick={() => setShowNav(false)}>
                            Grades
                        </li>
                        <li className="p-2 text-danger" onClick={() => setShowNav(false)}>
                            People
                        </li>
                    </ul>
                </div>
            )}

            <div className="row">
                <div className={`col-md-3 d-none d-md-block`}>
                    <CoursesNavigation />
                </div>

                <div className="col-md-9">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h2>Piazza</h2>} />
                        <Route path="Zoom" element={<h2>Zoom</h2>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="Quizzes" element={<h2>Quizzes</h2>} />
                        <Route path="Exams" element={<h2>Exams</h2>} />
                        <Route path="Projects" element={<h2>Projects</h2>} />
                        <Route path="Projects/:pid" element={<AssignmentEditor />} />
                        <Route path="Grades" element={<h2>Grades</h2>} />
                        <Route path="People" element={<PeopleTable />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

