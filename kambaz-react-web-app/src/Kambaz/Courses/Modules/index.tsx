// import { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import { ListGroup } from "react-bootstrap";
// import { BsGripVertical } from "react-icons/bs";
// import ModulesControls from "./ModulesControls";
// import LessonControlButtons from "./LessonControlButtons";
// import ModuleControlButtons from "./ModuleControlButtons";
// import * as db from "../../Database";
// import "./index.css";
//
// export default function Modules() {
//     const { courseId } = useParams();
//     const course = db.courses.find((c: any) => c._id === courseId);
//
//     const [modules, setModules] = useState<any[]>([]);
//     const [moduleName, setModuleName] = useState<string>("");
//
//     useEffect(() => {
//         if (courseId) {
//             const filteredModules = db.modules.filter((module: any) => module.course === courseId);
//             setModules(filteredModules);
//         }
//     }, [courseId]);
//
//     const addModule = () => {
//         if (!moduleName.trim()) return;
//         const newModule = {
//             _id: `m${modules.length + 1}`,
//             name: moduleName,
//             course: courseId,
//             lessons: [],
//         };
//         setModules([...modules, newModule]);
//         setModuleName("");
//     };
//
//     if (!course) {
//         return <h4 className="text-danger">Course not found.</h4>;
//     }
//     const deleteModule = (moduleId: string) => {
//         setModules(modules.filter((m) => m._id !== moduleId));
//     };
//
//     const editModule = (moduleId: string) => {
//         setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
//     };
//     const updateModule = (module: any) => {
//         setModules(modules.map((m) => (m._id === module._id ? module : m)));
//     };
//
//
//
//     return (
//         <div className="container-fluid">
//             <ModulesControls
//                 moduleName={moduleName}
//                 setModuleName={setModuleName}
//                 addModule={addModule}
//             />
//             <br /><br /><br /><br />
//
//             <h2 className="text-primary">{course?.name} - Modules</h2>
//             { /* @ts-ignore */ }
//             <ListGroup className="w-100" id="wd-modules">
//                 {modules.length > 0 ? (
//                     modules.map((module: any) => (
//                         // @ts-ignore
//                         <ListGroup.Item key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray w-100 text-start">
//                             <div className="wd-title p-3 bg-secondary d-flex align-items-center">
//                                 <BsGripVertical className="me-2 fs-3" />
//
//                                 {/*<span className="flex-grow-1">{module.name}</span>*/}
//                                 {module.editing ? (
//                                     //@ts-ignore
//                                     <FormControl
//                                         className="w-50 d-inline-block"
//                                         autoFocus
//                                         defaultValue={module.name}
//                                         //@ts-ignore
//                                         onChange={(e) => updateModule({ ...module, name: e.target.value })}
//                                         //@ts-ignore
//                                         onKeyDown={(e) => {
//                                             if (e.key === "Enter") {
//                                                 updateModule({ ...module, editing: false });
//                                             }
//                                         }}
//                                     />
//                                 ) : (
//                                     <span className="flex-grow-1">{module.name}</span>
//                                 )}
//
//                                 { /* @ts-ignore */ }
//                                 <ModuleControlButtons moduleId={module._id} deleteModule={deleteModule} editModule={editModule}/>
//                             </div>
//                             {module.lessons && (
//                                 // @ts-ignore
//                                 <ListGroup className="wd-lessons rounded-0 w-100">
//                                     {module.lessons.map((lesson: any, index: number) => (
//                                         // @ts-ignore
//                                         <ListGroup.Item key={index} className="wd-lesson p-3 text-start d-flex align-items-center w-100">
//                                             <BsGripVertical className="me-2 fs-3" />
//                                             <span className="flex-grow-1">{lesson.name}</span>
//                                             <LessonControlButtons />
//                                         </ListGroup.Item>
//                                     ))}
//                                 </ListGroup>
//                             )}
//                         </ListGroup.Item>
//                     ))
//                 ) : (
//                     <h5 className="text-muted">No modules found for this course.</h5>
//                 )}
//             </ListGroup>
//         </div>
//     );
// }

// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router";
// import { ListGroup } from "react-bootstrap";
// import { BsGripVertical } from "react-icons/bs";
// import ModulesControls from "./ModulesControls";
// import LessonControlButtons from "./LessonControlButtons";
// import ModuleControlButtons from "./ModuleControlButtons";
// import { addModule, editModule, updateModule, deleteModule } from "./reducer";
// import "./index.css";
//
// export default function Modules() {
//     const { courseId } = useParams();
//     const dispatch = useDispatch();
//     const { modules } = useSelector((state: any) => state.modulesReducer);
//     const courseModules = modules.filter((module: any) => module.course === courseId);
//
//     return (
//         <div className="container-fluid">
//             {/*@ts-ignore*/}
//             <ModulesControls
//
//                 //@ts-ignore
//                 addModule={(moduleName) => {
//                     dispatch(addModule({ name: moduleName, course: courseId }));
//                 }}
//             />
//             <br /><br /><br /><br />
//
//             <h2 className="text-primary">Modules</h2>
//             { /* @ts-ignore */ }
//             <ListGroup className="w-100" id="wd-modules">
//                 {courseModules.length > 0 ? (
//                     courseModules.map((module: any) => (
//                         // @ts-ignore
//                         <ListGroup.Item key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray w-100 text-start">
//                             <div className="wd-title p-3 bg-secondary d-flex align-items-center">
//                                 <BsGripVertical className="me-2 fs-3" />
//                                 {module.editing ? (
//                                     //@ts-ignore
//                                     <FormControl
//                                         className="w-50 d-inline-block"
//                                         autoFocus
//                                         defaultValue={module.name}
//                                         //@ts-ignore
//                                         onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
//                                         //@ts-ignore
//                                         onKeyDown={(e) => {
//                                             if (e.key === "Enter") {
//                                                 dispatch(updateModule({ ...module, editing: false }));
//                                             }
//                                         }}
//                                     />
//                                 ) : (
//                                     <span className="flex-grow-1">{module.name}</span>
//                                 )}
//                                 { /* @ts-ignore */ }
//                                 <ModuleControlButtons
//                                     moduleId={module._id}
//                                     deleteModule={() => dispatch(deleteModule(module._id))}
//                                     editModule={() => dispatch(editModule(module._id))}
//                                 />
//                             </div>
//                             {module.lessons && (
//                                 // @ts-ignore
//                                 <ListGroup className="wd-lessons rounded-0 w-100">
//                                     {module.lessons.map((lesson: any, index: number) => (
//                                         // @ts-ignore
//                                         <ListGroup.Item key={index} className="wd-lesson p-3 text-start d-flex align-items-center w-100">
//                                             <BsGripVertical className="me-2 fs-3" />
//                                             <span className="flex-grow-1">{lesson.name}</span>
//                                             <LessonControlButtons />
//                                         </ListGroup.Item>
//                                     ))}
//                                 </ListGroup>
//                             )}
//                         </ListGroup.Item>
//                     ))
//                 ) : (
//                     <h5 className="text-muted">No modules found for this course.</h5>
//                 )}
//             </ListGroup>
//         </div>
//     );
// }

// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router";
// import { ListGroup } from "react-bootstrap";
// import { BsGripVertical } from "react-icons/bs";
// import ModulesControls from "./ModulesControls";
// import LessonControlButtons from "./LessonControlButtons";
// import ModuleControlButtons from "./ModuleControlButtons";
// import { addModule, editModule, updateModule, deleteModule } from "./reducer";
// import "./index.css";
//
// export default function Modules() {
//     const { courseId } = useParams();
//     const dispatch = useDispatch();
//     //@ts-ignore
//     const { modules } = useSelector((state) => state.modulesReducer);
//
//     console.log(" Current `courseId` from `useParams()`:", courseId);
//     console.log("All Modules in Redux:", modules);
//
//     // Ensure the courseId is compared correctly (string vs number)
//
//     //@ts-ignore
//     const courseModules = modules.filter((module) => String(module.course) === String(courseId));
//
//     console.log(" Filtered Modules for Course:", courseModules);
//
//     return (
//         <div className="container-fluid">
//             {/*@ts-ignore*/}
//             <ModulesControls
//                 //@ts-ignore
//                 addModule={(moduleName) => {
//                     dispatch(addModule({ name: moduleName, course: courseId }));
//                 }}
//             />
//             <br /><br /><br /><br />
//
//             <h2 className="text-primary">Modules</h2>
//             { /* @ts-ignore */ }
//             <ListGroup className="w-100" id="wd-modules">
//                 {courseModules.length > 0 ? (
//                     courseModules.map((module: any) => (
//                         // @ts-ignore
//                         <ListGroup.Item key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray w-100 text-start">
//                             <div className="wd-title p-3 bg-secondary d-flex align-items-center">
//                                 <BsGripVertical className="me-2 fs-3" />
//                                 {module.editing ? (
//                                     //@ts-ignore
//                                     <FormControl
//                                         className="w-50 d-inline-block"
//                                         autoFocus
//                                         defaultValue={module.name}
//                                         //@ts-ignore
//                                         onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value })) }
//                                         //@ts-ignore
//                                         onKeyDown={(e) => {
//                                             if (e.key === "Enter") {
//                                                 dispatch(updateModule({ ...module, editing: false }));
//                                             }
//                                         }}
//                                     />
//                                 ) : (
//                                     <span className="flex-grow-1">{module.name}</span>
//                                 )}
//                                 { /* @ts-ignore */ }
//                                 <ModuleControlButtons
//                                     moduleId={module._id}
//                                     deleteModule={() => dispatch(deleteModule(module._id))}
//                                     editModule={() => dispatch(editModule(module._id))}
//                                 />
//                             </div>
//                             {module.lessons && (
//                                 // @ts-ignore
//                                 <ListGroup className="wd-lessons rounded-0 w-100">
//                                     {module.lessons.map((lesson: any, index: number) => (
//                                         // @ts-ignore
//                                         <ListGroup.Item key={index} className="wd-lesson p-3 text-start d-flex align-items-center w-100">
//                                             <BsGripVertical className="me-2 fs-3" />
//                                             <span className="flex-grow-1">{lesson.name}</span>
//                                             <LessonControlButtons />
//                                         </ListGroup.Item>
//                                     ))}
//                                 </ListGroup>
//                             )}
//                         </ListGroup.Item>
//                     ))
//                 ) : (
//                     <h5 className="text-muted">No modules found for this course.</h5>
//                 )}
//             </ListGroup>
//         </div>
//     );
// }
//

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import * as coursesClient from "../client";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import "./index.css";
import {useState, useEffect} from "react";
import * as modulesClient from "./client";

