import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    chat: {
        scrollToMessage: '',
    }
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        scrollToMessage(state, { payload }) {
            console.log(payload)
            state.chat.scrollToMessage = { id: payload || "", count: state.chat.scrollToMessage + 1 };
        }
    },
    extraReducers: (builder) => {
        builder
    }
})

export default appSlice.reducer;
export const { scrollToMessage } = appSlice.actions;