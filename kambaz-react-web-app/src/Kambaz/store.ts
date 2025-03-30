import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import enrollmentReducer from './enrollment_reducer.ts';
import courseReducer from "../Kambaz/Courses/reducer";
import enrollmentsReducer from "./Courses/enrollmentsReducer.ts";
// @ts-ignore
import assignmentsReducer from "./Courses/Assignments/reducer.ts"
const store = configureStore({
    reducer: {
        account: accountReducer,
        courses: courseReducer,
        modules: modulesReducer,
        assignments: assignmentsReducer,
        enrollment: enrollmentReducer,
        enrollments: enrollmentsReducer

    },
});
export default store;