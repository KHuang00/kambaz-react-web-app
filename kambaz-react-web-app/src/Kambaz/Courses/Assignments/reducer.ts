// import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";
//
// const initialState = {
//     assignments: assignments || [],
// };
//
// const assignmentsSlice = createSlice({
//     name: "assignments",
//     initialState,
//     reducers: {
//         addAssignment: (state, action) => {
//             state.assignments.push(action.payload);
//         },
//         deleteAssignment: (state, action) => {
//             state.assignments = state.assignments.filter(a => a._id !== action.payload);
//         },
//         updateAssignment: (state, action) => {
//             const index = state.assignments.findIndex(a => a._id === action.payload._id);
//             if (index !== -1) {
//                 state.assignments[index] = action.payload;
//             }
//         },
//     },
// });
//
// export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
// export default assignmentsSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
//
// // Load assignments from localStorage OR use default database
// const loadAssignments = () => {
//     try {
//         const saved = localStorage.getItem("assignments");
//         return saved ? JSON.parse(saved) : [];
//     } catch {
//         return [];
//     }
// };
//
// const initialState = {
//     assignments: loadAssignments(),
// };
//
// //@ts-ignore
// const saveAssignments = (assignments) => {
//     localStorage.setItem("assignments", JSON.stringify(assignments));
// };
//
// const assignmentsSlice = createSlice({
//     name: "assignments",
//     initialState,
//     reducers: {
//         addAssignment: (state, action) => {
//             state.assignments.push(action.payload);
//             saveAssignments(state.assignments);
//         },
//         deleteAssignment: (state, action) => {
//             //@ts-ignore
//             state.assignments = state.assignments.filter(a => a._id !== action.payload);
//             saveAssignments(state.assignments);
//         },
//         updateAssignment: (state, action) => {
//             //@ts-ignore
//             const index = state.assignments.findIndex(a => a._id === action.payload._id);
//             if (index !== -1) {
//                 state.assignments[index] = action.payload;
//                 saveAssignments(state.assignments);
//             }
//         },
//     },
// });
//
// export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
// export default assignmentsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { assignments as dbAssignments } from "../../Database";
console.log("Loaded Assignments from Database:", dbAssignments);


// const loadAssignments = () => {
//     try {
// //@ts-ignore
//         const saved = JSON.parse(localStorage.getItem("assignments"));
//         return saved && saved.length ? saved : dbAssignments;
//     } catch {
//         return dbAssignments;
//     }
// };

// const initialState = {
//     assignments: loadAssignments() || [],
// };
const initialState = {
    // assignments: [],
    assignments:dbAssignments,
};


//@ts-ignore
// const saveAssignments = (assignments) => {
//     localStorage.setItem("assignments", JSON.stringify(assignments));
// };

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        // setAssignments: (state, action) => {
        //     state.assignments = action.payload;
        // },

        // addAssignment: (state, action) => {
        //     // @ts-ignore
        //     state.assignments.push(action.payload);
        //     // saveAssignments(state.assignments);
        // },
        // deleteAssignment: (state, action) => {//@ts-ignore
        //     state.assignments = state.assignments.filter(a => a._id !== action.payload);
        //     // saveAssignments(state.assignments);
        // },
        // updateAssignment: (state, action) => {//@ts-ignore
        //     const index = state.assignments.findIndex(a => a._id === action.payload._id);
        //     if (index !== -1) {
        //         // @ts-ignore
        //         state.assignments[index] = action.payload;
        //         // saveAssignments(state.assignments);
        //     }
        // },

        addAssignment: (state, { payload: assignment }) => {

            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                description: assignment.description,
                detail: {
                    points: assignment.points,
                    module: assignment.module,
                    start: assignment.availableFrom,
                    due: assignment.dueDate,
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

        }

    },
});

export const {addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
