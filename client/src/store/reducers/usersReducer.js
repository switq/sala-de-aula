import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const usersSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            return [...action.payload];
        },
    },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
