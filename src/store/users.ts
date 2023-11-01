import { Employee } from '@/utils/types/Employee';
import { createSlice } from '@reduxjs/toolkit';

export const users = createSlice({
    name: 'employees',
    initialState: [] as Employee[],
    reducers: {
        getUsers: (state, action) => {
            return (state = action.payload);
        },

        addUser: (state, action) => {
            return (state = [...state, action.payload]);
        },

        deleteUser: (state, action) => {
            const array = state.filter(
                (employee) => employee.id !== action.payload
            );
            return array;
        },
    },
});

export const { getUsers, deleteUser, addUser } = users.actions;

export default users.reducer;