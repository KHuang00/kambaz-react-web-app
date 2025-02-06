import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { AiFillHome, AiOutlineNotification } from "react-icons/ai";
import { IoMdAnalytics } from "react-icons/io";
import { FiSpeaker } from "react-icons/fi";
import { Button } from "react-bootstrap";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "350px", margin: "20px auto" }}>
            <h2>Course Status</h2>
            <div className="d-flex mb-3">
                <div className="w-50 pe-1">{/* @ts-ignore */}
                    <Button variant="secondary" size="lg" className="w-100 text-nowrap">
                        <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
                    </Button>
                </div>
                <div className="w-50">{/* @ts-ignore */}
                    <Button variant="success" size="lg" className="w-100">
                        <FaCheckCircle className="me-2 fs-5" /> Publish
                    </Button>
                </div>
            </div>{/* @ts-ignore */}
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <BiImport className="me-2 fs-5" /> Import Existing Content
            </Button>{/* @ts-ignore */}
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
            </Button>{/* @ts-ignore */}
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <AiFillHome className="me-2 fs-5" /> Choose Home Page
            </Button>{/* @ts-ignore */}
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <FiSpeaker className="me-2 fs-5" /> New Announcement
            </Button>{/* @ts-ignore */}
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <IoMdAnalytics className="me-2 fs-5" /> New Analytics
            </Button>{/* @ts-ignore */}
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <AiOutlineNotification className="me-2 fs-5" /> View Course Notifications
            </Button>
        </div>
    );
}


// export default function CourseStatus() {
//     return (
//         <div id="wd-course-status">
//
//             <h2>Course Status</h2>
//             <div id="wd-course-status-actions">
//                 <button>Unpublish</button>
//                 <button>Publish</button>
//                 <br/><br/>
//                 <button>Import Existing Content</button>
//                 <button>Import from Commons</button>
//                 <button>Choose Home Page</button>
//                 <button>View Course Stream</button>
//                 <button>New Announcement</button><br/>
//                 <button>New Analytics</button>
//                 <button>View Course Notifications</button>
//             </div>
//
//         </div>
//     );
// }


