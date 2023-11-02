import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import { pathListEmployee } from "@/utils/routes";
import "./style.scss";

/**
 * A custom React component that renders the header of the application.
 *
 * @returns A React element representing the Header component.
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