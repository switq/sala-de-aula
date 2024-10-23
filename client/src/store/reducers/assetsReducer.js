import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    desks: []
};

const assetsSlice = createSlice({
    name: "assets",
    initialState,
    reducers: {
        setCharacters(state, action) {
            const characters = action.payload;
            state.characters = [...characters];
        },
        setDesks(state, action) {
            const desks = action.payload;
            state.desks = [...desks];
        },
    },
    extraReducers: (builder) => {
        builder
    }
})

export default assetsSlice.reducer;
export const { setCharacters, setDesks } = assetsSlice.actions;