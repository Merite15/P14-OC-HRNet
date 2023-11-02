import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

/**
 * A custom React component that renders the main layout of the application.
 *
 * @returns A React element representing the Main component.
 */
export const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}