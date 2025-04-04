import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
// const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/assignments/new`,
        assignment
    );
    return response.data;
};

export const fetchAssignmentsForModule = async (courseId : string) => {
    // const response = await axios.get(`${ASSIGNMENTS_API}`);
    const response = await axios.get(
        `${COURSES_API}/${courseId}/assignments`
    );
    return response.data;
};

export const updateAssignment = async (courseId : string, assignmentId : string) => {

    const response = await axios.put(`${COURSES_API}/${courseId}/assignments/${assignmentId}`);
    return response.data;
};

export const deleteAssignment = async (courseId : string,assignmentId:string) => {

    const response = await axios.delete(`${COURSES_API}/${courseId}/assignments/${assignmentId}`);
    return response.data;
};
