import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    desks: [],
    emojis: []
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
        setEmojis(state, action) {
            const emojis = action.payload;
            state.emojis = [...emojis]
        }
    },
    extraReducers: (builder) => {
        builder
    }
})

export default assetsSlice.reducer;
export const { setCharacters, setDesks, setEmojis } = assetsSlice.actions;