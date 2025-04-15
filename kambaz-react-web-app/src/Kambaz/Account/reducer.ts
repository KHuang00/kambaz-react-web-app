// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     currentUser: null,
// };
// const accountSlice = createSlice({
//     name: "account",
//     initialState,
//     reducers: {
//         setCurrentUser: (state, action) => {
//             state.currentUser = action.payload;
//         },
//     },
// });
// export const { setCurrentUser } = accountSlice.actions;
// export default accountSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    users:[],
};

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        logoutUser: (state) => {
            state.currentUser = null;
        },

        setAllUsers: (state, action) => {
            state.users = action.payload;
        },
    },
});

export const { setCurrentUser, logoutUser, setAllUsers} = accountSlice.actions;
export default accountSlice.reducer;
