// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null,
    character: 0,
    username: '',
    isConnected: false,
    isLoading: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserConnected: (state, action) => {
            state.isConnected = true;
            state.id = action.payload;
            state.isLoading = false;  // Desativa o loading após conectar
        },
        setUserDisconnected: (state) => {
            state.isConnected = false;
            state.id = null;
            state.isLoading = false;  // Desativa o loading após conectar
        },
        updateUser: (state, action) => {
            state.id = action.payload;
        },
        setCharacter: (state, action) => {
            state.character = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setLoading: (state, action) => {  // Novo reducer para ativar/desativar o loading
            state.isLoading = action.payload;
        },
    },
});

export const { setUserConnected, setUserDisconnected, updateUser, setCharacter, setUsername, setLoading } = authSlice.actions;

export default authSlice.reducer;
