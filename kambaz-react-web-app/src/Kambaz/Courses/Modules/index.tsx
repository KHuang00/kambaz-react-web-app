import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import * as db from "../../Database";
import {useParams} from "react-router";

// export default function Modules() {
//     // const { courseId } = useParams();
//     // const courseModules = db.modules.filter((module) => module.course === courseId);
//
//     return (
//
//         <div className="container-fluid">
//             <ModulesControls/>
//             <br/><br/><br/><br/>{/* @ts-ignore */}
//             <ListGroup className="w-100" id="wd-modules">
//                 {[1, 2, 3, 4].map(week => (
//                     //@ts-ignore
//                     <ListGroup.Item key={week} className="wd-module p-0 mb-5 fs-5 border-gray w-100 text-start">
//                         <div className="wd-title p-3 bg-secondary d-flex align-items-center">
//                             <BsGripVertical className="me-2 fs-3" />
//                             <span className="flex-grow-1">Week {week}</span>
//                             <ModuleControlButtons />
//                         </div>{/* @ts-ignore */}
//                         <ListGroup className="wd-lessons rounded-0 w-100">
//                             {["LEARNING OBJECTIVES", "Introduction to the course", "Learn what is Web Development", "READING", "Full Stack Developer - Chapter 1", "Full Stack Developer - Chapter 2"].map((lesson, index) => (
//                                 //@ts-ignore
//                                 <ListGroup.Item key={index} className="wd-lesson p-3 text-start d-flex align-items-center w-100">
//                                     <BsGripVertical className="me-2 fs-3" />
//                                     <span className="flex-grow-1">{lesson}</span>
//                                     <LessonControlButtons />
//                                 </ListGroup.Item>
//                             ))}
//                         </ListGroup>
//                     </ListGroup.Item>
//                 ))}
//
//                 {[5, 6].map(week => (
//                     //@ts-ignore
//                     <ListGroup.Item key={week} className="wd-module p-0 mb-5 fs-5 border-gray w-100 text-start">
//                         <div className="wd-title p-3 bg-secondary d-flex align-items-center">
//                             <BsGripVertical className="me-2 fs-3" />
//                             <span className="flex-grow-1">Week {week}</span>
//                             <ModuleControlButtons />
//                         </div>
//                         {/* @ts-ignore */}
//                         <ListGroup className="wd-lessons rounded-0 w-100">
//                             {["LEARNING OBJECTIVES", "Learn how to create user interfaces with HTML", "Deploy the assignment to Netlify"].map((lesson, index) => (
//                                 //@ts-ignore
//                                 <ListGroup.Item key={index} className="wd-lesson p-3 text-start d-flex align-items-center w-100">
//                                     <BsGripVertical className="me-2 fs-3" />
//                                     <span className="flex-grow-1">{lesson}</span>
//                                     <LessonControlButtons />
//                                 </ListGroup.Item>
//                             ))}
//                         </ListGroup>
//                     </ListGroup.Item>
//                 ))}
//             </ListGroup>
//         </div>
//
//     );
// }
//




export default function Modules() {
    const { courseId } = useParams();
    const course = db.courses.find((c: any) => c._id === courseId);
    const courseModules = db.modules.filter((module: any) => module.course === courseId);

    if (!course) {
        return <h4 className="text-danger">Course not found.</h4>;
    }
    return (
        <div className="container-fluid">
            <ModulesControls />
            <br /><br /><br /><br />

            <h2 className="text-primary">{course?.name} - Modules</h2>

            {/* @ts-ignore */}
            <ListGroup className="w-100" id="wd-modules">
                {/* @ts-ignore */}
                {courseModules.length > 0 ? (
                    courseModules.map((module: any) => (
                        /* @ts-ignore */
                        <ListGroup.Item key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray w-100 text-start">
                            <div className="wd-title p-3 bg-secondary d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <span className="flex-grow-1">{module.name}</span>
                                <ModuleControlButtons />
                            </div>
                            {/* @ts-ignore */}
                            {module.lessons && (
                                //  @ts-ignore
                                <ListGroup className="wd-lessons rounded-0 w-100">
                                    {module.lessons.map((lesson: any, index: number) => (
                                        /* @ts-ignore */
                                        <ListGroup.Item key={index} className="wd-lesson p-3 text-start d-flex align-items-center w-100">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <span className="flex-grow-1">{lesson.name}</span>
                                            <LessonControlButtons />
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    ))
                ) : (
                    <h5 className="text-muted">No modules found for this course.</h5>
                )}
            </ListGroup>
        </div>
    );
}




