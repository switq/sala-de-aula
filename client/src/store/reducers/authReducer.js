// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null,
    character: 0,
    username: '',
    isConnected: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserConnected: (state, action) => {
            state.isConnected = true;
            state.id = action.payload;
        },
        setUserDisconnected: (state) => {
            state.isConnected = false;
            state.id = null;
        },
        updateUser: (state, action) => {
            state.id = action.payload;
        },
        setCharacter: (state, action) => {
            state.character = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        }
    },
});

export const { setUserConnected, setUserDisconnected, updateUser, setCharacter, setUsername } = authSlice.actions;

export default authSlice.reducer;
