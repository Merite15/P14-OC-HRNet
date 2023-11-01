import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from './users';
import formStatusReducer from './formStatus';

const rootReducer = combineReducers({
    employees: usersReducer,
    status: formStatusReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});