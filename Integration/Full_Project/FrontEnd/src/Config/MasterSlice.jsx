import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: null,
    role: "PUBLIC",
    accessToken: null,
    userDetails: null,
};

const masterSlice = createSlice({
    name: "Master",
    initialState,
    reducers: {
        toggleLogin: (state, action) => {
            state.isLoggedIn = action.payload
        },
        addUser: (state, action) => {
            state.user = action.payload;
        },
        addToken: (state, action) => {
            state.accessToken = action.payload;
        },
        addRole: (state, action) => {
            state.role = action.payload;
        },
        deleteRole: (state, action) => {
            state.role = "PUBLIC";
        },
        addUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        deleteUserDetails: (state, action) => {
            state.userDetails = null;
        },
    },
});

export const {
    toggleLogin,
    addUser,
    deleteUser,
    addRole,
    deleteRole,
    addToken,
    deleteToken,
    addUserDetails,
    deleteUserDetails,
} = masterSlice.actions;

export default masterSlice.reducer;