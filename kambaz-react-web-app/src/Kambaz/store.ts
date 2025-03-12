import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
// @ts-ignore
import assignmentsReducer from "./Courses/Assignments/reducer.ts"
const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        assignments: assignmentsReducer,
    },
});
export default store;