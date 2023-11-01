import { Employee } from '@/utils/types/Employee';
import { createSlice } from '@reduxjs/toolkit';

export const users = createSlice({
    name: 'employees',
    initialState: [] as Employee[],
    reducers: {
        getUsers: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { getUsers } = users.actions;

export default users.reducer;