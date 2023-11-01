import { Routes, Route } from "react-router-dom";
import { Main } from "@/layouts/main";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import mockData from '@/data/data.json';
import { getUsers } from '@/store/users';

/**
 * The AppRoutes function is a React component that defines the routes for a web application using
 * React Router.
 * @returns The AppRoutes component is returning a JSX element.
 */
export const AppRoutes = (): JSX.Element => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers(mockData));
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Main />}>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}