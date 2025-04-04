// import { Navigate, Route, Routes } from "react-router-dom";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import KambazNavigation from "./Navigation";
// import Courses from "./Courses";
// import "./index.css";
// import * as db from "./Database";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import ProtectedRoute from "./Account/ProtectedRoute.tsx";
//
// export default function Kambaz() {
//
//     const [courses, setCourses] = useState<any[]>(db.courses);
//     const [course, setCourse] = useState<any>({
//         _id: "1234", name: "New Course", number: "New Number",
//         startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
//     });
//     const addNewCourse = () => {
//         setCourses([...courses, { ...course, _id: uuidv4() }]);
//     };
//     const deleteCourse = (courseId: any) => {
//         setCourses(courses.filter((course) => course._id !== courseId));
//     };
//     const updateCourse = () => {
//         setCourses(
//             courses.map((c) => {
//                 if (c._id === course._id) {
//                     return { ...course, _id: c._id };
//                 } else {
//                     return c;
//                 }
//             })
//         );
//     };
//
//     return (
//         <div id="wd-kambaz">
//             {/*<table>*/}
//             {/*    <tr>*/}
//             {/*        <td valign="top">*/}
//                         <KambazNavigation />
//                     {/*</td>*/}
//                     <div className="wd-main-content-offset p-3">
//                         <Routes>
//                             <Route path="/" element={<Navigate to="Account" />} />
//                             <Route path="/Account/*" element={<Account />} />
//                             <Route path="/Dashboard" element={
//                                <ProtectedRoute>
//                                 <Dashboard
//                                     //@ts-ignore
//                                     courses={courses}
//                                     course={course}
//                                     setCourse={setCourse}
//                                     addNewCourse={addNewCourse}
//                                     deleteCourse={deleteCourse}
//                                     updateCourse={updateCourse}/></ProtectedRoute>
//                             } />
//                             {/*<Route path="/Courses/:cid/*" element={<Courses />} />*/}
//                             {/*@ts-ignore*/}
//                             <Route path="/Courses/:courseId/*"  element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute> } />
//                             <Route path="/Calendar" element={<h1>Calendar</h1>} />
//                             <Route path="/Inbox" element={<h1>Inbox</h1>} />
//                         </Routes>
//                     </div>
//             {/*    </tr>*/}
//             {/*</table>*/}
//         </div>
//     );}
import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./index.css";
// import * as db from "./Database";
// import {useEffect, useState} from "react";
// import { v4 as uuidv4 } from "uuid";
import ProtectedRoute from "./Account/ProtectedRoute.tsx";
import Session from "./Account/Session.tsx";
import * as userClient from "./Account/client.ts";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import * as courseClient from "./Courses/client";

export default function Kambaz() {
    // @ts-ignore
    const [courses, setCourses] = useState<any[]>([]);
    // @ts-ignore
    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });

    const { currentUser } = useSelector((state: any) => state.account);
    const fetchCourses = async () => {
        try {
            const courses = await userClient.findMyCourses();
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchCourses();
    }, [currentUser]);


    // @ts-ignore
    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setCourses([...courses, { ...course, newCourse }]);
    };

    // @ts-ignore
    const deleteCourse = async (courseId: string) => {

        try {
            await courseClient.deleteCourse(courseId);
            setCourses(courses.filter((course: { _id: any; }) => course._id !== courseId));
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };

    // @ts-ignore
    const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(
            courses.map((c: { _id: any; }) => {
                if (c._id === course._id) {
                    return { ...course, _id: c._id };
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <Session>
            <div id="wd-kambaz">
            {/* @ts-ignore */}
            <KambazNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    {/* @ts-ignore */}
                    <Route path="/" element={<Navigate to="Account" />} />
                    {/* @ts-ignore */}
                    <Route path="/Account/*" element={<Account />} />
                    {/* @ts-ignore */}
                    <Route path="/Dashboard" element={
                        <ProtectedRoute>
                            <Dashboard
                                //@ts-ignore
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}
                            />
                        </ProtectedRoute>
                    } />
                    {/* @ts-ignore */}
                    <Route path="/Courses/:courseId/*" element={
                        <ProtectedRoute>
                            <Courses courses={courses} />
                        </ProtectedRoute>
                    } />
                    {/* @ts-ignore */}
                    <Route path="/Calendar" element={<h1>Calendar</h1>} />
                    {/* @ts-ignore */}
                    <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>
            </div>
        </div>
        </Session>

    );
}
