import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const axiosWithCredentials = axios.create({
    withCredentials: true
});

export const enrollUser = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.post(`${REMOTE_SERVER}/api/users/${userId}/enrollments/${courseId}`);
    return response.data;
};

export const unenrollUser = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.delete(`${REMOTE_SERVER}/api/users/${userId}/enrollments/${courseId}`);
    return response.data;
};

export const fetchUserEnrollments = async (userId: string) => {
    const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/users/${userId}/enrollments`);
    return response.data;
};
