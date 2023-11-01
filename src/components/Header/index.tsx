import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import { pathListEmployee } from "@/utils/routes";
import "./style.scss";

/**
 * Functional component representing the header section of the application.
 *
 * @component
 * @example
 * // Usage of the Header component
 * <Header />
 *
 * @returns {JSX.Element} Header component containing the logo and navigation links.
 */
export const Header = () => {  
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
        <NavLink to="/">
          Wealth Health
        </NavLink>
      </div>

      <div className="nav">
        <ul>
          <li>
            <NavLink
              to={pathListEmployee}
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              List Of Employees
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};