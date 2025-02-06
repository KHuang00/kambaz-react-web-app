import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
    return (

        <div className="container-fluid">
            <ModulesControls/>
            <br/><br/><br/><br/>
            <ListGroup className="w-100" id="wd-modules">
                {[1, 2, 3, 4].map(week => (
                    <ListGroup.Item key={week} className="wd-module p-0 mb-5 fs-5 border-gray w-100 text-start">
                        <div className="wd-title p-3 bg-secondary d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="flex-grow-1">Week {week}</span>
                            <ModuleControlButtons />
                        </div>
                        <ListGroup className="wd-lessons rounded-0 w-100">
                            {["LEARNING OBJECTIVES", "Introduction to the course", "Learn what is Web Development", "READING", "Full Stack Developer - Chapter 1", "Full Stack Developer - Chapter 2"].map((lesson, index) => (
                                <ListGroup.Item key={index} className="wd-lesson p-3 text-start d-flex align-items-center w-100">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <span className="flex-grow-1">{lesson}</span>
                                    <LessonControlButtons />
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ListGroup.Item>
                ))}

                {[5, 6].map(week => (
                    <ListGroup.Item key={week} className="wd-module p-0 mb-5 fs-5 border-gray w-100 text-start">
                        <div className="wd-title p-3 bg-secondary d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="flex-grow-1">Week {week}</span>
                            <ModuleControlButtons />
                        </div>
                        <ListGroup className="wd-lessons rounded-0 w-100">
                            {["LEARNING OBJECTIVES", "Learn how to create user interfaces with HTML", "Deploy the assignment to Netlify"].map((lesson, index) => (
                                <ListGroup.Item key={index} className="wd-lesson p-3 text-start d-flex align-items-center w-100">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <span className="flex-grow-1">{lesson}</span>
                                    <LessonControlButtons />
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            {/*<ListGroup className="rounded-0" id="wd-modules">*/}
            {/*    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">*/}
            {/*        <div className="wd-title p-3 ps-2 bg-secondary">*/}
            {/*            <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />*/}
            {/*        </div>*/}
            {/*        <ListGroup className="wd-lessons rounded-0">*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development <LessonControlButtons />*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                <BsGripVertical className="me-2 fs-3" /> READING <LessonControlButtons />*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 1 <LessonControlButtons />*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 2 <LessonControlButtons />*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                <BsGripVertical className="me-2 fs-3" /> Introduction to Web Development <LessonControlButtons />*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                <BsGripVertical className="me-2 fs-3" /> Creating an HTTP server with Node.js <LessonControlButtons />*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                <BsGripVertical className="me-2 fs-3" /> Creating a React Application <LessonControlButtons />*/}
            {/*            </ListGroup.Item>*/}
            {/*        </ListGroup>*/}
            {/*    </ListGroup.Item>*/}

            {/*    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">*/}
            {/*        <div className="wd-title p-3 ps-2 bg-secondary">*/}
            {/*            <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />*/}
            {/*        </div>*/}
            {/*        <ListGroup className="wd-lessons rounded-0">*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                <BsGripVertical className="me-2 fs-3" /> Learn how to create user interfaces with HTML <LessonControlButtons />*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                <BsGripVertical className="me-2 fs-3" /> Deploy the assignment to Netlify <LessonControlButtons />*/}
            {/*            </ListGroup.Item>*/}
            {/*        </ListGroup>*/}
            {/*    </ListGroup.Item>*/}

            {/*    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">*/}
            {/*        <div className="wd-title p-3 ps-2 bg-secondary">*/}
            {/*            <BsGripVertical className="me-2 fs-3" /> Week 3 <ModuleControlButtons />*/}
            {/*        </div>*/}
            {/*    </ListGroup.Item>*/}
            {/*</ListGroup><ListGroup className="rounded-0" id="wd-modules">*/}
            {/*    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">*/}
            {/*        <div className="wd-title p-3 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3"/> Week*/}
            {/*            4 <ModuleControlButtons/></div>*/}
            {/*        <ListGroup className="wd-lessons rounded-0">*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                <BsGripVertical className="me-2 fs-3"/>*/}
            {/*                LEARNING OBJECTIVES*/}
            {/*                <BsGripVertical className="me-2 fs-3"/>*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                Introduction to the course*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                Learn what is Web Development*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                READING*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                Full Stack Developer - Chapter 1*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                Full Stack Developer - Chapter 2*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                SLIDES*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                Introduction to Web Development*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                Creating an HTTP server with Node.js*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                Creating a React Application*/}
            {/*            </ListGroup.Item>*/}
            {/*        </ListGroup>*/}
            {/*    </ListGroup.Item>*/}

            {/*    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">*/}
            {/*        <div className="wd-title p-3 ps-2 bg-secondary"> Week 5</div>*/}
            {/*        <ListGroup className="wd-lessons rounded-0">*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                LEARNING OBJECTIVES*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                Learn how to create user interfaces with HTML*/}
            {/*            </ListGroup.Item>*/}
            {/*            <ListGroup.Item className="wd-lesson p-3 ps-1">*/}
            {/*                Deploy the assignment to Netlify*/}
            {/*            </ListGroup.Item>*/}
            {/*        </ListGroup>*/}
            {/*    </ListGroup.Item>*/}

            {/*    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">*/}
            {/*        <div className="wd-title p-3 ps-2 bg-secondary"> Week 6</div>*/}
            {/*    </ListGroup.Item>*/}
            {/*</ListGroup>*/}
        </div>
    );
}



