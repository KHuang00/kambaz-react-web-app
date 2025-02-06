import {FaCheckCircle, FaEllipsisV, FaPlus, FaRegFileAlt, FaSearch} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Assignments() {
    const categories = {
        ASSIGNMENTS: [
            {
                id: "123",
                name: "A1 - ENV + HTML",
                available: "01/02/2025 at 10:00 am",
                due: "01/09/2025 at 11:59 pm",
                points: 100,
                module: "Module 1",
            },
            {
                id: "234",
                name: "A2 - CSS",
                available: "02/02/2025 at 09:00 am",
                due: "02/22/2025 at 11:59 pm",
                points: 100,
                module: "Module 2",
            },
            {
                id: "456",
                name: "A3 - JavaScript",
                available: "02/11/2025 at 09:00 am",
                due: "02/24/2025 at 11:59 pm",
                points: 100,
                module: "Module 2",
            },
        ],

        PROJECTS: [
            {
                id: "567",
                name: "Capstone Project",
                available: "01/02/2025 at 09:00 am",
                due: "04/02/2025 at 11:59 pm",
                points: 300,
                module: "Final Project",
            },
        ],
    };
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

                {/*<div>*/}
                {/*    <button className="btn btn-outline-secondary me-2">*/}
                {/*        <FaPlus /> Group*/}
                {/*    </button>*/}
                {/*    <button className="btn btn-danger">*/}
                {/*        <FaPlus /> Assignment*/}
                {/*    </button>*/}
                {/*</div>*/}

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
                {/*<div className="card-header d-flex justify-content-between align-items-center">*/}
                {/*    <h4 className="fw-bold mb-0">ASSIGNMENTS</h4>*/}
                {/*    <span className="badge bg-light text-dark">40% of Total</span>*/}
                {/*</div>*/}
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h4 className="fw-bold mb-0">ASSIGNMENTS</h4>
                    <div className="d-flex align-items-center">
                        <span className="badge bg-light text-dark me-2">40% of Total</span>
                        <FaPlus className="text-muted" />
                    </div>
                </div>

                <ul className="list-group list-group-flush">
                    {categories.ASSIGNMENTS.map((item) => (
                        <li key={item.id} className="list-group-item d-flex align-items-center">
                            <FaRegFileAlt className="text-muted me-3 fs-4" />
                            <div className="border-start border-success ps-3 flex-grow-1">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <a href={`#/Kambaz/Courses/1234/Assignments/${item.id}`} className="fw-bold text-decoration-none">
                                            {item.name}
                                        </a>

                                        <p className="text-muted small mb-1">
                                            {item.module} | {item.available}
                                        </p>
                                        <p className="text-muted small mb-0">
                                            Due {item.due} | {item.points} pts
                                        </p>
                                    </div>
                                    <FaCheckCircle className="text-success ms-2" />
                                </div>
                            </div>
                            <FaEllipsisV className="text-muted ms-3" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}



//     return (
//         <div id="wd-assignments">
//             <input placeholder="Search for Assignments" id="wd-search-assignment" />
//             <button id="wd-add-assignment-group">+ Group</button>
//             <button id="wd-add-assignment">+ Assignment</button>
//             <h3 id="wd-assignments-title">ASSIGNMENTS 40% of Total <button>+</button></h3>
//             <div id="wd-assignments-categories">
//                 {Object.entries(categories).map(([category, items]) => (
//                     <div key={category} className="wd-category">
//                         <h4 className="wd-category-title">{category}</h4>
//                         <ul className="wd-category-list">
//                             {items.map((item) => (
//                                 <li key={item.id} className="wd-category-item">
//                                     <a
//                                         href={`#/Kambaz/Courses/1234/${category === "ASSIGNMENTS" ? "Assignments" : category.toLowerCase()}/${item.id}`}
//                                         className="wd-category-link"
//                                     >
//                                         {item.name}
//                                     </a>
//                                     <p className="wd-category-details">
//                                         {item.module} | Available until {item.available} | Due {item.due} | {item.points} points
//                                     </p>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