export default function Modules() {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const [moduleName, setModuleName] = useState("");



    // @ts-ignore
    const currentUser = useSelector((state:any) => state.account?.currentUser);


    if (!currentUser) {
        return <div className="text-muted">Loading user data...</div>;
    }

    // @ts-ignore
    const modules = useSelector((state:any) => state.modules?.modules || []);

    console.log("Current User:", currentUser);
    console.log("Current `courseId` from `useParams()`:", courseId);
    console.log("All Modules in Redux:", modules);

    const courseModules = useSelector((state) =>
        //@ts-ignore
        state.modules?.modules?.filter((module) => module.course === courseId)
    );

    // const courseModules = modules.filter((module: any) => String(module.course) === String(courseId));

    console.log("Filtered Modules for Course:", courseModules);

    if (!currentUser) {
        return <div className="text-muted">Loading user data...</div>;
    }

    const enrolledCourseIds = useSelector((state:any) => state.enrollments?.enrollments || []);



    const fetchModules = async () => {
        try {
            // @ts-ignore
            const response = await coursesClient.findModulesForCourse(courseId);
            console.log("Fetched modules from backend:", response);
            dispatch(setModules(response));
        } catch (e) {
            console.error("Failed to fetch modules:", e);
        }
    };


    const createModuleForCourse = async () => {
        if (!courseId) return;
        const newModule = { name: moduleName, course: courseId };
        const module = await coursesClient.createModuleForCourse(courseId, newModule);
        dispatch(addModule(module));
    };

    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };

    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };



    // useEffect(() => {
    //     fetchModules();
    // }, []);
    useEffect(() => {
        if (courseId && enrolledCourseIds.includes(courseId)) {
            fetchModules();
        }
    }, [courseId, enrolledCourseIds.join(",")]);



    return (
        <div className="container-fluid">
            {/*// @ts-ignore*/}
            <ModulesControls
                moduleName={moduleName}
                setModuleName={setModuleName}
                // @ts-ignore
                // addModule={(moduleName) => {
                //     dispatch(addModule({ name: moduleName, course: courseId }));
                // }}
                deleteModule={(moduleId) => removeModule(moduleId)}
                addModule={createModuleForCourse}
            />
            <br /><br /><br /><br />

            <h2 className="text-primary">Modules</h2>
            {/*@ts-ignore*/}
            <ListGroup className="w-100" id="wd-modules">
                {courseModules.length > 0 ? (
                    courseModules.map((module: any) => (
                        // @ts-ignore
                        <ListGroup.Item key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray w-100 text-start">
                            <div className="wd-title p-3 bg-secondary d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                {module.editing ? (
                                    <input
                                        className="w-50 d-inline-block"
                                        autoFocus
                                        defaultValue={module.name}
                                        onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                // dispatch(updateModule({ ...module, editing: false }));
                                                saveModule({ ...module, editing: false });
                                            }
                                        }}
                                    />
                                ) : (
                                    <span className="flex-grow-1">{module.name}</span>
                                )}
                                <ModuleControlButtons
                                    moduleId={module._id}
                                    deleteModule={() => dispatch(deleteModule(module._id))}
                                    editModule={() => dispatch(editModule(module._id))}
                                />
                            </div>
                            {module.lessons && (
                                // @ts-ignore
                                <ListGroup className="wd-lessons rounded-0 w-100">
                                    {module.lessons.map((lesson: any, index: number) => (
                                        // @ts-ignore
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

