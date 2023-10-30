import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

/**
 * The Main component renders a Header component and an Outlet component.
 * @returns The Main component is returning a fragment containing the Header component and the Outlet
 * component.
 */
export const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}