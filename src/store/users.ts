import { Employee } from '@/utils/types/Employee';
import { createSlice } from '@reduxjs/toolkit';

export const users = createSlice({
    name: 'employees',
    initialState: [] as Employee[],
    reducers: {
        // @ts-ignore
        getUsers: (state, action) => {
            return state = action.payload;
        },

        addUser: (state, action) => {
            return (state = [...state, action.payload]);
        },

        editUser: (state, action) => {
            state = state.map((employee: Employee) => {
                if (employee.id === action.payload.id) {
                    employee.first_name = action.payload.first_name;
                    employee.last_name = action.payload.last_name;
                    employee.dateOfBirth = action.payload.dateOfBirth;
                    employee.startDate = action.payload.startDate;
                    employee.department = action.payload.department;
                    employee.address = action.payload.address;
                    employee.city = action.payload.city;
                    employee.state = action.payload.state;
                    employee.zipCode = action.payload.zipCode;
                    return employee;
                } else {
                    return employee;
                }
            });
        },

        deleteUser: (state, action) => {
            const array = state.filter(
                (employee) => employee.id !== action.payload
            );
            return array;
        },
    },
});

export const { getUsers, deleteUser, addUser, editUser } = users.actions;

export default users.reducer;