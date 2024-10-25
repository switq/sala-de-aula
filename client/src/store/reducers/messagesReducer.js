import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MAX_MESSAGES } from "../../utils/constants";

const initialState = [];

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        addMessage(state, action) {
            const updatedMessages = [...state, action.payload];

            if (updatedMessages.length > MAX_MESSAGES) {
                updatedMessages.shift();
            }

            return updatedMessages
        },
        clearMessages(state, action) {
            return [];
        }
    },
    extraReducers: (builder) => {
        builder
    }
})

export default messagesSlice.reducer;
export const { addMessage, clearMessages } = messagesSlice.actions;