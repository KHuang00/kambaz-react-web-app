import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
// const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

export const createAssignment = async (moduleId: string, assignment: any) => {
    const response = await axiosWithCredentials.post(
        `${MODULES_API}/${moduleId}/Assignments`,
        assignment
    );
    return response.data;
};

export const fetchAssignmentsForModule = async (moduleId : string) => {
    // const response = await axios.get(`${ASSIGNMENTS_API}`);
    const response = await axiosWithCredentials.get(
        `${MODULES_API}/${moduleId}/Assignments`);
    return response.data;
};

export const updateAssignment = async (moduleId: string, assignmentId: string, data: any) => {
    const response = await axiosWithCredentials.put(
        `${MODULES_API}/${moduleId}/Assignments/${assignmentId}`,
        data
    );
    return response.data;
};


export const deleteAssignment = async (moduleId : string,assignmentId:string) => {

    const response = await axiosWithCredentials.delete(`${MODULES_API}/${moduleId}/Assignments/${assignmentId}`);
    return response.data;
};

export const fetchAssignmentById = async (moduleId: string, assignmentId: string) => {
    const response = await axiosWithCredentials.get(
        `${MODULES_API}/${moduleId}/Assignments/${assignmentId}`
    );
    return response.data;
};
