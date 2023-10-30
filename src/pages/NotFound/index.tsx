import { NavLink } from "react-router-dom";
import "./style.scss";

/**
 * The NotFound function returns a JSX element representing a 404 error page with a message and a link
 * to the home page.
 * @returns A JSX element is being returned.
 */
export const NotFound = (): JSX.Element => {
    return (
        <div className="notFound">
            <div>
                <div className="notFound__code">404</div>
                <div className="notFound__text">Oups! La page que vous demandez n&apos;existe pas.</div>
                <div className="home-link"><NavLink className="home-nav-link" to="/">Retourner sur la page
                    d’accueil</NavLink></div>
            </div>
        </div>
    );
}