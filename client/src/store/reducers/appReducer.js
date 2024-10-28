import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    chat: {
        scrollToMessage: {},
    }
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        scrollToMessage(state, { payload }) {
            state.chat.scrollToMessage = { id: payload || "", count: state.chat.scrollToMessage + 1 };
        },
        cleanScroll(state, action) {
            state.chat.scrollToMessage = {}
        }
    },
    extraReducers: (builder) => {
        builder
    }
})

export default appSlice.reducer;
export const { scrollToMessage, cleanScroll } = appSlice.actions;