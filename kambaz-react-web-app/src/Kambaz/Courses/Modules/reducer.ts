// import { createSlice } from "@reduxjs/toolkit";
// import { modules } from "../../Database";
// import { v4 as uuidv4 } from "uuid";
// const initialState = {
//     modules: modules,
// };
// const modulesSlice = createSlice({
//     name: "modules",
//     initialState,
//     reducers: {
//         addModule: (state, { payload: module }) => {
//             const newModule: any = {
//                 _id: uuidv4(),
//                 lessons: [],
//                 name: module.name,
//                 course: module.course,
//             };
//             state.modules = [...state.modules, newModule] as any;
//         },
//         deleteModule: (state, { payload: moduleId }) => {
//             state.modules = state.modules.filter(
//                 (m: any) => m._id !== moduleId);
//         },
//         updateModule: (state, { payload: module }) => {
//             state.modules = state.modules.map((m: any) =>
//                 m._id === module._id ? module : m
//             ) as any;
//         },
//         editModule: (state, { payload: moduleId }) => {
//             state.modules = state.modules.map((m: any) =>
//                 m._id === moduleId ? { ...m, editing: true } : m
//             ) as any;
//         },
//     },
// });
// export const { addModule, deleteModule, updateModule, editModule } =
//     modulesSlice.actions;
// export default modulesSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { modules } from "../../Database";
import { v4 as uuidv4 } from "uuid";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    // modules: modules,
    modules: [],
};

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        setModules: (state, action) => {
            state.modules = action.payload;
        },

        addModule: (state, { payload: module }) => {
            const newModule: any = {
                _id: uuidv4(),
                lessons: [],
                name: module.name,
                course: module.course,
            };
            // @ts-ignore
            state.modules.push(newModule);
        },
        deleteModule: (state, { payload: moduleId }) => {
            state.modules = state.modules.filter((m: any) => m._id !== moduleId);
        },
        updateModule: (state, { payload: module }) => {
            // @ts-ignore
            const index = state.modules.findIndex(m => m._id === module._id);
            if (index !== -1) {
                // @ts-ignore
                state.modules[index] = module;
            }
        },
        editModule: (state, { payload: moduleId }) => {
            // @ts-ignore
            const module = state.modules.find(m => m._id === moduleId);
            if (module) {
                // @ts-ignore
                module.editing = true;
            }
        },
    },
});

export const { addModule, deleteModule, updateModule, editModule, setModules } = modulesSlice.actions;
export default modulesSlice.reducer;
