import {FaPlus, FaRegFileAlt, FaSearch, FaFolderPlus, FaCheckCircle} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addAssignment, deleteAssignment, setAssignment} from "./reducer";
import * as assignmentsClient from "./client";
import {useEffect} from "react";


export default function Assignments() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //@ts-ignore
    console.log("Redux Assignments Before useSelector:", useSelector((state) => state.assignments));
    //@ts-ignore
    const assignmentsState = useSelector((state: any) => state.assignments);
    const assignments = Array.isArray(assignmentsState.assignments)
        ? assignmentsState.assignments
        : [];


    // const assignments = useSelector((state) => state.assignments?.assignments || []);

    console.log("assignments from useSelector:", assignments);


    // @ts-ignore
    const courseAssignments = assignments.filter(a => a.course === courseId);


    // Handle Add Assignment
    const handleAddAssignment = async () => {
        const newAssignment = {
            _id: `${Date.now()}`,
            course: courseId,
            title: "New Assignment",
            description: "Enter details here...",
            detail: {module: "Module X", start: "TBA", due: "TBA", points: "0 pts"},
            availableUntil: "TBA"
        };

        const created = await assignmentsClient.createAssignment(courseId as string, newAssignment);
        dispatch(addAssignment(created));
        navigate(`/Kambaz/Courses/${courseId}/Assignments/${created._id}`);
    };
    console.log("Redux Assignments:", assignments);
    console.log("Course ID from URL:", courseId);
    console.log("Filtered Assignments:", courseAssignments);

    const handleDeleteAssignment = async (assignmentId: string) => {
        try {
            await assignmentsClient.deleteAssignment(courseId as string, assignmentId);
            dispatch(deleteAssignment(assignmentId));
        } catch (error) {
            console.error("Error deleting assignment:", error);
            alert("Failed to delete assignment.");
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const assignmentsData = await assignmentsClient.fetchAssignmentsForModule(courseId as string);
                console.log("Data from backend:", assignmentsData);
                dispatch(setAssignment(assignmentsData));
            } catch (error) {
                console.error("Error fetching assignments:", error);
            }
        };
        fetchData();
    }, [courseId, dispatch]);

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
                        handleAddAssignment()
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
                                                onClick={() => handleDeleteAssignment(item._id)}
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
