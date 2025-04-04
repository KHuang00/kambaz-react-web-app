// import { FaCheckCircle, FaEllipsisV, FaPlus, FaRegFileAlt, FaSearch } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useParams } from "react-router";
// import { assignments } from "../../Database";
//
// export default function Assignments() {
//     const { courseId } = useParams();
//
//     const courseAssignments = assignments.filter(assignment => assignment.course === courseId);
//
//     return (
//         <div className="container mt-4">
//             <div className="d-flex justify-content-between align-items-center mb-3">
//                 <div className="input-group search-bar">
//                     <span className="input-group-text">
//                         <FaSearch />
//                     </span>
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Search..."
//                     />
//                 </div>
//
//                 <div className="d-flex align-items-center">
//                     <button className="btn btn-outline-secondary me-2 d-flex align-items-center">
//                         <FaPlus className="me-1" /> Group
//                     </button>
//                     <button className="btn btn-danger d-flex align-items-center">
//                         <FaPlus className="me-1" /> Assignment
//                     </button>
//                 </div>
//             </div>
//
//             <div className="card">
//                 <div className="card-header d-flex justify-content-between align-items-center">
//                     <h4 className="fw-bold mb-0">ASSIGNMENTS</h4>
//                     <div className="d-flex align-items-center">
//                         <span className="badge bg-light text-dark me-2">40% of Total</span>
//                         <FaPlus className="text-muted" />
//                     </div>
//                 </div>
//
//                 <ul className="list-group list-group-flush">
//                     {courseAssignments.length > 0 ? (
//                         courseAssignments.map((item) => (
//                             <li key={item._id} className="list-group-item d-flex align-items-center">
//                                 <FaRegFileAlt className="text-muted me-3 fs-4" />
//                                 <div className="border-start border-success ps-3 flex-grow-1">
//                                     <div className="d-flex justify-content-between align-items-center">
//                                         <div>
//                                             <a href={`#/Kambaz/Courses/${courseId}/Assignments/${item._id}`} className="fw-bold text-decoration-none">
//                                                 {item.title}
//                                             </a>
//                                             <p className="text-muted mb-0">
//                                                 <span className="text-danger fw-bold">{item.detail.module}</span> |
//                                                 Available Until: {item.detail.start} |
//                                                 Due: {item.detail.due} |
//                                                 {item.detail.points}
//                                             </p>
//
//                                         </div>
//                                         <FaCheckCircle className="text-success ms-2" />
//                                     </div>
//                                 </div>
//                                 <FaEllipsisV className="text-muted ms-3" />
//                             </li>
//                         ))
//                     ) : (
//                         <li className="list-group-item text-muted">No assignments found for this course.</li>
//                     )}
//                 </ul>
//             </div>
//         </div>
//     );
// }
//

