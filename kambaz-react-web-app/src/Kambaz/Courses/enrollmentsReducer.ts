import { createSlice } from "@reduxjs/toolkit";
// import { courses } from "../Database";


const initialState = {
    // array of courseIds
    // @ts-ignore
    enrollments: [],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enroll: (state, { payload }) => {
            // @ts-ignore
            if (!state.enrollments.includes(payload)) {
                // @ts-ignore
                state.enrollments.push(payload);
            }
        },
        unenroll: (state, { payload }) => {
            //@ts-ignore
            state.enrollments = state.enrollments.filter(id => id !== payload);
        },
        setEnrollments: (state, { payload }) => {
            state.enrollments = payload;
        },
    },
});

export const { enroll, unenroll, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
