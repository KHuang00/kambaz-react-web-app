import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { courses } from "../Database";

const initialState = {
    courses: courses,
};

const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addCourse: (state, { payload }) => {
            const newCourse = {
                _id: uuidv4(),
                name: payload.name,
                description: payload.description,
            };
            //@ts-ignore
            state.courses.push(newCourse);
        },
        deleteCourse: (state, { payload: courseId }) => {
            //@ts-ignore
            state.courses = state.courses.filter(c => c._id !== courseId);
        },
        updateCourse: (state, { payload }) => {
            //@ts-ignore
            const index = state.courses.findIndex(c => c._id === payload._id);
            if (index !== -1) {
                //@ts-ignore
                state.courses[index] = payload;
            }
        },
        setCourses: (state, { payload }) => {
            state.courses = payload;
        },

    },
});

export const { addCourse, deleteCourse, updateCourse, setCourses } = courseSlice.actions;
export default courseSlice.reducer;