// import { FaPlus, FaRegFileAlt, FaSearch } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useParams, Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addAssignment, deleteAssignment } from "./reducer";
//
// export default function Assignments() {
//     const { courseId } = useParams();
//     const dispatch = useDispatch();
//
//     // // @ts-ignore
//     // const currentUser = useSelector((state) => state.accountReducer?.currentUser);
//     //@ts-ignore
//     const assignments = useSelector((state) => state.assignments?.assignments || []);
//     //
//     // const assignments = useSelector((state) => state.assignments?.assignments);
//     // @ts-ignore
//     const courseAssignments = Array.isArray(assignments)
//         ? assignments.filter(a => a.course === courseId)
//         : [];
//     //
//     // const courseAssignments = assignments.filter(a => a.course === courseId);
//
//     // Add a new assignment
//     const handleAddAssignment = () => {
//         const newAssignment = {
//             _id: `${Date.now()}`,
//             course: courseId,
//             title: "New Assignment",
//             detail: { module: "Module X", start: "TBA", due: "TBA", points: "0 pts" },
//         };
//         dispatch(addAssignment(newAssignment));
//     };
//
//     return (
//         <div className="container mt-4">
//             <div className="d-flex justify-content-between align-items-center mb-3">
//                 <div className="input-group search-bar">
//                     <span className="input-group-text"><FaSearch /></span>
//                     <input type="text" className="form-control" placeholder="Search..." />
//                 </div>
//
//                 <button className="btn btn-danger d-flex align-items-center" onClick={handleAddAssignment}>
//                     <FaPlus className="me-1" /> Add Assignment
//                 </button>
//             </div>
//
//             <div className="card">
//                 <div className="card-header d-flex justify-content-between align-items-center">
//                     <h4 className="fw-bold mb-0">ASSIGNMENTS</h4>
//                     <span className="badge bg-light text-dark">Total: {courseAssignments.length}</span>
//                 </div>
//
//                 <ul className="list-group list-group-flush">
//                     {courseAssignments.length > 0 ? (
//                         //@ts-ignore
//                         courseAssignments.map((item) => (
//                             <li key={item._id} className="list-group-item d-flex align-items-center">
//                                 <FaRegFileAlt className="text-muted me-3 fs-4" />
//                                 <div className="border-start border-success ps-3 flex-grow-1">
//                                     <div className="d-flex justify-content-between align-items-center">
//                                         <div>
//                                             <Link to={`/Kambaz/Courses/${courseId}/Assignments/${item._id}`} className="fw-bold text-decoration-none">
//                                                 {item.title}
//                                             </Link>
//                                         </div>
//                                         <button className="btn btn-sm btn-danger" onClick={() => dispatch(deleteAssignment(item._id))}>
//                                             Delete
//                                         </button>
//                                     </div>
//                                 </div>
//                             </li>
//                         ))
//                     ) : (
//                         <li className="list-group-item text-muted">No assignments found for this course.</li>
//                     )}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// return (
//     <div className="container mt-4">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//             <div className="input-group search-bar">
//                 <span className="input-group-text"><FaSearch /></span>
//                 <input type="text" className="form-control" placeholder="Search..." />
//             </div>
//
//             <div className="d-flex gap-2">
//                 <button className="btn btn-secondary d-flex align-items-center">
//                     <FaFolderPlus className="me-1" /> Add Group
//                 </button>
//                 <button className="btn btn-danger d-flex align-items-center" onClick={handleAddAssignment}>
//                     <FaPlus className="me-1" /> Add Assignment
//                 </button>
//             </div>
//         </div>
//
//         <div className="card">
//             <div className="card-header d-flex justify-content-between align-items-center">
//                 <h4 className="fw-bold mb-0">ASSIGNMENTS</h4>
//                 <span className="badge bg-light text-dark">Total: {courseAssignments.length}</span>
//             </div>
//
//             <ul className="list-group list-group-flush">
//                 {courseAssignments.length > 0 ? (
//                     //@ts-ignore
//                     courseAssignments.map((item) => (
//                         <li key={item._id} className="list-group-item d-flex align-items-center">
//                             <FaRegFileAlt className="text-muted me-3 fs-4" />
//                             <div className="border-start border-success ps-3 flex-grow-1">
//                                 <div className="d-flex justify-content-between align-items-center">
//                                     <div>
//                                         <Link to={`/Kambaz/Courses/${courseId}/Assignments/${item._id}`} className="fw-bold text-decoration-none">
//                                             {item.title}
//                                         </Link>
//                                     </div>
//                                     <button className="btn btn-sm btn-danger" onClick={() => dispatch(deleteAssignment(item._id))}>
//                                         Delete
//                                     </button>
//                                 </div>
//                             </div>
//                         </li>
//                     ))
//                 ) : (
//                     <li className="list-group-item text-muted">No assignments found for this course.</li>
//                 )}
//             </ul>
//         </div>
//     </div>
// );
// import {FaPlus, FaRegFileAlt, FaSearch, FaFolderPlus, FaCheckCircle} from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
// import {addAssignment, deleteAssignment} from "./reducer";
// // import {useEffect} from "react";
// // import { assignments as dbAssignments } from "../../Database";
// import * as assignmentClient from "./client";
// import {useEffect} from "react";
//
// export default function Assignments() {
//     const { courseId } = useParams();
//     const navigate = useNavigate();
//    const dispatch = useDispatch();
//
//
//     //@ts-ignore
//     console.log("Redux Assignments Before useSelector:", useSelector((state) => state.assignments));
//     //@ts-ignore
//     const assignments = useSelector((state) => state.assignments?.assignments || []);
//
//     // @ts-ignore
//     const courseAssignments = assignments.filter(a => a.course === courseId);
//
//     console.log("Redux Assignments:", assignments);
//     console.log("Course ID from URL:", courseId);
//     console.log("Filtered Assignments:", courseAssignments);
//
//
//     const fetchAssignments = async () => {
//         try {
//             const assignments = await assignmentClient.fetchAssignmentsForModule(courseId as string);
//             // @ts-ignore
//             dispatch(setAssignment(assignments.data));
//         } catch (error) {
//             console.error('Error fetching assignments:', error);
//         }
//     };
//
//     useEffect(() => {
//
//             fetchAssignments();
//         }, [courseId, dispatch]
//     );
//
//
//     // Handle delete
//     const handleDeleteAssignment = async (courseId : string, assignments: string) => {
//         try {
//             await assignmentClient.deleteAssignment(courseId, assignments);
//             dispatch(deleteAssignment(assignments));
//         } catch (error) {
//             console.error('Error deleting assignment:', error);
//         }
//     };
//
//     const handleAddAssignment = async () => {
//         try {
//             const newAssignment = await assignmentClient.createAssignment(courseId as string, assignments as string);
//             dispatch(addAssignment(newAssignment));
//             navigate(`/courses/${courseId}/assignments/${newAssignment._id}`);
//         } catch (error) {
//             console.error('Failed to create assignment:', error);
//         }
//     };
//
//
//     return (
//         <div className="container mt-4">
//             <div className="d-flex justify-content-between align-items-center mb-3">
//                 <div className="input-group search-bar">
//                     <span className="input-group-text"><FaSearch /></span>
//                     <input type="text" className="form-control" placeholder="Search..." />
//                 </div>
//
//                 <div className="d-flex gap-2">
//                     <button className="btn btn-secondary d-flex align-items-center">
//                         <FaFolderPlus className="me-1" /> Add Group
//                     </button>
//                     <button className="btn btn-danger d-flex align-items-center"
//                             onClick={
//                         // () => {navigate(`/Kambaz/Courses/${courseId}/Assignments/new`)}
//                                 handleAddAssignment
//                     }>
//                         <FaPlus className="me-1" /> Add Assignment
//                     </button>
//                 </div>
//             </div>
//
//             <div className="card">
//                 <div className="card-header d-flex justify-content-between align-items-center">
//                     <h4 className="fw-bold mb-0">ASSIGNMENTS</h4>
//                     <span className="badge bg-light text-dark">40% of Total</span>
//                 </div>
//
//                 <ul className="list-group list-group-flush">
//                     {courseAssignments.length > 0 ? (
//                         //@ts-ignore
//                         courseAssignments.map((item) => (
//                             <li key={item._id} className="list-group-item d-flex align-items-center">
//                                 <FaRegFileAlt className="text-muted me-3 fs-4" />
//                                 <div className="border-start border-success ps-3 flex-grow-1">
//                                     <div className="d-flex justify-content-between align-items-start">
//                                         <div>
//                                             <Link
//                                                 to={`/Kambaz/Courses/${courseId}/Assignments/${item._id}`}
//                                                 className="fw-bold text-decoration-none"
//                                             >
//                                                 {item.title}
//                                             </Link>
//                                             <div className="text-muted small mt-1">
//
//                                                 Module <span className="text-danger">{item.detail.module}</span> | Available Until: <strong>{item.detail.start}</strong> | Due: <strong>{item.detail.due}</strong> | {item.detail.points}
//                                             </div>
//                                         </div>
//                                         <div className="d-flex flex-column align-items-end gap-1">
//
//                                             <FaCheckCircle className="text-success fs-5" title="Saved" />
//                                             <button
//                                                 className="btn btn-sm btn-danger"
//                                                 // onClick={() => dispatch(deleteAssignment(item._id))}
//                                                 onClick={() => handleDeleteAssignment(courseId as string, item._id)}
//                                             >
//                                                 Delete
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </li>
//                         ))
//                     ) : (
//                         <li className="list-group-item text-muted">No assignments found for this course.</li>
//                     )}
//                 </ul>
//             </div>
//         </div>
//     );
//
// }


