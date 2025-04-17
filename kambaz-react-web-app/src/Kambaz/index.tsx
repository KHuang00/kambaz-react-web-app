// import { Navigate, Route, Routes } from "react-router-dom";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import KambazNavigation from "./Navigation";
// import Courses from "./Courses";
// import "./index.css";
// import ProtectedRoute from "./Account/ProtectedRoute.tsx";
// import Session from "./Account/Session.tsx";
// import * as userClient from "./Account/client.ts";
// import {useEffect, useState} from "react";
// import * as courseClient from "./Courses/client";
// import {setCourses} from "./Courses/reducer.ts";
// import { useSelector, useDispatch} from "react-redux";
// export default function Kambaz() {
//     // @ts-ignore
//     // const [courses, setCourses] = useState<any[]>([]);
//
//     const dispatch = useDispatch();
//     // @ts-ignore
//     const courses = useSelector((state) => state.courses.courses);
//     // @ts-ignore
//     const currentUser = useSelector((state) => state.account?.currentUser);
//     // @ts-ignore
//     const [course, setCourse] = useState<any>({
//         _id: "1234", name: "New Course", number: "New Number",
//         startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
//     });
//
//
//     // const { currentUser } = useSelector((state: any) => state.account);
//     const [enrolling, setEnrolling] = useState<boolean>(false);
//     const findCoursesForUser = async () => {
//         try {
//             const courses = await userClient.findCoursesForUser(currentUser._id);
//             // setCourses(courses);
//             dispatch(setCourses(courses));
//         } catch (error) {
//             console.error(error);
//         }
//     };
//
//
//     const fetchCourses = async () => {
//         try {
//             const allCourses = await courseClient.fetchAllCourses();
//             const enrolledCourses = await userClient.findCoursesForUser(
//                 currentUser._id
//             );
//             const courses = allCourses.map((course: any) => {
//                 if (enrolledCourses.find((c: any) => c._id === course._id)) {
//                     return { ...course, enrolled: true };
//                 } else {
//                     return course;
//                 }
//             });
//             // setCourses(courses);
//             dispatch(setCourses(courses));
//         } catch (error) {
//             console.error(error);
//         }
//     };
//     // useEffect(() => {
//     //     fetchCourses();
//     // }, [currentUser]);
//
//     // useEffect(() => {
//     //     if (!currentUser || !currentUser._id) return;
//     //     fetchCourses();
//     // }, [currentUser]);
//
//     useEffect(() => {
//         if (!currentUser || !currentUser._id) return;
//         if (enrolling) {
//             fetchCourses();
//         } else {
//             findCoursesForUser();
//         }
//     }, [currentUser, enrolling]);
//
//
//
//     // @ts-ignore
//     const addNewCourse = async () => {
//         const newCourse = await userClient.createCourse(course);
//         setCourses([...courses, { ...course, newCourse }]);
//     };
//
//     // @ts-ignore
//     const deleteCourse = async (courseId: string) => {
//
//         try {
//             await courseClient.deleteCourse(courseId);
//             setCourses(courses.filter((course: { _id: any; }) => course._id !== courseId));
//         } catch (error) {
//             console.error('Error deleting course:', error);
//         }
//     };
//
//     // @ts-ignore
//     const updateCourse = async () => {
//         await courseClient.updateCourse(course);
//         setCourses(
//             courses.map((c: { _id: any; }) => {
//                 if (c._id === course._id) {
//                     return { ...course, _id: c._id };
//                 } else {
//                     return c;
//                 }
//             })
//         );
//     };
//
//
//     return (
//         <Session>
//             <div id="wd-kambaz">
//             {/* @ts-ignore */}
//             <KambazNavigation />
//             <div className="wd-main-content-offset p-3">
//                 <Routes>
//                     {/* @ts-ignore */}
//                     <Route path="/" element={<Navigate to="Account" />} />
//                     {/* @ts-ignore */}
//                     <Route path="/Account/*" element={<Account />} />
//                     {/* @ts-ignore */}
//                     <Route path="/Dashboard" element={
//                         <ProtectedRoute>
//                             <Dashboard
//                                 //@ts-ignore
//                                 courses={courses}
//                                 course={course}
//                                 setCourse={setCourse}
//                                 addNewCourse={addNewCourse}
//                                 deleteCourse={deleteCourse}
//                                 updateCourse={updateCourse}
//                                 enrolling={enrolling} setEnrolling={setEnrolling}
//                             />
//                         </ProtectedRoute>
//                     } />
//                     {/* @ts-ignore */}
//                     <Route path="/Courses/:courseId/*" element={
//                         <ProtectedRoute>
//                             {/*<Courses courses={courses} />*/}
//                             {/* @ts-ignore */}
//                             <Courses courses={useSelector((state) => state.courses.courses)} />
//                         </ProtectedRoute>
//                     } />
//                     {/* @ts-ignore */}
//                     <Route path="/Calendar" element={<h1>Calendar</h1>} />
//                     {/* @ts-ignore */}
//                     <Route path="/Inbox" element={<h1>Inbox</h1>} />
//                 </Routes>
//             </div>
//         </div>
//         </Session>
//
//     );
// }

import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./index.css";
import ProtectedRoute from "./Account/ProtectedRoute.tsx";
import Session from "./Account/Session.tsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import * as courseClient from "./Courses/client";
import { setCourses } from "./Courses/reducer.ts";


export default function Kambaz() {
    const dispatch = useDispatch();

    const { currentUser } = useSelector((state: any) => state.account);
    const fetchCourses = async () => {
        try {
            const courses = await courseClient.fetchAllCourses();
            // setCourses(courses);
            dispatch(setCourses(courses));
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        if (currentUser && currentUser._id) {
            fetchCourses();
        }
    }, [currentUser]);



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
                                <Dashboard/>
                            </ProtectedRoute>
                        } />
                        {/* @ts-ignore */}
                        <Route path="/Courses/:courseId/*" element={
                            <ProtectedRoute>
                                {/*<Courses courses={courses} />*/}
                                {/* @ts-ignore */}
                                <Courses courses={useSelector((state) => state.courses.courses)} />
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