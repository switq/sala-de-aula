import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
    }
})

export default messagesSlice.reducer;
export const { } = messagesSlice.actions;