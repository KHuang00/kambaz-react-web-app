import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import enrollmentReducer from './enrollment_reducer.ts';
// @ts-ignore
import assignmentsReducer from "./Courses/Assignments/reducer.ts"
const store = configureStore({
    reducer: {
        account: accountReducer,
        modules: modulesReducer,
        assignments: assignmentsReducer,
        enrollment: enrollmentReducer,
    },
});
export default store;