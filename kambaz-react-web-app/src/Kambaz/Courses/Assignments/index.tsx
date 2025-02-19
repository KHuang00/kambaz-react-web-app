import { FaCheckCircle, FaEllipsisV, FaPlus, FaRegFileAlt, FaSearch } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router";
import { assignments } from "../../Database";

export default function Assignments() {
    const { courseId } = useParams();

    const courseAssignments = assignments.filter(assignment => assignment.course === courseId);

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="input-group search-bar">
                    <span className="input-group-text">
                        <FaSearch />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                    />
                </div>

                <div className="d-flex align-items-center">
                    <button className="btn btn-outline-secondary me-2 d-flex align-items-center">
                        <FaPlus className="me-1" /> Group
                    </button>
                    <button className="btn btn-danger d-flex align-items-center">
                        <FaPlus className="me-1" /> Assignment
                    </button>
                </div>
            </div>

            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h4 className="fw-bold mb-0">ASSIGNMENTS</h4>
                    <div className="d-flex align-items-center">
                        <span className="badge bg-light text-dark me-2">40% of Total</span>
                        <FaPlus className="text-muted" />
                    </div>
                </div>

                <ul className="list-group list-group-flush">
                    {courseAssignments.length > 0 ? (
                        courseAssignments.map((item) => (
                            <li key={item._id} className="list-group-item d-flex align-items-center">
                                <FaRegFileAlt className="text-muted me-3 fs-4" />
                                <div className="border-start border-success ps-3 flex-grow-1">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            {/* Dynamically generate assignment links with courseId */}
                                            <a href={`#/Kambaz/Courses/${courseId}/Assignments/${item._id}`} className="fw-bold text-decoration-none">
                                                {item.title}
                                            </a>
                                        </div>
                                        <FaCheckCircle className="text-success ms-2" />
                                    </div>
                                </div>
                                <FaEllipsisV className="text-muted ms-3" />
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

