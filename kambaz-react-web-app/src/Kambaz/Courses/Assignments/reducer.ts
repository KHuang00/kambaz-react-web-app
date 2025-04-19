import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    assignments: [] as any,
    // assignments:dbAssignments,
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {

        setAssignment: (state, action) => {
            // state.assignments = action.payload;
            if (Array.isArray(action.payload)) {
                state.assignments = action.payload;
            } else {
                state.assignments = [];
                console.warn("setAssignment: payload was not an array:", action.payload);
            }
        },


        addAssignment: (state, { payload: assignment }) => {

            const newAssignment: any = {
                // _id: new Date().getTime().toString(),
                 _id: assignment._id,
                title: assignment.title,
                course: assignment.course,
                description: assignment.description,
                detail: {

                    module: assignment.module,
                    start: assignment.availableFrom,
                    due: assignment.due,
                    points: assignment.points,
                },
                availableUntil: assignment.availableUntil,
            };

            state.assignments = [...state.assignments, newAssignment] as any;

        },

        deleteAssignment: (state, { payload: assignmentId }) => {

            state.assignments = state.assignments.filter(

                (a: any) => a._id !== assignmentId);

        },

        updateAssignment: (state, { payload: assignment }) => {

            state.assignments = state.assignments.map((a: any) =>

                a._id === assignment._id ? assignment : a

            ) as any;

        },

    },
});

export const {addAssignment, deleteAssignment, updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
