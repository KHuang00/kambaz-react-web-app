import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        // <div id="wd-home" style={{ display: "flex" }}>
        //     <div id="wd-modules-section" style={{ flex: 2, paddingRight: "20px" }}>
        //         <Modules />
        //     </div>
        //
        //     <div id="wd-course-status-section" style={{ flex: 1, paddingLeft: "20px", borderLeft: "1px solid #ccc" }}>
        //         <CourseStatus />
        //     </div>
        // </div>
        <div className="d-flex" id="wd-home">
            <div className="flex-fill me-3">
                <Modules />
            </div>
        <div className="d-none d-xl-block">
            <CourseStatus />
        </div>
    </div>

);
}