import {FaPlus, FaRegFileAlt, FaSearch, FaFolderPlus, FaCheckCircle} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteAssignment} from "./reducer";
// import {useEffect} from "react";
// import { assignments as dbAssignments } from "../../Database";



export default function Assignments() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // useEffect(() => {
    //     console.log("Loading assignments from DB:", dbAssignments);
    //     dispatch(setAssignments(dbAssignments));
    // }, [dispatch]);

    //@ts-ignore
    console.log("Redux Assignments Before useSelector:", useSelector((state) => state.assignments));
    //@ts-ignore
    const assignments = useSelector((state) => state.assignments?.assignments || []);

    // @ts-ignore
    // const assignments = useSelector((state) => state.assignments?.assignments || []);
    //
    // const assignments = useSelector((state) => state.assignments?.assignments);
    // @ts-ignore
    const courseAssignments = assignments.filter(a => a.course === courseId);

    // Handle Add Assignment
    // const handleAddAssignment = () => {
    //     const newAssignment = {
    //         _id: `${Date.now()}`,
    //         course: courseId,
    //         title: "New Assignment",
    //         description: "Enter details here...",
    //         detail: { module: "Module X", start: "TBA", due: "TBA", points: "0 pts" },
    //     };
    //     dispatch(addAssignment(newAssignment));
    //     navigate(`/Kambaz/Courses/${courseId}/Assignments/${newAssignment._id}`);
    // };
    console.log("Redux Assignments:", assignments);
    console.log("Course ID from URL:", courseId);
    console.log("Filtered Assignments:", courseAssignments);


    // return (
    //     <div className="container mt-4">
    //         <div className="d-flex justify-content-between align-items-center mb-3">
    //             <div className="input-group search-bar">
    //                 <span className="input-group-text"><FaSearch /></span>
    //                 <input type="text" className="form-control" placeholder="Search..." />
    //             </div>
    //
    //             <div className="d-flex gap-2">
    //                 <button className="btn btn-secondary d-flex align-items-center">
    //                     <FaFolderPlus className="me-1" /> Add Group
    //                 </button>
    //                 <button className="btn btn-danger d-flex align-items-center" onClick={handleAddAssignment}>
    //                     <FaPlus className="me-1" /> Add Assignment
    //                 </button>
    //             </div>
    //         </div>
    //
    //         <div className="card">
    //             <div className="card-header d-flex justify-content-between align-items-center">
    //                 <h4 className="fw-bold mb-0">ASSIGNMENTS</h4>
    //                 <span className="badge bg-light text-dark">Total: {courseAssignments.length}</span>
    //             </div>
    //
    //             <ul className="list-group list-group-flush">
    //                 {courseAssignments.length > 0 ? (
    //                     //@ts-ignore
    //                     courseAssignments.map((item) => (
    //                         <li key={item._id} className="list-group-item d-flex align-items-center">
    //                             <FaRegFileAlt className="text-muted me-3 fs-4" />
    //                             <div className="border-start border-success ps-3 flex-grow-1">
    //                                 <div className="d-flex justify-content-between align-items-center">
    //                                     <div>
    //                                         <Link to={`/Kambaz/Courses/${courseId}/Assignments/${item._id}`} className="fw-bold text-decoration-none">
    //                                             {item.title}
    //                                         </Link>
    //                                     </div>
    //                                     <button className="btn btn-sm btn-danger" onClick={() => dispatch(deleteAssignment(item._id))}>
    //                                         Delete
    //                                     </button>
    //                                 </div>
    //                             </div>
    //                         </li>
    //                     ))
    //                 ) : (
    //                     <li className="list-group-item text-muted">No assignments found for this course.</li>
    //                 )}
    //             </ul>
    //         </div>
    //     </div>
    // );
    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="input-group search-bar">
                    <span className="input-group-text"><FaSearch /></span>
                    <input type="text" className="form-control" placeholder="Search..." />
                </div>

                <div className="d-flex gap-2">
                    <button className="btn btn-secondary d-flex align-items-center">
                        <FaFolderPlus className="me-1" /> Add Group
                    </button>
                    <button className="btn btn-danger d-flex align-items-center" onClick={() => {
                        navigate(`/Kambaz/Courses/${courseId}/Assignments/new`)
                    }}>
                        <FaPlus className="me-1" /> Add Assignment
                    </button>
                </div>
            </div>

            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h4 className="fw-bold mb-0">ASSIGNMENTS</h4>
                    <span className="badge bg-light text-dark">40% of Total</span>
                </div>

                <ul className="list-group list-group-flush">
                    {courseAssignments.length > 0 ? (
                        //@ts-ignore
                        courseAssignments.map((item) => (
                            <li key={item._id} className="list-group-item d-flex align-items-center">
                                <FaRegFileAlt className="text-muted me-3 fs-4" />
                                <div className="border-start border-success ps-3 flex-grow-1">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <Link
                                                to={`/Kambaz/Courses/${courseId}/Assignments/${item._id}`}
                                                className="fw-bold text-decoration-none"
                                            >
                                                {item.title}
                                            </Link>
                                            <div className="text-muted small mt-1">

                                                Module <span className="text-danger">{item.detail.module}</span> | Available Until: <strong>{item.detail.start}</strong> | Due: <strong>{item.detail.due}</strong> | {item.detail.points}
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-end gap-1">

                                            <FaCheckCircle className="text-success fs-5" title="Saved" />
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => dispatch(deleteAssignment(item._id))}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item text-muted">No assignments found for this course.</li>
                    )}
                </ul>
            </div>
        </div>
    );

}
