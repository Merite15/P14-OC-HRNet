import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from './users';

const rootReducer = combineReducers({
    employees: usersReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});