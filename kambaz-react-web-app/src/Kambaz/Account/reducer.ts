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
type User = {
    _id: string;
    firstName: string;
    lastName: string;
    role: string;
    loginId: string;
    section: string;
    totalActivity: number;
};

// const initialState = {
//     currentUser: null,
//     users:[] as any[],
//     selectedUser: null,
// };
const initialState: {
    currentUser: User | null;
    users: User[];
    selectedUser: User | null;
} = {
    currentUser: null,
    users: [],
    selectedUser: null,
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

        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },

        updateUser: (state, action) => {
            const updated = action.payload;
            state.users = state.users.map((u) =>
                u._id === updated._id ? updated : u
            );
            if (state.selectedUser && state.selectedUser._id === updated._id) {
                state.selectedUser = updated;
            }

        },

        removeUser: (state, action) => {
            const userId = action.payload;
            state.users = state.users.filter((u) => u._id !== userId);
        },

        addUser: (state, action) => {
            state.users.push(action.payload);
        },

    },


});

export const { setCurrentUser, logoutUser, setAllUsers, setSelectedUser, updateUser, removeUser, addUser} = accountSlice.actions;
export default accountSlice.reducer;
