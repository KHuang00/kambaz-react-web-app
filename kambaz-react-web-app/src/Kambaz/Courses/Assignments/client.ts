import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
// const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const COURSES_API = `${REMOTE_SERVER}/api/modules`;

export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axiosWithCredentials.post(
        `${COURSES_API}/${courseId}/Assignments`,
        assignment
    );
    return response.data;
};

export const fetchAssignmentsForModule = async (courseId : string) => {
    // const response = await axios.get(`${ASSIGNMENTS_API}`);
    const response = await axiosWithCredentials.get(
        `${COURSES_API}/${courseId}/Assignments`);
    return response.data;
};

export const updateAssignment = async (courseId: string, assignmentId: string, data: any) => {
    const response = await axiosWithCredentials.put(
        `${COURSES_API}/${courseId}/Assignments/${assignmentId}`,
        data
    );
    return response.data;
};


export const deleteAssignment = async (courseId : string,assignmentId:string) => {

    const response = await axiosWithCredentials.delete(`${COURSES_API}/${courseId}/Assignments/${assignmentId}`);
    return response.data;
};

export const fetchAssignmentById = async (courseId: string, assignmentId: string) => {
    const response = await axiosWithCredentials.get(
        `${COURSES_API}/${courseId}/Assignments/${assignmentId}`
    );
    return response.data;
};
